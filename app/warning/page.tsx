import type { Metadata } from "next";
import Link from "next/link";
import { GuideSiteHeader } from "@/app/_components/guide-category-nav";

export const metadata: Metadata = {
  title: "환자 안내",
  description: "통증치료, 한약, 다이어트와 피부미용 안내를 확인하세요.",
  alternates: {
    canonical: "/warning",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const categories = [
  {
    href: "/pain",
    label: "통증",
    eyebrow: "치료 후 주의사항",
    description: "침 · 약침 · 봉침 · 추나 · 충격파",
    accent: "#2563EB",
    softAccent: "#EFF6FF",
    number: "01",
  },
  {
    href: "/herb",
    label: "한약",
    eyebrow: "복용 안내",
    description: "복용법 · 데우기 · 보관 · 주의사항",
    accent: "#2F9E62",
    softAccent: "#F0F9F1",
    number: "02",
  },
  {
    href: "/diet",
    label: "다이어트",
    eyebrow: "프로그램 관리",
    description: "복용 · 식단 · 금식 · 생활 관리",
    accent: "#D6336C",
    softAccent: "#FDF2F4",
    number: "03",
  },
  {
    href: "/beauty",
    label: "미용",
    eyebrow: "피부 시술 안내",
    description: "점·쥐젖·사마귀 · CO2 · 토닝 · LDM · 스킨부스터 · 라라필",
    accent: "#7C3AED",
    softAccent: "#F5F3FF",
    number: "04",
  },
];

export default function GuideIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-[#334155]">
      <GuideSiteHeader actionHref="/" actionLabel="메인으로" />

      <main className="mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-8">
        <section className="border-b border-slate-300 pb-4 sm:pb-5">
          <p className="text-xs font-bold text-slate-500">안성경희365한의원</p>
          <h1 className="mt-1 break-keep text-[26px] font-extrabold leading-tight tracking-[-0.04em] text-slate-800 sm:text-4xl">
            환자 안내
          </h1>
          <p className="mt-2 break-keep text-base leading-[1.6] text-slate-600">
            필요한 안내를 선택하면 치료 후 관리와 복용 방법을 바로 확인할 수 있습니다.
          </p>
        </section>

        <section aria-label="안내 대분류" className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              aria-label={`${category.label} 안내 보기`}
              className="group relative flex min-h-[166px] flex-col border border-slate-200 bg-white p-4 transition-colors hover:border-slate-400 sm:min-h-[188px] sm:p-6"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: category.accent }}
              />
              <div className="flex items-start justify-between gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center text-xs font-bold sm:h-10 sm:w-10"
                  style={{ color: category.accent, backgroundColor: category.softAccent }}
                >
                  {category.number}
                </span>
                <span
                  className="text-xl transition-transform group-hover:translate-x-0.5"
                  style={{ color: "#cbd5e1" }}
                  aria-hidden="true"
                >
                  ›
                </span>
              </div>
              <p className="mt-3 text-xs font-bold sm:text-sm" style={{ color: category.accent }}>
                {category.eyebrow}
              </p>
              <h2 className="mt-0.5 text-xl font-extrabold tracking-[-0.03em] text-slate-800 sm:text-2xl">{category.label}</h2>
              <p className="mt-1 line-clamp-2 break-keep text-sm leading-[1.6] text-slate-500 sm:text-base">
                {category.description}
              </p>
              <span className="mt-auto pt-2 text-sm font-bold" style={{ color: category.accent }}>
                안내 보기 <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-3 border border-slate-200 bg-white px-4 py-3 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <h2 className="text-base font-bold text-slate-800">문의</h2>
            <p className="mt-0.5 text-base leading-[1.6] text-slate-600">안내가 더 필요하시면 편하게 연락해 주세요.</p>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-0 sm:min-w-[340px]">
            <a
              href="tel:031-8057-0750"
              className="flex min-h-11 items-center justify-center border border-slate-300 px-2 text-center text-sm font-bold text-[#334155]"
            >
              031-8057-0750
            </a>
            <a
              href="http://pf.kakao.com/_RWgxnG/chat"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center justify-center border border-slate-300 px-2 text-center text-sm font-bold text-[#334155]"
            >
              카카오톡 채널
            </a>
          </div>
        </section>

        <p className="mt-3 break-keep text-center text-[11px] leading-5 text-slate-400">
          개인 상태에 따라 안내가 달라질 수 있으며 진료 시 받은 설명을 우선해 주세요.
        </p>
      </main>
    </div>
  );
}
