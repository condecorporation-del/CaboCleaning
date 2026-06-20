import TeamSection from "@/components/TeamSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cabocleaning.com"),
  title: "Our Team",
  description:
    "Meet Marlon and Cecilia — the certified butler and hospitality expert behind Cabo Cleaning in Los Cabos.",
  alternates: {
    canonical: "/team",
    languages: {
      en: "/en/team",
      es: "/es/team",
    },
  },
  openGraph: {
    title: "Meet Our Team | Cabo Cleaning Los Cabos",
    description:
      "Meet Marlon and Cecilia — the certified butler and hospitality expert behind Cabo Cleaning in Los Cabos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team | Cabo Cleaning Los Cabos",
    description:
      "Meet Marlon and Cecilia — the certified butler and hospitality expert behind Cabo Cleaning in Los Cabos.",
  },
};

export default function TeamPage() {
  return (
    <div className="pt-24">
      <TeamSection />
      <ContactForm />
    </div>
  );
}
