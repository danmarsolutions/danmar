import type { Metadata } from "next";
import { Inter_Tight, Koulen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const koulen = Koulen({
  variable: "--font-koulen",
  subsets: ["latin"],
  weight: "400",
});

const description =
  "Transform your vision into digital reality. We specialize in sleek, high-performance, websites crafted specifically to elevate your business.";

export const metadata: Metadata = {
  title: "Danmar Softare Solutions",
  description,
  openGraph: {
    type: "website",
    description,
    siteName: "danmarsolutions.ca",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${koulen.variable} dark antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main className="max-w-7xl mx-auto px-8">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
