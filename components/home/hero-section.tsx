import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { heroContent } from "@/components/home/content";
import Reveal from "@/components/home/reveal";

export default function HeroSection() {
  const featuredQuickLinks = [
    { label: "교통사고 진료", href: "/services/car-accident" },
    { label: "보약 상담", href: "/services/tonic" },
    { label: "다이어트 진료", href: "/services/diet" },
  ];
  const heroVideoPath = heroContent.visualVideo;
  const hasHeroVideo = heroVideoPath
    ? existsSync(join(process.cwd(), "public", heroVideoPath.replace(/^\//, "")))
    : false;

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950"
    >
      <Reveal className="flex">
        <div className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden px-4 pb-8 pt-24 text-white sm:px-6 sm:pb-10 sm:pt-28 lg:px-10 lg:pb-12 lg:pt-32">
          <div className="mx-auto flex h-full w-full max-w-[1560px] flex-1 flex-col justify-between">
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
              ) : null}
              <Image
                src={heroContent.visualImage}
                alt="안성경희365한의원 대표 이미지"
                fill
                className={`object-cover object-center ${hasHeroVideo ? "opacity-0" : ""}`}
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18)_0%,rgba(15,23,42,0.38)_20%,rgba(15,23,42,0.62)_58%,rgba(15,23,42,0.88)_100%)]" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-white/92 uppercase backdrop-blur-sm sm:text-xs">
                {heroContent.eyebrow}
              </span>
              <div className="hidden rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm md:block">
                365일 진료 안내
              </div>
            </div>

            <div className="relative z-10 flex flex-1 items-end">
              <div className="max-w-5xl">
                <h1 className="break-keep text-[2.4rem] font-bold leading-[1.12] tracking-[-0.04em] text-white sm:text-[4.2rem] lg:max-w-6xl lg:text-[5.8rem] xl:text-[6.4rem]">
                  365일 당신의 건강을 책임지는 안성경희365한의원
                </h1>
                <p className="mt-5 max-w-2xl break-keep text-sm leading-7 text-white/84 sm:mt-6 sm:text-lg sm:leading-8">
                  단순한 통증 완화가 아니라 생활이 편해질 때까지 치료합니다.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <a
                    href={heroContent.reservationHref}
                    className="rounded-full border border-[#E2C400] bg-[#FEE500] px-6 py-4 text-center text-base font-semibold text-slate-950 shadow-[0_12px_24px_rgba(254,229,0,0.24)] transition-colors hover:bg-[#F7DE00]"
                    style={{ color: "#191919" }}
                  >
                    {heroContent.primaryButton}
                  </a>
                  <a
                    href={heroContent.phoneHref}
                    className="rounded-full border border-white/28 bg-white/10 px-6 py-4 text-center text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                  >
                    {heroContent.secondaryButton}
                  </a>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-[0.14em] text-white/70 uppercase sm:text-sm">
                    많이 찾으시는 진료
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {featuredQuickLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="rounded-full border border-white/16 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/16"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 grid gap-3 md:grid-cols-3">
              {heroContent.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.4rem] border border-white/16 bg-white/10 px-4 py-4 backdrop-blur-md sm:px-5 sm:py-5"
                >
                  <p className="text-xs font-semibold tracking-[0.12em] text-white/68 uppercase">
                    {item.label}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-xl leading-[1.28] font-bold text-white sm:text-[1.8rem]">
                    {item.value}
                  </p>
                  {"note" in item ? (
                    <p className="mt-3 whitespace-pre-line text-xs leading-5 text-white/72 sm:text-sm">
                      {item.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
