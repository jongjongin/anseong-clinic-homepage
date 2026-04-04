import SectionTitle from "@/components/home/section-title";
import { eventsSectionContent } from "@/components/home/content";

export default function EventsSection() {
  return (
    <section id="events" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow={eventsSectionContent.eyebrow}
          title={eventsSectionContent.title}
          description={eventsSectionContent.description}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {eventsSectionContent.items.map((event) => (
            <article
              key={event.title}
              className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-[#fbfcfc] p-6 sm:p-8"
            >
              <p className="text-sm font-semibold tracking-[0.1em] text-teal-700 uppercase">
                {event.category}
              </p>
              <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900">{event.title}</h3>
              <p className="mt-3 text-sm font-semibold text-slate-400">{event.period}</p>
              <p className="mt-5 flex-1 text-base leading-8 text-slate-600">{event.description}</p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#consult"
                  className="rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  이벤트 상담하기
                </a>
                <a href="#" className="inline-flex text-sm font-semibold text-slate-900">
                  {eventsSectionContent.buttonLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
