
"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Logos for the companies
const companyLogos = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&auto=format", 
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop&auto=format",
];

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000); // Extended time to 3 seconds for better UX

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-studio-gray/20 backdrop-blur-sm items-center justify-center p-6 hover:bg-studio-gray/30 transition-all duration-300">
                    {index < companyLogos.length ? (
                      <img 
                        src={companyLogos[index % companyLogos.length]} 
                        alt={`Client logo ${index + 1}`} 
                        className="w-full h-full object-cover rounded" 
                      />
                    ) : (
                      <span className="text-sm text-studio-lightgray">Logo {index + 1}</span>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
