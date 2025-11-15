import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { VulnerabilityDashboard } from "@/components/VulnerabilityDashboard";
import { Integration } from "@/components/Integration";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <div id="dashboard">
          <VulnerabilityDashboard />
        </div>
        <div id="integration">
          <Integration />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
