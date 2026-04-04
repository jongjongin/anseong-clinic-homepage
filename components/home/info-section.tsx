import SectionTitle from "@/components/home/section-title";
import { infoSectionContent } from "@/components/home/content";

export default function InfoSection() {
  return (
    <section id="hours" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow={infoSectionContent.eyebrow}
          title={infoSectionContent.title}
          description={infoSectionContent.description}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900">{infoSectionContent.hoursTitle}</h3>
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

            <div className="mt-8 rounded-[1.5rem] bg-slate-50 p-5">
              <p className="text-sm font-semibold tracking-[0.12em] text-slate-400 uppercase">
                방문 안내
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {infoSectionContent.guidance.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900">{infoSectionContent.locationTitle}</h3>
            <div className="mt-6 flex min-h-[260px] items-center justify-center rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#f7fbfa_0%,#eef5f4_100%)] px-6 py-10 text-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.12em] text-teal-700 uppercase">
                  {infoSectionContent.mapLabel}
                </p>
                <p className="mt-3 text-base leading-7 text-slate-600">{infoSectionContent.mapDescription}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 rounded-[1.5rem] bg-slate-50 p-5 text-base leading-7 text-slate-600 sm:grid-cols-2">
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
