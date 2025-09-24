import type { Metadata } from "next";
import { Inter_Tight, Koulen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

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
  title: "Danmar Software Solutions",
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
        {/* Meta Pixel Code */}
        <Script strategy="beforeInteractive" id="facebook-pixel">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1742595276391357');
          fbq('track', 'PageView');

`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1742595276391357&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
