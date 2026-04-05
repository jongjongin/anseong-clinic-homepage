import { telemedicineSectionContent } from "@/components/home/content";
import Reveal from "@/components/home/reveal";
import SectionTitle from "@/components/home/section-title";

export default function TelemedicineSection() {
  return (
    <section id="telemedicine" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <SectionTitle
            eyebrow={telemedicineSectionContent.eyebrow}
            title={telemedicineSectionContent.title}
            description={telemedicineSectionContent.description}
          />
        </Reveal>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 lg:grid lg:grid-cols-[1fr_320px] lg:gap-8">
          <Reveal>
            <ul className="space-y-4 text-base leading-8 text-slate-600">
              {telemedicineSectionContent.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 rounded-full bg-teal-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="mt-8 flex flex-col gap-3 lg:mt-0">
              <a
                href={telemedicineSectionContent.primaryHref}
                className="rounded-full border border-[#E2C400] bg-[#FEE500] px-6 py-4 text-center text-base font-semibold !text-slate-950 transition-colors hover:bg-[#F7DE00]"
                style={{ color: "#191919" }}
              >
                {telemedicineSectionContent.primaryButton}
              </a>
              <a
                href={telemedicineSectionContent.secondaryHref}
                className="rounded-full border border-slate-900 bg-slate-900 px-6 py-4 text-center text-base font-semibold !text-white transition-colors hover:bg-slate-800"
                style={{ color: "#ffffff" }}
              >
                {telemedicineSectionContent.secondaryButton}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
