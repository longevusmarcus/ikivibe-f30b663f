
import { useEffect, useRef } from "react";
import { SplashCursor } from "./ui/splash-cursor";
import { ArrowUpRight, Brain, Orbit, HeartPulse } from "lucide-react";

export default function LongevitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Initialization for animations when component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when the section becomes visible
            const items = document.querySelectorAll('.longevity-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in');
                item.classList.remove('opacity-0');
              }, index * 200); // Stagger the animations
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 sm:py-32 relative z-10 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <SplashCursor 
        SIM_RESOLUTION={256}
        VELOCITY_DISSIPATION={0.98}
        CURL={30}
        COLOR_UPDATE_SPEED={5}
        SPLAT_RADIUS={0.1}
        BACK_COLOR={{ r: 0, g: 0, b: 0.5 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
          The Longevity Ecosystem
        </h2>
        
        <p className="text-xl sm:text-2xl font-light mb-12 max-w-3xl bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">
          We don't just chase time—we reshape it.
        </p>
        
        <div className="mb-16 max-w-3xl backdrop-blur-md bg-studio-black/30 p-6 border border-studio-gray/20 rounded-lg">
          <p className="text-lg leading-relaxed mb-8">
            By fusing Idea Incubation, Human Optimization, and Wealth Manifestation, we're building a world where longevity isn't a trend—it's a culture.
          </p>
          
          <p className="text-lg leading-relaxed mb-8 text-studio-lightgray">
            A future where:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="longevity-item opacity-0 group backdrop-blur-md bg-studio-black/30 p-6 border border-blue-500/20 rounded-lg transition-all duration-300 hover:border-blue-500/60 hover:bg-studio-black/50 hover:translate-y-[-5px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">Ideas</h3>
              <Orbit className="w-6 h-6 text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-studio-lightgray group-hover:text-studio-white transition-colors">
              don't fade—they evolve, staying sharp, relevant, and future-proof.
            </p>
          </div>
          
          <div className="longevity-item opacity-0 group backdrop-blur-md bg-studio-black/30 p-6 border border-purple-500/20 rounded-lg transition-all duration-300 hover:border-purple-500/60 hover:bg-studio-black/50 hover:translate-y-[-5px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-purple-400 to-purple-300 text-transparent bg-clip-text">Humans</h3>
              <Brain className="w-6 h-6 text-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-studio-lightgray group-hover:text-studio-white transition-colors">
              don't just survive—they ignite, fueled by purpose, wellness, and deep connection.
            </p>
          </div>
          
          <div className="longevity-item opacity-0 group backdrop-blur-md bg-studio-black/30 p-6 border border-pink-500/20 rounded-lg transition-all duration-300 hover:border-pink-500/60 hover:bg-studio-black/50 hover:translate-y-[-5px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-pink-400 to-pink-300 text-transparent bg-clip-text">Wealth</h3>
              <HeartPulse className="w-6 h-6 text-pink-500 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-studio-lightgray group-hover:text-studio-white transition-colors">
              doesn't decay—it compounds meaning, aligned with values and built to outlive us.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl backdrop-blur-md bg-studio-black/30 p-6 border border-studio-gray/20 rounded-lg">
          <h3 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Adapt. Endure. Thrive.</h3>
          <p className="text-studio-lightgray mb-8">
            Longevity isn't linear—it's layered. It touches how we think, move, connect, build, and rest. From the cells in our bodies to the stories we leave behind, longevity is a full-spectrum design for life.
          </p>
          
          <p className="text-xl font-display font-medium mb-2 text-white">
            This is more than a vision.
          </p>
          <p className="text-studio-lightgray mb-8">
            It's a movement. A revolution. A new human blueprint.
            Let's build the world where ideas keep pulsing, humans flourish, and legacy lives forever.
          </p>
          
          <a href="#contact" className="group inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
            <span>Join the movement</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
