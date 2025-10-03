
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when location changes (unless there's a hash)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleRocketMindsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // If already on portfolio page, just scroll to the section
    if (location.pathname === '/portfolio') {
      const element = document.getElementById('rocket-minds');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to the portfolio page with the hash and force a page refresh
      // to ensure the useEffect in Portfolio.tsx runs with the hash
      window.location.href = '/portfolio#rocket-minds';
    }
  };

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
                IkiVibe Labs
              </span>
            </div>
            
            <nav className="flex flex-col w-full space-y-6 text-2xl">
              <Link 
                to="/" 
                className="py-4 border-b border-studio-gray/20 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/portfolio" 
                className="py-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <a 
                href="https://www.rocketminds.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Launchpad
              </a>
              <a 
                href="https://swissagent.me"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Agency
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
                  IkiVibe Labs
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
              <Link to="/" className="text-studio-lightgray hover:text-studio-white transition-colors">
                Home
              </Link>
              <Link to="/portfolio" className="text-studio-lightgray hover:text-studio-white transition-colors">
                Portfolio
              </Link>
              <a 
                href="https://www.rocketminds.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-studio-lightgray hover:text-studio-white transition-colors"
              >
                Launchpad
              </a>
              <a 
                href="https://swissagent.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-studio-lightgray hover:text-studio-white transition-colors"
              >
                Agency
              </a>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
