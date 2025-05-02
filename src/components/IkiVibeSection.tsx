
import { ExternalLink, Lightbulb, Code, Users } from "lucide-react";
import { Button } from "./ui/button";
import { HoverEffect } from "./ui/hover-effect";
import { useEffect, useState, useRef } from "react";

export default function IkiVibeSection() {
  const [displayText, setDisplayText] = useState("");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const fullText = "We bring ideas to life in days—beyond the mind and into the world—by riding enduring trends that spark human connection and meaningful growth. Along the way, we accelerate bold concepts, guiding individuals and organizations toward their core purpose and helping them ship ultra fast.";
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
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
  
  useEffect(() => {
    if (isInView) {
      let currentIndex = 0;
      setDisplayText("");
      
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayText((prev) => prev + fullText.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 15); // Fast typing speed
      
      return () => clearInterval(typingInterval);
    }
  }, [isInView]);

  const ikiVibeCards = [
    {
      title: "Ikideas",
      description: "Inspired by the concept of Ikigai, we explore emerging trends to uncover opportunities that shape the future and ideas that endure. In a world where AI reshapes execution, the value of iki-ideas is skyrocketing. When humans blend their Ikigai with a tech spirit, ideas become the currency of an AI-driven economy.",
      icon: <Lightbulb className="h-8 w-8 text-studio-lightgray" />,
      link: "#ikivibe"
    },
    {
      title: "Vibe Coding",
      description: "We build simple, fun digital solutions that solve pain points, foster connection, enhance well-being, and drive personal growth. By seamlessly blending AI technology with thoughtful, human-centered design, we ensure our platforms evolve alongside humanity's ever-changing needs, delivering a bright new future for all.",
      icon: <Code className="h-8 w-8 text-studio-lightgray" />,
      link: "#ikivibe"
    },
    {
      title: "For Partners",
      description: "We help individuals and organizations discover their core purpose—accelerating unique ideas and guiding them from conception to market in days. By pinpointing the intersection of passion, skill, mission, and vocation, we ensure purpose drives resilience, enabling both ideas and people to thrive.",
      icon: <Users className="h-8 w-8 text-studio-lightgray" />,
      link: "#ikivibe"
    }
  ];

  return (
    <section id="ikivibe" className="py-24 sm:py-32 bg-studio-black/80 backdrop-blur-sm relative z-10" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">01</div>
          <h2 className="section-title">IkiVibe Labs</h2>
          <p className="section-subtitle">Ideas that survive</p>
        </div>
        
        <div className="mb-16 max-w-3xl">
          <p className="text-lg leading-relaxed mb-8">
            <span>{displayText}</span>
            <span className={`inline-block w-1 h-5 bg-purple-500 ml-0.5 ${fullText.length === displayText.length ? 'animate-pulse' : 'animate-blink'}`}></span>
          </p>
        </div>
        
        <HoverEffect items={ikiVibeCards} />

        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="group border border-blue-500/40 bg-studio-black/50 hover:bg-blue-950/30 hover:border-blue-500/70 text-blue-400 hover:text-blue-300 transition-all duration-300 backdrop-blur-sm rounded-2xl"
            asChild
          >
            <a href="https://x.com/ikivibelabs" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <span>Explore IkiVibe</span>
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
