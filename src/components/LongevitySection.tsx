
import React from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from 'framer-motion';
import { Infinity, Heart, Rocket, Star } from 'lucide-react';

export default function LongevitySection() {
  return (
    <section id="longevity" className="min-h-screen relative z-10">
      <AuroraBackground className="!bg-transparent" showRadialGradient={false}>
        <div className="container mx-auto px-4 pt-16">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="section-number"
            >
              04
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section-title bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            >
              The Longevity Ecosystem
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="section-subtitle text-white"
            >
              We don't just chase time—we reshape it.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              By fusing Idea Incubation, Human Optimization, and Wealth Manifestation, 
              we're building a world where longevity isn't a trend—it's a culture.
            </p>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl md:text-3xl font-display mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400"
          >
            A future where:
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:border-blue-500/50 transition-all group"
            >
              <Infinity className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-2xl font-display font-bold mb-4 text-blue-300">Ideas</h4>
              <p className="text-white/80">
                don't fade—they evolve, staying sharp, relevant, and future-proof.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:border-purple-500/50 transition-all group"
            >
              <Heart className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-2xl font-display font-bold mb-4 text-purple-300">Humans</h4>
              <p className="text-white/80">
                don't just survive—they ignite, fueled by purpose, wellness, and deep connection.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:border-pink-500/50 transition-all group"
            >
              <Star className="text-pink-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-2xl font-display font-bold mb-4 text-pink-300">Wealth</h4>
              <p className="text-white/80">
                doesn't decay—it compounds meaning, aligned with values and built to outlive us.
              </p>
            </motion.div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mb-12"
            >
              <h3 className="text-3xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Adapt. Endure. Thrive.
              </h3>
              <p className="text-xl text-white/80">
                Longevity isn't linear—it's layered. It touches how we think, move, connect, build, and rest. 
                From the cells in our bodies to the stories we leave behind, longevity is a full-spectrum design for life.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="text-2xl font-display font-bold mb-4 text-white">
                This is more than a vision.
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
                <Rocket className="text-pink-400 animate-pulse" />
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
              </div>
              <p className="text-xl text-white/90">
                It's a movement. A revolution. A new human blueprint. Let's build the world where ideas 
                keep pulsing, humans flourish, and legacy lives forever.
              </p>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              Join the Movement
            </motion.button>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}
