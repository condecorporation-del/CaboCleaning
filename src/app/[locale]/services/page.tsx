import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cabocleaning.com"),
  title: "Services",
  description:
    "Premium villa cleaning, butler service, breakfast preparation, deep cleaning, and Airbnb/VRBO turnover in Los Cabos.",
  alternates: {
    canonical: "/services",
    languages: {
      en: "/en/services",
      es: "/es/services",
    },
  },
  openGraph: {
    title: "Cabo Cleaning Services | Villa Care & Butler in Los Cabos",
    description:
      "Premium villa cleaning, butler service, breakfast preparation, deep cleaning, and Airbnb/VRBO turnover in Los Cabos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabo Cleaning Services | Villa Care & Butler in Los Cabos",
    description:
      "Premium villa cleaning, butler service, breakfast preparation, deep cleaning, and Airbnb/VRBO turnover in Los Cabos.",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <ServicesSection />
      <ContactForm />
    </div>
  );
}
