
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const fullText = "The future belongs to those who connect the dots. Our mission is to build a world where ideas survive, humans thrive, and wealth endures—across generations.";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 40); // Adjust speed of typing here
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const heroHeight = heroSection.offsetHeight;
      window.scrollTo({
        top: heroHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col space-y-6 max-w-4xl">
          <h1 className="font-display font-bold tracking-tighter animate-fade-in">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Ideas • Humans • Legacies</span><br />
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-studio-lightgray whitespace-nowrap">build forever things</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-studio-lightgray max-w-2xl">
            {displayText}
            <span className="inline-block w-0.5 h-5 bg-studio-lightgray ml-1 animate-pulse"></span>
          </p>
        </div>
        
        <div className="mt-12 animate-slide-up">
          <button 
            onClick={scrollToNext} 
            className="flex items-center text-studio-lightgray hover:text-studio-white transition-colors"
          >
            <span className="mr-2 text-sm uppercase tracking-wider">Explore</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Background gradient elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
