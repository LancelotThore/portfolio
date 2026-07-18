import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hero");

  return (
    <main
      id="top"
      className="animate-fade-up px-6 pt-12 pb-8 md:px-16 md:pt-30 md:pb-22"
    >
      <p className="font-grotesk text-body tracking-label uppercase">
        {t("kicker")}
      </p>
      <h1 className="mt-5 text-hero-mobile md:text-hero">Lancelot Thoré</h1>
    </main>
  );
}
