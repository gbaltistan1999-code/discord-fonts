import { BlogImage } from "@/components/BlogImage";
import Link from "next/link";
import { InvisibleCharacters } from "@/components/InvisibleCharacters";
import {
  BRAILLE_BLANK,
  HALFWIDTH_HANGUL_FILLER,
  HANGUL_FILLER,
  type InvisibleCharRow,
} from "@/content/invisible-characters";
import type { BlogPost } from ".";

const blankChars: readonly InvisibleCharRow[] = [
  { ...HANGUL_FILLER, note: "Try this first. The most widely used blank character for Discord names." },
  { ...BRAILLE_BLANK, note: "Backup option if the Hangul Filler is rejected." },
  { ...HALFWIDTH_HANGUL_FILLER, note: "Second backup; narrower blank." },
];

const nameTypes = [
  [
    "Username (your @handle)",
    "No. Usernames only allow lowercase letters, numbers, underscores and periods.",
    "Your account everywhere; used for adding friends",
  ],
  [
    "Display name",
    "Yes, with an invisible character",
    "Across Discord, unless a server nickname replaces it",
  ],
  ["Server nickname", "Yes, with an invisible character", "Only in that one server"],
] as const;

export const invisibleNameDiscord: BlogPost = {
  slug: "invisible-name-discord",
  title: "How to Get an Invisible or Blank Name on Discord (PC & Mobile, 2026)",
  metaTitle: "How to Get an Invisible Name on Discord (PC & Mobile, 2026)",
  description:
    "Make your Discord name invisible in seconds. Copy a blank character, paste it as your display name or nickname, and fix the 'invalid name' error on PC and mobile.",
  excerpt:
    "Get a blank Discord name on PC, Android and iPhone. Copy a working invisible character, set it as your display name or server nickname, and fix it when Discord rejects it.",
  tagline: "Blank characters, display name, nickname & fixes",
  icon: "sparkle",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  readingMinutes: 5,
  faqs: [
    {
      question: "Can I make my Discord username invisible?",
      answer:
        "No. Your @username only accepts lowercase letters, numbers, underscores and periods, so invisible characters aren't allowed. You can only make your display name or a server nickname look blank.",
    },
    {
      question: "What is the best invisible character for Discord?",
      answer:
        "The Hangul Filler (U+3164) is the most commonly used. If Discord rejects it, try the Braille Pattern Blank (U+2800).",
    },
    {
      question: "Do I need Nitro for a blank name?",
      answer: "No. Changing your display name and server nickname is free for everyone.",
    },
    {
      question: "Can people still find or mention me with a blank name?",
      answer:
        "Yes. Your @username is still visible in your profile, and people can mention you by clicking your profile or typing your username.",
    },
    {
      question: "Why does my blank name show as a box?",
      answer:
        "That device's font doesn't treat the character as empty. Try a different invisible character, but some devices may always show a small symbol.",
    },
    {
      question: "How do I get my normal name back?",
      answer:
        "Go back to your display name or server nickname settings, delete the invisible character, type your name, and save. If you clear a server nickname completely, your display name will show again.",
    },
  ],
  body: (
    <>
      <BlogImage
        src="/blog/invisible-name-discord.webp"
        alt="Copying an invisible character and pasting it as a Discord name, leaving a blank name in the member list"
        href="/discord-name-generator"
        label="Discord Name Generator"
        priority
      />

      <p>
        Want your name to look completely empty in Discord chats and member lists? Discord has no &ldquo;blank
        name&rdquo; setting, but you can get the same effect by pasting a special invisible Unicode character
        into your display name or server nickname.
      </p>
      <p>
        This guide gives you the characters that work, step-by-step instructions for desktop and mobile, and
        fixes for when Discord refuses to save your blank name.
      </p>

      <h2>Copy an Invisible Character</h2>
      <p>Tap Copy next to a character. Nothing will look selected, because the character is invisible.</p>
      <InvisibleCharacters rows={blankChars} noteHeading="When to use it" />
      <p>
        <strong>Tip:</strong> Don&apos;t use a normal spacebar space. Discord trims regular spaces, so a name
        made only of spaces won&apos;t save.
      </p>
      <p>
        Need several blank characters in a row? Use the{" "}
        <Link href="/invisible-text">invisible text generator</Link>.
      </p>

      <h2>Why Invisible Names Work</h2>
      <p>
        Discord requires every display name to have at least one character. Characters like the Hangul Filler
        are treated by computers as real letters, so they pass Discord&apos;s check, but most fonts draw them
        as empty space. The result: Discord sees a valid name, and other people see nothing.
      </p>

      <h2>Username vs. Display Name vs. Server Nickname</h2>
      <p>Before you start, it helps to know which name you can actually make invisible.</p>
      <div className="overflow-x-auto">
        <table className="min-w-[36rem]">
          <thead>
            <tr>
              <th scope="col">Discord name</th>
              <th scope="col">Can it look blank?</th>
              <th scope="col">Where it shows</th>
            </tr>
          </thead>
          <tbody>
            {nameTypes.map(([name, blank, where]) => (
              <tr key={name}>
                <td>
                  <strong>{name}</strong>
                </td>
                <td>{blank}</td>
                <td>{where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        So you&apos;ll make your <strong>display name</strong> (everywhere) or a{" "}
        <strong>server nickname</strong> (one server) invisible. Your @username always stays visible in your
        profile.
      </p>

      <h2>How to Get a Blank Name on Discord (PC &amp; Browser)</h2>
      <h3>Option 1: Blank display name (everywhere)</h3>
      <ol>
        <li>Open Discord on your computer or at discord.com/app.</li>
        <li>
          Click the gear icon (<strong>User Settings</strong>) next to your name at the bottom left.
        </li>
        <li>
          Go to <strong>Profiles</strong> (or <strong>My Account → Edit</strong> next to Display Name).
        </li>
        <li>Delete your current display name.</li>
        <li>
          Paste the invisible character (copied from the table above) into the <strong>Display Name</strong>{" "}
          field.
        </li>
        <li>
          Click <strong>Save Changes</strong>.
        </li>
      </ol>
      <h3>Option 2: Blank nickname in one server</h3>
      <ol>
        <li>Open the server where you want the blank name.</li>
        <li>
          Click the server name at the top left and choose <strong>Edit Per-server Profile</strong> (or
          right-click your name in the member list and choose <strong>Edit Server Profile</strong>).
        </li>
        <li>
          Paste the invisible character into the <strong>Server Nickname</strong> field.
        </li>
        <li>
          Click <strong>Save Changes</strong>.
        </li>
      </ol>
      <p>
        For more on nicknames, see our guide on{" "}
        <Link href="/blog/how-to-change-nickname-on-discord">how to change your nickname on Discord</Link>.
      </p>

      <h2>How to Get a Blank Name on Discord Mobile (Android &amp; iPhone)</h2>
      <h3>Blank display name</h3>
      <ol>
        <li>Copy the invisible character from the table above.</li>
        <li>Open the Discord app and tap your profile picture (bottom right).</li>
        <li>
          Tap <strong>Edit Profile</strong>.
        </li>
        <li>Clear the Display Name field and paste the character.</li>
        <li>
          Tap <strong>Save</strong>.
        </li>
      </ol>
      <h3>Blank server nickname</h3>
      <ol>
        <li>Open the server and tap the server name at the top.</li>
        <li>
          Tap <strong>Edit Per-server Profile</strong>.
        </li>
        <li>
          Clear the nickname field, paste the character, and tap <strong>Save</strong>.
        </li>
      </ol>
      <p>
        <strong>Mobile tip:</strong> Long-press inside the empty field and choose Paste. If nothing seems to
        happen, that&apos;s normal: the character is invisible. Check that the Save button becomes active.
      </p>

      <h2>Invisible Name Not Working? Try These Fixes</h2>
      <ul>
        <li>
          <strong>&ldquo;Invalid display name&rdquo; or the name resets:</strong> Discord may be rejecting
          that specific character. Try the Braille Pattern Blank or the Halfwidth Hangul Filler instead.
        </li>
        <li>
          <strong>It saved, but my old name still shows:</strong> Server nicknames override your display name.
          If you set a blank display name, check that you don&apos;t have a nickname set in that server (and
          vice versa).
        </li>
        <li>
          <strong>I copied extra characters:</strong> If you copied a normal space by accident, clear the
          field completely and copy only the character.
        </li>
        <li>
          <strong>Only some people see a blank name:</strong> Different devices use different fonts. On rare
          devices or older apps, the character might show as a small box or a gap. This is a display issue on
          their end.
        </li>
        <li>
          <strong>The server changed my name back:</strong> Some servers don&apos;t allow blank names because
          they make moderation harder. Moderators or bots may reset your nickname. Follow each server&apos;s
          rules.
        </li>
        <li>
          <strong>I don&apos;t have permission to change my nickname:</strong> The server may have disabled
          the &ldquo;Change Nickname&rdquo; permission. Ask a moderator, or use a blank display name instead.
        </li>
      </ul>
      <p>
        <strong>Note:</strong> Discord can change what characters it accepts at any time. If none of the
        characters above work, Discord may have blocked them. We&apos;ll update this list when that happens.
      </p>

      <h2>Is an Invisible Name Allowed on Discord?</h2>
      <p>
        Discord&apos;s rules say display names must be 1–32 characters and follow its Community Guidelines.
        Using an invisible character for fun isn&apos;t against those rules on its own. However:
      </p>
      <ul>
        <li>
          <strong>Individual servers can ban blank names.</strong> Many communities require a readable name so
          members can be mentioned and moderated.
        </li>
        <li>
          <strong>
            Don&apos;t use a blank name to dodge moderation, impersonate others, or harass people.
          </strong>{" "}
          That can get you removed from servers or reported.
        </li>
      </ul>
    </>
  ),
  outro: (
    <>
      <h2>Want a Name That Stands Out Instead?</h2>
      <p>
        A blank name is fun, but it also makes you hard to mention. If you want something eye-catching and
        readable, try our <Link href="/">Discord font generator</Link> to turn your name into cursive, bold,
        gothic or small-caps text. You can also mix fancy letters with a blank character for a spaced-out
        look, like 𝓝𝓪𝓶𝓮.
      </p>
      <p>Related guides:</p>
      <ul>
        <li>
          <Link href="/blog/how-to-change-font-on-discord">
            How to change your font on Discord (names, bios and messages)
          </Link>
        </li>
        <li>
          <Link href="/blog/discord-colored-text">How to write colored text in Discord</Link>
        </li>
      </ul>
    </>
  ),
};
