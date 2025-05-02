
"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Lock, ExternalLink } from "lucide-react";

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

  // Create an array of 15 items where every 5th item is ANote Music
  const carouselItems = Array.from({ length: 15 }).map((_, index) => {
    const isANoteMusic = index % 5 === 0;
    
    return (
      <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6" key={index}>
        <div className="flex flex-col rounded-md aspect-square bg-studio-gray/20 backdrop-blur-sm items-center justify-center p-6 hover:bg-studio-gray/30 transition-all duration-300">
          {isANoteMusic ? (
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-lg font-medium">ANote Music</h3>
                <a 
                  href="https://anotemusic.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-studio-lightgray hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm text-studio-lightgray mt-1">The main stage for music investments</p>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center">
              <Lock className="w-8 h-8 mb-2 text-studio-lightgray/70" />
              <span className="text-sm text-center text-studio-lightgray">Stealth Mode</span>
            </div>
          )}
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {carouselItems}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
