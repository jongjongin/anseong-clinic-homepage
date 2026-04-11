import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { logoutAction } from "@/app/login/actions";
import { reviewsSectionContent } from "@/components/home/content";
import { getCurrentUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "로그인 후 진료후기 | 안성경희365한의원",
  description: "로그인 후 진료후기 열람 예시 화면",
};

export default async function ReviewsListPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-[#fcfcfb] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal-700 uppercase">
            Reviews Opened
          </p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            로그인 후 실제 진료후기 열람 화면 예시
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            로그인 완료 후에는 블러 처리 없이 후기 제목과 내용을 확인할 수 있는 구조로 운영할 예정입니다.
          </p>

          <div className="mt-6 rounded-[1.6rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm leading-6 text-emerald-700">
            로그인 완료: {user.email} 계정으로 후기 열람이 가능합니다.
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {reviewsSectionContent.cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] sm:p-8"
            >
              <p className="text-sm font-semibold tracking-[0.1em] text-teal-700 uppercase">Review</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">{card.title}</h2>
              <div className="mt-5 rounded-[1.5rem] bg-slate-50 p-5">
                <p className="text-base leading-8 text-slate-600">{card.excerpt}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <form action={logoutAction}>
            <button
              type="submit"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-800"
            >
              로그아웃
            </button>
          </form>
          <Link
            href="/reviews"
            className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-800"
          >
            로그인 안내 화면 보기
          </Link>
          <Link
            href="/login"
            className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-800"
          >
            로그인 화면 보기
          </Link>
        </div>
      </div>
    </main>
  );
}
