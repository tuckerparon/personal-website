import StickyNav from "@/components/StickyNav";
import TabbedHero from "@/components/TabbedHero";
import WorkTimeline from "@/components/BranchingTimeline";
import ConsultingSection from "@/components/ProjectCarousel";
import ResearchSection from "@/components/ResearchSection";
import BlogSection from "@/components/BlogSection";
import NowSection from "@/components/NowSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main className="lg:pl-52 min-h-screen pt-16 lg:pt-0">
        <div className="max-w-4xl px-6 lg:px-12 mx-auto">
          <TabbedHero />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <WorkTimeline />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <ConsultingSection />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <ResearchSection />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <BlogSection />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <NowSection />
          <div style={{ borderTop: "1px solid var(--border)" }} />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
