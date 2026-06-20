import Script from "next/script";

type BreadcrumbItem = {
  name: string;
  item: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  breadcrumbs: BreadcrumbItem[];
  faq?: FAQItem[];
  serviceName?: string;
  serviceDescription?: string;
};

export default function StructuredData({
  breadcrumbs,
  faq,
  serviceName,
  serviceDescription,
}: Props) {
  const baseUrl = "https://cabocleaning.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${baseUrl}${item.item}`,
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cabo Cleaning",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Premium villa cleaning, butler service, and breakfast preparation for luxury villas in Los Cabos.",
    email: "cabocleaning@proton.me",
    telephone: "+52 624 217 5935",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cabo San Lucas",
      addressRegion: "Baja California Sur",
      addressCountry: "MX",
    },
    sameAs: [
      "https://www.instagram.com/cabocleaning",
      "https://www.facebook.com/cabocleaning",
    ],
  };

  const faqSchema = faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  const serviceSchema =
    serviceName && serviceDescription
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: serviceName,
          description: serviceDescription,
          provider: {
            "@type": "Organization",
            name: "Cabo Cleaning",
          },
          areaServed: {
            "@type": "City",
            name: "Cabo San Lucas",
          },
        }
      : null;

  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {faqSchema && (
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {serviceSchema && (
        <Script
          id="schema-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
    </>
  );
}
