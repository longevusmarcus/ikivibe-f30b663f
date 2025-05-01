
import React from "react";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";

export default function TextGradientSection() {
  return (
    <section id="text-gradient-section" className="min-h-screen bg-studio-black relative py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Our Mission</h2>
        
        <div className="min-h-[50vh] w-full relative">
          <div className="w-full max-w-4xl">
            <div className="text-xl md:text-2xl">
              <TextGradientScroll 
                text="We are building a world where the best ideas don't just spark—they endure. Where human potential is not sacrificed in the pursuit of success, but ignited by it. Where wealth is not measured by short-term gain, but by its power to uplift communities, outlast generations, and fuel a legacy of purpose. We believe in a future where longevity isn't just physical—it's mental, emotional, intellectual, and financial. We're forging ecosystems where visionaries are not burned out by brilliance, but supported to build boldly, live fully, and pass on more than money: wisdom, health, and hope. This is the era of sustainable greatness. A new civilization built not on speed, but on stamina. Where ideas are protected, humans are empowered, and capital becomes a force for good. Forever." 
                type="letter"
                textOpacity="soft"
                className="font-light"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
