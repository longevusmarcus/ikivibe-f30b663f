
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10">
      <AuroraBackground className="!min-h-[50vh] !h-auto !bg-black/80 pb-16" showRadialGradient={true}>
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                IkiVibe Studios
              </h3>
              <p className="text-studio-lightgray mb-6">
                Crafting the future of human longevity through innovation, wellness, and purpose-driven wealth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-studio-white hover:text-blue-400 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-studio-white hover:text-purple-400 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-studio-white hover:text-pink-400 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-display font-medium mb-6 text-studio-white">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#ikivibe" className="text-studio-lightgray hover:text-blue-400 transition-colors">
                    IkiVibe Collective
                  </a>
                </li>
                <li>
                  <a href="#choka" className="text-studio-lightgray hover:text-purple-400 transition-colors">
                    Chōka Labs
                  </a>
                </li>
                <li>
                  <a href="#wealth" className="text-studio-lightgray hover:text-pink-400 transition-colors">
                    Wealth Network
                  </a>
                </li>
                <li>
                  <a href="#longevity" className="text-studio-lightgray hover:text-blue-400 transition-colors">
                    Longevity Ecosystem
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-display font-medium mb-6 text-studio-white">Connect</h4>
              <p className="text-studio-lightgray mb-4">
                Join our newsletter for updates on longevity innovations and events.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-studio-black/50 border border-studio-gray/20 text-studio-white px-4 py-2 rounded-l-md focus:outline-none focus:border-blue-500 w-full"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-r-md hover:from-blue-600 hover:to-purple-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-studio-gray/10 text-center"
          >
            <p className="text-studio-lightgray">
              © {new Date().getFullYear()} IkiVibe Studios. All rights reserved.
            </p>
          </motion.div>
        </div>
      </AuroraBackground>
    </footer>
  );
}
