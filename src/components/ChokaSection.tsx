
import { Database, Globe, BookOpen } from 'lucide-react';

export default function ChokaSection() {
  return (
    <section id="choka" className="py-24 sm:py-32 bg-studio-black/70 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">02</div>
          <h2 className="section-title">Chōka Labs</h2>
          <p className="section-subtitle">Humans who thrive</p>
        </div>
        
        <div className="mb-16 max-w-3xl">
          <p className="text-lg leading-relaxed">
            Wellness is the foundation of human evolution. Powered by IkiVibe Collective and produced by Chōka Crew, 
            we offer unique solutions that accelerate holistic wellbeing and a health-first society.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-studio-black/30 p-8 border border-studio-gray/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
            <Database className="text-blue-400 mb-3" size={24} />
            <span className="text-studio-lightgray text-sm uppercase tracking-wider">Digital</span>
            <h3 className="text-2xl font-display font-bold mt-2 mb-4 text-blue-300">Chōka Solutions</h3>
            <p className="text-studio-lightgray">
              <strong>Example:</strong> Chōka Path - A digital platform that guides individuals to workplaces 
              that prioritize health, balance, and long-term well-being.
            </p>
          </div>
          
          <div className="bg-studio-black/30 p-8 border border-studio-gray/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
            <Globe className="text-purple-400 mb-3" size={24} />
            <span className="text-studio-lightgray text-sm uppercase tracking-wider">Design</span>
            <h3 className="text-2xl font-display font-bold mt-2 mb-4 text-purple-300">Chōka Solutions</h3>
            <p className="text-studio-lightgray">
              <strong>Example:</strong> Chōka - We design tangible products like Longevity Chocolate, and one-of-a-kind spaces 
              such as Chōka Cafe, each deliberately crafted to support cellular health, mental clarity, and vibrant living.
            </p>
          </div>
          
          <div className="bg-studio-black/30 p-8 border border-studio-gray/10 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-300">
            <BookOpen className="text-pink-400 mb-3" size={24} />
            <span className="text-studio-lightgray text-sm uppercase tracking-wider">Academy</span>
            <h3 className="text-2xl font-display font-bold mt-2 mb-4 text-pink-300">Chōka Solutions</h3>
            <p className="text-studio-lightgray">
              <strong>Example:</strong> Chōwa - Mini Courses To Unlock Your Epigenetic Potential
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
