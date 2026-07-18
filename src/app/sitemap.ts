import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = ["/", "/projets"];

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
