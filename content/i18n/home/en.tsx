import Link from "next/link";
import { homeFaqs } from "@/content/faqs";
import { HomeArticle } from "@/content/home";
import { siteConfig } from "@/lib/site";
import type { HomeContent } from "../types";

const link = "text-text underline underline-offset-4";

export const homeEn: HomeContent = {
  title: siteConfig.title,
  description: siteConfig.description,
  h1: "Discord Fonts Generator – Copy & Paste Cool Discord Font Styles",
  intro:
    "Turn any text into {count} Discord fonts, from bold and cursive to gothic and glitch. Copy a style and paste it into your Discord name, nickname, server or messages. Free, private and no sign-up.",
  generatorLabel: "Discord font generator",
  formattingTitle: "Discord Text Formatting Helper",
  formattingIntro: (
    <>
      Bold, spoilers, headers and colored text use Discord’s built-in markdown. Type once and copy the syntax,
      or read the{" "}
      <Link href="/discord-text-formatting" className={link}>
        full formatting guide
      </Link>
      . For event times and countdowns, try the{" "}
      <Link href="/discord-timestamp-generator" className={link}>
        timestamp generator
      </Link>
      .
    </>
  ),
  popularTitle: "Popular Discord Font Styles",
  popularIntro: "Focused generators for one look at a time, each with tips on where it works best.",
  moreGenerators: "More generators:",
  socialTitle: "Social Media Fonts",
  socialIntro: "Fancy text generators made for each app, with tips on what works in names, bios and posts.",
  gamingTitle: "Gaming Fonts",
  gamingIntro: "Stylish name generators for your favourite games, with each game's name rules explained.",
  faqHeading: "Discord Font FAQ",
  faqs: homeFaqs,
  Article: HomeArticle,
};
