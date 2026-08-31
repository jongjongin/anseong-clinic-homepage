import Reveal from "@/components/home/reveal";
import RenewalDoctorsCarousel from "@/components/renewal/doctors-carousel";
import { doctorsSectionContent } from "@/components/home/content";

export default function RenewalDoctorsSection() {
  return (
    <section id="doctors" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-2.5">
            <span className="block h-3 w-3 rotate-45 bg-teal-700" aria-hidden />
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-700">Medical Team</p>
          </div>
          <h2 className="mt-4 break-keep text-2xl font-bold leading-snug text-slate-900 sm:text-4xl">
            {doctorsSectionContent.title}
          </h2>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed text-slate-500 sm:text-base">
            {doctorsSectionContent.description}
          </p>
        </Reveal>

        <Reveal className="mt-12" delayMs={120}>
          <RenewalDoctorsCarousel />
        </Reveal>
      </div>
    </section>
  );
}
