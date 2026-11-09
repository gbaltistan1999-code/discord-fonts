import { FormattingGuide } from "@/content/formatting";
import type { FormattingPageContent } from "../../types";

export const formattingEn: FormattingPageContent = {
  name: "Discord Text Formatting",
  title: "Discord Text Formatting Guide – Bold, Color & Markdown",
  description:
    "Learn Discord text formatting: bold, italic, underline, spoiler, headers, subtext, code blocks and colored text. Copy ready-made Discord markdown in one click.",
  h1: "Discord Text Formatting: Markdown Guide & Generator",
  intro:
    "Type your message once and copy it as bold, italic, underlined, spoiler, header, subtext, code or colored text, all using Discord’s built-in markdown.",
  toolLabel: "Discord markdown formatting tool",
  appName: "Discord Text Formatting Tool",
  Guide: FormattingGuide,
  // Moved from the retired /blog/discord-text-formatting post (now redirected here).
  faqs: [
    {
      question: "How do I make text bold on Discord?",
      answer:
        "Put two asterisks on each side, like **hello**. On a computer, you can also highlight the text and press Ctrl+B (Cmd+B on Mac).",
    },
    {
      question: "How do I cross out text on Discord?",
      answer: "Use two tildes on each side: ~~text~~.",
    },
    {
      question: "How do I write small text on Discord?",
      answer:
        "Start the line with -# and a space, and your text turns small and gray. If you want tiny letters that also work in your name, use a small text font from a font generator instead.",
    },
    {
      question: "How do I make text bigger?",
      answer:
        "Start the line with # and a space for the biggest size, ## for medium or ### for a little smaller.",
    },
    {
      question: "Can I change my font on Discord?",
      answer:
        "Not through a setting for messages. You can change the chat text size for yourself under User Settings > Appearance, but to change how your text looks to everyone, you'll need Unicode fonts from a site like discordfont.app.",
    },
    {
      question: "Does formatting work on the Discord mobile app?",
      answer:
        "Yes, all of it works on iPhone and Android. You just won't get the pop-up toolbar, so type the symbols yourself. Colored ansi text is the exception: mobile shows it without color.",
    },
    {
      question: "How do I hide a message on Discord?",
      answer: "Wrap it in spoiler bars, ||like this||, or start your message with /spoiler.",
    },
  ],
};
