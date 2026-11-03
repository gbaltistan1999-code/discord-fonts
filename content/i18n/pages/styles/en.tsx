import Link from "next/link";
import { stylePages } from "@/content/style-pages";
import type { StylePagesContent } from "../../types";

export const stylesEn: StylePagesContent = {
  pages: Object.fromEntries(
    stylePages.map((page) => [
      page.slug,
      {
        name: `${page.name} Font Generator`,
        h1: page.h1,
        title: page.title,
        description: page.description,
        intro: page.intro,
        featuredLabel: page.featured.label,
        body: page.body,
      },
    ]),
  ),
  toolLabel: "Discord {name}",
  outro: (
    <p>
      Looking for more options? The main <Link href="/">Discord Fonts generator</Link> shows every style at
      once, including bold, cursive, gothic and glitch text.
    </p>
  ),
  moreHeading: "More Discord Font Generators",
};
