import TeamSection from "@/components/TeamSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet Marlon and Cecilia — the certified butler and hospitality expert behind Cabo Cleaning in Los Cabos.",
};

export default function TeamPage() {
  return (
    <div className="pt-24">
      <TeamSection />
      <ContactForm />
    </div>
  );
}
