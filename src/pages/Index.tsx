
import { useEffect } from "react";
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
  // Add smooth scrolling for all anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 70,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

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
