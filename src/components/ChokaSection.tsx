import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { HoverEffect } from "./ui/hover-effect";
import { Link } from "react-router-dom";

export default function ChokaSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textToType =
    "Health is the foundation of human evolution. Powered by Rocket Labs and produced by Chōka Labs, we create unique solutions that shape a truly health-first society.";
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
      { threshold: 0.3 },
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
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  };

  const chokaCards = [
    {
      title: "KNOWLEDGE",
      description:
        "Chōwa - Mini Courses To Unlock Your Epigenetic Potential: discover how to optimize your genetic blueprint, and align with your Ikigai to attract abundance.",
      link: "#choka",
    },
    {
      title: "R&D",
      description:
        "Chōka - We research and develop indulgent healthy solutions like Longevity Chocolate, each deliberately crafted to support cellular health and mental clarity.",
      link: "#choka",
    },
    {
      title: "EXPERIENCES",
      description:
        "Chōka House - We design one-of-a-kind spaces such as Chōka Cafe, where you can enjoy indulgent, supplement-packed drinks and connect with other health enthusiasts.",
      link: "#choka",
    },
  ];

  return (
    <section ref={sectionRef} id="choka" className="py-24 sm:py-32 bg-studio-black/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">02</div>
          <h2 className="section-title">Chōka Crew</h2>
          <p className="section-subtitle">
            Designing social rituals, spaces and experiences for lasting health and human optimization
          </p>
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
            <a href="https://choka.health" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <span>Explore Chōka</span>
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
