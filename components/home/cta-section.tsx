import { ctaSectionContent } from "@/components/home/content";
import ConsultationRequestForm from "@/components/home/consultation-request-form";
import Reveal from "@/components/home/reveal";

export default function CtaSection() {
  return (
    <section id="consult" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <div className="rounded-[2.25rem] border border-slate-200 bg-slate-900 px-6 py-10 text-white sm:px-8 sm:py-12 lg:flex lg:items-start lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-white/65">
                {ctaSectionContent.eyebrow}
              </p>
              <h2 className="mt-4 text-[2rem] font-bold leading-tight sm:text-[2.35rem]">
                {ctaSectionContent.title[0]}
                <br />
                {ctaSectionContent.title[1]}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78 sm:text-lg">
                {ctaSectionContent.description}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/8 px-5 py-5">
                  <p className="text-sm font-semibold text-white/70">상담 방법</p>
                  <p className="mt-2 text-lg font-bold text-white">카카오톡 / 전화 상담</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    이름과 전화번호를 남기신 뒤 카카오톡 상담으로 이어서 문의하실 수 있습니다.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/8 px-5 py-5">
                  <p className="text-sm font-semibold text-white/70">대표번호</p>
                  <p className="mt-2 text-lg font-bold text-white">{ctaSectionContent.phoneNumber}</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    증상이 복잡해도 먼저 연락 주시면 내원 전 상담 흐름을 안내해드립니다.
                  </p>
                </div>
              </div>
            </div>

            <ConsultationRequestForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
