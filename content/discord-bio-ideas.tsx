import Link from "next/link";
import { CopyChips } from "@/components/CopyChips";
import { convert } from "@/lib/fonts";
import { BIO_COUNT, bioDividers, bioSymbols } from "./bio-ideas-data";
import type { Faq } from "./faqs";

// ---------------------------------------------------------------------------
// Page copy
// ---------------------------------------------------------------------------

export const discordBioIdeasPage = {
  path: "/discord-bio-ideas",
  name: "Discord Bio Ideas",
  title: `Discord Bio Ideas – ${BIO_COUNT} Cool, Cute & Aesthetic About Me Bios`,
  description: `Find the perfect Discord bio. Copy ${BIO_COUNT} cool, cute, funny, aesthetic and gamer About Me ideas, plus templates, dividers and fonts to make your profile pop.`,
  h1: "Discord Bio Ideas",
  subtitle: "Copy and paste About Me bios for your Discord profile",
  faqHeading: "Discord Bio FAQ",
  moreToolsHeading: "Related tools",
} as const;

/** Intro under the H1. */
export function BioIdeasIntro() {
  return (
    <>
      Your Discord bio is the first thing people see when they click your profile. A good About Me tells
      people who you are, what you play and how to talk to you, all in 190 characters or less. Browse the
      ideas below, tap Copy on the one you like, and paste it straight into your profile. Want it to stand out
      even more? Pick a style from <strong>Apply font</strong>, or run it through our{" "}
      <Link href="/">Discord Fonts generator</Link> to turn it into bold, cursive or aesthetic text.
    </>
  );
}

export const discordBioIdeasFaqs: readonly Faq[] = [
  {
    question: "How many characters can a Discord bio have?",
    answer:
      "The About Me section allows up to 190 characters, including spaces, emojis and symbols. Some fancy Unicode characters count as two, so check the counter before you save.",
  },
  {
    question: "Can I use fancy fonts in my Discord bio?",
    answer:
      "Yes. Discord doesn't have a built-in font changer, but you can paste Unicode text from a font generator. It shows up as bold, cursive or other styles on most devices.",
    answerContent: (
      <>
        Yes. Discord doesn&apos;t have a built-in font changer, but you can paste Unicode text from a{" "}
        <Link href="/">font generator</Link>. It shows up as bold, cursive or other styles on most devices.
      </>
    ),
  },
  {
    question: "Can I use markdown in my Discord bio?",
    answer:
      "Yes. Your About Me supports basic markdown, including bold, italic, underline, strikethrough and spoiler text.",
    answerContent: (
      <>
        Yes. Your About Me supports basic <Link href="/discord-text-formatting">markdown</Link>, including
        bold, italic, underline, strikethrough and spoiler text.
      </>
    ),
  },
  {
    question: "Can I put links in my Discord bio?",
    answer:
      "Yes. Paste a full URL (starting with https://) and it becomes clickable. This is a great way to share a portfolio, stream or social media profile.",
  },
  {
    question: "Can I have a different bio in each server?",
    answer:
      "Yes, with Discord Nitro. Nitro members can set a server profile with a different avatar, banner and About Me for each server.",
  },
  {
    question: "Why do some symbols in my bio show as boxes?",
    answer:
      "Some older phones and computers don't support every Unicode character, so they show a box (□) instead. Stick to common symbols like ✦, ♡ and ☾ if you want your bio to look right everywhere.",
  },
  {
    question: "What should I put in my Discord bio?",
    answer:
      "Good options include your pronouns, time zone, favorite games, hobbies, a short quote or a fun line about yourself. Keep it short, friendly and safe.",
  },
];

const fontExamples = [
  ["Bold", "bold-serif"],
  ["Cursive", "bold-script"],
  ["Small caps", "small-caps"],
  ["Aesthetic", "fullwidth"],
  ["Monospace", "monospace"],
] as const;

/** Copyable symbols and dividers, shown between the bio lists and the guide. */
export function BioSymbols({ headingClass }: { headingClass: string }) {
  return (
    <section aria-labelledby="bio-symbols">
      <h2 id="bio-symbols" className={headingClass}>
        Symbols and Dividers for Your Discord Bio
      </h2>
      <p className="mt-2 text-muted">
        Tap any symbol to copy it, then use it to split your bio into neat sections.
      </p>
      <CopyChips items={bioSymbols} className="mt-4" />
      <CopyChips items={bioDividers} className="mt-2" />
      <p className="mt-4 text-muted [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-3">
        Find hundreds more on our <Link href="/discord-symbols">Discord Symbols</Link> page.
      </p>
    </section>
  );
}

/** Guide below the bio lists on /discord-bio-ideas. */
export function DiscordBioIdeasArticle() {
  return (
    <>
      <h2>How to Change Your Bio on Discord</h2>
      <h3>On desktop or browser</h3>
      <ol>
        <li>
          Open Discord and click the gear icon (<strong>User Settings</strong>) next to your name.
        </li>
        <li>
          Go to <strong>Profiles</strong>.
        </li>
        <li>
          Find the <strong>About Me</strong> box.
        </li>
        <li>
          Paste your bio and click <strong>Save Changes</strong>.
        </li>
      </ol>
      <h3>On mobile (iPhone or Android)</h3>
      <ol>
        <li>Tap your profile picture in the bottom-right corner.</li>
        <li>
          Tap <strong>Edit Profile</strong>.
        </li>
        <li>
          Tap <strong>About Me</strong>, paste your bio and tap <strong>Save</strong>.
        </li>
      </ol>
      <p>
        <strong>Tip:</strong> Press Enter (or Shift + Enter on desktop) to add line breaks. Spreading your bio
        over several short lines makes it much easier to read.
      </p>

      <h2>Tips for Writing a Great Discord Bio</h2>
      <ul>
        <li>
          <strong>Keep it under 190 characters.</strong> That&apos;s Discord&apos;s limit for the About Me
          section, so get straight to the point.
        </li>
        <li>
          <strong>Show your personality.</strong> A funny line, a favorite quote or your main game tells
          people more than a long list.
        </li>
        <li>
          <strong>Use line breaks.</strong> Three short lines are easier to read than one long sentence.
        </li>
        <li>
          <strong>Add a few symbols, not too many.</strong> Two or three decorations look clean. Twenty look
          messy.
        </li>
        <li>
          <strong>Mix fonts carefully.</strong> Fancy Unicode fonts look great, but use them for one line
          rather than the whole bio so it stays readable.
        </li>
        <li>
          <strong>Share only what you&apos;re comfortable with.</strong> Never put your full name, address,
          phone number or school in your bio.
        </li>
        <li>
          <strong>Update it often.</strong> Change your bio when you start a new game, open commissions or
          just feel like a fresh look.
        </li>
      </ul>

      <h2>Make Your Bio Stand Out With Fonts</h2>
      <p>
        Discord doesn&apos;t let you change the font of your About Me, but you can paste Unicode text that
        looks like a different font. Type your bio into our generator and copy any style:
      </p>
      <ul>
        {fontExamples.map(([name, id]) => (
          <li key={id}>
            <strong>{name}:</strong> {convert(id, "just vibing")}
          </li>
        ))}
      </ul>
      <p>
        👉 <Link href="/">Open the Discord Fonts generator</Link>
      </p>
      <p>
        Your bio also supports Discord markdown, so you can use bold, italic, strikethrough and ||spoilers||.
        See our <Link href="/discord-text-formatting">Discord Text Formatting</Link> guide to learn how.
      </p>
    </>
  );
}
