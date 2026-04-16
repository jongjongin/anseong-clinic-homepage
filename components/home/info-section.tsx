import SectionTitle from "@/components/home/section-title";
import { infoSectionContent } from "@/components/home/content";
import Reveal from "@/components/home/reveal";

export default function InfoSection() {
  return (
    <section id="hours" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <SectionTitle
            eyebrow={infoSectionContent.eyebrow}
            title={infoSectionContent.title}
            description={infoSectionContent.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delayMs={40}>
            <article className="interactive-card rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-slate-900">{infoSectionContent.hoursTitle}</h3>
              <div className="mt-6 space-y-4">
                {infoSectionContent.hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 text-sm sm:text-base"
                  >
                    <span className="break-keep font-medium text-slate-600">{item.day}</span>
                    <span className="break-keep text-right font-semibold text-slate-900">{item.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.25rem] bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-600">
                <p className="break-keep">평일 점심시간 13:00 ~ 14:00</p>
                <p className="break-keep">토·일·공휴일은 점심시간 없이 운영합니다.</p>
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-slate-50 p-5">
                <p className="text-sm font-semibold tracking-[0.12em] text-slate-400 uppercase">
                  방문 안내
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  {infoSectionContent.guidance.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                      <span className="break-keep">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delayMs={110}>
            <article className="interactive-card rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-slate-900">{infoSectionContent.locationTitle}</h3>
              <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100">
                <iframe
                  src={infoSectionContent.embedMapUrl}
                  className="h-[320px] w-full border-0 sm:h-[380px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="안성경희365한의원 위치 지도"
                />
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={infoSectionContent.naverMapUrl}
                  className="rounded-full border border-slate-950 bg-slate-950 px-5 py-3 text-center text-sm font-semibold !text-white shadow-[0_12px_24px_rgba(15,23,42,0.16)]"
                  style={{ color: "#ffffff" }}
                >
                  네이버지도 보기
                </a>
                <a
                  href={infoSectionContent.kakaoMapUrl}
                  className="rounded-full bg-teal-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_12px_24px_rgba(13,148,136,0.18)]"
                >
                  카카오맵 보기
                </a>
              </div>
              <div className="mt-6 grid gap-4 rounded-[1.5rem] bg-slate-50 p-5 text-base leading-7 text-slate-600 sm:grid-cols-2">
                <p className="break-keep">
                  <span className="font-semibold text-slate-900">주소</span> {infoSectionContent.address}
                </p>
                <p className="break-keep">
                  <span className="font-semibold text-slate-900">주차</span> {infoSectionContent.parking}
                </p>
                <p className="break-keep">
                  <span className="font-semibold text-slate-900">문의</span> {infoSectionContent.contact}
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
