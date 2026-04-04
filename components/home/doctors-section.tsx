import SectionTitle from "@/components/home/section-title";
import { doctorsSectionContent } from "@/components/home/content";
import Reveal from "@/components/home/reveal";

export default function DoctorsSection() {
  return (
    <section id="doctors" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <SectionTitle
            eyebrow={doctorsSectionContent.eyebrow}
            title={doctorsSectionContent.title}
            description={doctorsSectionContent.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {doctorsSectionContent.items.map((doctor, index) => (
            <Reveal key={doctor.name} delayMs={index * 70}>
              <article className="interactive-card rounded-[2rem] border border-slate-200 bg-white p-6 text-center sm:p-8">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-[linear-gradient(180deg,#eef4f3_0%,#dbe8e6_100%)] text-sm font-semibold text-slate-600 sm:h-28 sm:w-28">
                  원장
                </div>
                <p className="mt-6 text-sm font-semibold tracking-[0.08em] text-teal-700 uppercase">
                  {doctor.role}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{doctor.name}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
