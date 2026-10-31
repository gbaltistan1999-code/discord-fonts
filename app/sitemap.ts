import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { platformPages } from "@/content/platforms";
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
    ...platformPages.map((page) => entry(`/${page.slug}`, 0.7, "monthly")),
    entry("/discord-text-formatting", 0.8, "monthly"),
    entry("/blog", 0.7, "weekly"),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    entry("/about", 0.4, "yearly"),
    entry("/contact", 0.3, "yearly"),
    entry("/privacy-policy", 0.2, "yearly"),
    entry("/terms", 0.2, "yearly"),
  ];
}
