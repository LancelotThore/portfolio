export type ProjectGroup = "formation" | "personal" | "company";

export type Project = {
  slug: string;
  year: number;
  group: ProjectGroup;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "lAgendary",
    year: 2025,
    group: "formation",
    stack: ["Next.js", "Symfony", "MySQL", "Docker"],
    href: "https://github.com/LancelotThore/l-agendary",
  },
  {
    slug: "dispoIntervenants",
    year: 2024,
    group: "formation",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    href: "https://github.com/LancelotThore/projet-dispo-intervenants",
  },
  {
    slug: "nintendo",
    year: 2024,
    group: "formation",
    stack: ["Next.js", "React", "CSS responsive"],
    href: "https://github.com/LancelotThore/nintendo-stardew-valley",
  },
  {
    slug: "robinLeRequin",
    year: 2024,
    group: "formation",
    stack: ["React", "Vite", "Tailwind CSS"],
    href: "https://github.com/LancelotThore/Robin-le-requin",
  },
  {
    slug: "ecoQuest",
    year: 2024,
    group: "formation",
    stack: ["A-Frame", "WebVR", "JavaScript"],
    href: "https://github.com/LancelotThore/eco-quest",
  },
  {
    slug: "tsudoi",
    year: 2026,
    group: "personal",
    stack: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    slug: "irminsul",
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
