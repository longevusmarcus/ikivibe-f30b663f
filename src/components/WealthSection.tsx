import { useState, useEffect, useRef } from "react";
import { Clock, Users, DollarSign, Heart, Brain, ExternalLink, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { HoverEffect } from "./ui/hover-effect";
import { EvervaultCard } from "./ui/evervault-card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

export default function WealthSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const textToType = "We dissect the essence of who we are, crafting solutions and communities that support a journey of intentional living. At the heart of our mission is investing in visionary ideators—especially those under 23—empowered by innate talent and guided by ikigai. Our goal is to cultivate 360-degree wealth: a holistic integration of time, relationships, wellbeing, and financial prosperity, forging the path toward lasting abundance and meaningful legacy.";
  const typingSpeed = 20; // milliseconds per character - faster typing speed
  const textRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Create the observer with appropriate threshold
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedTyping) {
          setHasStartedTyping(true);
          startTyping();
        }
      },
      { 
        threshold: isMobile ? 0.5 : 0.3, // Adjusted threshold for mobile
        rootMargin: isMobile ? "-10% 0px" : "0px", // Add margin for mobile to trigger earlier
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMobile, hasStartedTyping]);

  // For manual testing/triggering on mobile if needed
  useEffect(() => {
    const handleScroll = () => {
      if (isMobile && sectionRef.current && !hasStartedTyping) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        if (rect.top <= viewHeight * 0.7 && rect.bottom >= viewHeight * 0.3) {
          setHasStartedTyping(true);
          startTyping();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, hasStartedTyping]);

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

  const wealthCards = [
    {
      title: "Temporal Wealth",
      description: "More time = more thoughts. More thoughts = more ideas. More ideas = more opportunities. Design a life that buys back your time— so your mind can roam, create, and lead. Time is your amplifier.",
      icon: <Clock className="h-8 w-8 text-studio-lightgray" />,
      link: "#wealth"
    },
    {
      title: "Social Wealth",
      description: "More connection = more trust. More trust = more flow. More flow = more fulfillment. Curate your circle with intention— the right people multiply your energy. Social wealth is your emotional engine.",
      icon: <Users className="h-8 w-8 text-studio-lightgray" />,
      link: "#wealth"
    },
    {
      title: "Financial Wealth",
      description: "More clarity = better choices. Better choices = aligned growth. Aligned growth = lasting freedom. Let your capital reflect your values— money should fund your mission, not distract from it. Wealth that serves, sustains.",
      icon: <DollarSign className="h-8 w-8 text-studio-lightgray" />,
      link: "#wealth"
    },
    {
      title: "Physical Wealth",
      description: "Know your DNA = know your needs. Know your needs = better choices. Better choices = lasting vitality. Your body is not generic—neither should your health plan be. Fuel it with precision. Move with intention. Recover with respect. Longevity starts with knowledge.",
      icon: <Heart className="h-8 w-8 text-studio-lightgray" />,
      link: "#wealth"
    },
    {
      title: "Mental Wealth",
      description: "More stillness = more clarity. More clarity = sharper decisions. Sharper decisions = a better future. Master your inner world before anything else. Train the mind. Expand awareness. Your mind is your first environment.",
      icon: <Brain className="h-8 w-8 text-studio-lightgray" />,
      link: "#wealth"
    },
    {
      title: "",
      description: "",
      icon: <Zap className="h-8 w-8 text-studio-lightgray" />,
      link: "#wealth",
      specialCard: true
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="wealth" 
      className="py-24 sm:py-32 bg-studio-black/80 backdrop-blur-sm relative z-10"
      style={{ position: 'relative' }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">03</div>
          <h2 className="section-title">360 Labs</h2>
          <p className="section-subtitle">Building full-circle sustainable abundance and legacy: temporal, social, physical, mental, financial</p>
        </div>
        
        <div className="mb-16 max-w-3xl">
          <p 
            ref={textRef} 
            className="text-lg leading-relaxed mb-8"
          >
            {typedText}
            {showCursor && <span className="typing-cursor">|</span>}
          </p>
        </div>
        
        <HoverEffect items={wealthCards} />

        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="group border border-pink-500/40 bg-studio-black/50 hover:bg-pink-950/30 hover:border-pink-500/70 text-pink-400 hover:text-pink-300 transition-all duration-300 backdrop-blur-sm rounded-2xl"
            asChild
          >
            <Link to="/portfolio" className="flex items-center">
              <span>Explore 360 Wealth</span>
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
