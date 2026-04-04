import {
  CtaSection,
  DepartmentsSection,
  DoctorsSection,
  EventsSection,
  Footer,
  Header,
  HeroSection,
  InfoSection,
} from "@/components/home";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <HeroSection />
        <DepartmentsSection />
        <DoctorsSection />
        <EventsSection />
        <InfoSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
