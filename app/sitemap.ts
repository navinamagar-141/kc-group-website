import type { MetadataRoute } from "next";
import { company } from "@/lib/site-config";
import { servicePages } from "@/lib/service-pages";
import { locationPages } from "@/lib/location-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/cleaning",
    "/removals",
    "/commercial",
    "/about",
    "/gallery",
    "/reviews",
    "/contact",
    "/quote",
    "/privacy-policy",
    "/terms",
  ];

  const dynamicRoutes = [
    ...servicePages.map((p) => `/${p.slug}`),
    ...locationPages.map((p) => `/${p.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${company.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
