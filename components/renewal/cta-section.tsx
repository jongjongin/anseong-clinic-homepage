import Reveal from "@/components/home/reveal";
import { ctaSectionContent } from "@/components/home/content";

export default function RenewalCtaSection() {
  return (
    <section id="consult" className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal className="flex flex-col items-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300">Contact</p>
          <h2 className="mt-4 break-keep text-2xl font-bold leading-snug sm:text-4xl">
            {ctaSectionContent.title[0]}
            <br />
            {ctaSectionContent.title[1]}
          </h2>
          <p className="mt-5 max-w-xl break-keep text-sm leading-relaxed text-white/70 sm:text-base">
            {ctaSectionContent.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={ctaSectionContent.kakaoChatUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#E2C400] bg-[#FEE500] px-7 py-3.5 text-sm font-semibold text-[#191919] transition hover:bg-[#F7DE00]"
            >
              {ctaSectionContent.kakaoButton}
            </a>
            <a
              href={`tel:${ctaSectionContent.phoneNumber}`}
              className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold transition hover:bg-white hover:text-slate-900"
            >
              {ctaSectionContent.phoneButton} {ctaSectionContent.phoneNumber}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
