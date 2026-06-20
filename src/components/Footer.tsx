"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#2D2D2D] text-[#D4C5B2]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Cabo Cleaning" className="h-10 w-10 object-contain" />
              <span className="font-display text-lg text-[#FAF8F5]">Cabo Cleaning</span>
            </Link>
            <p className="text-sm leading-relaxed text-[#8B8581]">
              Luxury villa care, butler service, and breakfast preparation for
              the finest properties in Los Cabos.
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-[#FAF8F5] mb-4">{t("areas")}</h4>
            <p className="text-sm leading-relaxed text-[#8B8581]">
              {t("areasList")}
            </p>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-display text-[#FAF8F5] mb-4">{t("platforms")}</h4>
            <div className="flex gap-3 text-sm text-[#8B8581]">
              <span>Airbnb</span>
              <span>·</span>
              <span>VRBO</span>
              <span>·</span>
              <span>Booking</span>
              <span>·</span>
              <span>TripAdvisor</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#5C5856]/30 text-center text-sm text-[#8B8581]">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
