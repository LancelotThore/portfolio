import type { MetadataRoute } from "next";
import { detailedProjects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

const routes = [
  "/",
  "/projets",
  ...detailedProjects.map((project) => `/projets/${project.urlSlug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    alternates: {
      languages: {
        fr: `${siteUrl}${route}`,
        en: route === "/" ? `${siteUrl}/en` : `${siteUrl}/en${route}`,
      },
    },
  }));
}
