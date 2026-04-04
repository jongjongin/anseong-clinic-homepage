import SectionTitle from "@/components/home/section-title";
import { doctorsSectionContent } from "@/components/home/content";

export default function DoctorsSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow={doctorsSectionContent.eyebrow}
          title={doctorsSectionContent.title}
          description={doctorsSectionContent.description}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {doctorsSectionContent.items.map((doctor) => (
            <article key={doctor.name} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-base font-bold text-slate-700 sm:h-24 sm:w-24 sm:text-lg">
                  {doctorsSectionContent.badge}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{doctor.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-sky-700">{doctor.role}</p>
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-7 text-slate-600 sm:text-base">
                {doctor.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
