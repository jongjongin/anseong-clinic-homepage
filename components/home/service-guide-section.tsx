import Link from "next/link";
import Reveal from "@/components/home/reveal";
import SectionTitle from "@/components/home/section-title";
import { servicePages } from "@/lib/service-pages";

export default function ServiceGuideSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <SectionTitle
            eyebrow="진료 상세 안내"
            title="메인 화면에서 각 진료 내용을 조금 더 자세히 확인해보세요"
            description="현재 불편한 증상에 맞춰 어떤 진료를 받게 되는지, 어떤 원장님들이 함께 살피는지 메인 화면에서 바로 확인하실 수 있습니다."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {servicePages.map((service, index) => (
            <Reveal key={service.slug} delayMs={index * 45}>
              <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
                    {service.title}
                  </div>
                  <span className="text-sm font-medium text-slate-400">상세 안내</span>
                </div>

                <p className="mt-5 break-keep text-lg font-semibold leading-8 text-teal-700">{service.subtitle}</p>
                <p className="mt-4 break-keep text-base leading-8 text-slate-600">{service.summary}</p>

                <div className="mt-6 grid gap-4 rounded-[1.5rem] bg-slate-50 p-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">이런 증상으로 많이 문의하십니다</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                      {service.symptoms.slice(0, 2).map((symptom) => (
                        <li key={symptom} className="flex gap-3 break-keep">
                          <span className="mt-3 h-1.5 w-1.5 rounded-full bg-teal-700" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">함께 안내하는 의료진</p>
                    <p className="mt-3 break-keep text-sm leading-7 text-slate-600">
                      {service.doctors.map((doctor) => `${doctor.name} 원장`).join(" · ")}
                    </p>
                  </div>

                  {service.relatedPosts?.length ? (
                    <div>
                      <p className="text-sm font-semibold text-slate-900">관련 블로그 글</p>
                      <Link
                        href={service.relatedPosts[0].href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex break-keep text-sm leading-7 font-medium text-teal-700 hover:text-teal-800"
                      >
                        {service.relatedPosts[0].title}
                      </Link>
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex rounded-full border border-slate-950 bg-slate-950 px-5 py-3 text-sm font-semibold !text-white shadow-[0_12px_24px_rgba(15,23,42,0.16)] transition-colors hover:bg-slate-800"
                  >
                    상세 페이지 보기
                  </Link>
                  <Link
                    href="#consult"
                    className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900"
                  >
                    상담 문의하기
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
