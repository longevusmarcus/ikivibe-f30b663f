
import { ArrowDown } from 'lucide-react';

export default function Hero() {
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
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter animate-fade-in">
            Ideas • Humans • Legacies<br />
            <span className="text-studio-lightgray">build forever things</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-studio-lightgray max-w-2xl animate-slide-up">
            The future belongs to those who adapt, endure, and evolve. Our mission is to build a world where ideas survive, 
            humans thrive, and wealth endures—across generations.
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
