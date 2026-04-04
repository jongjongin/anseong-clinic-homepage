import SectionTitle from "@/components/home/section-title";
import { doctorsSectionContent } from "@/components/home/content";

export default function DoctorsSection() {
  return (
    <section id="doctors" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow={doctorsSectionContent.eyebrow}
          title={doctorsSectionContent.title}
          description={doctorsSectionContent.description}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {doctorsSectionContent.items.map((doctor) => (
            <article
              key={doctor.name}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-[132px_1fr] sm:items-start">
                <div className="flex h-28 w-28 items-center justify-center rounded-[1.75rem] bg-[linear-gradient(180deg,#eef4f3_0%,#dbe8e6_100%)] text-sm font-semibold text-slate-600 sm:h-32 sm:w-32">
                  {doctorsSectionContent.eyebrow}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 sm:text-[1.9rem]">{doctor.name}</h3>
                  <p className="mt-2 text-sm font-semibold tracking-[0.08em] text-teal-700 uppercase">
                    {doctor.role}
                  </p>
                  <p className="mt-5 text-base leading-8 text-slate-600">{doctor.description}</p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold tracking-[0.12em] text-slate-400 uppercase">
                  주요 이력
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 sm:text-base">
                  {doctor.credentials.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
