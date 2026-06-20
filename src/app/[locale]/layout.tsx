import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cabo Cleaning | Luxury Villa Care & Butler Service",
    template: "%s | Cabo Cleaning",
  },
  description:
    "Premium villa cleaning, butler service, and breakfast preparation in Los Cabos. Trusted by villa owners in Pedregal, Palmilla, Quivira, Cabo del Sol.",
  keywords: [
    "villa cleaning Los Cabos",
    "villa housekeeper Cabo San Lucas",
    "mayordomo de villa Cabo",
    "Airbnb cleaning Cabo San Lucas",
    "limpieza de villas Los Cabos",
    "butler service Cabo",
    "luxury villa cleaning Cabo",
    "villa turnover cleaning",
    "Cabo San Lucas villa management",
  ],
  authors: [{ name: "Cabo Cleaning" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_MX",
    siteName: "Cabo Cleaning",
    title: "Cabo Cleaning | Luxury Villa Care & Butler Service in Los Cabos",
    description:
      "Premium villa cleaning, butler service, and breakfast preparation for the finest villas in Los Cabos.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      en: "/en",
      es: "/es",
    },
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "es")) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Schema markup for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Cabo Cleaning",
              description:
                "Premium villa cleaning, butler service, and breakfast preparation in Los Cabos.",
              image: "https://cabocleaning.com/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cabo San Lucas",
                addressRegion: "Baja California Sur",
                addressCountry: "MX",
              },
              areaServed: [
                "Pedregal",
                "Palmilla",
                "Quivira",
                "Cabo del Sol",
                "Querencia",
                "El Tezal",
                "Diamante",
                "Puerto Los Cabos",
                "Tourist Corridor",
              ],
              priceRange: "$$",
              telephone: "+52 624 217 5935",
              url: "https://cabocleaning.com",
              sameAs: [
                "https://www.instagram.com/cabocleaning",
                "https://www.facebook.com/cabocleaning",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#2D2D2D] antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
