"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { servicePages } from "@/lib/service-pages";

const TIME_SLOTS = (() => {
  const slots: string[] = [];
  for (let hour = 9; hour < 20; hour += 1) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }
  return slots;
})();

type ReserveFormProps = {
  layout: "bar" | "sheet";
  onSuccess?: () => void;
};

type SubmitState =
  | { phase: "idle" }
  | { phase: "submitting" }
  | { phase: "success" }
  | { phase: "error"; message: string };

export default function ReserveForm({ layout, onSuccess }: ReserveFormProps) {
  const [state, setState] = useState<SubmitState>({ phase: "idle" });
  const today = useMemo(() => {
    const kst = new Date(Date.now() + 9 * 60 * 60 * 1000);
    return kst.toISOString().slice(0, 10);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ phase: "submitting" });

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          desiredDate: formData.get("desiredDate"),
          desiredTime: formData.get("desiredTime"),
          message: formData.get("message") ?? "",
          privacyAgreed: formData.get("privacyAgreed") === "on",
          company: formData.get("company"),
        }),
      });

      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setState({
          phase: "error",
          message: data.error ?? "접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.",
        });
        return;
      }

      form.reset();
      setState({ phase: "success" });
      onSuccess?.();
    } catch {
      setState({
        phase: "error",
        message: "네트워크 오류가 발생했습니다. 전화(031-8057-0750)로 문의해 주세요.",
      });
    }
  };

  const isBar = layout === "bar";
  const fieldClass = isBar
    ? "h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
    : "h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-[15px] text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20";

  if (state.phase === "success") {
    return (
      <div
        className={`flex items-center gap-3 ${isBar ? "justify-center py-2" : "flex-col py-8 text-center"}`}
        role="status"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path d="m5 12 5 5 9-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className={isBar ? "" : "space-y-1"}>
          <p className="text-sm font-semibold text-slate-900">상담 신청이 접수되었습니다.</p>
          <p className="text-xs text-slate-500">
            확인 후 순차적으로 연락드립니다. 급하신 경우 031-8057-0750으로 전화해 주세요.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setState({ phase: "idle" })}
          className="ml-auto rounded-full border border-slate-300 px-4 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
        >
          추가 신청
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={isBar ? "flex flex-wrap items-end gap-3" : "flex flex-col gap-4"}>
      {/* 허니팟 — 사람 눈에는 보이지 않는 스팸 방지 필드 */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className={isBar ? "flex w-[120px] flex-col gap-1" : "flex flex-col gap-1.5"}>
        <span className="text-xs font-semibold text-slate-500">성함</span>
        <input name="name" required maxLength={40} placeholder="홍길동" className={fieldClass} />
      </label>

      <label className={isBar ? "flex w-[160px] flex-col gap-1" : "flex flex-col gap-1.5"}>
        <span className="text-xs font-semibold text-slate-500">연락처</span>
        <input
          name="phone"
          type="tel"
          required
          placeholder="010-1234-5678"
          pattern="0\d{1,2}-?\d{3,4}-?\d{4}"
          className={fieldClass}
        />
      </label>

      <label className={isBar ? "flex w-[150px] flex-col gap-1" : "flex flex-col gap-1.5"}>
        <span className="text-xs font-semibold text-slate-500">진료 항목</span>
        <select name="service" defaultValue="" className={fieldClass}>
          <option value="">선택 안 함</option>
          {servicePages.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="기타">기타</option>
        </select>
      </label>

      <label className={isBar ? "flex w-[150px] flex-col gap-1" : "flex flex-col gap-1.5"}>
        <span className="text-xs font-semibold text-slate-500">희망일</span>
        <input name="desiredDate" type="date" required min={today} className={fieldClass} />
      </label>

      <label className={isBar ? "flex w-[120px] flex-col gap-1" : "flex flex-col gap-1.5"}>
        <span className="text-xs font-semibold text-slate-500">예약시간</span>
        <select name="desiredTime" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            시간 선택
          </option>
          {TIME_SLOTS.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </label>

      {!isBar ? (
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-slate-500">문의 내용 (선택)</span>
          <textarea
            name="message"
            rows={3}
            maxLength={1000}
            placeholder="증상이나 궁금하신 점을 편하게 적어 주세요."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
          />
        </label>
      ) : null}

      <div className={isBar ? "flex items-center gap-2 pb-2.5" : "flex items-center gap-2"}>
        <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-600">
          <input
            type="checkbox"
            name="privacyAgreed"
            required
            className="h-4 w-4 accent-teal-700"
          />
          <span className="whitespace-nowrap">개인정보 수집·이용 동의</span>
        </label>
        <Link
          href="/privacy-policy"
          target="_blank"
          className="whitespace-nowrap text-xs text-slate-400 underline underline-offset-2 transition hover:text-teal-700"
        >
          (자세히)
        </Link>
      </div>

      <div className={isBar ? "ml-auto flex items-center gap-3" : "flex flex-col gap-2"}>
        {state.phase === "error" ? (
          <p className={`text-xs font-medium text-red-600 ${isBar ? "max-w-[260px]" : ""}`} role="alert">
            {state.message}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={state.phase === "submitting"}
          className={`inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60 ${
            isBar ? "h-11 px-7 text-sm" : "h-12 w-full text-[15px]"
          }`}
        >
          {state.phase === "submitting" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden />
              접수 중...
            </>
          ) : (
            "상담신청"
          )}
        </button>
      </div>
    </form>
  );
}
