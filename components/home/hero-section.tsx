import { heroContent } from "@/components/home/content";

export default function HeroSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-teal-700 uppercase">
            {heroContent.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
            {heroContent.title[0]}
            <br />
            {heroContent.title[1]}
            <br />
            {heroContent.title[2]}
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#hours"
              className="rounded-full bg-sky-700 px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-sky-800"
            >
              {heroContent.primaryButton}
            </a>
            <a
              href="#departments"
              className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-center text-base font-semibold text-slate-700 transition-colors hover:border-sky-700 hover:text-sky-700"
            >
              {heroContent.secondaryButton}
            </a>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 sm:p-7">
          <div className="rounded-[1.5rem] bg-slate-50 p-5 sm:p-6">
            <p className="text-sm font-semibold text-teal-700">{heroContent.noticeTitle}</p>
            <div className="mt-6 space-y-4">
              {heroContent.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-sky-700 px-5 py-5 text-white">
              <p className="text-sm opacity-80">{heroContent.contactLabel}</p>
              <p className="mt-2 text-2xl font-bold sm:text-[1.75rem]">{heroContent.contactNumber}</p>
              <p className="mt-2 text-sm leading-6 opacity-90">
                {heroContent.contactDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
