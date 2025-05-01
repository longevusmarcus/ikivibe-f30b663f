
import React from "react";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";

export default function TextGradientSection() {
  return (
    <section id="text-gradient-section" className="min-h-screen bg-studio-black relative py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Our Mission</h2>
        
        <div className="min-h-[50vh] w-full relative">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto">
              <div className="text-xl md:text-2xl">
                <TextGradientScroll 
                  text="We build a world where ideas survive, humans thrive, and wealth endures—across generations." 
                  type="letter"
                  textOpacity="soft"
                  className="font-light"
                />
              </div>
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
