
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

interface Investment {
  name: string;
  description: string;
  url: string;
}

const investments: Investment[] = [
  {
    name: "Bittensor",
    description: "AI OpenSource Protocol, Blockchain Protocol",
    url: "https://bittensor.com"
  },
  {
    name: "Ethereum",
    description: "Blockchain Protocol",
    url: "https://ethereum.org"
  },
  {
    name: "BIO",
    description: "Blockchain Protocol",
    url: "https://www.bio.xyz/"
  }
];

export const InvestmentShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {investments.map((investment, index) => (
        <div 
          key={index}
          className="p-6 rounded-lg bg-studio-gray/10 backdrop-blur-sm border border-studio-gray/20 hover:border-studio-gray/40 transition-all duration-300 relative"
          onMouseEnter={() => !isMobile && setHoveredIndex(index)}
          onMouseLeave={() => !isMobile && setHoveredIndex(null)}
        >
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold mb-2">{investment.name}</h3>
            <a 
              href={investment.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-studio-lightgray hover:text-white transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          {isMobile ? (
            <p className="text-studio-lightgray">{investment.description}</p>
          ) : (
            <AnimatePresence>
              {hoveredIndex === index ? (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-studio-lightgray"
                >
                  {investment.description}
                </motion.p>
              ) : (
                <div className="h-[24px]" /> // Empty space placeholder for layout stability
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
};
