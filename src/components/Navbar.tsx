
import { useState } from 'react';
import { Menu, Zap } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-studio-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2 group">
            <Zap className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              IkiVibe <span className="text-blue-500 mx-0.5">•</span> Chōka Labs
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="flex md:hidden items-center"
        >
          <Menu className="w-6 h-6" />
          <span className="ml-2 text-sm uppercase tracking-wider">Menu</span>
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#ikivibe" className="text-studio-lightgray hover:text-studio-white transition-colors">
            IkiVibe Labs
          </a>
          <a href="#choka" className="text-studio-lightgray hover:text-studio-white transition-colors">
            Chōka Labs
          </a>
          <a href="#wealth" className="text-studio-lightgray hover:text-studio-white transition-colors">
            360 Wealth Labs
          </a>
          <a href="#contact" className="text-studio-lightgray hover:text-studio-white transition-colors">
            Contact
          </a>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-studio-black z-40 animate-fade-in">
          <div className="container mx-auto px-4 pt-24 pb-8 flex flex-col items-start">
            <nav className="flex flex-col w-full space-y-6 text-2xl">
              <a 
                href="#ikivibe" 
                className="py-4 border-b border-studio-gray/20"
                onClick={() => setIsMenuOpen(false)}
              >
                IkiVibe Labs
              </a>
              <a 
                href="#choka" 
                className="py-4 border-b border-studio-gray/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Chōka Labs
              </a>
              <a 
                href="#wealth" 
                className="py-4 border-b border-studio-gray/20"
                onClick={() => setIsMenuOpen(false)}
              >
                360 Wealth Labs
              </a>
              <a 
                href="#contact" 
                className="py-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-4 text-sm uppercase tracking-wider flex items-center"
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
}
