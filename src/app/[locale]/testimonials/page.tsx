import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what villa owners in Los Cabos say about Cabo Cleaning's luxury villa care and butler service.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      <TestimonialsSection />
      <ContactForm />
    </div>
  );
}
