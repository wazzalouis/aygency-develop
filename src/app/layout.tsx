import type { Metadata } from "next";
import { Instrument_Sans, Inter, Playfair_Display } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aygency — AI Agents That Solve Real Business Problems",
  description:
    "Aygency designs, builds, and deploys custom AI agent systems for businesses. Weeks, not months. Measurable ROI from day one.",
  openGraph: {
    title: "Aygency — AI Agents That Solve Real Business Problems",
    description:
      "Aygency designs, builds, and deploys custom AI agent systems for businesses. Weeks, not months. Measurable ROI from day one.",
    type: "website",
    url: "https://aygency.ai",
    siteName: "Aygency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aygency — AI Agents That Solve Real Business Problems",
    description:
      "Aygency designs, builds, and deploys custom AI agent systems for businesses. Weeks, not months. Measurable ROI from day one.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${inter.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
