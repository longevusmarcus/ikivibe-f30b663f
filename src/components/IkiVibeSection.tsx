
import { Card, CardContent } from "./ui/card";
import { Lightbulb, Code, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function IkiVibeSection() {
  const ikiVibeCards = [
    {
      title: "Ikideas",
      description: "Inspired by the concept of Ikigai, we explore emerging trends to uncover opportunities that shape the future and ideas that endure. In a world where AI reshapes execution, the value of iki-ideas is skyrocketing. When humans blend their Ikigai with a tech spirit, ideas become the currency of an AI-driven economy.",
      icon: <Lightbulb className="h-8 w-8 text-studio-lightgray" />
    },
    {
      title: "Vibe Coding",
      description: "We build simple, fun digital solutions that solve pain points, foster connection, enhance well-being, and drive personal growth. By seamlessly blending AI technology with thoughtful, human-centered design, we ensure our platforms evolve alongside humanity's ever-changing needs, delivering a bright new future for all.",
      icon: <Code className="h-8 w-8 text-studio-lightgray" />
    },
    {
      title: "For Partners",
      description: "We help individuals and organizations discover their core purpose—accelerating unique ideas and guiding them from conception to market. By pinpointing the intersection of passion, skill, mission, and vocation, we ensure purpose drives resilience, enabling both ideas and people to thrive.",
      icon: <Users className="h-8 w-8 text-studio-lightgray" />
    }
  ];

  return (
    <section id="ikivibe" className="py-24 sm:py-32 bg-studio-black/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">01</div>
          <h2 className="section-title">IkiVibe Labs</h2>
          <p className="section-subtitle">Ideas that survive</p>
        </div>
        
        <div className="mb-16 max-w-3xl">
          <p className="text-lg leading-relaxed mb-8">
            We bring ideas to life—beyond the mind and into the world—by riding enduring trends that spark human connection and meaningful growth. 
            Along the way, we accelerate bold concepts, guiding individuals and organizations toward their core purpose and helping them build what truly thrives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ikiVibeCards.map((card, index) => (
            <Card key={index} className="bg-studio-gray/10 border-none text-studio-white hover:border-studio-lightgray/40 transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{card.title}</h3>
                <p className="text-studio-lightgray">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="group border border-blue-500/40 bg-studio-black/50 hover:bg-blue-950/30 hover:border-blue-500/70 text-blue-400 hover:text-blue-300 transition-all duration-300 backdrop-blur-sm"
          >
            <span>Explore IkiVibe</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
