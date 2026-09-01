import type { Metadata } from "next";
import Script from "next/script";
import RenewalHeroSection from "@/components/renewal/hero-section";
import TwoPanelSection from "@/components/renewal/two-panel-section";
import ProgramsSection from "@/components/renewal/programs-section";
import SteadySellerSection from "@/components/renewal/steady-seller-section";
import RenewalDoctorsSection from "@/components/renewal/doctors-section";
import SnsSection from "@/components/renewal/sns-section";
import InfoSplitSection from "@/components/renewal/info-split-section";
import RenewalCtaSection from "@/components/renewal/cta-section";

const siteUrl = "https://anseong365.com";

export const metadata: Metadata = {
  title: "안성경희365한의원 | 안성 365일 진료 한의원",
  description:
    "안성 남파로 103, 365일 진료 한의원. 통증·교통사고·추나·보약·다이어트·미용 상담을 안내합니다.",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "안성경희365한의원 | 안성 365일 진료 한의원",
    description:
      "안성 남파로 103, 365일 진료 한의원. 통증·교통사고·추나·보약·다이어트 상담을 안내합니다.",
    url: siteUrl,
    type: "website",
  },
};

const homePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "안성경희365한의원",
  description: "안성 남파로 103에 위치한 365일 진료 한의원입니다.",
  inLanguage: "ko-KR",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "안성경희365한의원",
    url: siteUrl,
  },
  about: {
    "@type": "MedicalClinic",
    "@id": `${siteUrl}/#clinic`,
    name: "안성경희365한의원",
    telephone: "031-8057-0750",
    address: {
      "@type": "PostalAddress",
      streetAddress: "경기도 안성시 남파로 103 203호, 204호",
      addressLocality: "안성시",
      addressRegion: "경기도",
      addressCountry: "KR",
    },
  },
  mainEntity: [
    {
      "@type": "MedicalProcedure",
      name: "교통사고 후유증 진료",
    },
    {
      "@type": "MedicalProcedure",
      name: "약침·추나 치료",
    },
    {
      "@type": "MedicalProcedure",
      name: "다이어트 진료",
    },
    {
      "@type": "MedicalProcedure",
      name: "보약 상담",
    },
    {
      "@type": "MedicalProcedure",
      name: "점·쥐젖·편평사마귀 제거",
    },
  ],
};

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Script id="home-webpage-jsonld" type="application/ld+json">
        {JSON.stringify(homePageStructuredData)}
      </Script>
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
