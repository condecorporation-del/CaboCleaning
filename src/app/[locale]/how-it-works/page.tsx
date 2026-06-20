import HowItWorksSection from "@/components/HowItWorksSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Four simple steps to five-star villa care in Los Cabos. Free site visit, custom proposal, and hotel-grade service.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-24">
      <HowItWorksSection />
      <ContactForm />
    </div>
  );
}
