
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function ChokaSection() {
  return (
    <section id="choka" className="py-24 sm:py-32 bg-studio-black/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">02</div>
          <h2 className="section-title">Chōka Labs</h2>
          <p className="section-subtitle">Humans who thrive</p>
        </div>
        
        <div className="mb-16 max-w-3xl">
          <p className="text-lg leading-relaxed">
            Wellness is the foundation of human evolution. Powered by IkiVibe Collective and produced by Chōka Crew, 
            we offer unique solutions that accelerate holistic wellbeing and a health-first society.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-studio-gray/10 p-8">
            <span className="text-studio-lightgray text-sm uppercase tracking-wider">Jobs</span>
            <h3 className="text-2xl font-display font-bold mt-2 mb-4">Chōka Solutions</h3>
            <p className="text-studio-lightgray">
              Chōka Path - A digital platform that guides individuals to workplaces 
              that prioritize health, balance, and long-term well-being.
            </p>
          </div>
          
          <div className="bg-studio-gray/10 p-8">
            <span className="text-studio-lightgray text-sm uppercase tracking-wider">Supplements</span>
            <h3 className="text-2xl font-display font-bold mt-2 mb-4">Chōka Solutions</h3>
            <p className="text-studio-lightgray">
              Chōka - We design tangible products like Longevity Chocolate, and one-of-a-kind spaces 
              such as Chōka Cafe, each deliberately crafted to support cellular health, mental clarity, and vibrant living.
            </p>
          </div>
          
          <div className="bg-studio-gray/10 p-8">
            <span className="text-studio-lightgray text-sm uppercase tracking-wider">Academy</span>
            <h3 className="text-2xl font-display font-bold mt-2 mb-4">Chōka Solutions</h3>
            <p className="text-studio-lightgray">
              Chōwa - Mini Courses To Unlock Your Epigenetic Potential
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="group border border-purple-500/40 bg-studio-black/50 hover:bg-purple-950/30 hover:border-purple-500/70 text-purple-400 hover:text-purple-300 transition-all duration-300 backdrop-blur-sm"
          >
            <span>Explore Chōka</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
