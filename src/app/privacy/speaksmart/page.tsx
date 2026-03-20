import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — SpeakSmart',
  description: 'Privacy Policy for SpeakSmart by AppMog Ltd',
};

export default function SpeakSmartPrivacy() {
  return (
    <div className="min-h-screen grain">
      <div className="h-12 lg:h-[66px]" />

      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <header className="border-b border-white/10 pb-8 mb-12">
          <h1 className="font-display text-[2.5rem] lg:text-[4rem] font-bold leading-[0.9] tracking-[-0.04em] mb-6">
            SpeakSmart Privacy Policy
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
              SpeakSmart is an AI-powered voice-to-text and writing assistant application developed by AppMog Ltd ("we", "our", or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Information We Collect</h2>
            
            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Information You Provide</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Voice recordings and transcriptions</li>
              <li>Text content you create or edit</li>
              <li>Account information (if applicable)</li>
              <li>Feedback and support communications</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Device information and identifiers</li>
              <li>Usage patterns and analytics</li>
              <li>App performance metrics</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Audio Processing</h3>
            <p className="text-white/70 leading-relaxed">
              Voice recordings are processed to provide transcription and AI writing assistance. Audio is processed locally on device where possible. Some processing may occur on servers belonging to an AI service provider whose API you connected.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Provide accurate speech-to-text transcription</li>
              <li>Generate AI-powered writing assistance</li>
              <li>Improve our AI models (with your consent)</li>
              <li>Provide customer support</li>
              <li>Analyze app usage to improve features</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Data Sharing and Storage</h2>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Voice recordings are not stored permanently unless you choose to save them</li>
              <li>We do not sell your personal data or voice recordings</li>
              <li>Data is only shared with service providers necessary for service delivery</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Your Rights</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You may:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Delete your saved recordings and documents</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt out of data collection for AI training</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Children's Privacy</h2>
            <p className="text-white/70 leading-relaxed">
              SpeakSmart is not intended for children under 13. We do not knowingly collect data from children under 13.
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
