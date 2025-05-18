
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Lightbulb, Code, Users } from "lucide-react";
import { Button } from "./ui/button";
import { HoverEffect } from "./ui/hover-effect";
import { Link } from "react-router-dom";

export default function IkiVibeSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textToType = "We bring ideas to life in days, by tapping into lasting trends that spark human connection and meaningful growth. We help young talents and startups launch fast and grow with longevity in mind. Our priority: backing under-23 visionaries with raw talent and a clear sense of purpose.";
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
      title: "Rocket Research",
      description: "Inspired by the concept of Ikigai, we explore emerging trends to uncover opportunities that shape the future and ideas that endure. In a world where AI reshapes execution, the value of fast iki-ideas is skyrocketing. When humans blend their Ikigai with a tech spirit, ideas become the currency of an AI-driven economy.",
      icon: <Lightbulb className="h-8 w-8 text-studio-lightgray" />,
      link: "#ikivibe"
    },
    {
      title: "Rocket Vibes",
      description: "We build simple, fun and rapid MVPs that solve unmet pain points, spark connection, and provoke thought. By blending AI with human-centered design, we continuously test bold ideas that move in sync with humanity's evolving needs.",
      icon: <Code className="h-8 w-8 text-studio-lightgray" />,
      link: "#ikivibe"
    },
    {
      title: "Rocket Minds | For Partners",
      description: "We help young talents and startups stay true to their purpose while building with a long-term vision. With hands-on support, we turn unique ideas into real products—often in just days—and guide them toward sustainable growth. By aligning passion, skill, mission, and market need, we help both people and ventures grow with purpose and a mindset rooted in longevity.",
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
          <p className="section-subtitle">Igniting and preserving vibes, talents, and startups via fast, creative execution, guided by ikigai, built for longevity</p>
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
