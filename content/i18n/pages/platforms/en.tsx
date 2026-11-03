import { platformOutro, platformPages } from "@/content/platforms";
import type { PlatformPagesContent } from "../../types";

export const platformsEn: PlatformPagesContent = {
  pages: Object.fromEntries(
    platformPages.map((page) => [
      page.slug,
      {
        h1: page.h1,
        title: page.title,
        description: page.description,
        intro: page.intro,
        sampleText: page.sampleText,
        featuredLabel: page.featured.label,
        faqs: page.faqs,
        body: page.body,
      },
    ]),
  ),
  breadcrumb: "{name} Fonts",
  toolLabel: "{name} font generator",
  faqHeading: "{name} Fonts FAQ",
  notAffiliated: "This site is not affiliated with or endorsed by {name}.",
  outro: platformOutro,
};
