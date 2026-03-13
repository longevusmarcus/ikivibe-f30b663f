import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-studio-black text-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-studio-lightgray mb-12 text-sm">Effective Date: March 13, 2026 · Last Updated: March 13, 2026</p>

          <div className="space-y-10 text-studio-lightgray leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
              <p>
                This website is operated by <strong className="text-white">IkiVibe Chōka Labs</strong>, a brand of
                MBH, registered in Switzerland under CHE-344.214.080 ("we," "us," or "our"). We are a
                multi-dimensional lab building digital products, communities, and advisory services across health,
                wealth, longevity, and human potential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Scope</h2>
              <p>
                This Privacy Policy applies to all personal data processed through our website
                (ikivibe.lovable.app and any associated domains), our portfolio products (including but not limited to
                Naru, Batch, Hara, Years, Project30), and any related services or communications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Data We Collect</h2>

              <h3 className="text-white font-semibold mt-4 mb-2">3.1 Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Name and email address when submitting contact forms</li>
                <li>Any message content you voluntarily share with us</li>
                <li>Account information if you register on any of our products</li>
              </ul>

              <h3 className="text-white font-semibold mt-4 mb-2">3.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>IP address (anonymized where possible)</li>
                <li>Browser type, device type, and operating system</li>
                <li>Pages visited, time spent, referral source</li>
                <li>Cookies and similar tracking technologies (see Section 7)</li>
              </ul>

              <h3 className="text-white font-semibold mt-4 mb-2">3.3 Information from Third Parties</h3>
              <p>
                We may receive data from analytics providers, advertising partners, or social media platforms when
                you interact with our content on those services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. How We Use Your Data</h2>
              <p className="mb-3">We process your personal data for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-white">Service Delivery:</strong> To operate, maintain, and improve our website and products</li>
                <li><strong className="text-white">Communication:</strong> To respond to inquiries, send updates, and provide support</li>
                <li><strong className="text-white">Analytics:</strong> To understand usage patterns and improve user experience</li>
                <li><strong className="text-white">Security:</strong> To detect and prevent fraud, abuse, or unauthorized access</li>
                <li><strong className="text-white">Legal Compliance:</strong> To fulfill legal obligations under Swiss and EU law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Legal Basis for Processing</h2>
              <p className="mb-3">We process personal data based on the following legal grounds:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-white">Consent:</strong> Where you have given explicit consent (e.g., newsletter signup)</li>
                <li><strong className="text-white">Contractual Necessity:</strong> To perform a contract or take pre-contractual steps at your request</li>
                <li><strong className="text-white">Legitimate Interest:</strong> For analytics, security, and service improvement, balanced against your rights</li>
                <li><strong className="text-white">Legal Obligation:</strong> Where required by applicable law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Data Sharing & Third Parties</h2>
              <p className="mb-3">
                We do not sell, rent, or trade your personal data. We may share data with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-white">Service Providers:</strong> Hosting, analytics, and email providers who process data on our behalf under strict contractual terms</li>
                <li><strong className="text-white">Legal Authorities:</strong> When required by law, court order, or government regulation</li>
                <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="mt-3">
                All third-party processors are selected for their compliance with applicable data protection standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Cookies & Tracking</h2>
              <p className="mb-3">We use the following types of cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-white">Essential Cookies:</strong> Required for basic website functionality (session management, security)</li>
                <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="mt-3">
                You can manage or disable cookies through your browser settings. Disabling essential cookies may
                affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary for the purposes described in this policy, or as
                required by law. Contact form submissions are retained for up to 24 months. Analytics data is
                anonymized or deleted after 14 months. Account data is retained until you request deletion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. International Transfers</h2>
              <p>
                Your data may be transferred to and processed in countries outside Switzerland and the EEA. Where
                such transfers occur, we ensure appropriate safeguards are in place, including Standard Contractual
                Clauses (SCCs) approved by the European Commission or equivalent measures recognized under Swiss law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Your Rights</h2>
              <p className="mb-3">
                Under the Swiss Federal Act on Data Protection (FADP) and the EU General Data Protection Regulation
                (GDPR), you have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-white">Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong className="text-white">Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong className="text-white">Restriction:</strong> Limit the processing of your data</li>
                <li><strong className="text-white">Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong className="text-white">Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong className="text-white">Withdraw Consent:</strong> Withdraw previously given consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us using the details in Section 13.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Data Security</h2>
              <p>
                We implement industry-standard technical and organizational security measures, including encryption
                in transit (TLS/SSL), access controls, regular security assessments, and secure data storage. However,
                no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">12. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 16. We do not knowingly collect
                personal data from children. If we become aware that we have collected data from a child without
                parental consent, we will take steps to delete that information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">13. Contact & Complaints</h2>
              <p className="mb-3">
                For any questions, requests, or complaints regarding this Privacy Policy or our data practices:
              </p>
              <div className="bg-studio-gray/10 border border-studio-gray/20 rounded-lg p-4 space-y-1">
                <p><strong className="text-white">IkiVibe Chōka Labs</strong></p>
                <p>Operated by MBH · CHE-344.214.080</p>
                <p>Switzerland</p>
                <p className="mt-2">X (Twitter): <a href="https://twitter.com/keepgoingmarco" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@keepgoingmarco</a></p>
              </div>
              <p className="mt-4">
                You also have the right to lodge a complaint with the Swiss Federal Data Protection and Information
                Commissioner (FDPIC) or the relevant supervisory authority in your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">14. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes will be posted on this page
                with an updated "Last Updated" date. We encourage you to review this policy periodically. Continued
                use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
