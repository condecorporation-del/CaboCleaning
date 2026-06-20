import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL("https://cabocleaning.com"),
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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cabo Cleaning — Luxury Villa Care in Los Cabos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabo Cleaning | Luxury Villa Care & Butler Service in Los Cabos",
    description:
      "Premium villa cleaning, butler service, and breakfast preparation for the finest villas in Los Cabos.",
    images: ["/og-image.jpg"],
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
        <StructuredData
          breadcrumbs={[
            { name: "Cabo Cleaning", item: "/" },
            { name: locale === "es" ? "Inicio" : "Home", item: `/${locale}` },
          ]}
          faq={[
            {
              question:
                locale === "es"
                  ? "¿Qué servicios ofrece Cabo Cleaning?"
                  : "What services does Cabo Cleaning offer?",
              answer:
                locale === "es"
                  ? "Ofrecemos limpieza de villas de lujo, servicio de mayordomo profesional, preparación de desayunos gourmet, limpieza profunda y servicio de rotación para Airbnb y VRBO en todo Los Cabos."
                  : "We offer luxury villa cleaning, professional butler service, gourmet breakfast preparation, deep cleaning, and Airbnb/VRBO turnover service throughout Los Cabos.",
            },
            {
              question:
                locale === "es"
                  ? "¿En qué zonas de Los Cabos ofrecen servicio?"
                  : "What areas in Los Cabos do you serve?",
              answer:
                locale === "es"
                  ? "Servimos en Pedregal, Palmilla, Quivira, Cabo del Sol, Querencia, El Tezal, Diamante, Puerto Los Cabos y todo el Corredor Turístico."
                  : "We serve Pedregal, Palmilla, Quivira, Cabo del Sol, Querencia, El Tezal, Diamante, Puerto Los Cabos, and the entire Tourist Corridor.",
            },
            {
              question:
                locale === "es"
                  ? "¿Cuánto cuesta el servicio de limpieza de villas?"
                  : "How much does villa cleaning service cost?",
              answer:
                locale === "es"
                  ? "Cada villa es única. Ofrecemos una visita de evaluación sin costo donde analizamos el tamaño, necesidades específicas y frecuencia para preparar una cotización personalizada."
                  : "Every villa is unique. We offer a free, no-obligation site visit where we assess the size, specific needs, and frequency to prepare a personalized quote.",
            },
            {
              question:
                locale === "es"
                  ? "¿Ofrecen servicio de mayordomo para eventos especiales?"
                  : "Do you offer butler service for special events?",
              answer:
                locale === "es"
                  ? "Sí, nuestro mayordomo certificado con más de 9 años en hotelería de ultra lujo está disponible para cenas privadas, eventos en villa y experiencias gastronómicas personalizadas."
                  : "Yes, our certified butler with 9+ years in ultra-luxury hospitality is available for private dinners, villa events, and personalized dining experiences.",
            },
            {
              question:
                locale === "es"
                  ? "¿Los productos de limpieza están incluidos?"
                  : "Are cleaning supplies included?",
              answer:
                locale === "es"
                  ? "Sí, llevamos todos los productos y equipos profesionales necesarios. Usamos productos ecológicos de grado hotelero, seguros para superficies de lujo como mármol, granito y maderas finas."
                  : "Yes, we bring all professional-grade products and equipment. We use eco-friendly, hotel-grade products safe for luxury surfaces like marble, granite, and fine woods.",
            },
          ]}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#2D2D2D] antialiased">
        <GoogleAnalytics />
        <Analytics />
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
