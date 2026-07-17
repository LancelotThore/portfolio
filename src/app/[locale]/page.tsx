import { getTranslations, setRequestLocale } from "next-intl/server";
import LocaleSwitcher from "@/components/locale-switcher";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hero");

  return (
    <main className="px-16 py-24">
      <div className="flex items-baseline justify-between">
        <p className="font-grotesk text-body tracking-[0.14em] uppercase">
          {t("kicker")}
        </p>
        <LocaleSwitcher />
      </div>
      <h1 className="text-hero mt-5">Lancelot Thoré</h1>
    </main>
  );
}
