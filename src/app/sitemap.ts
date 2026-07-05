import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/utils";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((p) => ({
    url: absoluteUrl(`/projects/${p.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
