import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ObfuscatedEmailLink from "./obfuscated-email-link";

export default async function SiteFooter() {
  const t = await getTranslations("nav");

  return (
    <footer className="flex flex-col items-start gap-4 border-t border-ink bg-ink px-6 py-8 text-cream sm:flex-row sm:items-center sm:justify-between md:px-16 md:py-12">
      <Link href="/" className="font-grotesk text-body">
        {t("backToPortfolio")}
      </Link>
      <div className="flex gap-6 font-grotesk text-meta">
        <ObfuscatedEmailLink />
        <a href="https://github.com/LancelotThore">GitHub ↗</a>
      </div>
    </footer>
  );
}
