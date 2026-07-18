import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const title = t("title");
  const description = t("description");
  const path = locale === "fr" ? "/" : "/en";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      languages: { fr: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Lancelot Thoré",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${instrumentSerif.variable} ${spaceGrotesk.variable} scroll-smooth antialiased`}
    >
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
