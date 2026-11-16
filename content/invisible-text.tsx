import Link from "next/link";
import type { Faq } from "./faqs";
import {
  BRAILLE_BLANK,
  HALFWIDTH_HANGUL_FILLER,
  HANGUL_FILLER,
  type InvisibleCharRow,
  ZERO_WIDTH_SPACE,
} from "./invisible-characters";

export const invisibleTextPage = {
  path: "/invisible-text",
  name: "Invisible Text Generator",
  title: "Invisible Text Generator – Copy & Paste Invisible Character",
  description:
    "Copy invisible text and blank invisible characters in one click. Works on WhatsApp, Discord, Free Fire, Instagram, TikTok and more. Free, no sign-up.",
  h1: "Invisible Text Generator",
  intro:
    "Copy invisible text in one click. Each invisible character looks completely blank but counts as a real letter, so you can make empty names, blank messages and clean bios on WhatsApp, Discord, Free Fire, Instagram and more.",
  faqHeading: "Frequently Asked Questions",
  moreToolsHeading: "More tools",
} as const;

export const invisibleTextRows: readonly InvisibleCharRow[] = [
  { ...HANGUL_FILLER, note: "Discord, Free Fire, Roblox, TikTok names" },
  { ...BRAILLE_BLANK, note: "WhatsApp messages, Discord backup, bios" },
  { ...HALFWIDTH_HANGUL_FILLER, note: "Game nicknames (narrower blank)" },
  { ...ZERO_WIDTH_SPACE, note: "Hidden spacing inside text (often stripped from names)" },
];

export const invisibleTextFaqs: readonly Faq[] = [
  {
    question: "What is invisible text?",
    answer:
      "Invisible text is made of special Unicode characters that look blank but are counted as real characters. Apps accept them where a normal space would be removed, so your name, message or bio appears empty.",
  },
  {
    question: "What is the best invisible character?",
    answer:
      "The Hangul Filler (U+3164) works in the most places, including Discord, Free Fire, Roblox and TikTok. If an app rejects it, try the Braille Pattern Blank (U+2800).",
  },
  {
    question: "How do I send a blank message on WhatsApp?",
    answer:
      "Copy the Braille Pattern Blank or Hangul Filler from this page, paste it into the WhatsApp message box and tap send. The other person sees an empty message bubble.",
  },
  {
    question: "What is the invisible character for Discord?",
    answer:
      "Use the Hangul Filler (U+3164) in your display name or server nickname. Your @username cannot be blank because it only allows lowercase letters, numbers, underscores and periods.",
  },
  {
    question: "Why did my invisible text disappear after pasting?",
    answer:
      "Some apps strip certain blank characters, especially zero-width ones. Paste a different character from the list, or use more than one in a row.",
  },
  {
    question: "Is invisible text safe to use?",
    answer:
      "Yes. It is ordinary Unicode text and contains no code. Just remember that some servers and games do not allow blank names, and screen readers may not read it.",
  },
];

export const invisibleTextMoreTools = [
  { href: "/blog/invisible-name-discord", label: "Invisible Name on Discord", note: "Step-by-step guide" },
  { href: "/", label: "Discord Font Generator", note: "220+ fancy fonts to copy and paste" },
  { href: "/discord-name-generator", label: "Discord Name Generator", note: "Stylish display names" },
  { href: "/small-text-discord", label: "Small Text Generator", note: "Tiny letters for names and bios" },
  { href: "/discord-symbols", label: "Discord Symbols", note: "Hearts, stars, dividers and more" },
  { href: "/fancy-text-generator", label: "Fancy Text Generator", note: "Styled text for any app" },
] as const;

/** Content above the character list. */
export function InvisibleTextWhatIs() {
  return (
    <>
      <h2>What Is an Invisible Character?</h2>
      <p>
        An invisible character is a Unicode symbol that takes up a letter&apos;s spot but shows nothing on
        screen. Apps usually delete normal spaces from names and messages, but they treat characters like the
        Hangul Filler (U+3164) as real letters. That&apos;s why they pass the &ldquo;name can&apos;t be
        empty&rdquo; check while still looking blank.
      </p>
    </>
  );
}

