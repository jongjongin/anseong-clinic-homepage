import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <div className="min-h-screen bg-[#f2f6f5] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" aria-label="안성경희365한의원 메인 홈페이지">
            <div className="relative h-10 w-[190px] sm:h-12 sm:w-[230px]">
              <Image
                src="/assets/logo/logo-wordmark.png"
                alt="안성경희365한의원"
                fill
                className="object-contain object-left"
                sizes="230px"
                priority
              />
            </div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            <HomeIcon className="h-4 w-4" />
            <span className="hidden sm:inline">메인 홈페이지</span>
            <span className="sm:hidden">홈</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <Link
          href="/warning"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition-colors hover:text-teal-700"
        >
          <BackIcon className="h-4 w-4" />
          시술 목록으로 돌아가기
        </Link>

        <section
          className="relative mt-6 overflow-hidden rounded-[2rem] px-6 py-10 text-white shadow-[0_20px_50px_rgba(15,23,42,0.10)] sm:px-10 sm:py-12"
          style={{ background: `linear-gradient(135deg, ${guide.accent}, ${guide.accent}d9)` }}
        >
          <div className="absolute -right-12 -top-16 h-52 w-52 rounded-full border-[34px] border-white/10" />
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.7rem] bg-white/15 backdrop-blur sm:h-28 sm:w-28">
              <WarningIcon name={guide.icon} className="h-16 w-16 sm:h-20 sm:w-20" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-white/70 uppercase">After Care Guide</p>
              <h1 className="mt-3 text-[2.35rem] font-black tracking-[-0.04em] sm:text-[3.2rem]">
                {guide.title} 후 주의사항
              </h1>
              <p className="mt-4 max-w-2xl break-keep text-base leading-7 text-white/85 sm:text-lg">
                {guide.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[1.7rem] border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-black"
              style={{ color: guide.accent, backgroundColor: guide.softAccent }}
            >
              ✓
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">흔히 나타날 수 있는 반응</h2>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {guide.expected.map((item) => (
              <li
                key={item}
                className="flex min-h-[92px] items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-600"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: guide.accent }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            위 반응은 개인차가 있으며, 예상 범위를 벗어나거나 시간이 지나면서 심해질 경우 의료진에게 확인해 주세요.
          </p>
        </section>

        <div className="mt-6 space-y-5">
          {guide.sections.map((section, sectionIndex) => {
            const isUrgent = section.tone === "urgent";

            return (
              <section
                key={section.title}
                className={`overflow-hidden rounded-[1.7rem] border bg-white ${
                  isUrgent ? "border-rose-200" : "border-slate-200"
                }`}
              >
                <div
                  className={`flex items-center gap-4 border-b px-6 py-5 sm:px-8 ${
                    isUrgent ? "border-rose-200 bg-rose-50" : "border-slate-200 bg-white"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black ${
                      isUrgent ? "bg-rose-600 text-white" : "text-white"
                    }`}
                    style={isUrgent ? undefined : { backgroundColor: guide.accent }}
                  >
                    {isUrgent ? "!" : sectionIndex + 1}
                  </span>
                  <h2 className={`text-lg font-extrabold sm:text-xl ${isUrgent ? "text-rose-950" : "text-slate-900"}`}>
                    {section.title}
                  </h2>
                </div>
                <ul className="divide-y divide-slate-100 px-6 sm:px-8">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 py-4 text-[15px] leading-7 text-slate-600 sm:text-base">
                      <span
                        className={`mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                          isUrgent ? "bg-rose-500" : ""
                        }`}
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

        <section className="mt-6 rounded-[1.7rem] bg-slate-900 px-6 py-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-8">
          <div>
            <h2 className="text-lg font-extrabold">안내 내용과 다른 증상이 있나요?</h2>
            <p className="mt-2 break-keep text-sm leading-6 text-slate-300">
              개인별 시술 내용이 다르므로 걱정되는 변화가 있다면 한의원으로 연락해 주세요.
            </p>
          </div>
          <a
            href="tel:031-8057-0750"
            className="mt-5 inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 sm:mt-0"
          >
            031-8057-0750
          </a>
        </section>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            href="/warning"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 font-bold text-slate-700 transition-colors hover:border-teal-600 hover:text-teal-700"
          >
            <BackIcon className="h-4 w-4" />
            다른 시술 주의사항
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 font-bold text-white transition-colors hover:bg-teal-800"
          >
            <HomeIcon className="h-5 w-5" />
            메인 홈페이지
          </Link>
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-slate-500">
          본 안내는 일반적인 참고사항입니다. 실제 시술을 담당한 의료진의 개별 안내가 가장 우선합니다.
        </p>
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
