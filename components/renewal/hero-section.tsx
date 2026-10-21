import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/components/home/content";

export default function RenewalHeroSection() {
  const heroVideoPath = heroContent.visualVideo;
  const hasHeroVideo = heroVideoPath
    ? existsSync(join(process.cwd(), "public", heroVideoPath.replace(/^\//, "")))
    : false;

  return (
    <section id="hero" className="relative flex min-h-[calc(100svh-4rem-1px-env(safe-area-inset-bottom))] w-full flex-col overflow-hidden bg-slate-950 text-white lg:min-h-[100svh]">
      <div className="absolute inset-0">
        {hasHeroVideo ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            poster={heroContent.visualImage}
          >
            <source src={heroVideoPath ?? undefined} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={heroContent.visualImage}
            alt="안성경희365한의원 대표 이미지"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-10 pt-16 text-center lg:pt-[190px]">
        <p className="mar-font text-[11px] tracking-[0.35em] text-white/70 sm:text-sm">
          ANSEONG KYUNGHEE 365
        </p>
        <h1 className="gb-font mt-7 break-keep text-[26px] font-bold leading-[1.45] sm:text-5xl sm:leading-[1.4] lg:text-[54px]">
          {heroContent.title[0]}
          <br />
          {heroContent.title[1]} {heroContent.title[2]}
        </h1>
        <p className="mt-7 max-w-xl break-keep text-[13px] leading-relaxed text-white/75 sm:text-[15px]">
          {heroContent.description}
        </p>
      </div>

      {/* 노트북처럼 낮은 화면(데스크톱 1024px+ 이면서 높이 800px 이하)에서는 상담 바와 겹치므로 통계 줄을 숨긴다 */}
      <div className="relative z-10 shrink-0 border-t border-white/10 bg-black/20 backdrop-blur-sm [@media(min-width:1024px)_and_(max-height:800px)]:hidden">
        <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-white/10 px-2 py-4 sm:py-5">
          {heroContent.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5 px-2 text-center">
              <p className="text-xs tracking-wide text-white/75 sm:text-xs">{stat.label}</p>
              <p className="gb-font whitespace-pre-line break-keep text-xs font-bold sm:text-[15px]">
                {stat.value}
              </p>
              <p className="hidden whitespace-pre-line text-[11px] text-white/70 sm:block">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 데스크톱: 하단 상담 바 높이만큼 비워 통계 줄이 바에 가리지 않게 한다 (모바일은 히어로 높이에서 이미 뺐다) */}
      <div
        aria-hidden
        className="relative hidden shrink-0 lg:block lg:h-[var(--quick-reserve-bar-height,11rem)] [@media(min-width:1024px)_and_(max-height:800px)]:hidden"
      />

      <Link
        href="/#intro"
        aria-label="아래로 이동"
        className="absolute bottom-[calc(var(--quick-reserve-bar-height,11rem)+7rem)] left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-white/80 transition hover:text-white lg:block"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}
