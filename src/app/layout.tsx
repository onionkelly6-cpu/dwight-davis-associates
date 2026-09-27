import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Fraunces } from "next/font/google";
import { SplashScreen } from "@/components/motion/splash-screen";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";
import { jsonLd } from "@/lib/structured-data";
import "./globals.css";

const sansFont = IBM_Plex_Sans({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Fraunces: a variable serif with real optical-size character — replaces the
// flatter Libre Caslon Display so headings carry more personality without
// losing the firm's formal tone. Italic is used for pull-quotes/taglines.
const displayFont = Fraunces({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const DEFAULT_DESCRIPTION =
  "Dwight Davis & Associates is a modern general-practice law firm serving families, founders, and business operators with clear legal strategy and transparent client communication.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
  },
};

// Next.js 16: viewport/themeColor moved out of `metadata` into a separate export.
export const viewport: Viewport = {
  themeColor: "#f5f2ea",
  colorScheme: "light",
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE_NAME,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "225 W Wacker Drive, Suite 1800",
    postalCode: "60606",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  areaServed: ["Illinois", "United States"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${monoFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(legalServiceSchema) }}
        />
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
