import Link from "next/link";
import type { Faq } from "./faqs";

// ---------------------------------------------------------------------------
// Page copy
// ---------------------------------------------------------------------------

const fontGenerator = <Link href="/">Discord font generator</Link>;

export const discordSymbolsPage = {
  path: "/discord-symbols",
  name: "Discord Symbols",
  title: "Discord Symbols: Copy & Paste Channel Name Symbols & Dividers",
  description:
    "Copy and paste 300+ Discord symbols for channel names, nicknames and bios. Build aesthetic channel names like 📢︱announcements with a live preview.",
  h1: "Discord Symbols: Copy & Paste Channel Name Symbols",
  intro:
    "Copy cool symbols for your Discord channel names, server name, nickname and bio. Build a channel name with a live preview, or tap any symbol below to copy it instantly.",
} as const;

export const discordSymbolsFaqs: readonly Faq[] = [
  {
    question: "How do I put symbols in Discord channel names?",
    answer:
      "Copy a symbol or a full name from this page, edit the channel in Discord, paste it into the Channel Name field and save. You need the Manage Channels permission.",
  },
  {
    question: "What is the line symbol used in Discord channel names?",
    answer:
      "The most popular one is the vertical bar ︱, used like 📢︱announcements. Other common dividers are ┃, │, ┊ and ・.",
  },
  {
    question: "Why does Discord add hyphens to my channel name?",
    answer:
      "Text channel names can't contain spaces, so Discord replaces them with hyphens and makes letters lowercase. Use a symbol like ・ or ︱ between words instead. Voice channels and categories keep spaces.",
  },
  {
    question: "Can I use symbols in my Discord username?",
    answer:
      "Not in your @username, which only allows lowercase letters, numbers, underscores and periods. You can use symbols in your display name, server nickname and About Me.",
  },
  {
    question: "Why are my Discord symbols showing as boxes?",
    answer:
      "The device viewing them doesn't have a font for that character. Stick to common symbols like ︱ ・ ★ ♡ for important names.",
  },
  {
    question: "Are Discord symbols free to use?",
    answer:
      "Yes. They're standard Unicode characters, so you can copy and use them anywhere for free. Nothing you type is stored.",
  },
];

const bestRows = [
  ["Bar divider", "📢︱announcements", "Clean, professional servers"],
  ["Dotted", "┊🎮・gaming", "Aesthetic and community servers"],
  ["Cute brackets", "꒰🌸꒱selfies", "Cute and kawaii servers"],
  ["Sparkle", "⟡・general", "Minimal servers"],
  ["Japanese frame", "『🎵』music", "Anime servers"],
  ["Arrow", "»📜︱rules", "Gaming servers"],
] as const;

