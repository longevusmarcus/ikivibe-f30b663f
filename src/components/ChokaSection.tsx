
import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { HoverEffect } from "./ui/hover-effect";

export default function ChokaSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textToType = "Wellness is the foundation of human evolution. Powered by IkiVibe Collective and produced by Chōka Crew, we offer unique solutions that accelerate holistic wellbeing and a health-first society.";
  const typingSpeed = 30; // milliseconds per character
  const textRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTyping();
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

  const startTyping = () => {
    setTypedText("");
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  };

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

  return (
    <section ref={sectionRef} id="choka" className="py-24 sm:py-32 bg-studio-black/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">02</div>
          <h2 className="section-title">Chōka Labs</h2>
          <p className="section-subtitle">Humans who thrive</p>
        </div>
        
        <div className="mb-16 max-w-3xl">
          <p ref={textRef} className="text-lg leading-relaxed">
            {typedText}
            {showCursor && <span className="typing-cursor">|</span>}
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
