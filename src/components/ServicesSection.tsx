"use client";

import { useTranslations } from "next-intl";

const serviceKeys = ["villaCleaning", "butler", "breakfast", "deepCleaning", "turnover"] as const;

const serviceIcons: Record<string, string> = {
  villaCleaning: "🧹",
  butler: "🤵",
  breakfast: "🍳",
  deepCleaning: "✨",
  turnover: "🔄",
};

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-[#2D2D2D] mb-4">
            {t("title")}
          </h2>
          <p className="text-[#8B8581] max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((key) => (
            <div
              key={key}
              className="group bg-white border border-[#E8E2D9] p-8 hover:border-[#C4A265] hover:shadow-lg transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{serviceIcons[key]}</span>
              <h3 className="font-display text-xl text-[#2D2D2D] mb-3 group-hover:text-[#C4A265] transition-colors">
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm text-[#5C5856] leading-relaxed">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
