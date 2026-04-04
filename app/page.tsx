import {
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
  ReviewsSection,
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
        <DepartmentsSection />
        <DoctorsSection />
        <EventsSection />
        <ReviewsSection />
        <TelemedicineSection />
        <InfoSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
