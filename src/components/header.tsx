import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./locale-switcher";
import MobileNav from "./mobile-nav";

type Props = {
  variant?: "home" | "projects";
};

export default async function Header({ variant = "home" }: Props) {
  const t = await getTranslations("nav");

  const links = [
    { href: "#projets", label: t("projects") },
    { href: "#parcours", label: t("background") },
    { href: "#competences", label: t("skills") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-20 flex h-21 items-center justify-between border-b border-ink bg-cream px-6 font-grotesk text-body md:px-16">
      <Link href="/" className="shrink-0 font-bold tracking-logo">
        LT
      </Link>
      {variant === "home" ? (
        <nav className="hidden md:flex md:flex-1 md:justify-center md:gap-9">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      ) : (
        <Link href="/" className="flex-1 text-center">
          {t("backToPortfolio")}
        </Link>
      )}
      <div className="flex shrink-0 items-center gap-3">
        {variant === "home" && (
          <MobileNav links={links} menuLabel={t("menuLabel")} />
        )}
        <LocaleSwitcher />
      </div>
    </header>
  );
}
