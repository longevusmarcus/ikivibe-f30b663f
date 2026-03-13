import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-studio-black text-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Terms of Service</h1>
          <p className="text-studio-lightgray mb-12">Last updated: March 13, 2026</p>

          <div className="space-y-10 text-studio-lightgray leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the website and services of IkiVibe Chōka Labs, operated by MBH
                (CHE-344.214.080), you agree to be bound by these Terms of Service. If you do not agree with any
                part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Services</h2>
              <p>
                IkiVibe Chōka Labs is a multi-dimensional lab focused on ideas, humans, wealth, and longevity. We
                provide digital products, advisory services, community platforms, and investment activities. Our
                services may change, expand, or be discontinued at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Intellectual Property</h2>
              <p>
                All content, branding, designs, code, and materials on this website are the property of IkiVibe Chōka
                Labs and MBH. You may not reproduce, distribute, modify, or create derivative works without our
                express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. User Conduct</h2>
              <p className="mb-3">When using our services, you agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services for any unlawful or harmful purpose</li>
                <li>Interfere with the proper functioning of our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Disclaimer</h2>
              <p>
                Our services are provided "as is" without warranties of any kind, either express or implied. We do
                not guarantee that our services will be uninterrupted, error-free, or secure. Any investment-related
                content is for informational purposes only and does not constitute financial advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by Swiss law, IkiVibe Chōka Labs and MBH shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your use of our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the
                content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Switzerland. Any
                disputes shall be subject to the exclusive jurisdiction of the courts in Switzerland.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                posting on this page. Your continued use of our services constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
              <p>
                For any questions regarding these Terms of Service, please contact us through the contact form on our
                website or reach out to us on X (Twitter) at @keepgoingmarco.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
