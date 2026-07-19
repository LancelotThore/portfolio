import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/header";
import ObfuscatedEmailLink from "@/components/obfuscated-email-link";
import ProjectRow from "@/components/project-row";
import Reveal from "@/components/reveal";
import { projects, type ProjectGroup } from "@/data/projects";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

const groupOrder: ProjectGroup[] = ["formation", "personal", "company"];

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projectsPage" });
  const title = t("metaTitle");
  const description = t("subtitle");
  const path = locale === "fr" ? "/projets" : "/en/projets";

  return {
    title,
    description,
    alternates: {
      languages: {
        fr: "/projets",
        en: "/en/projets",
        "x-default": "/projets",
      },
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

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projectsPage");
  const nav = await getTranslations("nav");

  return (
    <>
      <Header variant="projects" />

      <main className="px-6 pt-16 pb-8 md:px-16 md:pt-24 md:pb-14">
        <h1 className="text-hero-sm">{t("heading")}</h1>
        <p className="mt-6 max-w-160 text-xl leading-normal font-serif italic md:text-lede-sm">
          {t("subtitle")}
        </p>
      </main>

      {groupOrder.map((group) => {
        const groupProjects = projects.filter((p) => p.group === group);

        return (
          <Reveal key={group} className="border-t border-ink p-6 md:p-16">
            <p className="mb-8 font-grotesk text-label text-ink-muted uppercase">
              {t(`groups.${group}`)}
            </p>
            <div className="flex flex-col border-b border-divider">
              {groupProjects.map((project) => (
                <ProjectRow
                  key={project.slug}
                  size="list"
                  index={String(project.year)}
                  title={t(`items.${project.slug}.title`)}
                  description={t(`items.${project.slug}.description`)}
                  stack={project.stack}
                  href={project.href}
                  externalLinkLabel={t("externalLinkLabel")}
                />
              ))}
            </div>
            {group === "company" && (
              <p className="mt-7 font-grotesk text-meta text-ink-muted">
                {t("companyNote")}
              </p>
            )}
          </Reveal>
        );
      })}

      <footer className="flex flex-col items-start gap-4 border-t border-ink bg-ink px-6 py-8 text-cream sm:flex-row sm:items-center sm:justify-between md:px-16 md:py-12">
        <Link href="/" className="font-grotesk text-body">
          {nav("backToPortfolio")}
        </Link>
        <div className="flex gap-6 font-grotesk text-meta">
          <ObfuscatedEmailLink />
          <a href="https://github.com/LancelotThore">
            {t("githubLabel")}
          </a>
        </div>
      </footer>
    </>
  );
}
