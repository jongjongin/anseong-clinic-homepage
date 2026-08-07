import type { Metadata } from "next";
import Link from "next/link";
import GuideCategoryNav, {
  GuideContact,
  GuideHero,
  GuideSiteHeader,
  guideThemes,
} from "@/app/_components/guide-category-nav";
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
  const theme = guideThemes.pain;

  return (
    <div className="min-h-screen text-[#334155]" style={{ backgroundColor: theme.tint }}>
      <GuideSiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-3 sm:px-6 sm:py-7">
        <GuideCategoryNav active="pain" />

        <GuideHero
          active="pain"
          title="통증치료 후 주의사항"
          description="받으신 치료를 선택해 예상 반응과 집에서의 관리 방법을 확인해 주세요."
        />

        <section aria-label="통증치료 목록" className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3 lg:grid-cols-5">
          {painGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/pain/${guide.slug}`}
              className="group relative flex min-h-[120px] flex-col border border-slate-200 bg-white px-4 py-4 transition-colors hover:border-slate-400 sm:min-h-[150px] sm:p-5"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ backgroundColor: theme.accent }}
              />
              <div className="flex items-start justify-between">
                <span style={{ color: theme.accent }}>
                  <WarningIcon name={guide.icon} className="h-8 w-8 sm:h-10 sm:w-10" />
                </span>
                <span className="text-base text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-600">›</span>
              </div>
              <h2 className="mt-2 text-lg font-extrabold tracking-[-0.02em] sm:mt-3 sm:text-xl">{guide.title}</h2>
              <p className="mt-1 line-clamp-2 break-keep text-base leading-[1.6] text-slate-500">
                {guide.shortDescription}
              </p>
            </Link>
          ))}
        </section>

        <GuideContact active="pain" />

        <p className="mt-3 break-keep text-center text-[11px] leading-5 text-slate-400">
          개인 상태에 따라 관리 방법이 다를 수 있으며 진료 시 받은 안내를 우선해 주세요.
        </p>
      </main>
    </div>
  );
}
