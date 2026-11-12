import Link from "next/link";
import type { Faq } from "./faqs";
import { SERVER_NAME_COUNT } from "./server-names-data";

// ---------------------------------------------------------------------------
// Page copy
// ---------------------------------------------------------------------------

export const discordServerNamesPage = {
  path: "/discord-server-names",
  name: "Discord Server Names",
  appName: "Discord Server Name Generator",
  title: `Discord Server Names: ${SERVER_NAME_COUNT} Cool, Funny & Aesthetic Ideas`,
  description: `${SERVER_NAME_COUNT} Discord server name ideas: cool, funny, aesthetic and gaming. Generate names with fancy fonts and copy them instantly.`,
  h1: "Discord Server Names",
  intro: `${SERVER_NAME_COUNT} server name ideas for gaming clans, friend groups, study servers and communities. Generate names around your own theme, style them with fancy fonts, and copy them straight into Discord.`,
  browseHeading: "Browse Server Name Ideas",
  fancyHeading: "Fancy Discord Server Names (Copy and Paste)",
  channelsHeading: "Channel Name Ideas to Match",
  faqHeading: "Discord Server Name FAQ",
  moreToolsHeading: "More Discord tools",
} as const;

export const discordServerNamesFaqs: readonly Faq[] = [
  {
    question: "How long can a Discord server name be?",
    answer:
      "A Discord server name must be between 2 and 100 characters. Shorter names are easier to read in the server list, so most popular servers keep it under 25 characters.",
  },
  {
    question: "How do I change my Discord server name?",
    answer:
      "Open the server menu, go to Server Settings, then Overview, and type the new name in the Server Name field. Save your changes. You need to be the owner or have the Manage Server permission.",
  },
  {
    question: "Can I use fancy fonts in a Discord server name?",
    answer:
      "Yes. Server names accept Unicode, so bold, script, gothic and small caps letters from this page work when you paste them in. Rare symbols can show as boxes on older devices, so stick to well-supported styles for the main words.",
  },
  {
    question: "Can two Discord servers have the same name?",
    answer:
      "Yes. Server names don't have to be unique, so you can use any name you like. Only custom invite links (vanity URLs) are unique, and those are a perk of higher server boost levels.",
  },
  {
    question: "What makes a good Discord server name?",
    answer:
      "A good server name is short, easy to say and hints at what the server is about. Avoid long strings of symbols, keep it readable at a glance, and check that it still makes sense to someone who has never joined.",
  },
  {
    question: "Can I use emojis in my server name?",
    answer:
      "Yes, standard emojis can be pasted into a server name. One or two emojis can add personality, but too many make the name hard to read and search for.",
  },
];

/** Intro under the fancy names heading. */
export function FancyServerNamesIntro() {
  return (
    <>
      A styled name makes a server stand out in the sidebar. These use Unicode letters and symbols, so
      everyone sees them without installing anything. Tap one to copy it. Want a different look? Try the{" "}
      <Link href="/discord-font-generator/gothic">gothic</Link>,{" "}
      <Link href="/discord-font-generator/cursive">cursive</Link> or{" "}
      <Link href="/discord-font-generator/small-caps">small caps</Link> generators, or grab more decorations
      from <Link href="/discord-symbols">Discord symbols</Link>.
    </>
  );
}

/** Intro under the channel ideas heading. */
export function ServerChannelsIntro() {
  return (
    <>
      A good server name deserves tidy channels. These use a thin divider so the channel list looks clean.
      Find more dividers and icons on the <Link href="/discord-symbols">Discord symbols</Link> page.
    </>
  );
}

/** Guide below the name lists on /discord-server-names. */
export function DiscordServerNamesArticle() {
  return (
    <>
      <h2>How to Choose a Good Discord Server Name</h2>
      <p>
        <strong>Say what the server is for.</strong> A name like &ldquo;Pomodoro Club&rdquo; tells people
        it&apos;s a study server before they even click. If your name is abstract, make the server icon and
        the first channel do the explaining.
      </p>
      <p>
        <strong>Keep it short.</strong> The server list and invite cards cut off long names. Two or three
        words is the sweet spot, even though Discord allows up to 100 characters.
      </p>
      <p>
        <strong>Make it easy to say out loud.</strong> People will mention your server in voice chat and to
        friends. If it&apos;s hard to pronounce or spell, it&apos;s hard to share.
      </p>
      <p>
        <strong>Use fancy fonts on purpose.</strong> A gothic or script name sets the mood, but keep the main
        words readable. Heavy symbol strings and zalgo text look broken on some phones. The{" "}
        <Link href="/">Discord font generator</Link> previews 220+ styles if you want something other than the
        ones above.
      </p>
      <p>
        <strong>Check that it fits your community.</strong> A joke name is great for friends, but a public
        community, clan or study group usually grows faster with a clearer name.
      </p>

      <h2>How to Change Your Discord Server Name</h2>
      <p>
        You need to be the server owner or have the Manage Server permission. Discord moves menus around now
        and then, so labels may differ slightly in your version.
      </p>
      <h3>On desktop or web</h3>
      <ol>
        <li>Click the server name at the top of the channel list.</li>
        <li>
          Choose <strong>Server Settings</strong>, then <strong>Overview</strong>.
        </li>
        <li>
          Paste your new name into <strong>Server Name</strong>.
        </li>
        <li>
          Click <strong>Save Changes</strong>.
        </li>
      </ol>
      <h3>On iPhone or Android</h3>
      <ol>
        <li>Open the server and tap its name at the top.</li>
        <li>
          Tap <strong>Settings</strong>, then <strong>Overview</strong>.
        </li>
        <li>Long-press the name field and paste your new name.</li>
        <li>
          Tap <strong>Save</strong>.
        </li>
      </ol>
      <p>
        Setting up a new server? See{" "}
        <Link href="/blog/how-to-add-emojis-to-discord-server">how to add emojis to a Discord server</Link>{" "}
        next.
      </p>
    </>
  );
}
