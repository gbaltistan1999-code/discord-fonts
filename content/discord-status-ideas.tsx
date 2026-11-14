import Link from "next/link";
import type { Faq } from "./faqs";
import { STATUS_COUNT } from "./status-ideas-data";

// ---------------------------------------------------------------------------
// Page copy
// ---------------------------------------------------------------------------

export const discordStatusIdeasPage = {
  path: "/discord-status-ideas",
  name: "Discord Status Ideas",
  title: `${STATUS_COUNT} Discord Status Ideas (Funny, Aesthetic & Cool) – Copy & Paste`,
  description: `Find the perfect Discord status. ${STATUS_COUNT} funny, aesthetic, cool, gamer and cute Discord status ideas you can copy and paste in one click.`,
  h1: "Discord Status Ideas",
  intro: `Your custom status is the first thing people see when they open your profile or the member list. Here are ${STATUS_COUNT} Discord status ideas, sorted by vibe: funny, aesthetic, cool, gamer, cute and more. Tap any status to copy it, then paste it into Discord.`,
  browseHeading: "Browse Status Ideas",
  faqHeading: "Frequently Asked Questions",
  moreToolsHeading: "More Discord tools",
} as const;

export const discordStatusIdeasFaqs: readonly Faq[] = [
  {
    question: "What is a good Discord status?",
    answer:
      "A good Discord status is short, fits your personality and gives people a reason to talk to you. Funny, aesthetic and gamer statuses are the most popular.",
  },
  {
    question: "How long can a Discord status be?",
    answer: "A Discord custom status can be up to 128 characters long.",
  },
  {
    question: "Can I use fancy fonts in my Discord status?",
    answer:
      "Yes. Unicode fonts like 𝓬𝓾𝓻𝓼𝓲𝓿𝓮, 𝕘𝕠𝕥𝕙𝕚𝕔 and ꜱᴍᴀʟʟ ᴄᴀᴘꜱ work in your status. Generate them with our Discord Font Generator.",
    answerContent: (
      <>
        Yes. Unicode fonts like 𝓬𝓾𝓻𝓼𝓲𝓿𝓮, 𝕘𝕠𝕥𝕙𝕚𝕔 and ꜱᴍᴀʟʟ ᴄᴀᴘꜱ work in your status. Generate them with our{" "}
        <Link href="/">Discord Font Generator</Link>.
      </>
    ),
  },
  {
    question: "Can I use markdown like bold or big text in my status?",
    answer: "No. Markdown such as bold or # headers only works in messages. Use Unicode fonts instead.",
    answerContent: (
      <>
        No. <Link href="/discord-text-formatting">Markdown</Link> such as bold or # headers only works in
        messages. Use Unicode fonts instead.
      </>
    ),
  },
  {
    question: "How do I make my Discord status clear automatically?",
    answer:
      'When setting your custom status, choose a "Clear after" time and Discord will remove it automatically.',
  },
  {
    question: "Can other people see my custom status?",
    answer:
      "Yes. Anyone who shares a server with you, or is on your friends list, can see your custom status when they view your profile or the member list.",
  },
];

/** Tip under the hero. */
export function StatusIdeasTip() {
  return (
    <>
      <strong>Tip:</strong> click &ldquo;Style it&rdquo; on any status to turn it into fancy text with our{" "}
      <Link href="/">Discord Font Generator</Link>.
    </>
  );
}

/** Call to action after the status lists. */
export function StatusFontsCta() {
  return (
    <>
      Want any status in a fancy font like 𝓥𝓲𝓫𝓲𝓷𝓰 or 𝖁𝖎𝖇𝖎𝖓𝖌? Paste it into our{" "}
      <Link href="/">Discord Font Generator</Link>. For more symbols, see{" "}
      <Link href="/discord-symbols">Discord Symbols</Link>.
    </>
  );
}

/** Guide below the status lists on /discord-status-ideas. */
export function DiscordStatusIdeasArticle() {
  return (
    <>
      <h2>How to Set a Custom Status on Discord</h2>
      <h3>On desktop</h3>
      <ol>
        <li>Click your profile picture in the bottom-left corner.</li>
        <li>
          Click <strong>Set Custom Status</strong>.
        </li>
        <li>Paste your status and add an emoji if you want.</li>
        <li>Choose when it should clear, or keep it on.</li>
        <li>
          Click <strong>Save</strong>.
        </li>
      </ol>
      <h3>On mobile (iPhone and Android)</h3>
      <ol>
        <li>Tap your profile picture.</li>
        <li>
          Tap <strong>Set Custom Status</strong>.
        </li>
        <li>Paste your status, pick an emoji and choose when it clears.</li>
        <li>
          Tap <strong>Save</strong>.
        </li>
      </ol>

      <h2>Tips for a Great Discord Status</h2>
      <ul>
        <li>
          <strong>Keep it short.</strong> Discord custom statuses have a 128-character limit, and shorter ones
          are easier to read in the member list.
        </li>
        <li>
          <strong>Add an emoji.</strong> Discord lets you pick one emoji to show next to your status.
        </li>
        <li>
          <strong>Use fancy fonts.</strong> Styled text stands out in a busy server. Try our{" "}
          <Link href="/">Discord Font Generator</Link>.
        </li>
        <li>
          <strong>Change it often.</strong> A fresh status gives people something to talk about.
        </li>
        <li>
          <strong>Match your status to your online mode,</strong> such as Online, Idle or Do Not Disturb.
        </li>
      </ul>
    </>
  );
}
