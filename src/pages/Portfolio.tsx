
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CaseDemo } from "@/components/ui/demo";
import { PortfolioProjects } from "@/components/ui/portfolio-projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-studio-black text-white">
      <Navbar />
      <div className="pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl max-w-3xl mb-12 text-studio-lightgray">
              Explore our work with leading brands and innovative startups across various industries.
            </p>
            
            <PortfolioProjects />
            
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Client Partnerships</h2>
              <CaseDemo />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
