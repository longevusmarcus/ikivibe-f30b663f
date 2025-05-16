
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Lightbulb, Code, Users } from "lucide-react";
import { Button } from "./ui/button";
import { HoverEffect } from "./ui/hover-effect";
import { Link } from "react-router-dom";

export default function IkiVibeSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textToType = "We bring ideas to life in days—beyond the mind and into the world—by riding enduring trends that spark human connection and meaningful growth. Along the way, we accelerate bold concepts, guiding individuals and organizations toward their core purpose and helping them ship ultra fast.";
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

  const renderTextWithHighlight = (text: string) => {
    if (!text) return null;
    
    const parts = text.split(/(days)/);
    
    return parts.map((part, index) => 
      part === "days" 
        ? <span key={index} className="text-purple-500 font-semibold">{part}</span> 
        : <span key={index}>{part}</span>
    );
  };

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
      title: "Rocket Minds | For Partners",
      description: "We help individuals and organizations discover their core purpose—accelerating unique ideas and guiding them from conception to market in days. By pinpointing the intersection of passion, skill, mission, and vocation, we ensure purpose drives resilience, enabling both ideas and people to thrive.",
      icon: <Users className="h-8 w-8 text-studio-lightgray" />,
      link: "#ikivibe"
    }
  ];

  return (
    <section ref={sectionRef} id="ikivibe" className="py-24 sm:py-32 bg-studio-black/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">01</div>
          <h2 className="section-title">Rocket Labs</h2>
          <p className="section-subtitle">Igniting and preserving ideas, talents, and startups by moving fast—and with ikigai</p>
        </div>
        
        <div className="mb-16 max-w-3xl">
          <p ref={textRef} className="text-lg leading-relaxed mb-8">
            {renderTextWithHighlight(typedText)}
            {showCursor && <span className="typing-cursor">|</span>}
          </p>
        </div>
        
        <HoverEffect items={ikiVibeCards} />

        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="group border border-blue-500/40 bg-studio-black/50 hover:bg-blue-950/30 hover:border-blue-500/70 text-blue-400 hover:text-blue-300 transition-all duration-300 backdrop-blur-sm rounded-2xl"
            asChild
          >
            <Link to="/portfolio" className="flex items-center">
              <span>Explore Rocket</span>
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
