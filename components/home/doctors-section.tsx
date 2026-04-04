import SectionTitle from "@/components/home/section-title";
import { doctorsSectionContent } from "@/components/home/content";
import DoctorsCarousel from "@/components/home/doctors-carousel";
import Reveal from "@/components/home/reveal";

export default function DoctorsSection() {
  return (
    <section id="doctors" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <SectionTitle
            eyebrow={doctorsSectionContent.eyebrow}
            title={doctorsSectionContent.title}
            description={doctorsSectionContent.description}
          />
        </Reveal>
        <Reveal delayMs={70}>
          <DoctorsCarousel />
        </Reveal>
      </div>
    </section>
  );
}
