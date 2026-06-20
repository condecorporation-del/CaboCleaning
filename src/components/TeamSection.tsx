"use client";

import { useTranslations } from "next-intl";

export default function TeamSection() {
  const t = useTranslations("team");

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-[#2D2D2D] mb-4">
            {t("title")}
          </h2>
          <p className="text-[#8B8581] max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Marlon */}
          <div className="text-center group">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-[#E8E2D9] flex items-center justify-center text-6xl overflow-hidden">
              <div className="text-center text-[#8B8581] text-sm">📷<br />Photo<br />Marlon</div>
            </div>
            <h3 className="font-display text-2xl text-[#2D2D2D] mb-1">
              {t("marlon.name")}
            </h3>
            <p className="text-xs tracking-[0.2em] uppercase text-[#C4A265] mb-4">
              {t("marlon.role")}
            </p>
            <p className="text-sm text-[#5C5856] leading-relaxed max-w-sm mx-auto">
              {t("marlon.bio")}
            </p>
          </div>

          {/* Cecilia */}
          <div className="text-center group">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-[#E8E2D9] flex items-center justify-center text-6xl overflow-hidden">
              <div className="text-center text-[#8B8581] text-sm">📷<br />Photo<br />Cecilia</div>
            </div>
            <h3 className="font-display text-2xl text-[#2D2D2D] mb-1">
              {t("cecilia.name")}
            </h3>
            <p className="text-xs tracking-[0.2em] uppercase text-[#C4A265] mb-4">
              {t("cecilia.role")}
            </p>
            <p className="text-sm text-[#5C5856] leading-relaxed max-w-sm mx-auto">
              {t("cecilia.bio")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
