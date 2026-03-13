import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-studio-black text-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>
          <p className="text-studio-lightgray mb-12">Last updated: March 13, 2026</p>

          <div className="space-y-10 text-studio-lightgray leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
              <p>
                IkiVibe Chōka Labs ("we," "our," or "us"), operated by MBH (CHE-344.214.080), is committed to
                protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-white">Personal Data:</strong> Name, email address, and any information you voluntarily provide through contact forms.</li>
                <li><strong className="text-white">Usage Data:</strong> Browser type, operating system, pages visited, time spent on pages, and other diagnostic data.</li>
                <li><strong className="text-white">Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>To provide, operate, and maintain our website and services</li>
                <li>To respond to your inquiries and communications</li>
                <li>To improve our website and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Data Sharing & Disclosure</h2>
              <p>
                We do not sell your personal information. We may share data with trusted third-party service providers
                who assist us in operating our website, conducting our business, or serving our users, provided they
                agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this
                policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
              <p className="mb-3">Under applicable data protection laws (including Swiss FADP and EU GDPR), you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Access, correct, or delete your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through the contact form on our
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
