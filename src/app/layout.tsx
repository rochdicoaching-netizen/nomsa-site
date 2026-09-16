import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/lib/site-config";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dr Nomsa Ntshingila | Psychological Services",
    template: "%s | Dr Nomsa Ntshingila",
  },
  description:
    "Healing Minds. Empowering Lives. Transforming Organizations. Clinical psychology, life coaching, Christian counselling and organizational consulting with Dr Nomsa Ntshingila.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: "Dr Nomsa Ntshingila | Psychological Services",
    description:
      "Healing Minds. Empowering Lives. Transforming Organizations. Clinical psychology, life coaching, Christian counselling and organizational consulting with Dr Nomsa Ntshingila.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Nomsa Ntshingila | Psychological Services",
    description:
      "Healing Minds. Empowering Lives. Transforming Organizations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-svh flex-col bg-canvas text-charcoal antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
