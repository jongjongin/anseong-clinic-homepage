import { reviewsSectionContent } from "@/components/home/content";
import Reveal from "@/components/home/reveal";
import SectionTitle from "@/components/home/section-title";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-4">
            <SectionTitle
              eyebrow={reviewsSectionContent.eyebrow}
              title={reviewsSectionContent.title}
              description={reviewsSectionContent.description}
            />
            <div className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-500">
              {reviewsSectionContent.statusBadge}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviewsSectionContent.cards.map((card, index) => (
            <Reveal key={card.title} delayMs={index * 60}>
              <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fbfcfc] p-6 opacity-90 sm:p-8">
                <p className="text-sm font-semibold tracking-[0.1em] text-teal-700 uppercase">
                  Review
                </p>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">{card.title}</h3>
                <div className="mt-5 rounded-[1.5rem] bg-white/70 p-5 backdrop-blur-md">
                  <p className="blur-[4px] select-none text-base leading-8 text-slate-500">
                    {card.excerpt}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <div className="mt-8 rounded-[1.8rem] border border-slate-200 bg-slate-50 px-6 py-6 sm:px-7">
            <p className="text-sm font-semibold text-teal-700">{reviewsSectionContent.loginTitle}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {reviewsSectionContent.loginDescription}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/reviews"
                className="inline-flex rounded-full border border-[#1ec800] bg-[#03c75a] px-6 py-3 text-center text-sm font-semibold !text-white transition-colors hover:bg-[#02b351]"
                style={{ color: "#ffffff" }}
              >
                {reviewsSectionContent.loginButton}
              </a>
              <p className="text-sm leading-6 text-slate-500">{reviewsSectionContent.loginNotice}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
