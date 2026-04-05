import type { Metadata } from "next";
import Link from "next/link";
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
              <Link
                href="/reviews/member-info"
                className="inline-flex rounded-full border border-[#1ec800] bg-[#03c75a] px-6 py-3 text-center text-sm font-semibold text-white"
              >
                네이버 로그인
              </Link>
              <p className="text-sm leading-6 text-slate-500">
                검수용 화면에서는 로그인 버튼과 로그인 후 열람 화면이 단계별로 보이면 좋습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.04)] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal-700 uppercase">
            Review Login Flow
          </p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            검수용 캡처는 아래 순서로 준비하시면 됩니다
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "후기 페이지 접속",
                description: "진료후기 페이지에서 네이버 로그인 버튼이 보이는 화면",
              },
              {
                step: "2",
                title: "회원정보 확인",
                description: "네이버에서 제공받은 정보가 서비스에 어떻게 보이는지 확인하는 화면",
              },
              {
                step: "3",
                title: "후기 열람 완료",
                description: "로그인 후 실제 후기 목록을 확인하는 화면",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-teal-700">STEP {item.step}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/reviews/member-info"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-800"
            >
              회원정보 확인 화면 보기
            </Link>
            <Link
              href="/reviews/list"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-800"
            >
              로그인 후 후기 화면 보기
            </Link>
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
