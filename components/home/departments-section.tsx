import SectionTitle from "@/components/home/section-title";
import { departmentsSectionContent } from "@/components/home/content";

export default function DepartmentsSection() {
  return (
    <section id="departments" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow={departmentsSectionContent.eyebrow}
          title={departmentsSectionContent.title}
          description={departmentsSectionContent.description}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {departmentsSectionContent.items.map((department) => (
            <article
              key={department.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
            >
              <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
                {departmentsSectionContent.badge}
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">{department.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">
                {department.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
