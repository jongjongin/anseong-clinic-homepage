import { beautyMenuSectionContent } from "@/components/home/content";
import Reveal from "@/components/home/reveal";

export default function BeautyMenuSection() {
  return (
    <section id="beauty-menu" className="bg-[#fbfaf7]">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <div className="overflow-hidden rounded-[2.4rem] border border-[#e8dfd1] bg-white shadow-[0_26px_70px_rgba(86,74,54,0.10)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative overflow-hidden bg-[#14221f] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-teal-300/16 blur-3xl" />
                <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-[#f4d88a]/16 blur-3xl" />

                <div className="relative">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white/80 uppercase">
                    {beautyMenuSectionContent.eyebrow}
                  </span>
                  <p className="mt-8 text-sm font-semibold tracking-[0.18em] text-[#f4d88a] uppercase">
                    {beautyMenuSectionContent.badge}
                  </p>
                  <h2 className="mt-4 break-keep text-[2.2rem] font-bold leading-[1.18] tracking-[-0.03em] sm:text-[3rem] lg:text-[3.6rem]">
                    {beautyMenuSectionContent.title}
                  </h2>
                  <p className="mt-6 max-w-xl break-keep text-base leading-8 text-white/76 sm:text-lg">
                    {beautyMenuSectionContent.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {beautyMenuSectionContent.included.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-white/88"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    {beautyMenuSectionContent.prices.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.7rem] border border-white/14 bg-white/[0.08] p-5 backdrop-blur-sm"
                      >
                        <p className="text-sm font-semibold text-[#f4d88a]">{item.label}</p>
                        <p className="mt-3 text-4xl font-bold tracking-[-0.03em] text-white">{item.price}</p>
                        <p className="mt-3 break-keep text-sm leading-6 text-white/68">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={beautyMenuSectionContent.primaryHref}
                      className="rounded-full border border-[#E2C400] bg-[#FEE500] px-6 py-4 text-center text-base font-semibold text-slate-950 shadow-[0_14px_28px_rgba(254,229,0,0.20)] transition-colors hover:bg-[#F7DE00]"
                      style={{ color: "#191919" }}
                    >
                      {beautyMenuSectionContent.primaryButton}
                    </a>
                    <a
                      href={beautyMenuSectionContent.secondaryHref}
                      className="rounded-full border border-white/24 bg-white/10 px-6 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-white/15"
                    >
                      {beautyMenuSectionContent.secondaryButton}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#fffdf8] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                <div className="rounded-[1.8rem] border border-[#eadfcd] bg-white p-5 sm:p-6">
                  <p className="text-sm font-semibold tracking-[0.14em] text-teal-700 uppercase">
                    Process
                  </p>
                  <div className="mt-6 space-y-5">
                    {beautyMenuSectionContent.steps.map((step, index) => (
                      <div key={step.title} className="flex gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <p className="break-keep text-base font-bold text-slate-900">{step.title}</p>
                          <p className="mt-2 break-keep text-sm leading-7 text-slate-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[1.8rem] border border-teal-100 bg-teal-50/70 p-5 sm:p-6">
                  <p className="text-sm font-semibold tracking-[0.14em] text-teal-700 uppercase">
                    시술 전 안내
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                    {beautyMenuSectionContent.notices.map((item) => (
                      <li key={item} className="flex gap-3 break-keep">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-[1.8rem] border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
                  <p className="text-sm font-semibold tracking-[0.14em] text-amber-800 uppercase">
                    시술 후 관리
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                    {beautyMenuSectionContent.aftercare.map((item) => (
                      <li key={item} className="flex gap-3 break-keep">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
