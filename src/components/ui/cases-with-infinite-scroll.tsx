
"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Lock } from "lucide-react";

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
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6" key={index}>
                  <div className="flex flex-col rounded-md aspect-square bg-studio-gray/20 backdrop-blur-sm items-center justify-center p-6 hover:bg-studio-gray/30 transition-all duration-300">
                    <Lock className="w-8 h-8 mb-2 text-studio-lightgray/70" />
                    <span className="text-sm text-center text-studio-lightgray">Stealth Mode</span>
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
