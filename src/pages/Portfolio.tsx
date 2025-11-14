
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CaseDemo } from "@/components/ui/demo";
import { PortfolioProjects } from "@/components/ui/portfolio-projects";
import { PortfolioMiniProjects } from "@/components/ui/portfolio-mini-projects";
import { InvestmentCarousel } from "@/components/ui/investment-carousel";
import { PreSeedCarousel } from "@/components/ui/pre-seed-carousel";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const rocketMindsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    
    if (hash === '#rocket-minds' && rocketMindsRef.current) {
      // Use a longer timeout to ensure DOM is fully rendered
      setTimeout(() => {
        rocketMindsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else if (!hash) {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-studio-black text-white">
      <Navbar />
      <div className="pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Active Portfolio</h1>
            <p className="text-xl max-w-3xl mb-12 text-studio-lightgray">
              Explore our vibes, our work, our investments.
            </p>
            
            <div className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Core</h2>
              <PortfolioProjects category="core" />
              
              <div className="mt-12">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-studio-lightgray">In Progress</h3>
                <PortfolioMiniProjects category="core-progress" />
              </div>
            </div>
            
            <div className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Directories, Communities & Fun Experiments</h2>
              <PortfolioProjects category="mid" />
            </div>
            
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Pre-Seed Investments</h2>
              <PreSeedCarousel />
            </div>
            
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Crypto Investments</h2>
              <InvestmentCarousel />
            </div>

            <div 
              id="rocket-minds" 
              ref={rocketMindsRef}
              className="mt-20 scroll-mt-24 relative"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Advisory, Equity & Support</h2>
              <p className="text-xl max-w-3xl mb-6 text-studio-lightgray">
                We help young talents and startups stay true to their purpose while building with a long-term vision. With hands-on support, we turn unique ideas into real products, often in just days, and guide them toward sustainable growth. By aligning passion, skill, mission, and market need, we help both visionary executers and pre-series A ventures grow with purpose and a mindset rooted in longevity.
              </p>
              
              <CaseDemo />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
