
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IkiVibeSection from "../components/IkiVibeSection";
import ChokaSection from "../components/ChokaSection";
import WealthSection from "../components/WealthSection";
import LongevitySection from "../components/LongevitySection";
import TextGradientSection from "../components/TextGradientSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ConnectedDots from "../components/ConnectedDots";

const Index = () => {
  return (
    <div className="min-h-screen bg-studio-black text-studio-white relative">
      <div className="fixed inset-0 z-0">
        <ConnectedDots />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TextGradientSection />
        <IkiVibeSection />
        <ChokaSection />
        <WealthSection />
        <LongevitySection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
