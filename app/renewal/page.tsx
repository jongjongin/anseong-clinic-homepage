import RenewalHeroSection from "@/components/renewal/hero-section";
import TwoPanelSection from "@/components/renewal/two-panel-section";
import ProgramsSection from "@/components/renewal/programs-section";
import SteadySellerSection from "@/components/renewal/steady-seller-section";
import RenewalDoctorsSection from "@/components/renewal/doctors-section";
import SnsSection from "@/components/renewal/sns-section";
import InfoSplitSection from "@/components/renewal/info-split-section";
import RenewalCtaSection from "@/components/renewal/cta-section";

export default function RenewalPage() {
  return (
    <main className="flex w-full flex-col">
      <RenewalHeroSection />
      <TwoPanelSection />
      <ProgramsSection />
      <SteadySellerSection />
      <RenewalDoctorsSection />
      <SnsSection />
      <InfoSplitSection />
      <RenewalCtaSection />
    </main>
  );
}