/** Everything after the character list. */
export function InvisibleTextArticle() {
  return (
    <>
      <h2>How to Use Invisible Text</h2>
      <ol>
        <li>
          Press <strong>Copy Invisible Character</strong>, or pick a type and amount and press{" "}
          <strong>Copy Invisible Text</strong>.
        </li>
        <li>Open the app or game and go to the name, message or bio field.</li>
        <li>Delete what&apos;s there and paste. The field will look empty, which is normal.</li>
        <li>Save or send. If the app says the name is invalid, try another character from the list.</li>
      </ol>

      <h2>Where Invisible Text Works</h2>
      <h3>Invisible Text on WhatsApp</h3>
      <p>
        Paste the invisible character into the message box and send it to create a blank message. You can also
        paste it as your WhatsApp name or About to make it look empty.
      </p>
      <h3>Invisible Text on Discord</h3>
      <p>
        Go to <strong>User Settings → Profiles</strong> and paste the Hangul Filler as your display name, or
        set it as a server nickname. Your @username can&apos;t be blank.
      </p>
      <p>
        → Full guide: <Link href="/blog/invisible-name-discord">How to Get an Invisible Name on Discord</Link>
      </p>
      <h3>Invisible Text on Free Fire</h3>
      <p>
        Use a name change card, paste one or more Hangul Filler characters into the nickname field and
        confirm. Test it first, as the game can change which characters it accepts.
      </p>
      <p>
        → <Link href="/free-fire-fonts">Stylish Free Fire Fonts</Link>
      </p>
      <h3>Invisible Text on Instagram</h3>
      <p>
        Paste the character into your bio to add empty lines, or into captions to create clean spacing between
        paragraphs.
      </p>
      <p>
        → <Link href="/instagram-fonts">Instagram Fonts</Link>
      </p>
      <h3>Invisible Text on TikTok</h3>
      <p>
        Paste the Hangul Filler or Braille Blank into your display name or bio for a blank or spaced-out look.
      </p>
      <p>
        → <Link href="/tiktok-fonts">TikTok Fonts</Link>
      </p>
      <h3>Invisible Text on Roblox, PUBG, Mobile Legends &amp; Other Games</h3>
      <p>
        Most games accept the Hangul Filler in display names. If one character is rejected, try a combination
        or the Halfwidth Hangul Filler.
      </p>
      <p>
        → <Link href="/roblox-fonts">Roblox Fonts</Link>
      </p>

      <h2>Why Isn&apos;t My Invisible Character Working?</h2>
      <ul>
        <li>
          <strong>The app strips that character.</strong> Zero-width spaces are often removed from names. Use
          the Hangul Filler or Braille Blank instead.
        </li>
        <li>
          <strong>You copied extra text.</strong> Clear the field completely and paste again.
        </li>
        <li>
          <strong>It shows as a box.</strong> Some older devices or fonts can&apos;t display the character as
          blank. Try a different one.
        </li>
        <li>
          <strong>The game or server blocks blank names.</strong> Some platforms and moderators don&apos;t
          allow empty names. Follow their rules.
        </li>
      </ul>

      <h2>Tips for Using Invisible Text</h2>
      <ul>
        <li>
          Combine it with fancy letters for spaced-out names like 𝓝𝓪𝓶𝓮. Try our{" "}
          <Link href="/">Discord Font Generator</Link>.
        </li>
        <li>
          Need a name idea instead of a blank one? Use the{" "}
          <Link href="/discord-name-generator">Discord Name Generator</Link>.
        </li>
        <li>
          Want tiny letters? Try the <Link href="/small-text-discord">Small Text Generator</Link>.
        </li>
        <li>
          Screen readers may skip or misread invisible characters, so avoid them in important information.
        </li>
      </ul>
    </>
  );
}
