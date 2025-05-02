
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Full screen overlay when menu is open */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-studio-black/90 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4 pt-24 pb-8 flex flex-col items-start">
            {/* Logo in mobile menu */}
            <div className="flex items-center mb-8">
              <div className="relative w-5 h-5 mr-3">
                <div className="absolute w-1.5 h-1.5 bg-white/80 rounded-full top-0 left-0"></div>
                <div className="absolute w-1.5 h-1.5 bg-white/80 rounded-full bottom-0 right-0"></div>
                <div className="absolute w-1 h-1 bg-white/80 rounded-full top-1/2 right-0 -translate-y-1/2"></div>
                <div className="absolute w-1 h-1 bg-white/80 rounded-full bottom-0 left-1/3"></div>
                <div className="absolute inset-0 before:absolute before:w-full before:h-full before:border-t before:border-white/40 before:rotate-[30deg] before:origin-top-left"></div>
                <div className="absolute inset-0 before:absolute before:w-[70%] before:h-[70%] before:border-r before:border-white/30 before:rotate-[15deg] before:origin-top-right"></div>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">
                IkiVibe Chōka Labs
              </span>
            </div>
            
            <nav className="flex flex-col w-full space-y-6 text-2xl">
              <a 
                href="#ikivibe" 
                className="py-4 border-b border-studio-gray/20 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                IkiVibe Labs
              </a>
              <a 
                href="#choka" 
                className="py-4 border-b border-studio-gray/20 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Chōka Labs
              </a>
              <a 
                href="#wealth" 
                className="py-4 border-b border-studio-gray/20 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                360 Wealth Labs
              </a>
              <Link 
                to="/portfolio" 
                className="py-4 border-b border-studio-gray/20 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <a 
                href="#contact" 
                className="py-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-4 text-white p-2"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Only show header when menu is not open */}
      {!isMenuOpen && (
        <header className="fixed top-0 left-0 w-full z-50 bg-studio-black/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative w-5 h-5">
                  <div className="absolute w-1.5 h-1.5 bg-white/80 rounded-full top-0 left-0 group-hover:bg-white transition-colors"></div>
                  <div className="absolute w-1.5 h-1.5 bg-white/80 rounded-full bottom-0 right-0 group-hover:bg-white transition-colors"></div>
                  <div className="absolute w-1 h-1 bg-white/80 rounded-full top-1/2 right-0 -translate-y-1/2 group-hover:bg-white transition-colors"></div>
                  <div className="absolute w-1 h-1 bg-white/80 rounded-full bottom-0 left-1/3 group-hover:bg-white transition-colors"></div>
                  <div className="absolute inset-0 before:absolute before:w-full before:h-full before:border-t before:border-white/40 before:rotate-[30deg] before:origin-top-left"></div>
                  <div className="absolute inset-0 before:absolute before:w-[70%] before:h-[70%] before:border-r before:border-white/30 before:rotate-[15deg] before:origin-top-right"></div>
                </div>
                <span className="text-xl md:text-2xl font-display font-bold tracking-tight">
                  IkiVibe Chōka Labs
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="flex md:hidden items-center z-50"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-white" />
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
              <Link to="/portfolio" className="text-studio-lightgray hover:text-studio-white transition-colors">
                Portfolio
              </Link>
              <a href="#contact" className="text-studio-lightgray hover:text-studio-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
