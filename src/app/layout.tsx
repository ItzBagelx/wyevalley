import type { Metadata } from "next";
import "./globals.css";
import Analytics from "../components/Analytics";
import StructuredData from "../components/StructuredData";
import { absoluteUrl, siteConfig } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Web Design Hereford for Trades & Small Businesses | Wye Design",
    template: "%s | Wye Design",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: siteConfig.name,
    title: "Web Design Hereford for Trades & Small Businesses | Wye Design",
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1672,
        height: 941,
        alt: "Wye Design — Custom web design for Hereford businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Hereford for Trades & Small Businesses | Wye Design",
    description: siteConfig.description,
    images: ["/og.png"],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased font-sans">
        {children}
        <Analytics />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": absoluteUrl("/#organization"),
                name: siteConfig.name,
                url: siteConfig.url,
                logo: absoluteUrl("/favicon.svg"),
                email: siteConfig.email,
                areaServed: ["Hereford", "Herefordshire"],
                description: siteConfig.description,
              },
              {
                "@type": "WebSite",
                "@id": absoluteUrl("/#website"),
                name: siteConfig.name,
                url: siteConfig.url,
                publisher: { "@id": absoluteUrl("/#organization") },
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
