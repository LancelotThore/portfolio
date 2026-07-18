import { getTranslations, setRequestLocale } from "next-intl/server";
import ProjectRow from "@/components/project-row";
import Section from "@/components/section";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const hero = await getTranslations("hero");
  const projects = await getTranslations("projects");
  const background = await getTranslations("background");
  const skills = await getTranslations("skills");
  const contact = await getTranslations("contact");

  return (
    <>
      <main
        id="top"
        className="animate-fade-up px-6 pt-12 pb-8 md:px-16 md:pt-30 md:pb-22"
      >
        <p className="font-grotesk text-body tracking-label uppercase">
          {hero("kicker")}
        </p>
        <h1 className="mt-5 text-hero-mobile md:text-hero">Lancelot Thoré</h1>
        <p className="mt-8 max-w-160 text-xl leading-normal font-serif italic md:text-lede">
          {hero("subtitle")}
        </p>
        <div className="mt-12 flex gap-4 font-grotesk text-body">
          <a
            href="mailto:lancelot.thore@gmail.com"
            className="border border-ink bg-ink px-8 py-3.5 text-cream transition hover:opacity-85"
          >
            {hero("ctaContact")}
          </a>
          <a
            href="#projets"
            className="border border-ink px-8 py-3.5 transition hover:bg-ink hover:text-cream"
          >
            {hero("ctaProjects")}
          </a>
        </div>
        <p className="mt-10 font-grotesk text-meta text-ink-muted">
          {hero("availability")}
        </p>
      </main>

      <Section id="projets">
        <div className="mb-12">
          <h2 className="text-section">{projects("heading")}</h2>
        </div>
        <div className="flex flex-col border-b border-divider">
          <ProjectRow
            index="01"
            title="L'Agendary"
            description={
              locale === "fr"
                ? "Application web de gestion d'événements : création, recherche avec filtres, calendrier personnel, authentification JWT, backoffice d'administration. Projet de groupe conteneurisé avec Docker."
                : "Event management web app: creation, filtered search, personal calendar, JWT authentication, admin backoffice. Group project, containerised with Docker."
            }
            stack={["Next.js", "Symfony", "MySQL", "Docker"]}
            href="https://github.com/LancelotThore/l-agendary"
            externalLinkLabel={projects("externalLinkLabel")}
          />
          <ProjectRow
            index="02"
            title={projects("items.dispoIntervenants.title")}
            description={projects("items.dispoIntervenants.description")}
            stack={["Next.js", "TypeScript", "PostgreSQL", "Docker"]}
            href="https://github.com/LancelotThore/projet-dispo-intervenants"
            externalLinkLabel={projects("externalLinkLabel")}
          />
          <ProjectRow
            index="03"
            title={projects("items.nintendo.title")}
            description={projects("items.nintendo.description")}
            stack={["Next.js", "React", "CSS responsive"]}
            href="https://github.com/LancelotThore/nintendo-stardew-valley"
            externalLinkLabel={projects("externalLinkLabel")}
          />
        </div>
        <div className="mt-7 flex flex-col items-start gap-4 md:flex-row md:items-baseline md:justify-between">
          <p className="font-grotesk text-meta text-ink-muted">
            {projects("note")}
          </p>
          <Link
            href="/projets"
            className="shrink-0 border border-ink px-6.5 py-3 font-grotesk text-body transition hover:bg-ink hover:text-cream md:ml-8"
          >
            {projects("cta")}
          </Link>
        </div>
      </Section>

      <section
        id="parcours"
        className="grid grid-cols-1 border-t border-ink md:grid-cols-2"
      >
        <div className="px-6 py-12 md:border-r md:border-ink md:py-18 md:pr-12 md:pl-16">
          <h2 className="mb-10 text-section">
            {background("experienceHeading")}
          </h2>
          <div className="flex flex-col gap-9">
            <div>
              <p className="text-entry">
                {background("experience.axencoAlternance.title")}
              </p>
              <p className="mt-1.5 mb-3 font-grotesk text-meta text-ink-muted">
                Groupe Axenco, Pont-Évêque — 2024 · 2025
              </p>
              <p className="font-grotesk text-body text-ink-soft">
                {background("experience.axencoAlternance.description")}
              </p>
            </div>
            <div>
              <p className="text-entry">
                {background("experience.axencoStage.title")}
              </p>
              <p className="mt-1.5 mb-3 font-grotesk text-meta text-ink-muted">
                Groupe Axenco, Pont-Évêque — avril · juin 2024
              </p>
              <p className="font-grotesk text-body text-ink-soft">
                {background("experience.axencoStage.description")}
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 py-12 md:py-18 md:pr-16 md:pl-12">
          <h2 className="mb-10 text-section">
            {background("educationHeading")}
          </h2>
          <div className="flex flex-col gap-9">
            <div>
              <p className="text-entry">
                Master Architecture &amp; Développement d&apos;application
              </p>
              <p className="mt-1.5 font-grotesk text-meta text-ink-muted">
                {background("education.coda.meta")}
              </p>
            </div>
            <div>
              <p className="text-entry">
                BUT MMI — Métiers du Multimédia et de l&apos;Internet
              </p>
              <p className="mt-1.5 font-grotesk text-meta text-ink-muted">
                {background("education.mmi.meta")}
              </p>
            </div>
            <div>
              <p className="text-entry">Baccalauréat général — NSI · SES</p>
              <p className="mt-1.5 font-grotesk text-meta text-ink-muted">
                {background("education.bac.meta")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section id="competences">
        <h2 className="mb-12 text-section">{skills("heading")}</h2>
        <div className="grid grid-cols-1 gap-8 font-grotesk sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          <div>
            <p className="mb-3.5 text-label text-ink-muted uppercase">
              Langages
            </p>
            <p className="text-list">
              HTML / CSS (SASS, Tailwind), JavaScript, TypeScript, PHP, Python
            </p>
          </div>
          <div>
            <p className="mb-3.5 text-label text-ink-muted uppercase">
              Frameworks &amp; CMS
            </p>
            <p className="text-list">
              React, Next.js, Symfony, Vite, WordPress, SPIP
            </p>
          </div>
          <div>
            <p className="mb-3.5 text-label text-ink-muted uppercase">
              Front-end
            </p>
            <p className="text-list">
              Intégration responsive, DOM, Fetch API, templating, p5.js,
              Three.js, ml5.js
            </p>
          </div>
          <div>
            <p className="mb-3.5 text-label text-ink-muted uppercase">
              Back-end
            </p>
            <p className="text-list">API REST, POO (PHP), sécurité applicative</p>
          </div>
          <div>
            <p className="mb-3.5 text-label text-ink-muted uppercase">
              {skills("categories.databases.label")}
            </p>
            <p className="text-list">SQL (MySQL, PostgreSQL), NoSQL (MongoDB)</p>
          </div>
          <div>
            <p className="mb-3.5 text-label text-ink-muted uppercase">
              {skills("categories.tools.label")}
            </p>
            <p className="text-list">
              Git / GitHub / GitLab, Docker, Figma, Linux / LAMP, suite Adobe
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap gap-3 font-grotesk text-meta">
          <span className="rounded-full border border-ink px-5 py-2">
            {skills("languagesSpoken.french")}
          </span>
          <span className="rounded-full border border-ink px-5 py-2">
            {skills("languagesSpoken.english")}
          </span>
          <span className="rounded-full border border-ink px-5 py-2">
            {skills("languagesSpoken.italian")}
          </span>
        </div>
      </Section>

      <section
        id="contact"
        className="border-t border-ink bg-ink px-6 py-16 text-cream md:px-16 md:py-24"
      >
        <h2 className="text-4xl md:text-contact">{contact("heading")}</h2>
        <p className="mt-6 max-w-180 text-xl leading-normal font-serif text-cream-soft italic md:text-lede-sm">
          {contact("subtitle")}
        </p>
        <div className="mt-12 flex flex-wrap gap-4 font-grotesk text-body">
          <a
            href="mailto:lancelot.thore@gmail.com"
            className="bg-cream px-8 py-3.5 text-ink"
          >
            lancelot.thore@gmail.com
          </a>
          <a
            href="https://github.com/LancelotThore"
            className="border border-cream px-8 py-3.5"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lancelot-thor%C3%A9"
            className="border border-cream px-8 py-3.5"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-22 flex flex-col gap-2 border-t border-divider-dark pt-7 font-grotesk text-label text-cream-muted sm:flex-row sm:justify-between">
          <span>© 2026 Lancelot Thoré</span>
          <span>Ligny-le-Ribault · Orléans, France</span>
          <span>+33 6 02 63 18 37</span>
        </div>
      </section>
    </>
  );
}
