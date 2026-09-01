import Reveal from "@/components/home/reveal";
import RenewalDoctorsCarousel from "@/components/renewal/doctors-carousel";
import { doctorsSectionContent } from "@/components/home/content";

export default function RenewalDoctorsSection() {
  return (
    <section id="doctors" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="mar-font text-xs tracking-[0.3em] text-[#959595]">MEDICAL TEAM</p>
            <h2 className="gb-font mt-4 break-keep text-[22px] font-bold leading-snug text-[#181818] sm:text-4xl">
              {doctorsSectionContent.title}
            </h2>
            <p className="mt-4 max-w-2xl break-keep text-[13px] leading-relaxed text-[#959595] sm:text-[15px]">
              {doctorsSectionContent.description}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12" delayMs={120}>
          <RenewalDoctorsCarousel />
        </Reveal>
      </div>
    </section>
  );
}
