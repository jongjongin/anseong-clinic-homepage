import Reveal from "@/components/home/reveal";
import { ctaSectionContent } from "@/components/home/content";

export default function RenewalCtaSection() {
  return (
    <section id="consult" className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal className="flex flex-col items-center">
          <p className="mar-font text-xs tracking-[0.3em] text-white/50">CONTACT</p>
          <h2 className="gb-font mt-5 break-keep text-[22px] font-bold leading-[1.55] sm:text-4xl sm:leading-[1.5]">
            {ctaSectionContent.title[0]}
            <br />
            {ctaSectionContent.title[1]}
          </h2>
          <p className="mt-6 max-w-xl break-keep text-[13px] leading-[1.9] text-white/60 sm:text-[15px]">
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
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm transition hover:border-white hover:bg-white hover:text-[#181818]"
            >
              {ctaSectionContent.phoneButton} {ctaSectionContent.phoneNumber}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
