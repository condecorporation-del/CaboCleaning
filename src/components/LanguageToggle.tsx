"use client";

import { useLocale } from "next-intl";

export default function LanguageToggle() {
  const locale = useLocale();

  const switchTo = locale === "en" ? "es" : "en";
  const label = switchTo === "en" ? "EN" : "ES";

  return (
    <a
      href={`/${switchTo}`}
      className="text-xs font-medium px-3 py-1.5 rounded-full border border-[#D4C5B2] text-[#5C5856] hover:bg-[#2D2D2D] hover:text-[#FAF8F5] hover:border-[#2D2D2D] transition-all tracking-wider"
    >
      {label}
    </a>
  );
}
