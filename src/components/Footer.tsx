
import { ArrowUp, Sparkles, Twitter, Mail, ExternalLink } from 'lucide-react';
import { SplashCursor } from './ui/splash-cursor';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-20 pb-10 z-10 overflow-hidden">
      <SplashCursor 
        SIM_RESOLUTION={128}
        VELOCITY_DISSIPATION={1.5}
        CURL={20}
        COLOR_UPDATE_SPEED={3}
        SPLAT_RADIUS={0.15}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <div className="backdrop-blur-md bg-studio-black/30 p-6 border border-blue-500/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <h4 className="text-2xl font-display font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">About</h4>
            </div>
            <p className="text-studio-lightgray">
              Idea Hub + Vibe Studio + Multi-Dimensional Lab Focused On Ideas Humans Wealth Longevity
            </p>
          </div>
          
          <div className="backdrop-blur-md bg-studio-black/30 p-6 border border-purple-500/20 rounded-lg">
            <h4 className="text-2xl font-display font-bold bg-gradient-to-r from-purple-400 to-purple-300 text-transparent bg-clip-text mb-4">Labs</h4>
            <ul className="space-y-2 text-studio-lightgray">
              <li className="transition-colors">
                <a href="#ikivibe" className="hover:text-studio-white flex items-center">
                  <span className="mr-2">・</span> IkiVibe Labs
                </a>
              </li>
              <li className="transition-colors">
                <a href="#choka" className="hover:text-studio-white flex items-center">
                  <span className="mr-2">・</span> Chōka Labs
                </a>
              </li>
              <li className="transition-colors">
                <a href="#wealth" className="hover:text-studio-white flex items-center">
                  <span className="mr-2">・</span> 360 Wealth Labs
                </a>
              </li>
            </ul>
          </div>
          
          <div className="backdrop-blur-md bg-studio-black/30 p-6 border border-pink-500/20 rounded-lg">
            <h4 className="text-2xl font-display font-bold bg-gradient-to-r from-pink-400 to-pink-300 text-transparent bg-clip-text mb-4">Connect</h4>
            <div className="flex items-center mb-3">
              <Twitter className="w-4 h-4 text-studio-lightgray mr-2" />
              <p className="text-studio-lightgray">@longevusmarcus</p>
            </div>
            <div className="mt-4">
              <a 
                href="#contact" 
                className="group flex items-center justify-center space-x-2 border border-studio-white/40 px-6 py-2 hover:bg-studio-white hover:text-studio-black transition-colors rounded-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Us</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-studio-gray/20 backdrop-blur-md bg-studio-black/30">
          <div className="text-studio-lightgray text-sm mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} IkiVibe Chōka Labs. All rights reserved.</p>
            <p className="text-xs mt-1 opacity-80">Powered by MBH CHE-344.214.080</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm uppercase tracking-wider hover:text-studio-lightgray transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="ml-1 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
