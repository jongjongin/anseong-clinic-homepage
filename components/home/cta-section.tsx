import { ctaSectionContent } from "@/components/home/content";

export default function CtaSection() {
  return (
    <section id="consult" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] bg-sky-700 px-6 py-10 text-white sm:px-8 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.14em] uppercase text-white/75">
              {ctaSectionContent.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              {ctaSectionContent.title[0]}
              <br />
              {ctaSectionContent.title[1]}
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-white/85 sm:text-base sm:leading-8">
              {ctaSectionContent.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[260px]">
            <a
              href={`tel:${ctaSectionContent.phoneNumber}`}
              className="rounded-full bg-white px-6 py-3.5 text-center text-base font-semibold text-sky-800"
            >
              {ctaSectionContent.phoneButton}
            </a>
            <a
              href="#"
              className="rounded-full border border-white/40 px-6 py-3.5 text-center text-base font-semibold text-white"
            >
              {ctaSectionContent.kakaoButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
