import { Suspense } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import {
  BlogSection,
  CtaSection,
  DoctorsSection,
  EventsSection,
  Footer,
  GallerySection,
  Header,
  HeroSection,
  InfoSection,
  IntroSection,
  MobileContactBar,
  ServiceGuideSection,
  TelemedicineSection,
} from "@/components/home";

const siteUrl = "https://anseong365.com";

export const metadata: Metadata = {
  title: "안성경희365한의원 | 안성 365일 진료 한의원",
  description:
    "안성 남파로 103, 365일 진료 한의원. 통증·교통사고·추나·보약·다이어트 상담을 안내합니다.",
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
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Script id="home-webpage-jsonld" type="application/ld+json">
        {JSON.stringify(homePageStructuredData)}
      </Script>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <GallerySection />
        <Suspense fallback={null}>
          <BlogSection limit={4} />
        </Suspense>
        <ServiceGuideSection />
        <DoctorsSection />
        <EventsSection />
        <TelemedicineSection />
        <InfoSection />
        <CtaSection />
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
