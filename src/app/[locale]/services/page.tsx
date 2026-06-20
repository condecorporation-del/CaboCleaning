import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium villa cleaning, butler service, breakfast preparation, deep cleaning, and Airbnb/VRBO turnover in Los Cabos.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <ServicesSection />
      <ContactForm />
    </div>
  );
}
