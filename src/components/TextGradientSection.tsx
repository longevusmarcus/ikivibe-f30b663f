import React, { useEffect, useRef, useState } from "react";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";

export default function TextGradientSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }, // Trigger when 20% of the element is visible
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
    <section
      id="text-gradient-section"
      ref={sectionRef}
      className="min-h-screen bg-studio-black relative py-24 transition-opacity duration-1000"
    >
      <div
        className={`container mx-auto px-4 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="section-title mb-12">Read Me</h2>

        <div className="min-h-[50vh] w-full relative">
          <div className="w-full max-w-4xl">
            <div
              className={`text-xl md:text-2xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <TextGradientScroll
                text="IkiVibe is a family of Labs built for optimal living, blending rapid experimentation with long-term thinking to unlock human potential. Rooted in Ikigai and elevated vibes, we bring ideas to life through ventures that align meaning, momentum, and wellbeing. We are building a world where ideas don't just spark, they endure. Where human potential is not sacrificed in the pursuit of success, but ignited by it. Where wealth is not measured by short-term gain, but by its power to uplift communities, outlast generations, and fuel a legacy of purpose. We believe in a future where longevity isn't just physical it's mental, emotional, intellectual, and financial. We're forging ecosystems where visionaries are not burned out by brilliance, but supported to build boldly, live fully, and pass on more than money: wisdom, health, and hope. This is the era of sustainable greatness. A new civilization built not on primitive prompts, but on consciousness. Where more ideas turn into reality, more humans feel empowered, and more capital becomes a force for good. Forever."
                type="letter"
                textOpacity="soft"
                className="font-light"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient elements with animation */}
      <div
        className={`absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      ></div>
      <div
        className={`absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      ></div>
    </section>
  );
}
