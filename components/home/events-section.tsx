import SectionTitle from "@/components/home/section-title";
import { eventsSectionContent } from "@/components/home/content";
import EventsCarousel from "@/components/home/events-carousel";
import Reveal from "@/components/home/reveal";

export default function EventsSection() {
  return (
    <section id="events" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <SectionTitle
            eyebrow={eventsSectionContent.eyebrow}
            title={eventsSectionContent.title}
            description={eventsSectionContent.description}
          />
        </Reveal>

        <Reveal delayMs={90}>
          <EventsCarousel />
        </Reveal>
      </div>
    </section>
  );
}
