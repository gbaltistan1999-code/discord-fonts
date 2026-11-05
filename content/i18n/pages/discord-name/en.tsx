import {
  DiscordNameArticle,
  discordNameFaqs,
  discordNamePage,
  discordNameRelated,
} from "@/content/discord-name";
import type { ToolPageContent } from "../../types";

export const discordNameEn: ToolPageContent = {
  name: discordNamePage.name,
  title: discordNamePage.title,
  description: discordNamePage.description,
  h1: discordNamePage.h1,
  intro: discordNamePage.intro,
  sampleText: discordNamePage.sampleText,
  toolLabel: "Discord name generator",
  faqHeading: "Frequently Asked Questions",
  faqs: discordNameFaqs,
  Article: DiscordNameArticle,
  relatedHeading: "Related links",
  related: discordNameRelated,
};
