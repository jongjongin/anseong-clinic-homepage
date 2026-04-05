import type { Metadata } from "next";
import { reviewsSectionContent } from "@/components/home/content";

export const metadata: Metadata = {
  title: "진료후기 | 안성경희365한의원",
  description: "안성경희365한의원 진료후기 안내",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfb] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal-700 uppercase">
            {reviewsSectionContent.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {reviewsSectionContent.loginTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            {reviewsSectionContent.loginDescription}
          </p>

          <div className="mt-8 rounded-[1.7rem] border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <p className="text-sm font-semibold text-slate-800">
              후기 열람은 네이버 로그인 후 이용하실 수 있습니다.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              회원가입 없이 네이버 로그인으로 본인 확인 후 후기를 보실 수 있도록 구성할 예정입니다.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="inline-flex rounded-full border border-[#1ec800] bg-[#03c75a] px-6 py-3 text-center text-sm font-semibold text-white"
              >
                네이버 로그인
              </button>
              <p className="text-sm leading-6 text-slate-500">
                검수용 화면에서는 로그인 버튼과 로그인 후 열람 화면이 단계별로 보이면 좋습니다.
              </p>
            </div>
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
                <p className="blur-[4px] select-none text-base leading-8 text-slate-500">
                  {card.excerpt}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
