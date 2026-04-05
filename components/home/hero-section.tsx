import Image from "next/image";
import { heroContent } from "@/components/home/content";
import Reveal from "@/components/home/reveal";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f4faf9_0%,#ffffff_56%,#ffffff_100%)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <Reveal className="flex">
            <div className="relative flex min-h-[560px] w-full flex-col justify-between overflow-hidden rounded-[2.2rem] bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] sm:min-h-[620px] sm:p-8 lg:p-10">
              <div className="absolute inset-0">
                <Image
                  src={heroContent.visualImage}
                  alt="안성경희365한의원 대표 이미지"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18)_0%,rgba(15,23,42,0.55)_38%,rgba(15,23,42,0.84)_100%)]" />
              </div>

              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white/92 uppercase backdrop-blur-sm">
                  {heroContent.eyebrow}
                </span>
                <h1 className="mt-6 max-w-3xl text-[2.35rem] font-bold leading-[1.15] text-white sm:text-5xl lg:text-[4.1rem]">
                  365일 당신의 건강을 책임지는
                  <br />
                  안성경희365한의원
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/88 sm:text-lg">
                  단순한 통증 완화가 아니라 생활이 편해질 때까지 치료합니다.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={heroContent.reservationHref}
                    className="rounded-full bg-slate-950 px-6 py-4 text-center text-base font-semibold text-white shadow-[0_12px_24px_rgba(15,23,42,0.28)] transition-colors hover:bg-slate-800"
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
              </div>

              <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { label: "365일 진료", value: "매일 운영" },
                  { label: "평일", value: "09-20" },
                  { label: "토·일·공휴일", value: "09-15" },
                  { label: "대표번호", value: "031-8057-0750" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-white/16 bg-white/10 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-xs font-semibold tracking-[0.12em] text-white/70 uppercase">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-bold text-white sm:text-xl">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="relative" delayMs={120}>
            <div className="rounded-[2.1rem] border border-slate-200 bg-white p-5 shadow-[0_20px_80px_rgba(15,23,42,0.06)] sm:p-7">
              <div className="relative mb-5 min-h-[280px] overflow-hidden rounded-[1.6rem] border border-slate-100 bg-slate-50 sm:min-h-[340px]">
                <Image
                  src={heroContent.visualImage}
                  alt="안성경희365한의원 대표 이미지"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-[1.35rem] border border-white/40 bg-white/88 px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                  <p className="text-xs font-semibold tracking-[0.12em] text-teal-700 uppercase">
                    365 Clinic
                  </p>
                  <p className="mt-2 text-base font-semibold leading-7 text-slate-900">
                    편하게 내원할 수 있도록 진료시간과 상담 흐름을 한 화면에서 확인할 수 있게 구성했습니다.
                  </p>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-slate-100 bg-[#fbfcfc] p-5 sm:p-7">
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

            <div className="absolute -bottom-5 left-5 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] lg:block">
              <p className="text-xs font-semibold tracking-[0.12em] text-slate-400 uppercase">
                Recovery Note
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                증상 설명이 어려워도
                <br />
                편하게 상담부터 시작하실 수 있습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
