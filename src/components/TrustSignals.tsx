"use client";

import { useTranslations } from "next-intl";

const trustItems = [
  { key: "certified", icon: "🏅" },
  { key: "local", icon: "📍" },
  { key: "insured", icon: "🛡️" },
  { key: "freeVisit", icon: "✨" },
];

export default function TrustSignals() {
  const t = useTranslations("trustSignals");

  return (
    <section className="py-16 bg-white border-y border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item) => (
            <div key={item.key} className="text-center">
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="font-display text-[#2D2D2D] text-sm mb-1">
                {t(`${item.key}` as any)}
              </h3>
              <p className="text-xs text-[#8B8581]">
                {t(`${item.key}Desc` as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
