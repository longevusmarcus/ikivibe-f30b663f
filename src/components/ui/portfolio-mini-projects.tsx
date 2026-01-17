import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  name: string;
  description: string;
  url?: string;
  category: "core" | "core-progress" | "mid";
}

const projects: Project[] = [
  {
    name: "Hara",
    description: "Not your average spiritual app",
    url: "https://trusthara.com",
    category: "core-progress",
  },
  {
    name: "Years",
    description: "Not your average financial app",
    url: "https://years.money",
    category: "core-progress",
  },
  {
    name: "Project30",
    description: "Not your average life-designer app",
    url: "https://projectwealth2030.com/",
    category: "core-progress",
  },
];

interface PortfolioMiniProjectsProps {
  category: "core-progress";
}

export const PortfolioMiniProjects = ({ category }: PortfolioMiniProjectsProps) => {
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
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-studio-gray/10 backdrop-blur-sm border border-studio-gray/20 hover:border-studio-gray/40 transition-all duration-300 relative"
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                {project.url && (
                  <a
                    href={project.url.startsWith("http") ? project.url : `https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-studio-lightgray hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
              {isMobile ? (
                <p className="text-sm text-studio-lightgray">{project.description}</p>
              ) : (
                <AnimatePresence>
                  {hoveredIndex === index ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-studio-lightgray"
                    >
                      {project.description}
                    </motion.p>
                  ) : (
                    <div className="h-[20px]" /> // Empty space placeholder for layout stability
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
