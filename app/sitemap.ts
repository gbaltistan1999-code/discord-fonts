import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { generatorPages } from "@/content/generator-pages";
import { platformPages } from "@/content/platforms";
import { stylePages } from "@/content/style-pages";
import { localePath, prefixedLocales, translatedPaths } from "@/lib/i18n";
import { languageAlternates } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastUpdated);
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly") => {
    const languages = languageAlternates(path);
    return {
      url: absoluteUrl(path),
      lastModified,
      changeFrequency,
      priority,
      ...(languages && { alternates: { languages } }),
    };
  };

  // Translated versions of each translated page, each listing the same alternates.
  const translated = translatedPaths.flatMap((path) =>
    prefixedLocales.map((locale) => ({
      ...entry(path, path === "/" ? 0.9 : 0.7, "weekly"),
      url: absoluteUrl(localePath(locale, path)),
    })),
  );

  return [
    entry("/", 1, "weekly"),
    ...translated,
    ...generatorPages.map((page) => entry(page.path, 0.8, "monthly")),
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
