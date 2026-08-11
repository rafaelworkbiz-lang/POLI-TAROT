import Hero from "@/components/Hero";
import RitualesSection from "@/components/RitualesSection";
import SocialProof from "@/components/SocialProof";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FooterBanner from "@/components/FooterBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Hero />
      <RitualesSection />
      <SocialProof />
      <FooterBanner />
      <FloatingWhatsApp />
    </main>
  );
}
