import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { heroContent } from "@/components/home/content";

export default function RenewalHeroSection() {
  const heroVideoPath = heroContent.visualVideo;
  const hasHeroVideo = heroVideoPath
    ? existsSync(join(process.cwd(), "public", heroVideoPath.replace(/^\//, "")))
    : false;

  return (
    <section id="hero" className="relative flex h-[100svh] w-full flex-col overflow-hidden bg-slate-950 text-white">
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

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80 sm:text-sm">
          Anseong Kyunghee 365 Korean Medicine Clinic
        </p>
        <h1 className="mt-6 break-keep text-3xl font-bold leading-snug sm:text-5xl lg:text-6xl lg:leading-tight">
          {heroContent.title[0]}
          <br />
          {heroContent.title[1]} {heroContent.title[2]}
        </h1>
        <p className="mt-6 max-w-2xl break-keep text-sm leading-relaxed text-white/85 sm:text-base">
          {heroContent.description}
        </p>
      </div>

      <div className="relative z-10 border-t border-white/15 bg-black/25 backdrop-blur-sm">
        <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-white/15 px-2 py-4 sm:py-5">
          {heroContent.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-2 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/60 sm:text-xs">
                {stat.label}
              </p>
              <p className="whitespace-pre-line break-keep text-xs font-bold sm:text-base">{stat.value}</p>
              <p className="hidden whitespace-pre-line text-[11px] text-white/60 sm:block">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="/renewal#intro"
        aria-label="아래로 이동"
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-white/80 transition hover:text-white lg:block"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
