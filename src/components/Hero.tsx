"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8E2D9] via-[#FAF8F5] to-[#D4C5B2]/30" />

      {/* Hero image — right side on desktop, background on mobile */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2">
        <img
          src="/home-hero-1.png"
          alt="Luxury villa in Los Cabos"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-[#FAF8F5]/40 lg:via-[#FAF8F5]/70 lg:to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl lg:max-w-xl">
          {/* Subtle label */}
          <p className="text-xs tracking-[0.3em] uppercase text-[#8B8581] mb-6">
            Los Cabos · Baja California Sur
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#2D2D2D] leading-tight mb-6">
            {t("headline")}
          </h1>

          <p className="text-lg sm:text-xl text-[#5C5856] leading-relaxed mb-10 max-w-xl">
            {t("subheadline")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#2D2D2D] text-[#FAF8F5] text-sm tracking-wide hover:bg-[#C4A265] transition-colors"
            >
              {t("cta")}
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center px-8 py-4 border border-[#D4C5B2] text-[#2D2D2D] text-sm tracking-wide hover:bg-[#FAF8F5] transition-colors"
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
