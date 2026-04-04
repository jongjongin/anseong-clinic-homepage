import { ctaSectionContent } from "@/components/home/content";

export default function CtaSection() {
  return (
    <section id="consult" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="rounded-[2.25rem] border border-slate-200 bg-slate-900 px-6 py-10 text-white sm:px-8 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
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
          </div>

          <div className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[260px]">
            <a
              href={`tel:${ctaSectionContent.phoneNumber}`}
              className="rounded-full bg-white px-6 py-4 text-center text-base font-semibold text-slate-900"
            >
              {ctaSectionContent.phoneButton}
            </a>
            <a
              href="#"
              className="rounded-full border border-white/25 px-6 py-4 text-center text-base font-semibold text-white"
            >
              {ctaSectionContent.kakaoButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
