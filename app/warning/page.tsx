import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WarningIcon from "@/app/warning/warning-icon";
import { warningGuides } from "@/app/warning/data";

export const metadata: Metadata = {
  title: "시술 후 주의사항",
  description:
    "침치료, 약침, 봉침, 추나, 충격파, 스킨부스터, 레이저 시술 후 주의사항을 확인하세요.",
  alternates: {
    canonical: "/warning",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function WarningPage() {
  return (
    <div className="min-h-screen bg-[#f2f6f5] text-slate-900">
      <header className="border-b border-white/20 bg-[#0f7c77] text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" aria-label="안성경희365한의원 메인 홈페이지">
            <div className="relative h-10 w-[190px] rounded-xl bg-white px-3 py-2 shadow-sm sm:h-12 sm:w-[230px]">
              <Image
                src="/assets/logo/logo-wordmark.png"
                alt="안성경희365한의원"
                fill
                className="object-contain px-3 py-2"
                sizes="230px"
                priority
              />
            </div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            <HomeIcon className="h-4 w-4" />
            <span className="hidden sm:inline">메인 홈페이지</span>
            <span className="sm:hidden">홈</span>
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(145deg,#0f7c77_0%,#159a91_58%,#83c9bd_100%)] text-white">
          <div className="absolute -left-20 top-8 h-56 w-56 rounded-full border border-white/15" />
          <div className="absolute -right-16 bottom-[-5rem] h-72 w-72 rounded-full border-[48px] border-white/10" />
          <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-20">
            <p className="text-xs font-bold tracking-[0.28em] text-white/75 uppercase sm:text-sm">
              After Care Guide
            </p>
            <h1 className="mt-5 break-keep text-[2.55rem] font-black leading-[1.15] tracking-[-0.04em] sm:text-[4.2rem]">
              시술 후 주의사항
            </h1>
            <p className="mx-auto mt-6 max-w-2xl break-keep text-base leading-8 text-white/85 sm:text-lg">
              편안하고 안전한 회복을 위해 시술별 관리 방법을 확인해 주세요.
              <br className="hidden sm:block" /> 개인별 상태에 따라 의료진이 안내한 내용이 가장 우선입니다.
            </p>
          </div>
        </section>

        <section className="relative mx-auto -mt-8 max-w-5xl px-4 pb-20 sm:px-6 sm:pb-24">
          <div className="rounded-[2rem] border border-white/70 bg-white/95 p-5 shadow-[0_24px_70px_rgba(15,62,58,0.12)] backdrop-blur sm:p-8">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold text-teal-700">시술을 선택해 주세요</p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-3xl">
                  어떤 시술을 받으셨나요?
                </h2>
              </div>
              <p className="text-sm text-slate-500">총 7개 시술 안내</p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {warningGuides.map((guide, index) => (
                <Link
                  key={guide.slug}
                  href={`/warning/${guide.slug}`}
                  className={`group relative flex min-h-[210px] flex-col items-center justify-center overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_18px_38px_rgba(15,118,110,0.12)] sm:min-h-[238px] sm:p-5 ${
                    index === warningGuides.length - 1 ? "col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24"
                    style={{ color: guide.accent, backgroundColor: guide.softAccent }}
                  >
                    <WarningIcon name={guide.icon} className="h-12 w-12 sm:h-14 sm:w-14" />
                  </div>
                  <h3 className="mt-4 break-keep text-lg font-extrabold text-slate-900 sm:text-xl">
                    {guide.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 break-keep text-xs leading-5 text-slate-500 sm:text-sm">
                    {guide.shortDescription}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-teal-700">
                    확인하기
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[1.6rem] border border-amber-200 bg-amber-50 px-5 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-7">
            <div>
              <p className="font-extrabold text-amber-950">안내보다 현재 증상이 걱정되시나요?</p>
              <p className="mt-1 break-keep text-sm leading-6 text-amber-900/75">
                심한 통증, 호흡 곤란, 빠르게 커지는 붓기 등 급격한 변화가 있다면 안내만 기다리지 말고
                의료진 또는 응급기관에 연락해 주세요.
              </p>
            </div>
            <a
              href="tel:031-8057-0750"
              className="mt-4 inline-flex shrink-0 items-center justify-center rounded-full bg-amber-900 px-5 py-3 text-sm font-bold text-white sm:mt-0"
            >
              한의원 전화 031-8057-0750
            </a>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <HomeIcon className="h-5 w-5" />
              메인 홈페이지 바로가기
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-7 text-center text-xs leading-6 text-slate-500 sm:px-6">
          본 안내는 일반적인 참고사항이며, 시술 부위와 개인 상태에 따라 관리 방법이 달라질 수 있습니다.
          <br />
          안성경희365한의원 · 031-8057-0750
        </div>
      </footer>
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

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m7 4 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
