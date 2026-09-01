import Reveal from "@/components/home/reveal";
import ProgramsCarousel, { type ProgramCard } from "@/components/renewal/programs-carousel";
import { servicePages } from "@/lib/service-pages";

const MARQUEE_TEXT = "ANSEONG KYUNGHEE 365 · 365 DAYS CLINIC · ";

export default function ProgramsSection() {
  const programs: ProgramCard[] = servicePages.map((service) => ({
    slug: service.slug,
    title: service.title,
    subtitle: service.subtitle,
    bullets: service.symptoms.slice(0, 3),
  }));

  return (
    <section id="departments" className="relative overflow-hidden bg-[#f8f8f8] py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-2">
            <span className="block h-2 w-2 rotate-45 bg-teal-700" aria-hidden />
            <p className="text-[13px] font-semibold tracking-wide text-[#464646]">안성경희365 스페셜 프로그램</p>
          </div>
          <h2 className="gb-font mt-5 break-keep text-[22px] font-bold leading-snug text-[#181818] sm:text-4xl">
            진료 프로그램
          </h2>
          <p className="mt-4 break-keep text-[13px] leading-relaxed text-[#959595] sm:text-[15px]">
            통증부터 다이어트, 미용까지 — 필요한 진료를 골라 자세한 안내를 확인해 보세요.
          </p>
        </Reveal>

        <div className="relative mt-12">
          {/* 캐러셀 뒤로 흐르는 브랜드 마르퀴 */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-screen -translate-x-1/2 -translate-y-1/2 select-none overflow-hidden"
          >
            <div className="animate-marquee flex w-max whitespace-nowrap">
              <span className="text-outline text-[110px] font-extrabold leading-none tracking-tight lg:text-[180px]">
                {MARQUEE_TEXT.repeat(2)}
              </span>
              <span
                aria-hidden
                className="text-outline text-[110px] font-extrabold leading-none tracking-tight lg:text-[180px]"
              >
                {MARQUEE_TEXT.repeat(2)}
              </span>
            </div>
          </div>

          <Reveal className="relative z-10" delayMs={120}>
            <ProgramsCarousel programs={programs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
