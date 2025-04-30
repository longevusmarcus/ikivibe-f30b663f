
import { Lightbulb, Brain, TrendingUp, Infinity, Hexagon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function LongevitySection() {
  return (
    <section id="longevity" className="py-24 sm:py-32 bg-studio-black/70 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-4">
        {/* Decorative elements */}
        <div className="absolute top-40 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        
        {/* Hexagon decorative element */}
        <div className="absolute -top-10 right-10 text-purple-500/20">
          <Hexagon size={120} className="rotate-12" strokeWidth={1} />
        </div>
        
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            The Longevity Ecosystem
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mb-12"></div>
          
          <p className="text-xl sm:text-2xl font-light mb-8 max-w-3xl">
            We don't just chase time—we <span className="text-purple-300">reshape</span> it.
          </p>
          
          <div className="mb-12 max-w-3xl">
            <p className="text-lg leading-relaxed mb-8">
              By fusing <span className="text-blue-300">Idea Incubation</span>, <span className="text-purple-300">Human Optimization</span>, and <span className="text-pink-300">Wealth Manifestation</span>, we're building a world where longevity isn't a trend—it's a culture.
            </p>
            
            <Card className="bg-studio-black/30 border-studio-gray/20 backdrop-blur-md mb-16">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed text-center font-display">
                  A future where:
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="group relative p-8 border-l-2 border-blue-400/40 transition-all duration-300 hover:border-blue-400 bg-studio-black/30 backdrop-blur-sm rounded-r-lg">
              <div className="absolute -left-5 top-6 bg-studio-black p-2 rounded-full border border-blue-400/40 group-hover:border-blue-400 transition-all duration-300">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-blue-300">Ideas</h3>
              <p className="text-studio-lightgray">
                don't fade—they evolve, staying sharp, relevant, and future-proof.
              </p>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-400/5 rounded-full blur-xl"></div>
            </div>
            
            <div className="group relative p-8 border-l-2 border-purple-400/40 transition-all duration-300 hover:border-purple-400 bg-studio-black/30 backdrop-blur-sm rounded-r-lg">
              <div className="absolute -left-5 top-6 bg-studio-black p-2 rounded-full border border-purple-400/40 group-hover:border-purple-400 transition-all duration-300">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-purple-300">Humans</h3>
              <p className="text-studio-lightgray">
                don't just survive—they ignite, fueled by purpose, wellness, and deep connection.
              </p>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-purple-400/5 rounded-full blur-xl"></div>
            </div>
            
            <div className="group relative p-8 border-l-2 border-pink-400/40 transition-all duration-300 hover:border-pink-400 bg-studio-black/30 backdrop-blur-sm rounded-r-lg">
              <div className="absolute -left-5 top-6 bg-studio-black p-2 rounded-full border border-pink-400/40 group-hover:border-pink-400 transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-pink-300">Wealth</h3>
              <p className="text-studio-lightgray">
                doesn't decay—it compounds meaning, aligned with values and built to outlive us.
              </p>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-pink-400/5 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <Infinity className="text-blue-400 mr-3" size={24} />
              <h3 className="text-2xl font-display font-bold text-gradient bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Adapt. Endure. Thrive.
              </h3>
            </div>
            
            <p className="text-studio-lightgray mb-12 bg-studio-black/30 backdrop-blur-sm p-6 rounded-lg border border-studio-gray/10">
              Longevity isn't linear—it's layered. It touches how we think, move, connect, build, and rest. 
              From the cells in our bodies to the stories we leave behind, longevity is a full-spectrum design for life.
            </p>
            
            <div className="text-center">
              <p className="text-xl font-display font-medium mb-4 text-gradient bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
                This is more than a vision.
              </p>
              <p className="text-studio-lightgray mb-4">
                It's a movement. A revolution. A new human blueprint.
              </p>
              <p className="text-lg font-display font-medium">
                Let's build the world where ideas keep pulsing, humans flourish, and legacy lives forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
