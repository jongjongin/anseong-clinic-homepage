import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/home/reveal";
import SectionTitle from "@/components/home/section-title";
import { servicePages } from "@/lib/service-pages";

export default function ServiceGuideSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbfb_0%,#ffffff_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <SectionTitle
            eyebrow="진료 상세 안내"
            title="현재 불편한 증상에 맞는 진료 방향을 메인에서 바로 확인해보세요"
            description="진료과목마다 어떤 증상으로 많이 내원하시는지, 어떤 원장님들이 함께 살피는지, 내원 전 무엇을 함께 보면 좋은지 한눈에 확인하실 수 있습니다."
          />
        </Reveal>

        <Reveal delayMs={40}>
          <div className="mt-10 grid gap-4 rounded-[2rem] border border-teal-100 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:grid-cols-3 sm:p-6">
            <div className="rounded-[1.4rem] bg-slate-50 px-5 py-5">
              <p className="text-sm font-semibold text-teal-700">증상별 진료 확인</p>
              <p className="mt-3 break-keep text-sm leading-7 text-slate-600">
                목, 허리, 교통사고 후유증, 성장, 다이어트처럼 현재 가장 불편한 증상에 맞춰 보실 수 있습니다.
              </p>
            </div>
            <div className="rounded-[1.4rem] bg-slate-50 px-5 py-5">
              <p className="text-sm font-semibold text-teal-700">의료진 함께 안내</p>
              <p className="mt-3 break-keep text-sm leading-7 text-slate-600">
                진료과목별로 어떤 원장님들이 함께 살피는지 메인에서 바로 확인하실 수 있습니다.
              </p>
            </div>
            <div className="rounded-[1.4rem] bg-slate-50 px-5 py-5">
              <p className="text-sm font-semibold text-teal-700">내원 전 체크 포인트</p>
              <p className="mt-3 break-keep text-sm leading-7 text-slate-600">
                내원 전에 어떤 점을 먼저 생각해보시면 좋은지, 어떤 고민으로 많이 문의하시는지도 함께 안내드립니다.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {servicePages.map((service, index) => (
            <Reveal key={service.slug} delayMs={index * 45}>
              <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <div className="relative min-h-[220px] border-b border-slate-200 bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900">
                        {service.title}
                      </div>
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-white/90 uppercase">
                        Service Guide
                      </span>
                    </div>
                    <p className="mt-4 max-w-[28rem] break-keep text-xl font-bold leading-8 text-white sm:text-[1.65rem] sm:leading-9">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="rounded-[1.5rem] border border-teal-100 bg-teal-50/60 px-5 py-5">
                    <p className="text-sm font-semibold text-teal-700">진료 한눈에 보기</p>
                    <p className="mt-3 break-keep text-base leading-8 text-slate-700">{service.summary}</p>
                  </div>

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

                    <div>
                      <p className="text-sm font-semibold text-slate-900">내원 전 함께 살펴보세요</p>
                      <p className="mt-3 break-keep text-sm leading-7 text-slate-600">{service.checkpoints[0]}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">이런 고민으로 상담하십니다</p>
                      <p className="mt-3 break-keep text-sm leading-7 text-slate-600">{service.commonConcerns[0]}</p>
                    </div>
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
