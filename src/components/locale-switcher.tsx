"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("localeSwitcher");
  const target = locale === "fr" ? "en" : "fr";

  return (
    <button
      type="button"
      aria-label={`${target.toUpperCase()} — ${t("ariaLabel")}`}
      onClick={() => router.replace(pathname, { locale: target })}
      className="cursor-pointer border border-ink px-4 py-2 font-grotesk text-label tracking-widest uppercase transition-colors hover:bg-ink hover:text-cream"
    >
      {target.toUpperCase()}
    </button>
  );
}
