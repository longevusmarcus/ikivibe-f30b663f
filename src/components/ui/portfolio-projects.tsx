import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  description: string;
  url?: string;
}

const projects: Project[] = [
  {
    name: "Million Dollar Vibe",
    description: "A pixel-made, permanent directory of founder projects",
    url: "milliondollarvibe.ai"
  },
  {
    name: "Murmur",
    description: "Chatroulette Meets Mental Health + Empathy",
    url: "welovemurmur.com"
  },
  {
    name: "FUCK MIRROR",
    description: "Clothing That Only Speaks In Reflection",
    url: "fuckmirror.com"
  },
  {
    name: "Chōka",
    description: "RTD longevity chocolate",
    url: "chohkah.com"
  },
  {
    name: "Chōka Café",
    description: "Longevity café concept",
    url: "chohkah.com"
  },
  {
    name: "Chōka Path",
    description: "Find Your Wellness-Focused Workplace",
    url: "chokapath.com"
  },
  {
    name: "Chōwa",
    description: "Courses To Unlock Your Epigenetic Potential",
    url: "chowacourses.com"
  },
  {
    name: "360 Wealth Labs Community",
    description: "360 Wealth Discord Community",
    url: "https://discord.com/invite/MV8g7HTbCG"
  },
  {
    name: "Homocryptus",
    description: "Be Forever Crypto (Predictions / TA Ideas / TA Scripts / Web3 Advisory For Startups",
    url: "https://linktr.ee/homocryptus"
  },
  {
    name: "Homolongevus",
    description: "My Journey to Live Better and Longer",
    url: "https://designrr.page/?id=389570&token=2939920265&type=FP&h=3198"
  },
  {
    name: "HomoiDeus",
    description: "Mint Ideas, Predictions, Thoughts, Visions & Vibes",
    url: "https://zora.co/@homoideus"
  },
  {
    name: "ANote Music",
    description: "The main stage for music investments",
    url: "anotemusic.com"
  },
  {
    name: "Path",
    description: "Personalized career strategist"
  }
];

export const PortfolioProjects = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-studio-gray/10 backdrop-blur-sm border border-studio-gray/20 hover:border-studio-gray/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                {project.url && (
                  <a 
                    href={project.url.startsWith('http') ? project.url : `https://${project.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-studio-lightgray hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-studio-lightgray">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
