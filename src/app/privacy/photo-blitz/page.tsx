import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Photo Blitz',
  description: 'Privacy Policy for Photo Blitz by AppMog Ltd',
};

export default function PhotoBlitzPrivacy() {
  return (
    <div className="min-h-screen grain">
      <div className="h-12 lg:h-[66px]" />

      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <header className="border-b border-white/10 pb-8 mb-12">
          <h1 className="font-display text-[2.5rem] lg:text-[4rem] font-bold leading-[0.9] tracking-[-0.04em] mb-6">
            Photo Blitz Privacy Policy
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>Effective Date: March 19, 2026</span>
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span>Company: AppMog Ltd</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Introduction</h2>
            <p className="text-white/70 leading-relaxed">
              Photo Blitz is an AI-powered photo enhancement and organization application developed by AppMog Ltd ("we", "our", or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Information We Collect</h2>
            
            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Information You Provide</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Account information (if you create an account)</li>
              <li>Photos and media you upload or capture</li>
              <li>Feedback and support communications</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Device information (model, operating system, unique device identifiers)</li>
              <li>Usage data and analytics</li>
              <li>App performance and crash reports</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">AI Processing Data</h3>
            <p className="text-white/70 leading-relaxed">
              Photos processed by our AI enhancement features are processed locally on your device where possible. Some advanced features may send anonymized data to our servers for processing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Provide and improve the Photo Blitz service</li>
              <li>Process and enhance your photos using AI</li>
              <li>Maintain and improve app performance</li>
              <li>Provide customer support</li>
              <li>Send important updates and notifications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Data Sharing</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We do not sell your personal data. We may share data with:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Service providers who assist in operating our service</li>
              <li>Legal authorities when required by law</li>
              <li>In the event of a business transfer</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Data Storage and Security</h2>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Your photos remain on your device unless you explicitly choose cloud features</li>
              <li>We implement reasonable security measures to protect your data</li>
              <li>We retain data only as long as necessary for the purposes outlined</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Your Rights</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Access, correct, or delete your personal data</li>
              <li>Opt out of certain data collection</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Children's Privacy</h2>
            <p className="text-white/70 leading-relaxed">
              Photo Blitz is not intended for children under 13. We do not knowingly collect data from children under 13.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Contact Us</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="font-display font-bold text-white mb-2">AppMog Ltd</p>
              <p className="text-white/70">Email: <a href="mailto:legal@appmog.app" className="text-accent hover:underline">legal@appmog.app</a></p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 mt-12">
          <p className="text-sm text-white/40">Last updated: March 19, 2026</p>
        </footer>
      </article>
    </div>
  );
}
