import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cabocleaning.com"),
  title: "Testimonials",
  description:
    "Read what villa owners in Los Cabos say about Cabo Cleaning's luxury villa care and butler service.",
  alternates: {
    canonical: "/testimonials",
    languages: {
      en: "/en/testimonials",
      es: "/es/testimonials",
    },
  },
  openGraph: {
    title: "Client Testimonials | Cabo Cleaning Los Cabos",
    description:
      "Read what villa owners in Los Cabos say about Cabo Cleaning's luxury villa care and butler service.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Cabo Cleaning Los Cabos",
    description:
      "Read what villa owners in Los Cabos say about Cabo Cleaning's luxury villa care and butler service.",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      <TestimonialsSection />
      <ContactForm />
    </div>
  );
}
