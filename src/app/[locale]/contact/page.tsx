import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cabocleaning.com"),
  title: "Contact",
  description:
    "Request a free quote for villa cleaning, butler service, or breakfast preparation in Los Cabos. WhatsApp or email us.",
  alternates: {
    canonical: "/contact",
    languages: {
      en: "/en/contact",
      es: "/es/contact",
    },
  },
  openGraph: {
    title: "Contact Cabo Cleaning | Free Villa Care Quote Los Cabos",
    description:
      "Request a free quote for villa cleaning, butler service, or breakfast preparation in Los Cabos. WhatsApp or email us.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Cabo Cleaning | Free Villa Care Quote Los Cabos",
    description:
      "Request a free quote for villa cleaning, butler service, or breakfast preparation in Los Cabos. WhatsApp or email us.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactForm />
    </div>
  );
}
