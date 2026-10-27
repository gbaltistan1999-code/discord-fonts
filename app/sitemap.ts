import type { MetadataRoute } from "next";
import { stylePages } from "@/content/style-pages";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastUpdated);
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly") => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "weekly"),
    ...stylePages.map((page) => entry(`/discord-font-generator/${page.slug}`, 0.8, "monthly")),
    entry("/discord-text-formatting", 0.8, "monthly"),
    entry("/about", 0.4, "yearly"),
    entry("/contact", 0.3, "yearly"),
    entry("/privacy-policy", 0.2, "yearly"),
    entry("/terms", 0.2, "yearly"),
  ];
}
