import type { Metadata } from "next";
import { JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "App Mog — ship it or it doesn't exist",
  description:
    "One dev. Real apps. Building in public. Home of Photo Blitz, Thronglet, and whatever comes next.",
  openGraph: {
    title: "App Mog",
    description: "One dev. Real apps. Building in public.",
    url: "https://appmog.dev",
    siteName: "App Mog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Mog",
    description: "One dev. Real apps. Building in public.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${dmSans.variable}`}>
      <body className="bg-bg text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
