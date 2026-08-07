import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
    eyebrow: "치료 후 관리",
    description: "침 · 약침 · 봉침 · 추나 · 충격파",
    accent: "#0f766e",
    softAccent: "#e8f5f2",
    mark: "통증",
  },
  {
    href: "/herb",
    label: "한약",
    eyebrow: "복용 안내",
    description: "복용법 · 데우기 · 보관 · 주의사항",
    accent: "#4b735b",
    softAccent: "#edf4ef",
    mark: "한약",
  },
  {
    href: "/diet",
    label: "다이어트",
    eyebrow: "프로그램 관리",
    description: "복용 · 식단 · 금식 · 생활 관리",
    accent: "#ad5e79",
    softAccent: "#fdf0f5",
    mark: "관리",
  },
  {
    href: "/beauty",
    label: "미용",
    eyebrow: "피부 시술 안내",
    description: "CO2 · 토닝 · LDM · 스킨부스터 · 라라필",
    accent: "#6f55a0",
    softAccent: "#f2eef9",
    mark: "피부",
  },
];

export default function GuideIndexPage() {
  return (
    <div className="min-h-screen bg-[#f6f7f5] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <Link href="/" aria-label="안성경희365한의원 메인 홈페이지">
            <div className="relative h-7 w-[150px] sm:h-9 sm:w-[190px]">
              <Image
                src="/assets/logo/logo-wordmark.png"
                alt="안성경희365한의원"
                fill
                className="object-contain object-left"
                sizes="190px"
                priority
              />
            </div>
          </Link>
          <Link
            href="/"
            className="border border-slate-300 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-950 sm:px-3 sm:py-2 sm:text-sm"
          >
            메인으로
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-8">
        <section className="border-b border-slate-300 pb-4 sm:pb-5">
          <p className="text-xs font-semibold text-teal-700">안성경희365한의원</p>
          <h1 className="mt-1 text-[26px] font-bold tracking-[-0.04em] sm:text-4xl">환자 안내</h1>
          <p className="mt-2 break-keep text-sm leading-6 text-slate-600 sm:text-base">
            확인하실 안내 종류를 선택해 주세요.
          </p>
        </section>

        <section aria-label="안내 대분류" className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group relative flex min-h-[142px] flex-col border border-slate-200 bg-white p-4 transition-colors hover:border-slate-400 sm:min-h-[180px] sm:p-6"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: category.accent }}
              />
              <div className="flex items-start justify-between gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center border text-[11px] font-bold sm:h-12 sm:w-12 sm:text-xs"
                  style={{ color: category.accent, borderColor: category.accent, backgroundColor: category.softAccent }}
                >
                  {category.mark}
                </span>
                <span
                  className="text-xl transition-transform group-hover:translate-x-0.5"
                  style={{ color: "#cbd5e1" }}
                  aria-hidden="true"
                >
                  ›
                </span>
              </div>
              <p className="mt-3 text-[10px] font-bold sm:text-xs" style={{ color: category.accent }}>
                {category.eyebrow}
              </p>
              <h2 className="mt-0.5 text-xl font-bold tracking-[-0.03em] sm:text-2xl">{category.label}</h2>
              <p className="mt-1 break-keep text-xs leading-5 text-slate-500 sm:text-sm">
                {category.description}
              </p>
            </Link>
          ))}
        </section>

        <p className="mt-3 break-keep text-center text-[11px] leading-5 text-slate-400">
          개인 상태에 따라 안내가 달라질 수 있으며 진료 시 받은 설명을 우선해 주세요.
        </p>
      </main>
    </div>
  );
}
