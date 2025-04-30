
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-studio-black text-studio-white">
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4">404</h1>
          <p className="text-xl md:text-2xl text-studio-lightgray mb-8">Page not found</p>
          <a 
            href="/" 
            className="border border-studio-white px-6 py-3 hover:bg-studio-white hover:text-studio-black transition-colors"
          >
            Return Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
