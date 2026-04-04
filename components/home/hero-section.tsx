import Image from "next/image";
import { heroContent } from "@/components/home/content";
import Reveal from "@/components/home/reveal";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,#eef6f5_0%,#f8fbfb_28%,#ffffff_58%)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal-700 uppercase">
            {heroContent.eyebrow}
          </p>
          <h1 className="mt-5 text-[2.35rem] font-bold leading-[1.18] text-slate-900 sm:text-5xl lg:text-[4.25rem]">
            {heroContent.title[0]}
            <br />
            {heroContent.title[1]}
            <br />
            {heroContent.title[2]}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {heroContent.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={heroContent.reservationHref}
              className="rounded-full bg-slate-950 px-6 py-4 text-center text-base font-semibold text-white shadow-[0_12px_24px_rgba(15,23,42,0.18)] transition-colors hover:bg-slate-800"
            >
              {heroContent.primaryButton}
            </a>
            <a
              href={heroContent.phoneHref}
              className="rounded-full border border-slate-300 bg-white px-6 py-4 text-center text-base font-semibold text-slate-950 shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-colors hover:border-slate-900"
            >
              {heroContent.secondaryButton}
            </a>
          </div>

          <div className="mt-10 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
            {heroContent.stats.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold tracking-[0.12em] text-slate-400 uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">{item.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative" delayMs={120}>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_20px_80px_rgba(15,23,42,0.06)] sm:p-7">
            <div className="relative mb-5 min-h-[240px] overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-50">
              <Image
                src={heroContent.visualImage}
                alt="안성경희365한의원 대표 이미지"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="rounded-[1.5rem] border border-slate-100 bg-[#fbfcfc] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <p className="text-sm font-semibold text-teal-700">{heroContent.noticeTitle}</p>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                  365 Clinic
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {heroContent.highlights.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[40px_1fr] items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] bg-slate-900 px-5 py-6 text-white">
                <p className="text-sm text-white/70">{heroContent.contactLabel}</p>
                <p className="mt-2 text-3xl font-bold tracking-tight">{heroContent.contactNumber}</p>
                <p className="mt-3 text-sm leading-6 text-white/80">{heroContent.contactDescription}</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-2 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] lg:block">
            <p className="text-xs font-semibold tracking-[0.12em] text-slate-400 uppercase">
              Recovery Note
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              아픈 곳만이 아니라
              <br />
              회복의 속도까지 함께 봅니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
