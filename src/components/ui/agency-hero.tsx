import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { ChevronRight } from 'lucide-react';

const TypingText = () => {
  const words = ['consumers', 'clients', 'talents'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isTyping, currentWordIndex]);

  return (
    <span className="text-studio-lightgray block font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
      with {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const logos = ['w-16', 'w-20', 'w-24', 'w-20', 'w-16', 'w-24', 'w-20', 'w-16'];

export function AgencyHero() {
  return (
    <main className="overflow-x-hidden">
      <section>
        <div className="relative pb-16 sm:py-20 md:py-24 md:pb-32 lg:pb-36">
          <div className="absolute inset-1 aspect-[4/5] sm:aspect-[3/2] md:aspect-video overflow-hidden rounded-2xl sm:rounded-3xl border border-white/5 lg:rounded-[3rem]">
            <div className="size-full bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-75">
              <div className="size-full bg-[url('/lovable-uploads/6958431e-df64-4750-a915-849b26f45cbd.png')] bg-cover bg-center opacity-20" />
            </div>
          </div>
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <h1 className="mt-4 sm:mt-6 md:mt-8 max-w-4xl text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight">
                <span className="block sm:whitespace-nowrap">Connecting businesses</span>
                <TypingText />
              </h1>
              <p className="mt-6 sm:mt-8 max-w-2xl text-balance text-base sm:text-lg text-studio-lightgray">
                Your trusted Swiss business intermediary, providing expert agency and brokerage services
                that bridge the gap between companies and their target markets.
              </p>

              <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="h-12 rounded-full pl-5 pr-3 text-base">
                  <a href="#about">
                    <span className="text-nowrap">Start Now</span>
                    <ChevronRight className="ml-1" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost" className="h-12 rounded-full px-5 text-base hover:bg-white/5">
                  <a href="#services">
                    <span className="text-nowrap">Learn More</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-2">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="flex items-center justify-center md:max-w-44 md:border-r md:border-border md:pr-6 mb-4 md:mb-0">
              <p className="text-center md:text-end text-sm text-studio-lightgray">
                Trusted by leading companies and early stage startups
              </p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                {logos.map((w, i) => (
                  <div key={i} className="flex">
                    <div className={`mx-auto h-5 ${w} bg-white/10 rounded opacity-60 flex items-center justify-center`}>
                      <span className="text-xs text-studio-lightgray font-mono">stealth</span>
                    </div>
                  </div>
                ))}
              </InfiniteSlider>

              <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20" />
              <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20" />
              <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
              <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