/** Guide below the tools on /discord-symbols. */
export function DiscordSymbolsArticle() {
  return (
    <>
      <h2>What Are Discord Symbols?</h2>
      <p>
        Discord symbols are special Unicode characters, like dividers, brackets, stars, hearts and arrows, that
        you can paste into Discord just like normal text. They aren&apos;t images or emojis uploaded to a
        server, so everyone sees them without installing anything.
      </p>
      <p>
        Server owners use them to make channel lists look organized and aesthetic, turning a plain
        &ldquo;#announcements&rdquo; into something like &ldquo;📢︱announcements&rdquo;. Members use them to
        decorate nicknames and bios. Because they&apos;re just characters, you can copy them from this page,
        paste them anywhere Discord lets you type, and they&apos;ll look the same for (almost) everyone.
      </p>

      <h2>How to Add Symbols to Discord Channel Names</h2>
      <ol>
        <li>Build a channel name with the tool above, or copy one from the templates.</li>
        <li>In Discord, right-click the channel you want to rename (or long-press it on mobile).</li>
        <li>
          Choose <strong>Edit Channel</strong>.
        </li>
        <li>
          Delete the old name and paste the new one into <strong>Channel Name</strong>.
        </li>
        <li>
          Click <strong>Save Changes</strong>.
        </li>
      </ol>
      <p>
        You&apos;ll need the <strong>Manage Channels</strong> permission. If you don&apos;t see Edit Channel,
        ask a server admin to give your role that permission.
      </p>
      <p>
        <strong>On mobile:</strong> long-press the channel, tap <strong>Edit Channel</strong>, paste into the
        name field and tap Save. Copy the name from this page in your phone&apos;s browser first, then switch
        to the Discord app.
      </p>
      <p>
        Renaming a whole server? Use <strong>Copy all</strong> on a template above and paste the list into a
        notes app. Then you can copy each line as you go through your channels one by one, so every name
        matches. Categories are renamed the same way: right-click the category name and choose Edit Category.
      </p>

      <h2>Discord Channel Name Rules You Should Know</h2>
      <ul>
        <li>
          <strong>Text channels are lowercase with hyphens.</strong> Discord turns capitals into lowercase and
          spaces into hyphens. Voice channels and categories keep capitals and spaces, which is why category
          names like &ldquo;━━ 𝐈𝐍𝐅𝐎 ━━&rdquo; work.
        </li>
        <li>
          <strong>Up to 100 characters.</strong> That&apos;s plenty, but long names get cut off in the
          sidebar, so shorter is better.
        </li>
        <li>
          <strong>Most symbols work, but not all.</strong> Discord accepts most emojis and Unicode symbols,
          but it may strip or change some characters. If a symbol disappears after you save, try a different
          one.
        </li>
        <li>
          <strong>Keep the word readable.</strong> Members search for channels by typing their names. A name
          like &ldquo;📜︱rules&rdquo; still matches &ldquo;rules&rdquo;, while a fully styled name may not.
        </li>
      </ul>
      <p>
        That last point is why most popular servers put symbols around the name instead of inside it. The
        emoji and divider do the decorating, and the plain word stays easy to type, search and @mention with
        the <code>#</code> channel link.
      </p>

      <h2>Where Else You Can Use Discord Symbols</h2>
      <p>
        <strong>Display name and server nickname.</strong> Add a symbol or two around your name, like
        &ldquo;✦ Nova ✦&rdquo;. Both are limited to 32 characters, so keep decorations short.
      </p>
      <p>
        <strong>About Me bio.</strong> Your bio has room for dividers and bullet points, which makes it easy
        to split it into neat little sections.
      </p>
      <p>
        <strong>Server name.</strong> A single symbol on each side, like &ldquo;꧁ Moonlight ꧂&rdquo;, makes
        your server stand out in the server list.
      </p>
      <p>
        <strong>Role names.</strong> Symbols help separate role groups, like &ldquo;━━ Staff ━━&rdquo;, or mark
        special roles with a ★ or ♛.
      </p>
      <p>
        <strong>Messages.</strong> Use arrows, checks and bullets to make announcements and lists easier to
        read.
      </p>
      <p>
        The one place symbols won&apos;t work is your unique @username, which only allows lowercase letters,
        numbers, underscores and periods. For styled letters in your name, try the {fontGenerator}, and for
        name ideas, the <Link href="/discord-name-generator">Discord name generator</Link>.
      </p>

      <h2>Best Symbols for Aesthetic Channel Names</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Style</th>
              <th scope="col">Example</th>
              <th scope="col">Best for</th>
            </tr>
          </thead>
          <tbody>
            {bestRows.map(([style, example, use]) => (
              <tr key={style}>
                <td>{style}</td>
                <td className="whitespace-nowrap">{example}</td>
                <td>{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Pick one style and use it for every channel. Mixing three different dividers makes a sidebar look messy,
        while one consistent pattern looks professional.
      </p>
      <p>
        A good recipe is to give every channel an emoji that hints at what it&apos;s for, then use the same
        divider throughout. Use bold capitals with lines for categories, like &ldquo;━━ 𝐈𝐍𝐅𝐎 ━━&rdquo;, so
        the sections stand out from the channels inside them. For voice channels, a speaker or headphone emoji
        with a short, capitalized name, like &ldquo;🎧︱Music Room&rdquo;, tells members at a glance where to
        hang out.
      </p>

      <h2>Why Some Discord Symbols Show as Boxes</h2>
      <p>
        If a symbol shows up as an empty box or a question mark, the device viewing it doesn&apos;t have a font
        with that character. The symbol is still there, it just can&apos;t be drawn.
      </p>
      <p>
        Common symbols like ︱ ・ ★ ♡ → work almost everywhere. Rarer decorative characters may break on older
        phones, game consoles or smart TVs. Before renaming your whole server, test one channel name on both
        desktop and mobile.
      </p>
      <p>
        The safest picks are the ones in the Dividers, Arrows, Stars and Bullets sections near the top of the
        library. Japanese brackets like 『 』 and the cute ꒰ ꒱ brackets are widely supported on modern phones
        and computers, but very new or rare characters are the first to break. If a member reports boxes,
        swap that symbol for a simpler one rather than asking everyone to update their device.
      </p>

      <h2>Discord Symbols vs Emojis vs Fonts</h2>
      <ul>
        <li>
          <strong>Symbols</strong> are single Unicode characters, like ︱ or ★. They take the color of the text
          around them.
        </li>
        <li>
          <strong>Emojis</strong> are colorful pictures. They can be standard emojis everyone has, or custom
          emojis uploaded to a server.
        </li>
        <li>
          <strong>Fonts</strong> on this site are styled letters, like 𝐛𝐨𝐥𝐝 or 𝓼𝓬𝓻𝓲𝓹𝓽, that work in names
          where formatting doesn&apos;t.
        </li>
      </ul>
      <p>
        Mix them for the best results. Style your letters with the {fontGenerator}, shrink them with the{" "}
        <Link href="/small-text-discord">small text generator</Link>, try{" "}
        <Link href="/number-fonts">number fonts</Link> for counts and ranks, and use{" "}
        <Link href="/discord-text-formatting">Discord text formatting</Link> for bold, headers and spoilers in
        messages.
      </p>
    </>
  );
}
