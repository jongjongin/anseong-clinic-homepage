import { introSectionContent } from "@/components/home/content";

export default function IntroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="rounded-[2rem] border border-slate-200 bg-[#fbfcfc] px-6 py-10 sm:px-10 sm:py-12">
          <p className="text-sm font-semibold tracking-[0.18em] text-teal-700 uppercase">
            {introSectionContent.eyebrow}
          </p>
          <div className="mt-6 space-y-5 text-lg leading-9 text-slate-700 sm:text-[1.35rem] sm:leading-10">
            {introSectionContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
