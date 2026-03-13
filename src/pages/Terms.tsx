import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-studio-black text-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
          <p className="text-studio-lightgray mb-12 text-sm">Effective Date: March 13, 2026 · Last Updated: March 13, 2026</p>

          <div className="space-y-10 text-studio-lightgray leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction & Acceptance</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the website, products, and
                services operated by <strong className="text-white">IkiVibe Chōka Labs</strong>, a brand of MBH,
                registered in Switzerland under CHE-344.214.080 ("we," "us," or "our").
              </p>
              <p className="mt-3">
                By accessing or using our services, you acknowledge that you have read, understood, and agree to be
                bound by these Terms. If you do not agree, you must discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Definitions</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-white">"Services"</strong> refers to our website, digital products (including Naru, Batch, Hara, Years, Project30, and other portfolio products), advisory services, communities, and any related offerings.</li>
                <li><strong className="text-white">"User," "you," or "your"</strong> refers to any individual or entity accessing or using our Services.</li>
                <li><strong className="text-white">"Content"</strong> refers to all text, graphics, images, code, data, and other materials available through our Services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Eligibility</h2>
              <p>
                You must be at least 16 years of age to use our Services. By using our Services, you represent and
                warrant that you meet this age requirement and have the legal capacity to enter into these Terms. If
                you are using our Services on behalf of an organization, you represent that you have authority to bind
                that organization to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Services & Availability</h2>
              <p>
                We provide digital products, advisory services, community platforms, investment-related content, and
                educational resources across health, wealth, longevity, and human potential. We reserve the right to
                modify, suspend, or discontinue any part of our Services at any time without prior notice. We do not
                guarantee uninterrupted or error-free access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. User Accounts</h2>
              <p className="mb-3">
                Certain Services may require you to create an account. When you do, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security and confidentiality of your login credentials</li>
                <li>Notify us immediately of any unauthorized access or use of your account</li>
                <li>Accept responsibility for all activity under your account</li>
              </ul>
              <p className="mt-3">
                We reserve the right to suspend or terminate accounts that violate these Terms or remain inactive for
                an extended period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Acceptable Use</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Use our Services for any unlawful, fraudulent, or harmful purpose</li>
                <li>Violate any applicable local, national, or international law or regulation</li>
                <li>Infringe upon the intellectual property or privacy rights of others</li>
                <li>Attempt to gain unauthorized access to our systems, networks, or data</li>
                <li>Distribute malware, spam, or other harmful content</li>
                <li>Scrape, crawl, or use automated tools to extract data without permission</li>
                <li>Impersonate any person or entity, or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Intellectual Property</h2>
              <p>
                All Content, branding, logos, designs, source code, and materials on our website and within our
                products are the exclusive property of IkiVibe Chōka Labs and MBH, or their respective licensors.
                These are protected by Swiss and international copyright, trademark, and intellectual property laws.
              </p>
              <p className="mt-3">
                You may not reproduce, distribute, modify, create derivative works, publicly display, or commercially
                exploit any of our Content without prior written consent. Limited personal, non-commercial use is
                permitted provided proper attribution is given.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. User-Generated Content</h2>
              <p>
                If you submit, post, or transmit any content through our Services, you grant us a non-exclusive,
                worldwide, royalty-free license to use, display, reproduce, and distribute that content in connection
                with our Services. You retain ownership of your content but are responsible for ensuring it does not
                violate any third-party rights or applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Advisory & Investment Disclaimer</h2>
              <p>
                Any content related to investments, financial strategies, crypto assets, or wealth-building is
                provided for <strong className="text-white">informational and educational purposes only</strong>. It
                does not constitute financial, investment, tax, or legal advice. Past performance is not indicative of
                future results.
              </p>
              <p className="mt-3">
                You should consult qualified professionals before making any financial decisions. We are not a
                licensed financial advisor, broker, or dealer. Any investment decisions you make are at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Third-Party Links & Services</h2>
              <p>
                Our Services may contain links to third-party websites, products, or services. These are provided for
                convenience only. We do not endorse, control, or assume responsibility for the content, privacy
                policies, or practices of any third-party sites. Your interactions with third parties are solely
                between you and them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Disclaimer of Warranties</h2>
              <p>
                Our Services are provided on an <strong className="text-white">"AS IS"</strong> and{" "}
                <strong className="text-white">"AS AVAILABLE"</strong> basis, without warranties of any kind, whether
                express, implied, or statutory. We disclaim all warranties, including but not limited to implied
                warranties of merchantability, fitness for a particular purpose, non-infringement, and accuracy.
              </p>
              <p className="mt-3">
                We do not warrant that our Services will be uninterrupted, secure, error-free, or free from viruses
                or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">12. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by Swiss law, IkiVibe Chōka Labs, MBH, and their directors,
                employees, partners, and affiliates shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or
                other intangible losses, arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>Your use or inability to use our Services</li>
                <li>Any unauthorized access to or alteration of your data</li>
                <li>Any third-party conduct or content on our Services</li>
                <li>Any investment or financial decisions made based on our content</li>
              </ul>
              <p className="mt-3">
                Our total aggregate liability for all claims shall not exceed CHF 100 or the amount you paid us in
                the 12 months preceding the claim, whichever is greater.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">13. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless IkiVibe Chōka Labs, MBH, and their affiliates from
                any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of
                our Services, your violation of these Terms, or your infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">14. Termination</h2>
              <p>
                We may terminate or suspend your access to our Services immediately, without prior notice, for any
                reason, including breach of these Terms. Upon termination, your right to use the Services ceases
                immediately. Provisions that by their nature should survive termination (including intellectual
                property, disclaimers, limitations of liability, and indemnification) shall survive.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">15. Governing Law & Dispute Resolution</h2>
              <p>
                These Terms are governed by and construed in accordance with the substantive laws of Switzerland,
                without regard to conflict of law principles. Any disputes arising from or relating to these Terms or
                our Services shall be subject to the exclusive jurisdiction of the competent courts in Switzerland.
              </p>
              <p className="mt-3">
                Before initiating any formal proceedings, both parties agree to attempt to resolve disputes through
                good-faith negotiation for a period of at least 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">16. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining
                provisions shall continue in full force and effect. The invalid provision shall be modified to the
                minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">17. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                IkiVibe Chōka Labs regarding your use of our Services, superseding any prior agreements or
                communications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">18. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be posted on this page
                with an updated effective date. Your continued use of our Services after such changes constitutes
                acceptance of the updated Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">19. Contact</h2>
              <p className="mb-3">For any questions regarding these Terms of Service:</p>
              <div className="bg-studio-gray/10 border border-studio-gray/20 rounded-lg p-4 space-y-1">
                <p><strong className="text-white">IkiVibe Chōka Labs</strong></p>
                <p>Operated by MBH · CHE-344.214.080</p>
                <p>Switzerland</p>
                <p className="mt-2">X (Twitter): <a href="https://twitter.com/keepgoingmarco" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@keepgoingmarco</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
