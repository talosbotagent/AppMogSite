import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions — SpeakSmart',
  description: 'Terms & Conditions for SpeakSmart by AppMog Ltd',
};

export default function SpeakSmartTerms() {
  return (
    <div className="min-h-screen grain">
      <div className="h-12 lg:h-[66px]" />

      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <header className="border-b border-white/10 pb-8 mb-12">
          <h1 className="font-display text-[2.5rem] lg:text-[4rem] font-bold leading-[0.9] tracking-[-0.04em] mb-6">
            SpeakSmart Terms & Conditions
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
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Acceptance of Terms</h2>
            <p className="text-white/70 leading-relaxed">
              By using SpeakSmart ("the App"), you agree to these Terms & Conditions. Please read them carefully.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Service Description</h2>
            <p className="text-white/70 leading-relaxed">
              SpeakSmart is an AI-powered voice-to-text and writing assistant that converts speech into written content and provides AI-powered rewriting suggestions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">User Content and Voice Data</h2>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Voice recordings are processed to provide transcription services</li>
              <li>You retain ownership of all content you create</li>
              <li>We may use anonymized usage data to improve our AI models</li>
              <li>Voice recordings are not stored permanently unless you explicitly save them</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Licenses and Restrictions</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You are granted a limited license to use the App. You may not:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Attempt to extract or reuse our AI models</li>
              <li>Use the service for illegal purposes</li>
              <li>Create derivative works of the App</li>
              <li>Share your account with others</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">AI-Generated Content</h2>
            <p className="text-white/70 leading-relaxed">
              AI-generated content is provided for convenience. You are responsible for reviewing and ensuring the accuracy and appropriateness of all content before use.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Data and Privacy</h2>
            <p className="text-white/70 leading-relaxed">
              Your use of the App is also governed by our <a href="/privacy/speaksmart" className="text-accent hover:underline">Privacy Policy</a>. Please review it to understand how we handle your data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Disclaimers and Liability</h2>
            <div className="bg-amber-900/10 border border-amber-900/30 rounded-lg p-6">
              <p className="text-white/70 leading-relaxed uppercase text-sm font-display font-bold">
                THE SERVICE IS PROVIDED "AS IS". WE MAKE NO WARRANTIES REGARDING ACCURACY OF TRANSCRIPTIONS OR AI-GENERATED CONTENT.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Termination</h2>
            <p className="text-white/70 leading-relaxed">
              We reserve the right to terminate accounts that violate these terms or engage in abusive behavior.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Changes to Service</h2>
            <p className="text-white/70 leading-relaxed">
              We may modify, suspend, or discontinue the service at any time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Governing Law</h2>
            <p className="text-white/70 leading-relaxed">
              These Terms are governed by the laws of England and Wales.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Contact</h2>
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
