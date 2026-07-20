import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "notFound" });

  return {
    title: t("metaTitle"),
    robots: { index: false, follow: false },
  };
}

// Catches any URL that doesn't match a real page. Without this, an
// unmatched path never reaches the [locale] segment at all, so
// not-found.tsx never renders — Next.js falls back to its generic
// built-in 404 instead. Metadata lives here (not in not-found.tsx)
// since the <head> resolves from the matched segment, not the
// not-found boundary that replaces its body.
export default async function CatchAll({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  notFound();
}
