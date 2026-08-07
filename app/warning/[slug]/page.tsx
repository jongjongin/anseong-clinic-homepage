import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GuideCategoryNav from "@/app/_components/guide-category-nav";
import WarningIcon from "@/app/warning/warning-icon";
import { getWarningGuide, warningGuides } from "@/app/warning/data";

type WarningDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return warningGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: WarningDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getWarningGuide(slug);

  if (!guide) {
    return {
      title: "시술 후 주의사항",
    };
  }

  return {
    title: `${guide.title} 후 주의사항`,
    description: `${guide.title} 후 예상할 수 있는 반응과 집에서 지켜야 할 주의사항을 확인하세요.`,
    alternates: {
      canonical: `/warning/${guide.slug}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function WarningDetailPage({ params }: WarningDetailPageProps) {
  const { slug } = await params;
  const guide = getWarningGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f6f7f5] text-slate-900">
      <header className="hidden border-b border-slate-200 bg-white sm:block">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
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
            className="inline-flex items-center gap-1.5 border border-slate-300 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-950 sm:px-3 sm:py-2 sm:text-sm"
          >
            <HomeIcon className="h-4 w-4" />
            메인으로
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-2 sm:px-6 sm:py-6">
        <GuideCategoryNav active="warning" />

        <div className="mt-2 flex items-center justify-between gap-4 sm:mt-3">
          <Link
            href="/warning"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 transition-colors hover:text-slate-900 sm:text-sm"
          >
            <BackIcon className="h-4 w-4" />
            시술 목록
          </Link>
          <Link href="/" className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 sm:hidden">
            <HomeIcon className="h-3.5 w-3.5" />
            메인
          </Link>
          <span className="hidden text-[11px] text-slate-400 sm:inline">진료 시 받은 안내를 우선해 주세요.</span>
        </div>

        <section className="mt-1 border border-slate-300 bg-white sm:mt-3">
          <div className="flex items-center gap-3 border-l-4 px-3 py-2.5 sm:gap-4 sm:px-5 sm:py-4" style={{ borderLeftColor: guide.accent }}>
            <span className="shrink-0" style={{ color: guide.accent }}>
              <WarningIcon name={guide.icon} className="h-9 w-9 sm:h-12 sm:w-12" />
            </span>
            <div>
              <h1 className="text-xl font-bold tracking-[-0.03em] sm:text-3xl">{guide.title} 후 주의사항</h1>
              <p className="mt-0.5 break-keep text-[11px] leading-4 text-slate-500 sm:mt-1 sm:text-sm sm:leading-5">{guide.subtitle}</p>
            </div>
          </div>
        </section>

        <section className="mt-1 border border-slate-200 bg-white px-3 py-2.5 sm:mt-3 sm:px-5 sm:py-3.5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-6">
            <h2 className="shrink-0 text-xs font-bold text-slate-900 sm:text-sm">흔히 나타날 수 있는 반응</h2>
            <ul className="grid flex-1 gap-x-6 gap-y-0.5 sm:grid-cols-3 sm:gap-y-1">
              {guide.expected.map((item) => (
                <li key={item} className="flex gap-2 text-[11px] leading-4 text-slate-600 sm:text-xs sm:leading-5">
                  <span className="mt-1.5 h-1 w-1 shrink-0 sm:mt-2" style={{ backgroundColor: guide.accent }} />
                  <span className="break-keep">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-1.5 space-y-1.5 lg:hidden">
          {guide.sections.map((section, sectionIndex) => {
            const isUrgent = section.tone === "urgent";

            return (
              <details
                key={section.title}
                open
                className={`group border bg-white ${isUrgent ? "border-rose-300" : "border-slate-200"}`}
              >
                <summary
                  className={`flex min-h-10 cursor-pointer list-none items-center gap-2.5 px-3 py-2 [&::-webkit-details-marker]:hidden ${
                    isUrgent ? "bg-rose-50 text-rose-950" : "text-slate-900"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center text-[10px] font-bold text-white ${
                      isUrgent ? "bg-rose-600" : ""
                    }`}
                    style={isUrgent ? undefined : { backgroundColor: guide.accent }}
                  >
                    {isUrgent ? "!" : sectionIndex + 1}
                  </span>
                  <span className="flex-1 break-keep text-xs font-bold">{section.title}</span>
                  <ChevronIcon className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <ul className={`border-t px-3 ${isUrgent ? "border-rose-200" : "border-slate-100"}`}>
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2 py-1.5 text-[11px] leading-4 text-slate-600">
                      <span
                        className={`mt-1.5 h-1 w-1 shrink-0 ${isUrgent ? "bg-rose-500" : ""}`}
                        style={isUrgent ? undefined : { backgroundColor: guide.accent }}
                      />
                      <span className="break-keep">{item}</span>
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </div>

        <div className="mt-3 hidden gap-3 lg:grid lg:grid-cols-3">
          {guide.sections.map((section, sectionIndex) => {
            const isUrgent = section.tone === "urgent";

            return (
              <section
                key={section.title}
                className={`border bg-white ${isUrgent ? "border-rose-300" : "border-slate-200"}`}
              >
                <div
                  className={`flex min-h-12 items-center gap-2.5 border-b px-4 py-3 ${
                    isUrgent ? "border-rose-200 bg-rose-50" : "border-slate-200"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center text-[11px] font-bold text-white ${
                      isUrgent ? "bg-rose-600" : ""
                    }`}
                    style={isUrgent ? undefined : { backgroundColor: guide.accent }}
                  >
                    {isUrgent ? "!" : sectionIndex + 1}
                  </span>
                  <h2 className={`break-keep text-sm font-bold ${isUrgent ? "text-rose-950" : "text-slate-900"}`}>
                    {section.title}
                  </h2>
                </div>
                <ul className="divide-y divide-slate-100 px-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2.5 py-2.5 text-xs leading-5 text-slate-600 sm:text-[13px]">
                      <span
                        className={`mt-2 h-1 w-1 shrink-0 ${isUrgent ? "bg-rose-500" : ""}`}
                        style={isUrgent ? undefined : { backgroundColor: guide.accent }}
                      />
                      <span className="break-keep">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <section className="mt-1.5 border border-slate-300 bg-white px-3 py-2.5 sm:mt-3 sm:flex sm:items-center sm:justify-between sm:gap-5 sm:px-4 sm:py-3">
          <div>
            <h2 className="text-xs font-bold sm:text-sm">안내와 다른 증상이 있나요?</h2>
            <p className="mt-0.5 hidden break-keep text-xs leading-5 text-slate-500 sm:block">
              증상이 심하거나 빠르게 악화되면 한의원 또는 가까운 응급기관에 연락해 주세요.
            </p>
          </div>
          <div className="mt-1.5 flex shrink-0 gap-2 sm:mt-0">
            <Link href="/warning" className="flex-1 border border-slate-300 px-3 py-1.5 text-center text-[11px] font-semibold text-slate-700 sm:flex-none sm:py-2 sm:text-xs">
              다른 시술 보기
            </Link>
            <a
              href="tel:031-8057-0750"
              className="flex-1 bg-slate-900 px-3 py-1.5 text-center text-[11px] font-bold sm:flex-none sm:py-2 sm:text-xs"
              style={{ color: "#ffffff" }}
            >
              031-8057-0750
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m3 11 9-8 9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function BackIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m12.5 4-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


