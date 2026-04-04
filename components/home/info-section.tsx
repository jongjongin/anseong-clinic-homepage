import SectionTitle from "@/components/home/section-title";
import { infoSectionContent } from "@/components/home/content";

export default function InfoSection() {
  return (
    <section id="hours" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow={infoSectionContent.eyebrow}
          title={infoSectionContent.title}
          description={infoSectionContent.description}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{infoSectionContent.hoursTitle}</h3>
            <div className="mt-6 space-y-4">
              {infoSectionContent.hours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 text-sm sm:text-base"
                >
                  <span className="font-medium text-slate-600">{item.day}</span>
                  <span className="font-semibold text-slate-900">{item.time}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{infoSectionContent.locationTitle}</h3>
            <div className="mt-6 rounded-3xl bg-slate-50 px-6 py-10 text-center">
              <p className="text-sm font-semibold text-sky-700">{infoSectionContent.mapLabel}</p>
              <p className="mt-2 text-base text-slate-600">{infoSectionContent.mapDescription}</p>
            </div>
            <div className="mt-6 space-y-3 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                <span className="font-semibold text-slate-900">주소</span> {infoSectionContent.address}
              </p>
              <p>
                <span className="font-semibold text-slate-900">주차</span> {infoSectionContent.parking}
              </p>
              <p>
                <span className="font-semibold text-slate-900">문의</span> {infoSectionContent.contact}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
