"use client";

import { useTranslations } from "next-intl";

const steps = ["step1", "step2", "step3", "step4"] as const;

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-[#2D2D2D] mb-4">
            {t("title")}
          </h2>
          <p className="text-[#8B8581] max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step} className="relative text-center">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-[#D4C5B2]" />
              )}

              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#C4A265]/10 flex items-center justify-center">
                <span className="font-display text-xl text-[#C4A265]">{i + 1}</span>
              </div>

              <h3 className="font-display text-lg text-[#2D2D2D] mb-3">
                {t(`${step}.title`)}
              </h3>
              <p className="text-sm text-[#5C5856] leading-relaxed">
                {t(`${step}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
