import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AgencyHero } from "@/components/ui/agency-hero";
import { Users, BarChart3 } from "lucide-react";

const steps = ["Market Analysis", "Strategic Positioning", "Deal Execution", "Ongoing Support"];

export default function Agency() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-studio-black text-white">
      <Navbar />
      <div className="pt-24">
        <AgencyHero />

        <section id="services" className="py-20 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Our Services</h2>
                <p className="text-lg text-studio-lightgray max-w-2xl mx-auto">
                  Comprehensive intermediary solutions tailored to your business needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-border/50 bg-transparent">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">Agency Services</h3>
                      <p className="text-studio-lightgray leading-relaxed">
                        We represent your brand with precision, managing client relationships and market positioning
                        to maximize your reach and impact in target markets.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-transparent">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">Brokerage Services</h3>
                      <p className="text-studio-lightgray leading-relaxed">
                        Strategic transaction facilitation and market analysis, ensuring optimal deals
                        and partnerships that drive sustainable business growth.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
                    Swiss precision in intermediation
                  </h2>
                  <p className="text-lg text-studio-lightgray leading-relaxed">
                    With 10 years of experience in the agency market, we understand the nuances of connecting
                    businesses with key stakeholders. Our approach combines traditional Swiss values of precision
                    and reliability with modern market strategies.
                  </p>
                  <p className="text-lg text-studio-lightgray leading-relaxed">
                    We don't just facilitate transactions, we build lasting relationships that create
                    value for all parties involved.
                  </p>
                </div>
                <div className="bg-white/[0.03] rounded-lg p-8">
                  <div className="space-y-6">
                    {steps.map((step, i) => (
                      <div key={step} className="flex flex-col items-center space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="font-semibold">{i + 1}</span>
                        </div>
                        <span className="font-medium text-center lg:text-left">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
                Ready to expand your market reach?
              </h2>
              <p className="text-lg text-studio-lightgray">
                Let's discuss how our intermediary services can help your business connect
                with the right consumers and drive sustainable growth.
              </p>
              <p className="text-xs text-studio-lightgray">Powered by MBH CHE-344.214.080</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
