
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-studio-black/80 backdrop-blur-sm pt-20 pb-10 border-t border-studio-gray/20 relative z-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="text-2xl font-display font-bold mb-4">IkiVibe</h4>
            <p className="text-studio-lightgray">
              Idea Hub + Vibe Studio + Multi-Dimensional Lab Focused On Ideas Humans Wealth Longevity
            </p>
          </div>
          
          <div>
            <h4 className="text-2xl font-display font-bold mb-4">Chōka Labs</h4>
            <ul className="space-y-2 text-studio-lightgray">
              <li><a href="#ikivibe" className="hover:text-studio-white transition-colors">IkiVibe Labs</a></li>
              <li><a href="#choka" className="hover:text-studio-white transition-colors">Chōka Labs</a></li>
              <li><a href="#wealth" className="hover:text-studio-white transition-colors">360 Wealth Labs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-display font-bold mb-4">Connect</h4>
            <p className="text-studio-lightgray mb-2">@longevusmarcus</p>
            <a 
              href="#contact" 
              className="inline-block border border-studio-white px-6 py-2 mt-2 hover:bg-studio-white hover:text-studio-black transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-studio-gray/20">
          <p className="text-studio-lightgray text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IkiVibe Chōka Labs. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center text-sm uppercase tracking-wider hover:text-studio-lightgray transition-colors"
          >
            Back to top <ArrowUp className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
