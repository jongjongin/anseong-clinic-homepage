import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GuideCategoryNav, {
  GuideContact,
  GuideHero,
  guideThemes,
} from "@/app/_components/guide-category-nav";
import { getPainGuide, painGuides } from "@/app/warning/data";

type PainDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return painGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PainDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPainGuide(slug);

  if (!guide) {
    return {
      title: "통증치료 후 주의사항",
    };
  }

  return {
    title: `${guide.title} 후 주의사항`,
    description: `${guide.title} 후 예상할 수 있는 반응과 집에서 지켜야 할 주의사항을 확인하세요.`,
    alternates: {
      canonical: `/pain/${guide.slug}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function PainDetailPage({ params }: PainDetailPageProps) {
  const { slug } = await params;
  const guide = getPainGuide(slug);

  if (!guide) {
    notFound();
  }

  const theme = guideThemes.pain;

  return (
    <div className="min-h-screen text-[#334155]" style={{ backgroundColor: theme.tint }}>

      <main className="mx-auto max-w-5xl px-4 py-3 sm:px-6 sm:py-7">
        <GuideCategoryNav active="pain" />

        <GuideHero active="pain" title={`${guide.title} 후 주의사항`} description={guide.subtitle} />

        <div className="mt-3 flex items-center justify-between gap-4">
          <Link
            href="/pain"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 transition-colors hover:text-slate-900"
          >
            <BackIcon className="h-4 w-4" />
            통증치료 목록
          </Link>
          <span className="hidden text-sm text-slate-400 sm:inline">진료 시 받은 안내를 우선해 주세요.</span>
        </div>

        <section className="mt-3 border border-slate-200 bg-white p-4 sm:p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
            <h2 className="shrink-0 text-base font-extrabold text-slate-800">흔히 나타날 수 있는 반응</h2>
            <ul className="grid flex-1 gap-x-6 gap-y-2 sm:grid-cols-3">
              {guide.expected.map((item) => (
                <li key={item} className="flex gap-2.5 text-base leading-[1.6] text-slate-600">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: theme.accent }} />
                  <span className="break-keep">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-3 space-y-2 lg:hidden">
          {guide.sections.map((section, sectionIndex) => {
            const isUrgent = section.tone === "urgent";

            return (
              <details
                key={section.title}
                open
                className="group border border-slate-200 bg-white"
              >
                <summary
                  className="flex min-h-12 cursor-pointer list-none items-center gap-3 px-4 py-3 text-slate-800 [&::-webkit-details-marker]:hidden"
                  style={isUrgent ? { backgroundColor: theme.tint } : undefined}
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: theme.accent }}
                  >
                    {isUrgent ? "!" : sectionIndex + 1}
                  </span>
                  <span className="flex-1 break-keep text-base font-extrabold">{section.title}</span>
                  <ChevronIcon className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <ul className="border-t border-slate-100 px-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2.5 py-2.5 text-base leading-[1.6] text-slate-600">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0"
                        style={{ backgroundColor: theme.accent }}
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
                className="border border-slate-200 bg-white"
              >
                <div
                  className="flex min-h-12 items-center gap-2.5 border-b border-slate-200 px-4 py-3"
                  style={isUrgent ? { backgroundColor: theme.tint } : undefined}
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: theme.accent }}
                  >
                    {isUrgent ? "!" : sectionIndex + 1}
                  </span>
                  <h2 className="break-keep text-base font-extrabold text-slate-800">
                    {section.title}
                  </h2>
                </div>
                <ul className="divide-y divide-slate-100 px-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2.5 py-3 text-base leading-[1.6] text-slate-600">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0"
                        style={{ backgroundColor: theme.accent }}
                      />
                      <span className="break-keep">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <GuideContact active="pain" />
      </main>
    </div>
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


