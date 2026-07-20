import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { detailedProjects } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    detailedProjects.map((project) => ({ locale, slug: project.urlSlug })),
  );
}

async function notFoundMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "notFound" });
  return {
    title: t("metaTitle"),
    robots: { index: false, follow: false },
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = detailedProjects.find((p) => p.urlSlug === slug);
  if (!project) return notFoundMetadata(locale);

  const t = await getTranslations({ locale, namespace: "projectDetail" });
  const title = `${t(`items.${project.slug}.name`)} — Lancelot Thoré`;
  const description = t(`items.${project.slug}.tagline`);
  const path = locale === "fr" ? `/projets/${slug}` : `/en/projets/${slug}`;

  return {
    title,
    description,
    alternates: {
      languages: {
        fr: `/projets/${slug}`,
        en: `/en/projets/${slug}`,
        "x-default": `/projets/${slug}`,
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

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const index = detailedProjects.findIndex((p) => p.urlSlug === slug);
  if (index === -1) notFound();

  setRequestLocale(locale);
  const t = await getTranslations("projectDetail");

  const project = detailedProjects[index];
  const prev =
    detailedProjects[
      (index - 1 + detailedProjects.length) % detailedProjects.length
    ];
  const next = detailedProjects[(index + 1) % detailedProjects.length];

  const name = t(`items.${project.slug}.name`);
  const tagline = t(`items.${project.slug}.tagline`);
  const description = t(`items.${project.slug}.description`);
  const context = t(`items.${project.slug}.context`);
  const role = t(`items.${project.slug}.role`);
  const groupLabel = t(`groupLabels.${project.group}`);

  const images = project.images ?? [];
  const [heroImage, ...secondaryImages] = images;

  return (
    <>
      <Header variant="project-detail" />

      <main className="animate-fade-up px-6 pt-16 pb-16 md:px-16 md:pt-24 md:pb-16">
        <div className="flex flex-wrap items-baseline gap-4 font-grotesk text-label text-ink-muted uppercase">
          <span>{project.year}</span>
          <span>·</span>
          <span>{groupLabel}</span>
        </div>
        <h1 className="mt-5 text-hero-mobile md:text-hero-sm">{name}</h1>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink px-4.5 py-1.75 font-grotesk text-meta"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-9 max-w-205 font-serif text-lede-sm italic">
          {tagline}
        </p>
        <div className="mt-11 flex flex-wrap gap-4 font-grotesk text-body">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink bg-ink px-8 py-3.5 text-cream transition hover:opacity-85"
            >
              {t("viewLiveCta")}
            </a>
          )}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink px-8 py-3.5 transition hover:bg-ink hover:text-cream"
            >
              {t("githubCta")}
            </a>
          )}
          {!project.live && !project.href && (
            <span className="border border-divider px-8 py-3.5 font-grotesk text-meta text-ink-muted">
              {t("privateLabel")}
            </span>
          )}
        </div>
      </main>

      <div className="grid grid-cols-1 gap-16 border-t border-ink px-6 py-16 md:grid-project-detail md:px-16">
        <div>
          <p className="mb-6 font-grotesk text-label text-ink-muted uppercase">
            {t("aboutLabel")}
          </p>
          <div className="max-w-170 font-grotesk text-list text-ink-soft">
            {description.split("\n\n").map((paragraph, i) => (
              <p key={paragraph.slice(0, 20)} className={i > 0 ? "mt-6" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-7 border-t border-divider pt-10 font-grotesk md:border-t-0 md:border-l md:pt-0 md:pl-10">
          <div>
            <p className="mb-2 text-label text-ink-muted uppercase">
              {t("yearLabel")}
            </p>
            <p className="text-list">{project.year}</p>
          </div>
          <div>
            <p className="mb-2 text-label text-ink-muted uppercase">
              {t("contextLabel")}
            </p>
            <p className="text-list">{context}</p>
          </div>
          <div>
            <p className="mb-2 text-label text-ink-muted uppercase">
              {t("roleLabel")}
            </p>
            <p className="text-list">{role}</p>
          </div>
          <div>
            <p className="mb-2 text-label text-ink-muted uppercase">
              {t("stackLabel")}
            </p>
            <p className="text-list">{project.stack.join(" · ")}</p>
          </div>
        </div>
      </div>

      {heroImage && (
        <div className="border-t border-ink px-6 py-16 md:px-16">
          <p className="mb-8 font-grotesk text-label text-ink-muted uppercase">
            {t("screenshotsLabel")}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative aspect-video border border-divider md:col-span-2 md:aspect-auto md:h-140">
              <Image
                src={heroImage}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
            {secondaryImages.map((src) => (
              <div
                key={src}
                className="relative aspect-video border border-divider md:aspect-auto md:h-85"
              >
                <Image
                  src={src}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, 590px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 border-t border-ink md:grid-cols-2">
        <Link
          href={`/projets/${prev.urlSlug}`}
          className="border-b border-divider px-6 py-10 transition hover:bg-cream-hover md:border-r md:border-b-0 md:px-16"
        >
          <p className="mb-2 font-grotesk text-label text-ink-muted uppercase">
            {t("prevLabel")}
          </p>
          <p className="text-entry">
            ← {t(`items.${prev.slug}.name`)}
          </p>
        </Link>
        <Link
          href={`/projets/${next.urlSlug}`}
          className="px-6 py-10 text-right transition hover:bg-cream-hover md:px-16"
        >
          <p className="mb-2 font-grotesk text-label text-ink-muted uppercase">
            {t("nextLabel")}
          </p>
          <p className="text-entry">
            {t(`items.${next.slug}.name`)} →
          </p>
        </Link>
      </div>

      <SiteFooter />
    </>
  );
}
