"use client";

import { useTranslations, useLocale } from "next-intl";

// Placeholder testimonials until real ones are provided by Marlon
const placeholderTestimonials = [
  {
    name: "Property Owner, Pedregal",
    text: {
      en: "\"Marlon and his team treat our villa like it's their own. Every guest comments on how immaculate the property is. They've become an essential part of our rental operation.\"",
      es: "\"Marlon y su equipo tratan nuestra villa como si fuera propia. Cada huésped comenta lo impecable que está la propiedad. Se han vuelto una parte esencial de nuestra operación de rentas.\"",
    },
    rating: 5,
  },
  {
    name: "Airbnb Host, Palmilla",
    text: {
      en: "\"The breakfast service is a game-changer. Our guests rave about the fresh Mexican breakfasts. I've never had a cleaning service this professional before.\"",
      es: "\"El servicio de desayunos cambia todo. Nuestros huéspedes quedan encantados con los desayunos mexicanos frescos. Nunca había tenido un servicio de limpieza tan profesional.\"",
    },
    rating: 5,
  },
  {
    name: "Villa Manager, Quivira",
    text: {
      en: "\"Having a certified butler on call for our villa is a luxury our clients expect. Cabo Cleaning delivers every single time — discrete, professional, and thorough.\"",
      es: "\"Tener un mayordomo certificado disponible para nuestra villa es un lujo que nuestros clientes esperan. Cabo Cleaning cumple siempre — discreto, profesional y minucioso.\"",
    },
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale();

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-[#2D2D2D] mb-4">
            {t("title")}
          </h2>
          <p className="text-[#8B8581] max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {placeholderTestimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#FAF8F5] border border-[#E8E2D9] p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <span key={j} className="text-[#C4A265]">★</span>
                ))}
              </div>

              <p className="text-sm text-[#5C5856] leading-relaxed mb-4 italic">
                {locale === "es" ? testimonial.text.es : testimonial.text.en}
              </p>

              <p className="text-xs tracking-wide text-[#8B8581] font-medium">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
