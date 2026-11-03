import {
  DiscordTimestampArticle,
  discordTimestampFaqs,
  discordTimestampPage,
  discordTimestampRelated,
} from "@/content/discord-timestamp";
import type { ToolPageContent } from "../../types";

export const timestampEn: ToolPageContent = {
  name: discordTimestampPage.name,
  title: discordTimestampPage.title,
  description: discordTimestampPage.description,
  h1: discordTimestampPage.h1,
  intro: discordTimestampPage.intro,
  toolLabel: "Discord timestamp generator",
  faqHeading: "Discord Timestamp FAQ",
  faqs: discordTimestampFaqs,
  Article: DiscordTimestampArticle,
  relatedHeading: "Related Tools",
  related: discordTimestampRelated,
};
