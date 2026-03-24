import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Photo Blitz',
  description: 'Terms & Conditions for Photo Blitz by AppMog Ltd',
};

export default function PhotoBlitzTerms() {
  return (
    <div className="min-h-screen grain">
      <div className="h-12 lg:h-[66px]" />

      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <header className="border-b border-white/10 pb-8 mb-12">
          <h1 className="font-display text-[2.5rem] lg:text-[4rem] font-bold leading-[0.9] tracking-[-0.04em] mb-6">
            Photo Blitz Terms & Conditions
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
              By downloading, installing, or using Photo Blitz ("the App"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">License Grant</h2>
            <p className="text-white/70 leading-relaxed">
              AppMog Ltd grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on compatible devices for personal, non-commercial use.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">User Content</h2>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>You retain ownership of photos and content you create using the App</li>
              <li>You grant us a worldwide, royalty-free license to use, store, and process your content solely to provide the App's services</li>
              <li>You are responsible for ensuring you have all necessary rights to the photos you upload</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Prohibited Conduct</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Reverse engineer, decompile, or attempt to extract the source code</li>
              <li>Use the App for any illegal purpose</li>
              <li>Upload content that infringes third-party rights</li>
              <li>Attempt to circumvent any technical protection measures</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Intellectual Property</h2>
            <p className="text-white/70 leading-relaxed">
              The App, its design, AI models, and all related intellectual property are owned by AppMog Ltd. All rights not expressly granted are reserved.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Disclaimers</h2>
            <div className="bg-amber-900/10 border border-amber-900/30 rounded-lg p-6">
              <p className="text-white/70 leading-relaxed uppercase text-sm font-display font-bold">
                THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE OR UNINTERRUPTED.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Limitation of Liability</h2>
            <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-6">
              <p className="text-white/70 leading-relaxed uppercase text-sm font-display font-bold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, APPMOG LTD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Termination</h2>
            <p className="text-white/70 leading-relaxed">
              We may terminate or suspend your access to the App at any time, with or without cause.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Changes to Terms</h2>
            <p className="text-white/70 leading-relaxed">
              We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Governing Law</h2>
            <p className="text-white/70 leading-relaxed">
              These Terms shall be governed by the laws of England and Wales.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Contact Information</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="font-display font-bold text-white mb-2">AppMog Ltd</p>
              <p className="text-white/70">Email: <a href="mailto:info@appmog.app" className="text-accent hover:underline">info@appmog.app</a></p>
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
