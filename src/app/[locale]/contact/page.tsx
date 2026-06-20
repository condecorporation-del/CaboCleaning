import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free quote for villa cleaning, butler service, or breakfast preparation in Los Cabos. WhatsApp or email us.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactForm />
    </div>
  );
}
