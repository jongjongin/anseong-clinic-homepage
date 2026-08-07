import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GuideCategoryNav from "@/app/_components/guide-category-nav";
import WarningIcon from "@/app/warning/warning-icon";
import { painGuides } from "@/app/warning/data";

export const metadata: Metadata = {
  title: "통증치료 후 주의사항",
  description: "침치료, 약침, 봉침, 추나와 충격파 치료 후 주의사항을 확인하세요.",
  alternates: {
    canonical: "/pain",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PainGuidePage() {
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

      <main className="mx-auto max-w-5xl px-4 py-3 sm:px-6 sm:py-7">
        <GuideCategoryNav active="pain" />

        <section className="mt-3 flex flex-col gap-1 border-b border-slate-300 pb-3 sm:flex-row sm:items-end sm:justify-between sm:gap-2 sm:pb-4">
          <div>
            <p className="text-[10px] font-semibold text-teal-700 sm:text-xs">안성경희365한의원 통증치료</p>
            <h1 className="mt-0.5 text-[22px] font-bold tracking-[-0.03em] sm:mt-1 sm:text-3xl">통증치료 후 주의사항</h1>
          </div>
          <p className="break-keep text-xs leading-4 text-slate-500 sm:text-sm sm:leading-5">
            받으신 치료를 선택해 관리 방법을 확인해 주세요.
          </p>
        </section>

        <section aria-label="통증치료 목록" className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3 lg:grid-cols-5">
          {painGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/pain/${guide.slug}`}
              className="group relative flex min-h-[92px] flex-col border border-slate-200 bg-white px-3 py-3 transition-colors hover:border-slate-400 sm:min-h-[130px] sm:p-4"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ backgroundColor: guide.accent }}
              />
              <div className="flex items-start justify-between">
                <span style={{ color: guide.accent }}>
                  <WarningIcon name={guide.icon} className="h-8 w-8 sm:h-10 sm:w-10" />
                </span>
                <span className="text-base text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-600">›</span>
              </div>
              <h2 className="mt-2 text-[15px] font-bold tracking-[-0.02em] sm:mt-3 sm:text-lg">{guide.title}</h2>
              <p className="mt-1 hidden line-clamp-2 break-keep text-xs leading-4 text-slate-500 sm:block">
                {guide.shortDescription}
              </p>
            </Link>
          ))}
        </section>

        <p className="mt-3 break-keep text-center text-[11px] leading-5 text-slate-400">
          개인 상태에 따라 관리 방법이 다를 수 있으며 진료 시 받은 안내를 우선해 주세요.
        </p>
      </main>
    </div>
  );
}
