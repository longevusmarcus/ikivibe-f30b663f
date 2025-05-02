
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { HoverEffect } from "./ui/hover-effect";
import { useState, useEffect, useRef } from "react";

export default function ChokaSection() {
  const chokaCards = [
    {
      title: "KNOWLEDGE",
      description: "Chōwa - Mini Courses To Unlock Your Epigenetic Potential: discover how to optimize your genetic blueprint, and align with your Ikigai to attract abundance.",
      link: "#choka"
    },
    {
      title: "SUPPLEMENTS/SPACES",
      description: "Chōka - We design healthy solutions like Longevity Chocolate, and one-of-a-kind spaces such as Chōka Cafe, each deliberately crafted to support cellular health, mental clarity, and vibrant living.",
      link: "#choka"
    },
    {
      title: "CAREER",
      description: "Chōka Path - A digital platform that guides individuals to workplaces that prioritize health, balance, and long-term well-being.",
      link: "#choka"
    }
  ];
  
  const fullText = "We bring ideas to life in days—beyond the mind and into the world—by riding enduring trends that spark human connection and meaningful growth. Along the way, we accelerate bold concepts, guiding individuals and organizations toward their core purpose and helping them ship ultra fast.";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Effect for typing animation
  useEffect(() => {
    if (!isVisible) return;
    
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 20); // Fast typing speed (20ms per character)
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, isVisible]);
  
  // Effect for intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="choka" className="py-24 sm:py-32 bg-studio-black/80 backdrop-blur-sm relative z-10" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">02</div>
          <h2 className="section-title">Chōka Labs</h2>
          <p className="section-subtitle">Humans who thrive</p>
        </div>
        
        <div className="mb-16 max-w-3xl">
          <p className="text-lg leading-relaxed">
            {displayText}
            <span className={`inline-block w-0.5 h-5 bg-studio-lightgray ml-1 animate-pulse ${currentIndex >= fullText.length ? 'opacity-0' : 'opacity-100'}`}></span>
          </p>
        </div>
        
        <HoverEffect items={chokaCards} />

        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="group border border-purple-500/40 bg-studio-black/50 hover:bg-purple-950/30 hover:border-purple-500/70 text-purple-400 hover:text-purple-300 transition-all duration-300 backdrop-blur-sm rounded-2xl"
            asChild
          >
            <a href="https://x.com/chokalabs" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <span>Explore Chōka</span>
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
