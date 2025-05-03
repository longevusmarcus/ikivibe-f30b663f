
"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";

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
  }
];

export function InvestmentCarousel() {
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
    }, 3000); // Match the timing used in Case component

    return () => clearTimeout(timer);
  }, [api, current]);

  const carouselItems = investments.map((investment, index) => (
    <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6" key={index}>
      <div className="flex flex-col rounded-md aspect-square bg-studio-gray/20 backdrop-blur-sm items-center justify-center p-6 hover:bg-studio-gray/30 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-lg font-medium">{investment.name}</h3>
            <a 
              href={investment.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-studio-lightgray hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <span className="text-sm text-center text-studio-lightgray mt-2">{investment.description}</span>
        </div>
      </div>
    </CarouselItem>
  ));

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
