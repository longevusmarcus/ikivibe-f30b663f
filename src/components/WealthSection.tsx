import { Card, CardContent } from "./ui/card";
import { Clock, Users, DollarSign, Heart, Brain, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export default function WealthSection() {
  const wealthTypes = [
    {
      title: "Time Wealth",
      description: "More time = more thoughts. More thoughts = more ideas. More ideas = more opportunities. Design a life that buys back your time— so your mind can roam, create, and lead. Time is your amplifier.",
      icon: <Clock className="h-8 w-8 text-studio-lightgray" />
    },
    {
      title: "Social Wealth",
      description: "More connection = more trust. More trust = more flow. More flow = more fulfillment. Curate your circle with intention— the right people multiply your energy. Social wealth is your emotional engine.",
      icon: <Users className="h-8 w-8 text-studio-lightgray" />
    },
    {
      title: "Financial Wealth",
      description: "More clarity = better choices. Better choices = aligned growth. Aligned growth = lasting freedom. Let your capital reflect your values— money should fund your mission, not distract from it. Wealth that serves, sustains.",
      icon: <DollarSign className="h-8 w-8 text-studio-lightgray" />
    },
    {
      title: "Physical Wealth",
      description: "Know your DNA = know your needs. Know your needs = better choices. Better choices = lasting vitality. Your body is not generic—neither should your health plan be. Fuel it with precision. Move with intention. Recover with respect. Longevity starts with knowledge.",
      icon: <Heart className="h-8 w-8 text-studio-lightgray" />
    },
    {
      title: "Mental Wealth",
      description: "More stillness = more clarity. More clarity = sharper decisions. Sharper decisions = a better future. Master your inner world before anything else. Train the mind. Expand awareness. Your mind is your first environment.",
      icon: <Brain className="h-8 w-8 text-studio-lightgray" />
    }
  ];

  // First three items for the top row
  const firstRowItems = wealthTypes.slice(0, 3);
  // Remaining two items for the second row
  const secondRowItems = wealthTypes.slice(3);

  return (
    <section id="wealth" className="py-24 sm:py-32 bg-studio-black/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">03</div>
          <h2 className="section-title">360 Wealth Labs</h2>
          <p className="section-subtitle">Wealth That Sustains</p>
        </div>
        
        <div className="mb-16 max-w-3xl">
          <p className="text-lg leading-relaxed mb-8">
            We dissect the essence of who we are, building communities that support this journey, while investing in visionary ideators 
            empowered by ikigai. Our goal is to cultivate 360-degree wealth—encompassing time, relationships, wellbeing, and financial prosperity—creating 
            a holistic approach to lasting abundance and legacy.
          </p>
        </div>
        
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {firstRowItems.map((wealth, index) => (
            <Card key={index} className="bg-studio-gray/10 border-none text-studio-white">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {wealth.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{wealth.title}</h3>
                <p className="text-sm text-studio-lightgray">
                  {wealth.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Second row - 2 cards filling the space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {secondRowItems.map((wealth, index) => (
            <Card key={index} className="bg-studio-gray/10 border-none text-studio-white">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {wealth.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{wealth.title}</h3>
                <p className="text-sm text-studio-lightgray">
                  {wealth.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="group border border-pink-500/40 bg-studio-black/50 hover:bg-pink-950/30 hover:border-pink-500/70 text-pink-400 hover:text-pink-300 transition-all duration-300 backdrop-blur-sm"
            asChild
          >
            <a href="https://x.com/360wealthlabs" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <span>Explore 360 Wealth</span>
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
