import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/auth";
import {
  RESERVATION_STATUSES,
  listReservations,
  updateReservationStatus,
  type ReservationStatus,
} from "@/lib/reservations";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "상담 신청 관리",
  robots: { index: false, follow: false },
};

const STATUS_LABELS: Record<ReservationStatus, string> = {
  new: "신규",
  contacted: "연락 완료",
  done: "처리 완료",
};

const STATUS_STYLES: Record<ReservationStatus, string> = {
  new: "bg-teal-50 text-teal-700 border-teal-200",
  contacted: "bg-amber-50 text-amber-700 border-amber-200",
  done: "bg-slate-100 text-slate-500 border-slate-200",
};

async function setStatus(formData: FormData) {
  "use server";

  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const id = Number(formData.get("id"));
  const status = String(formData.get("status")) as ReservationStatus;

  if (Number.isInteger(id) && RESERVATION_STATUSES.includes(status)) {
    await updateReservationStatus(id, status);
  }

  revalidatePath("/admin/reservations");
}

export default async function AdminReservationsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const reservations = await listReservations().catch(() => null);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-slate-900">상담 신청 관리</h1>
        <p className="text-sm text-slate-500">
          홈페이지 빠른 상담신청으로 접수된 내용입니다. 최근 500건까지 표시됩니다.
        </p>
      </div>

      {reservations === null ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-relaxed text-amber-800">
          <p className="font-semibold">데이터베이스가 아직 연결되지 않았습니다.</p>
          <p className="mt-2">
            Vercel 프로젝트에 Neon(Postgres)을 연동하고 <code>DATABASE_URL</code> 환경변수를
            설정하면 신청 내역이 이곳에 저장·표시됩니다. 이메일 알림만 사용하려면{" "}
            <code>RESEND_API_KEY</code>와 <code>RESERVATION_NOTIFY_EMAIL</code>을 설정해 주세요.
          </p>
        </div>
      ) : reservations.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
          아직 접수된 상담 신청이 없습니다.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">접수일시</th>
                <th className="px-4 py-3">성함</th>
                <th className="px-4 py-3">연락처</th>
                <th className="px-4 py-3">진료 항목</th>
                <th className="px-4 py-3">희망일 · 시간</th>
                <th className="px-4 py-3">문의 내용</th>
                <th className="px-4 py-3">상태</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reservations.map((row) => (
                <tr key={row.id} className="align-top">
                  <td className="whitespace-nowrap px-4 py-3 text-slate-500">
                    {row.created_at.slice(0, 16).replace("T", " ")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">{row.name}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <a href={`tel:${row.phone}`} className="text-teal-700 hover:underline">
                      {row.phone}
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-700">{row.service || "-"}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-700">
                    {row.desired_date ?? "-"} {row.desired_time}
                  </td>
                  <td className="max-w-[260px] px-4 py-3 text-slate-600">
                    <p className="line-clamp-3 whitespace-pre-wrap break-keep">{row.message || "-"}</p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-2">
                      <span
                        className={`inline-flex w-max rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                          STATUS_STYLES[(row.status as ReservationStatus) ?? "new"] ?? STATUS_STYLES.new
                        }`}
                      >
                        {STATUS_LABELS[(row.status as ReservationStatus) ?? "new"] ?? row.status}
                      </span>
                      {row.status === "new" ? (
                        <form action={setStatus}>
                          <input type="hidden" name="id" value={row.id} />
                          <input type="hidden" name="status" value="contacted" />
                          <button
                            type="submit"
                            className="w-full rounded-lg bg-teal-700 px-3 py-2 text-xs font-bold text-white transition hover:bg-teal-800"
                          >
                            ✓ 차트 등록 완료 (알림 중지)
                          </button>
                        </form>
                      ) : null}
                      <form action={setStatus} className="flex items-center gap-1.5">
                        <input type="hidden" name="id" value={row.id} />
                        <select
                          name="status"
                          defaultValue={row.status}
                          className="rounded-lg border border-slate-300 px-2 py-1 text-xs"
                        >
                          {RESERVATION_STATUSES.map((status) => (
                            <option key={status} value={status}>
                              {STATUS_LABELS[status]}
                            </option>
                          ))}
                        </select>
                        <button
                          type="submit"
                          className="rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white transition hover:bg-slate-700"
                        >
                          변경
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
