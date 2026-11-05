import { FancyTextArticle, fancyTextFaqs, fancyTextPage, fancyTextRelated } from "@/content/fancy-text";
import type { ToolPageContent } from "../../types";

export const fancyTextEn: ToolPageContent = {
  name: fancyTextPage.name,
  title: fancyTextPage.title,
  description: fancyTextPage.description,
  h1: fancyTextPage.h1,
  intro: fancyTextPage.intro,
  sampleText: fancyTextPage.sampleText,
  toolLabel: "Fancy text generator",
  faqHeading: "Frequently Asked Questions",
  faqs: fancyTextFaqs,
  Article: FancyTextArticle,
  relatedHeading: "Related links",
  related: fancyTextRelated,
};
