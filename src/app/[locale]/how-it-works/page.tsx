import HowItWorksSection from "@/components/HowItWorksSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cabocleaning.com"),
  title: "How It Works",
  description:
    "Four simple steps to five-star villa care in Los Cabos. Free site visit, custom proposal, and hotel-grade service.",
  alternates: {
    canonical: "/how-it-works",
    languages: {
      en: "/en/how-it-works",
      es: "/es/how-it-works",
    },
  },
  openGraph: {
    title: "How It Works | Cabo Cleaning Villa Care Process",
    description:
      "Four simple steps to five-star villa care in Los Cabos. Free site visit, custom proposal, and hotel-grade service.",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works | Cabo Cleaning Villa Care Process",
    description:
      "Four simple steps to five-star villa care in Los Cabos. Free site visit, custom proposal, and hotel-grade service.",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="pt-24">
      <HowItWorksSection />
      <ContactForm />
    </div>
  );
}
