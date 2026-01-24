import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  name: string;
  description: string;
  url?: string;
  urls?: { label: string; url: string }[];
  category: "core" | "core-progress" | "mid";
}

const projects: Project[] = [
  // CORE Projects
  {
    name: "Chōka",
    description: "A healthtech startup building new ways for people to live longer, healthier lives.",
    url: "https://choka.health/",
    category: "core",
  },
  {
    name: "Naru",
    description:
      "A career OS for grad students and conscious professionals to discover their future professional identity and grow into it.",
    url: "trustnaru.com",
    category: "core",
  },
  {
    name: "MothershipX",
    description:
      "A market intelligence platform that helps builders ship useful apps, websites, and digital products—powered by real market demand.",
    url: "https://superlovable.dev",
    category: "core",
  },
  {
    name: "Batch/Spermaxxing",
    description:
      "A sperm health app that helps men understand their fertility, learn the value of their sperm, and explore donor opportunities.",
    urls: [
      { label: "batch.global", url: "batch.global" },
      { label: "spermaxxing.com", url: "spermaxxing.com" },
    ],
    category: "core",
  },

  // Mid Priority & Communities
  {
    name: "Zeno",
    description: "The AI YouTube Curator",
    url: "youzeno.com",
    category: "mid",
  },
  {
    name: "Neko",
    description: "First AI Feet Reader & Reflexologist",
    url: "aifootreader.com",
    category: "mid",
  },
  {
    name: "Chōwa",
    description: "Courses To Unlock Your Epigenetic Potential",
    url: "chowacourses.com",
    category: "mid",
  },
  {
    name: "360 Wealth Labs",
    description: "360 Wealth Discord Community",
    url: "https://discord.com/invite/MV8g7HTbCG",
    category: "mid",
  },
  {
    name: "Homocryptus",
    description: "Predictions, TA Ideas, TA Scripts, Web3 Advisory For Startups",
    url: "https://homocryptus.com",
    category: "mid",
  },
  {
    name: "Homolongevus",
    description: "Wellbeing Coach",
    url: "homolongevus.life",
    category: "mid",
  },
  {
    name: "HomoiDeus",
    description: "Mint Ideas, Predictions, Thoughts, Visions & Vibes",
    url: "https://zora.co/@homoideus",
    category: "mid",
  },
  {
    name: "FUCK MIRROR",
    description: "Clothing That Only Speaks In Reflection",
    url: "fuckmirror.com",
    category: "mid",
  },
];

interface PortfolioProjectsProps {
  category: "core" | "mid";
}

export const PortfolioProjects = ({ category }: PortfolioProjectsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();

  // Filter projects based on category
  const filteredProjects = projects.filter((project) => project.category === category);

  useEffect(() => {
    if (isMobile) {
      // Set up Intersection Observer for mobile scroll activation
      const observers = projectRefs.current.map((ref, idx) => {
        if (!ref) return null;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setHoveredIndex(idx);
              } else if (hoveredIndex === idx) {
                setHoveredIndex(null);
              }
            });
          },
          { threshold: 0.7 }, // Trigger when 70% of the element is visible
        );

        observer.observe(ref);
        return observer;
      });

      // Cleanup observers on unmount
      return () => {
        observers.forEach((observer, idx) => {
          if (observer && projectRefs.current[idx]) {
            observer.unobserve(projectRefs.current[idx]!);
          }
        });
      };
    }
  }, [isMobile, hoveredIndex]);

  return (
    <div className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-studio-gray/10 backdrop-blur-sm border border-studio-gray/20 hover:border-studio-gray/40 transition-all duration-300 relative"
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <div className="flex gap-2">
                  {project.url && (
                    <a
                      href={project.url.startsWith("http") ? project.url : `https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-studio-lightgray hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.urls &&
                    project.urls.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url.startsWith("http") ? link.url : `https://${link.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-studio-lightgray hover:text-white transition-colors"
                        title={link.label}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    ))}
                </div>
              </div>
              {isMobile ? (
                <p className="text-studio-lightgray">{project.description}</p>
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
                      {project.description}
                    </motion.p>
                  ) : (
                    <div className="h-[24px]" /> // Empty space placeholder for layout stability
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
