import { useEffect, useRef, useState } from "react";
import { SplashCursor } from "./ui/splash-cursor";
import { ArrowUpRight, Book, BookOpen, BookText, Bookmark, BookMarked } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function LongevitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePage, setActivePage] = useState(0);
  const totalPages = 3;

  // Initialization for animations when component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when the section becomes visible
            const items = document.querySelectorAll('.book-page');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in');
                item.classList.remove('opacity-0');
              }, index * 300); // Stagger the animations
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const turnPage = (direction: 'next' | 'prev') => {
    if (direction === 'next' && activePage < totalPages - 1) {
      setActivePage(activePage + 1);
    } else if (direction === 'prev' && activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="longevity"
      className="py-24 sm:py-32 relative z-10 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <SplashCursor 
        SIM_RESOLUTION={256}
        VELOCITY_DISSIPATION={0.98}
        CURL={5}
        COLOR_UPDATE_SPEED={2}
        SPLAT_RADIUS={0.1}
        BACK_COLOR={{ r: 0, g: 0, b: 0.25 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Book Title */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center space-x-2 mb-2">
            <BookMarked className="w-6 h-6 text-blue-400" />
            <p className="text-sm font-mono tracking-widest text-blue-400">MANIFESTO 2025.04.30</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
            The Longevity Ecosystem
          </h2>
          
          <p className="text-xl sm:text-2xl font-light mb-6 max-w-3xl text-center text-studio-lightgray">
            We don't just chase time—we reshape it.
          </p>
          
          <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>
        
        {/* Book Container */}
        <div className="w-full max-w-5xl mx-auto perspective-1000">
          <div className="book-wrapper relative flex justify-center">
            {/* Book Cover & Pages */}
            <div className="relative w-full max-w-4xl">
              {/* Book Cover - Always visible */}
              <Card className="book-cover border-0 relative rounded-lg overflow-hidden shadow-2xl shadow-blue-500/20 backdrop-blur-lg bg-studio-black/40">
                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-lg pointer-events-none"></div>
                <div className="absolute left-0 inset-y-0 w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
                
                <CardContent className="p-8 md:p-12">
                  {/* Page Content based on active page */}
                  <div className="grid grid-cols-12 gap-4 min-h-[500px]">
                    {/* Page Navigation - Small Sidebar */}
                    <div className="col-span-1 border-r border-studio-gray/20 pr-4 flex flex-col justify-between items-center">
                      <div className="space-y-6">
                        <button 
                          onClick={() => setActivePage(0)}
                          className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${activePage === 0 ? 'bg-blue-500 text-white' : 'text-studio-lightgray hover:text-white'}`}
                        >
                          1
                        </button>
                        <button 
                          onClick={() => setActivePage(1)}
                          className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${activePage === 1 ? 'bg-purple-500 text-white' : 'text-studio-lightgray hover:text-white'}`}
                        >
                          2
                        </button>
                        <button 
                          onClick={() => setActivePage(2)}
                          className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${activePage === 2 ? 'bg-pink-500 text-white' : 'text-studio-lightgray hover:text-white'}`}
                        >
                          3
                        </button>
                      </div>
                      <div className="font-mono text-xs text-studio-lightgray rotate-90 whitespace-nowrap mt-10 origin-left">
                        MANIFESTO 2025
                      </div>
                    </div>
                    
                    {/* Main Content Area */}
                    <div className="col-span-11 pl-6 relative">
                      {/* Use display property instead of opacity to completely hide inactive pages */}
                      {/* Page 1 */}
                      <div className={`book-page transition-all duration-700 ease-in-out ${activePage === 0 ? 'block' : 'hidden'}`}>
                        <div className="flex items-center mb-6">
                          <BookOpen className="w-5 h-5 text-blue-400 mr-3" />
                          <h3 className="text-xl font-display font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">Manifesto Introduction</h3>
                        </div>
                        
                        <p className="text-lg leading-relaxed mb-8">
                          By fusing <span className="text-blue-400">Idea Incubation</span>, <span className="text-purple-400">Human Optimization</span>, and <span className="text-pink-400">Wealth Manifestation</span>, we're building a world where longevity isn't a trend—it's a culture.
                        </p>
                        
                        <h4 className="font-mono uppercase tracking-wider text-blue-400 mb-3 text-sm">A future where:</h4>
                        
                        <ul className="space-y-8 mb-12">
                          <li className="p-6 backdrop-blur-md bg-studio-black/20 border border-blue-500/20 rounded-lg transition-all duration-300 hover:border-blue-500/60">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">Ideas</h3>
                              <BookText className="w-5 h-5 text-blue-500" />
                            </div>
                            <p className="text-studio-lightgray">
                              don't fade—they evolve, staying sharp, relevant, and future-proof.
                            </p>
                          </li>
                        </ul>
                        
                        <div className="mt-6 flex justify-between items-center">
                          <div></div> {/* Empty div for spacing */}
                          <button 
                            onClick={() => turnPage('next')}
                            className="group flex items-center space-x-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <span>Continue reading</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Page 2 */}
                      <div className={`book-page transition-all duration-700 ease-in-out ${activePage === 1 ? 'block' : 'hidden'}`}>
                        <div className="mb-8">
                          {/* Empty space where the title was - now removed */}
                        </div>
                        
                        <ul className="space-y-8 mb-12">
                          <li className="p-6 backdrop-blur-md bg-studio-black/20 border border-purple-500/20 rounded-lg transition-all duration-300 hover:border-purple-500/60">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-purple-400 to-purple-300 text-transparent bg-clip-text">Humans</h3>
                              <BookText className="w-5 h-5 text-purple-500" />
                            </div>
                            <p className="text-studio-lightgray">
                              don't just survive—they ignite, fueled by purpose, wellness, and deep connection.
                            </p>
                          </li>
                          
                          <li className="p-6 backdrop-blur-md bg-studio-black/20 border border-pink-500/20 rounded-lg transition-all duration-300 hover:border-pink-500/60">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-pink-400 to-pink-300 text-transparent bg-clip-text">Wealth</h3>
                              <BookText className="w-5 h-5 text-pink-500" />
                            </div>
                            <p className="text-studio-lightgray">
                              doesn't decay—it compounds meaning, aligned with values and built to outlive us.
                            </p>
                          </li>
                        </ul>
                        
                        <div className="mt-6 flex justify-between items-center">
                          <button 
                            onClick={() => turnPage('prev')}
                            className="group flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            <ArrowUpRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform" />
                            <span>Previous page</span>
                          </button>
                          <button 
                            onClick={() => turnPage('next')}
                            className="group flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            <span>Continue reading</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Page 3 */}
                      <div className={`book-page transition-all duration-700 ease-in-out ${activePage === 2 ? 'block' : 'hidden'}`}>
                        <div className="flex items-center mb-6">
                          <Bookmark className="w-5 h-5 text-pink-400 mr-3" />
                          <h3 className="text-xl font-display font-bold bg-gradient-to-r from-pink-400 to-pink-300 text-transparent bg-clip-text">The Movement</h3>
                        </div>
                        
                        <h4 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                          Adapt. Endure. Thrive.
                        </h4>
                        <p className="text-studio-lightgray mb-8">
                          Longevity isn't linear—it's layered. It touches how we think, move, connect, build, and rest. From the cells in our bodies to the stories we leave behind, longevity is a full-spectrum design for life.
                        </p>
                        
                        <div className="p-6 backdrop-blur-md bg-studio-black/30 border border-studio-gray/20 rounded-lg">
                          <p className="text-xl font-display font-medium mb-2 text-white">
                            This is more than a vision.
                          </p>
                          <p className="text-studio-lightgray mb-4">
                            It's a movement. A revolution. A new human blueprint.
                            Let's build the world where ideas keep pulsing, humans flourish, and legacy lives forever.
                          </p>
                          
                          <a href="#contact" className="group inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors">
                            <span>Join the movement</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                        </div>
                        
                        <div className="mt-6 flex justify-between items-center">
                          <button 
                            onClick={() => turnPage('prev')}
                            className="group flex items-center space-x-2 text-sm text-pink-400 hover:text-pink-300 transition-colors"
                          >
                            <ArrowUpRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform" />
                            <span>Previous page</span>
                          </button>
                          <div></div> {/* Empty div for spacing */}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Book Edge Styling */}
              <div className="absolute -right-2 top-0 bottom-0 w-4 bg-studio-black/40 rounded-r-lg"></div>
              <div className="absolute -right-4 top-3 bottom-3 w-2 bg-studio-black/30 rounded-r-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Book pagination - Mobile version */}
        <div className="mt-8 flex justify-center space-x-3 md:hidden">
          <button 
            onClick={() => setActivePage(0)} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activePage === 0 ? 'bg-blue-500 w-4' : 'bg-blue-500/40'}`}
            aria-label="Go to page 1"
          ></button>
          <button 
            onClick={() => setActivePage(1)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activePage === 1 ? 'bg-purple-500 w-4' : 'bg-purple-500/40'}`}
            aria-label="Go to page 2"
          ></button>
          <button 
            onClick={() => setActivePage(2)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activePage === 2 ? 'bg-pink-500 w-4' : 'bg-pink-500/40'}`}
            aria-label="Go to page 3"
          ></button>
        </div>
      </div>
    </section>
  );
}
