export type ProjectGroup = "formation" | "personal" | "company";

export type Project = {
  slug: string;
  /** kebab-case, used for /projets/[urlSlug] — undefined means no detail page (Axenco, no visuals agreement) */
  urlSlug?: string;
  year: number;
  group: ProjectGroup;
  stack: string[];
  href?: string;
  live?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "lAgendary",
    urlSlug: "l-agendary",
    year: 2025,
    group: "formation",
    stack: [
      "Next.js",
      "Symfony",
      "MySQL",
      "Docker",
      "Tailwind CSS",
      "Figma",
      "Git",
      "Trello",
    ],
    href: "https://github.com/LancelotThore/l-agendary",
    images: [
      "/projets/l-agendary/hero.webp",
      "/projets/l-agendary/addEvent.webp",
      "/projets/l-agendary/events.webp",
      "/projets/l-agendary/calendar.webp",
      "/projets/l-agendary/profile.webp",
    ],
  },
  {
    slug: "dispoIntervenants",
    urlSlug: "projet-dispo-intervenants",
    year: 2024,
    group: "formation",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    href: "https://github.com/LancelotThore/projet-dispo-intervenants",
  },
  {
    slug: "nintendo",
    urlSlug: "nintendo-stardew-valley",
    year: 2024,
    group: "formation",
    stack: ["Next.js", "React", "CSS responsive"],
    href: "https://github.com/LancelotThore/nintendo-stardew-valley",
  },
  {
    slug: "robinLeRequin",
    urlSlug: "robin-le-requin",
    year: 2024,
    group: "formation",
    stack: ["React", "Vite", "Tailwind CSS"],
    href: "https://github.com/LancelotThore/Robin-le-requin",
  },
  {
    slug: "ecoQuest",
    urlSlug: "eco-quest",
    year: 2024,
    group: "formation",
    stack: ["A-Frame", "WebVR", "JavaScript"],
    href: "https://github.com/LancelotThore/eco-quest",
  },
  {
    slug: "tsudoi",
    urlSlug: "tsudoi",
    year: 2026,
    group: "personal",
    stack: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    slug: "irminsul",
    urlSlug: "irminsul",
    year: 2025,
    group: "personal",
    stack: ["TypeScript", "Node.js", "discord.js"],
    href: "https://github.com/LancelotThore/irminsul",
  },
  {
    slug: "axencoDomotique",
    year: 2025,
    group: "company",
    stack: ["Python", "PySide6", "Figma"],
  },
  {
    slug: "axencoCms",
    year: 2024,
    group: "company",
    stack: ["WordPress", "SPIP"],
  },
];

/** Projects with their own detail page, in display/navigation order. */
export const detailedProjects = projects.filter(
  (p): p is Project & { urlSlug: string } => p.urlSlug !== undefined,
);
