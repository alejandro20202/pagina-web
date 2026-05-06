import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <Navbar />
      
      <main className="space-y-20 pb-20">
        <Hero />
        
        <FadeIn delay={0.2}>
          <DashboardPreview />
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <TrustBar />
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <Features />
        </FadeIn>
        
        {/* Footer Placeholder */}
        <footer className="py-20 text-center text-white/20 text-sm">
          © 2026 Cryptox Antigravity. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
