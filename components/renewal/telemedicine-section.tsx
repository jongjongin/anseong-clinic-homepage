import Reveal from "@/components/home/reveal";
import { telemedicineSectionContent } from "@/components/home/content";

export default function TelemedicineSection() {
  return (
    <section id="telemedicine" className="bg-[#f8f8f8] py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <p className="mar-font text-xs tracking-[0.3em] text-[#959595]">TELEMEDICINE</p>
          <h2 className="gb-font mt-4 break-keep text-[22px] font-bold leading-[1.5] text-[#181818] sm:text-3xl">
            {telemedicineSectionContent.title}
          </h2>
          <p className="mt-4 break-keep text-[13px] leading-[1.9] text-[#6d6d6d] sm:text-[15px]">
            {telemedicineSectionContent.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href={telemedicineSectionContent.primaryHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#E2C400] bg-[#FEE500] px-6 py-3 text-sm font-semibold text-[#191919] transition hover:bg-[#F7DE00]"
            >
              {telemedicineSectionContent.primaryButton}
            </a>
            <a
              href={telemedicineSectionContent.secondaryHref}
              className="rounded-full border border-[#181818] px-6 py-3 text-sm font-semibold text-[#181818] transition hover:bg-[#181818] hover:text-white"
            >
              {telemedicineSectionContent.secondaryButton}
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <ol className="flex flex-col divide-y divide-[#eee] border-y border-[#eee] bg-white px-6">
            {telemedicineSectionContent.items.map((item, index) => (
              <li key={item} className="flex items-start gap-4 py-5">
                <span className="mar-font mt-0.5 text-lg text-[#c4c4c4]">0{index + 1}</span>
                <p className="break-keep text-[13px] leading-[1.8] text-[#464646] sm:text-sm">{item}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
