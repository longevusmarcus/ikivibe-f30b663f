
export default function WealthSection() {
  return (
    <section id="wealth" className="py-24 sm:py-32 bg-studio-black">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="section-number">03</div>
          <h2 className="section-title">360 Wealth Labs</h2>
          <p className="section-subtitle">Wealth That Sustains</p>
        </div>
        
        <div className="mb-16 max-w-3xl">
          <p className="text-lg leading-relaxed mb-8">
            We dissect the essence of who we are, building communities that support this journey, while investing in visionary ideators 
            empowered by ikigai. Our goal is to cultivate 360-degree wealth—encompassing time, relationships, wellbeing, and financial prosperity—creating 
            a holistic approach to lasting abundance and legacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Time Wealth</h3>
            <p className="text-studio-lightgray">
              More time = more thoughts. More thoughts = more ideas. More ideas = more opportunities. 
              Design a life that buys back your time— so your mind can roam, create, and lead. Time is your amplifier.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Social Wealth</h3>
            <p className="text-studio-lightgray">
              More connection = more trust. More trust = more flow. More flow = more fulfillment. 
              Curate your circle with intention— the right people multiply your energy. Social wealth is your emotional engine.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Financial Wealth</h3>
            <p className="text-studio-lightgray">
              More clarity = better choices. Better choices = aligned growth. Aligned growth = lasting freedom. 
              Let your capital reflect your values— money should fund your mission, not distract from it. Wealth that serves, sustains.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Physical Wealth</h3>
            <p className="text-studio-lightgray">
              Know your DNA = know your needs. Know your needs = better choices. Better choices = lasting vitality. 
              Your body is not generic—neither should your health plan be. Fuel it with precision. Move with intention. Recover with respect. 
              Longevity starts with knowledge.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Mental Wealth</h3>
            <p className="text-studio-lightgray">
              More stillness = more clarity. More clarity = sharper decisions. Sharper decisions = a better future. 
              Master your inner world before anything else. Train the mind. Expand awareness. Your mind is your first environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
