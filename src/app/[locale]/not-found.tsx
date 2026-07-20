import { getTranslations } from "next-intl/server";
import Header from "@/components/header";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <>
      <Header variant="projects" />
      <main className="flex flex-col items-start px-6 py-24 md:px-16 md:py-32">
        <p className="font-grotesk text-body tracking-label text-ink-muted uppercase">
          {t("code")}
        </p>
        <h1 className="mt-5 text-hero-mobile md:text-hero-sm">
          {t("heading")}
        </h1>
        <p className="mt-6 font-grotesk text-body text-ink-soft">
          {t("message")}
        </p>
        <Link
          href="/"
          className="mt-10 border border-ink px-8 py-3.5 font-grotesk text-body transition hover:bg-ink hover:text-cream"
        >
          {t("cta")}
        </Link>
      </main>
    </>
  );
}
