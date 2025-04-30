
import { Card, CardContent } from "./ui/card";
import { Clock, Users, DollarSign, Heart, Brain } from "lucide-react";

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

  return (
    <section id="wealth" className="py-24 sm:py-32 bg-studio-black">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {wealthTypes.map((wealth, index) => (
            <Card key={index} className="bg-[#1A1F2C] border-none text-studio-white">
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
      </div>
    </section>
  );
}
