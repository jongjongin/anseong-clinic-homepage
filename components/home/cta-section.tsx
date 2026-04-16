import { ctaSectionContent } from "@/components/home/content";
import ConsultationRequestForm from "@/components/home/consultation-request-form";
import Reveal from "@/components/home/reveal";

export default function CtaSection() {
  return (
    <section id="consult" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <div className="rounded-[2.25rem] border border-slate-200 bg-slate-900 px-6 py-10 text-white sm:px-8 sm:py-12 lg:flex lg:items-start lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-white/65">
                {ctaSectionContent.eyebrow}
              </p>
              <h2 className="mt-4 text-[2rem] font-bold leading-tight sm:text-[2.35rem]">
                {ctaSectionContent.title[0]}
                <br />
                {ctaSectionContent.title[1]}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78 sm:text-lg">
                {ctaSectionContent.description}
              </p>
              <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/8 p-5">
                <p className="text-sm font-semibold text-white/70">{ctaSectionContent.summaryTitle}</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                  {ctaSectionContent.summaryItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FEE500]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-[1.2rem] bg-white/8 px-4 py-4 text-sm leading-6 text-white/78">
                  대표번호 {ctaSectionContent.phoneNumber}
                </div>
              </div>
            </div>

            <ConsultationRequestForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
