import SectionTitle from "@/components/home/section-title";
import { eventsSectionContent } from "@/components/home/content";

export default function EventsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow={eventsSectionContent.eyebrow}
          title={eventsSectionContent.title}
          description={eventsSectionContent.description}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {eventsSectionContent.items.map((event) => (
            <article
              key={event.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
            >
              <p className="text-sm font-semibold text-teal-700">{event.period}</p>
              <h3 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">{event.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">{event.description}</p>
              <a href="#" className="mt-6 inline-flex text-sm font-semibold text-sky-700">
                {eventsSectionContent.buttonLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
