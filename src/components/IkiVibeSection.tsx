
export default function IkiVibeSection() {
  return (
    <section id="ikivibe" className="py-24 sm:py-32 bg-studio-black relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">01</div>
          <h2 className="section-title">IkiVibe Labs</h2>
          <p className="section-subtitle">Ideas that survive</p>
        </div>
        
        <div className="mb-16 max-w-3xl">
          <p className="text-lg leading-relaxed mb-8">
            We bring ideas to life—beyond the mind and into the world—by riding enduring trends that spark human connection and meaningful growth. 
            Along the way, we accelerate bold concepts, guiding individuals and organizations toward their core purpose and helping them build what truly thrives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-studio-gray/20 hover:border-studio-lightgray/40 transition-colors">
            <h3 className="text-xl font-display font-bold mb-4">Ikideas</h3>
            <p className="text-studio-lightgray">
              Inspired by the concept of Ikigai, we explore emerging trends to uncover opportunities that shape the future and ideas that endure. 
              In a world where AI reshapes execution, the value of iki-ideas is skyrocketing. When humans blend their Ikigai with a tech spirit, 
              ideas become the currency of an AI-driven economy.
            </p>
          </div>
          
          <div className="p-6 border border-studio-gray/20 hover:border-studio-lightgray/40 transition-colors">
            <h3 className="text-xl font-display font-bold mb-4">Vibe Coding</h3>
            <p className="text-studio-lightgray">
              We build simple, fun digital solutions that solve pain points, foster connection, enhance well-being, and drive personal growth. 
              By seamlessly blending AI technology with thoughtful, human-centered design, we ensure our platforms evolve alongside humanity's 
              ever-changing needs, delivering a bright new future for all.
            </p>
          </div>
          
          <div className="p-6 border border-studio-gray/20 hover:border-studio-lightgray/40 transition-colors">
            <h3 className="text-xl font-display font-bold mb-4">For Partners</h3>
            <p className="text-studio-lightgray">
              We help individuals and organizations discover their core purpose—accelerating unique ideas and guiding them from conception to market. 
              By pinpointing the intersection of passion, skill, mission, and vocation, we ensure purpose drives resilience, 
              enabling both ideas and people to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
