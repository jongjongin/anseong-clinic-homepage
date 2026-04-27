import { Suspense } from "react";
import {
  BlogSection,
  CtaSection,
  DepartmentsSection,
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <GallerySection />
        <Suspense fallback={null}>
          <BlogSection limit={4} />
        </Suspense>
        <DepartmentsSection />
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
