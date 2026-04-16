import SectionTitle from "@/components/home/section-title";
import { departmentsSectionContent } from "@/components/home/content";
import Reveal from "@/components/home/reveal";

export default function DepartmentsSection() {
  return (
    <section id="departments" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <SectionTitle
            eyebrow={departmentsSectionContent.eyebrow}
            title={departmentsSectionContent.title}
            description={departmentsSectionContent.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {departmentsSectionContent.items.map((department, index) => (
            <Reveal key={department.title} delayMs={index * 60}>
              <article className="interactive-card rounded-[2rem] border border-slate-200 bg-[#fbfcfc] p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
                    {departmentsSectionContent.badge}
                  </div>
                  <span className="text-sm font-semibold text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-6 break-keep text-2xl font-bold text-slate-900 sm:text-[1.85rem]">
                  {department.title}
                </h3>
                <p className="mt-3 break-keep text-sm font-semibold text-teal-700">{department.summary}</p>
                <p className="mt-5 break-keep text-base leading-8 text-slate-600">{department.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
