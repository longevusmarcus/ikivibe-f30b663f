
import React from "react";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { HoverEffect } from "@/components/ui/hover-effect";
import { Case } from "@/components/ui/cases-with-infinite-scroll";

function TextGradientScrollExample() {
  return (
    <div className="min-h-[200vh] w-full relative">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl mx-auto p-4 items-center">
          <div className="flex p-4 text-2xl pt-14 w-[700px] mx-auto h-[500px] flex flex-col items-start justify-end pointer-events-auto">
            <TextGradientScroll text="We bring ideas to life in days by tapping into lasting trends that spark human connection and meaningful growth. We help talents and startups build fast-&-slow, and execute with longevity in mind. Our priority: backing under-23 visionaries with raw talent and a clear sense of purpose." />
          </div>
        </div>
      </div>

      <div className="h-[200vh]" aria-hidden="true" />
    </div>
  )
}

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

function CaseDemo() {
  return (
    <div className="block">
      <Case />
    </div>
  );
}

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export { TextGradientScrollExample, CaseDemo }
