
import { ArrowUp, Globe, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-studio-black/70 backdrop-blur-md pt-20 pb-10 border-t border-studio-gray/20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">IkiVibe</h4>
            <p className="text-studio-lightgray">
              Idea Hub + Vibe Studio + Multi-Dimensional Lab Focused On Ideas Humans Wealth Longevity
            </p>
          </div>
          
          <div>
            <h4 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Chōka Labs</h4>
            <ul className="space-y-2 text-studio-lightgray">
              <li><a href="#ikivibe" className="hover:text-blue-300 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span> IkiVibe Labs</a></li>
              <li><a href="#choka" className="hover:text-purple-300 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"></span> Chōka Labs</a></li>
              <li><a href="#wealth" className="hover:text-pink-300 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-pink-400 rounded-full"></span> 360 Wealth Labs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">Connect</h4>
            <div className="flex items-center gap-2 text-studio-lightgray mb-2">
              <Globe size={14} />
              <p>@longevusmarcus</p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 border border-[#8B5CF6]/50 px-6 py-2 mt-2 bg-studio-black/50 hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6] transition-all duration-300"
            >
              <Mail size={14} />
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-studio-gray/10">
          <p className="text-studio-lightgray text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IkiVibe Chōka Labs. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center text-sm uppercase tracking-wider hover:text-purple-300 transition-colors group"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
