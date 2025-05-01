import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { EvervaultCard } from "./evervault-card";

export const HoverEffect = ({
  items,
  className,
  singleCard = false,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
    specialCard?: boolean;
  }[];
  className?: string;
  singleCard?: boolean;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      // Set up Intersection Observer for mobile scroll activation
      const observers = cardsRef.current.map((ref, idx) => {
        if (!ref || (items[idx] && items[idx].specialCard)) return null;

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
          { threshold: 0.7 } // Trigger when 70% of the element is visible
        );

        observer.observe(ref);
        return observer;
      });

      // Cleanup observers on unmount
      return () => {
        observers.forEach((observer, idx) => {
          if (observer && cardsRef.current[idx]) {
            observer.unobserve(cardsRef.current[idx]!);
          }
        });
      };
    }
  }, [isMobile, hoveredIndex, items]);

  // For single card mode, directly render just one card
  if (singleCard && items.length > 0) {
    const item = items[0];
    const isSpecialCard = item.specialCard;
    
    return (
      <div
        className="relative group block p-2 h-full w-full"
        onMouseEnter={() => !isMobile && !isSpecialCard && setHoveredIndex(0)}
        onMouseLeave={() => !isMobile && !isSpecialCard && setHoveredIndex(null)}
        ref={(el) => cardsRef.current[0] = el}
      >
        <AnimatePresence>
          {hoveredIndex === 0 && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <Card isActive={hoveredIndex === 0}>
          {item.icon && <div className="mb-4">{item.icon}</div>}
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const isSpecialCard = item.specialCard;
        
        if (isSpecialCard) {
          return (
            <div key={`item-${idx}`} className="relative group block p-2 h-full w-full">
              <div className="h-full w-full rounded-2xl overflow-hidden">
                <EvervaultCard text="360" />
              </div>
            </div>
          );
        }
        
        return (
          <div
            key={`item-${idx}`}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            ref={(el) => cardsRef.current[idx] = el}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card isActive={hoveredIndex === idx}>
              {item.icon && <div className="mb-4">{item.icon}</div>}
              <CardTitle isActive={hoveredIndex === idx}>{item.title}</CardTitle>
              <CardDescription isActive={hoveredIndex === idx}>{item.description}</CardDescription>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isActive = false,
}: {
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  isActive = true,
}: {
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
}) => {
  return (
    <h4 
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-4",
        isActive ? "opacity-100" : "opacity-40",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
  isActive = true,
}: {
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
}) => {
  return (
    <motion.p
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        height: isActive ? "auto" : 0,
        marginTop: isActive ? "2rem" : 0
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        "text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </motion.p>
  );
};
