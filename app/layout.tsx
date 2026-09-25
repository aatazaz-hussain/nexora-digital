import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { RevealProvider } from "@/components/shared/reveal-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexoradigital.com"),
  title: {
    default: "Nexora Digital — Digital Solutions That Drive Real Growth",
    template: "%s | Nexora Digital",
  },
  description:
    "Nexora Digital is a creative digital agency delivering branding, social media marketing, SEO, web development and AI-powered solutions that drive measurable business growth.",
  keywords: [
    "digital agency",
    "digital marketing",
    "SEO services",
    "social media marketing",
    "web development",
    "AI solutions",
    "branding",
    "Nexora Digital",
  ],
  authors: [{ name: "Nexora Digital" }],
  creator: "Nexora Digital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexoradigital.com",
    siteName: "Nexora Digital",
    title: "Nexora Digital — Digital Solutions That Drive Real Growth",
    description:
      "Creative design, smart marketing, technology and AI-powered digital solutions for growing businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Digital — Digital Solutions That Drive Real Growth",
    description:
      "Creative design, smart marketing, technology and AI-powered digital solutions for growing businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
<html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${spaceGrotesk.variable}`}>      <body className="antialiased">
        <RevealProvider />
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}