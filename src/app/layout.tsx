import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://vesperionstudio.com";
const siteName = "Vesperion Studio";
const defaultTitle = "Premium Web Design & Development in Czechia | Vesperion Studio";
const siteDescription =
  "Vesperion Studio designs and builds premium websites for businesses in Czechia. Fast performance, modern UX/UI, clean code, SEO foundations, and conversion-focused structure.";
const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  applicationName: siteName,
  referrer: "origin-when-cross-origin",

  keywords: [
    "Vesperion Studio",
    "web design Czechia",
    "web design Prague",
    "premium web design",
    "web development Czech Republic",
    "custom website development",
    "Next.js development",
    "UX UI design",
    "SEO website development",
    "business website design",
    "landing page development",
    "modern websites",
    "high-end web design",
  ],

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "business",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Vesperion Studio - Premium Web Design & Development in Czechia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteDescription,
    images: [ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description: siteDescription,
  email: "contact@vesperionstudio.com",
  sameAs: [
    "https://www.instagram.com/vesperionstudio.cz",
    "https://www.linkedin.com/company/vesperionstudio",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "en",
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/logo.png`,
  description: siteDescription,
  email: "contact@vesperionstudio.com",
  areaServed: [
    {
      "@type": "Country",
      name: "Czechia",
    },
    {
      "@type": "Country",
      name: "Slovakia",
    },
    {
      "@type": "Place",
      name: "Europe",
    },
  ],
  serviceType: [
    "Web Design",
    "Web Development",
    "UX/UI Design",
    "Landing Page Development",
    "SEO Foundations",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white antialiased selection:bg-[#D4AF37]/30 selection:text-white">
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="professionalservice-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />

        <div className="relative min-h-screen bg-black text-white">
          <Navbar />

          <main id="top" className="relative min-h-screen">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}