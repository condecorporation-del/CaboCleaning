import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <ServicesSection />
      <TeamSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactForm />
    </>
  );
}
