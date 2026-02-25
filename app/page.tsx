import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import WorkTimeline from "@/components/BranchingTimeline";
import ConsultingSection from "@/components/ProjectCarousel";
import NowSection from "@/components/NowSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main className="lg:pl-52 min-h-screen pt-16 lg:pt-0">
        <div className="max-w-4xl px-6 lg:px-12 mx-auto">
          <HeroSection />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <WorkTimeline />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <ConsultingSection />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <NowSection />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <BlogSection />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
