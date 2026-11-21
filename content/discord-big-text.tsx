import Link from "next/link";
import { CopyChips } from "@/components/CopyChips";
import type { Faq } from "./faqs";

// ---------------------------------------------------------------------------
// Page copy
// ---------------------------------------------------------------------------

export const discordBigTextPage = {
  path: "/discord-big-text",
  name: "Discord Big Text Generator",
  title: "Discord Big Text Generator – Make Big Letters in Discord",
  description:
    "Make big text in Discord instantly. Generate header text, emoji letters, wide text and ASCII banners, then copy and paste them into any message or server.",
  h1: "Discord Big Text Generator",
  subtitle: "Make your messages big, bold and impossible to miss",
  intro:
    "Want your message to stand out in a busy chat? Type your text below and our Discord Big Text generator turns it into large header text, giant emoji letters, wide aesthetic text or a full ASCII banner. Tap Copy next to any style and paste it straight into Discord. It works on desktop, browser, iPhone and Android, and you don't need Nitro.",
  faqHeading: "Discord Big Text FAQ",
  moreToolsHeading: "Related tools",
} as const;

export const discordBigTextFaqs: readonly Faq[] = [
  {
    question: "How do you make big text in Discord?",
    answer:
      "Type # followed by a space at the start of your message, then your text. For example, # Hello makes large header text. You can also use emoji letters or our generator to copy big text instantly.",
  },
  {
    question: "Do I need Nitro to use big text in Discord?",
    answer: "No. Headers, emoji letters, wide text and ASCII art are all free for everyone.",
  },
  {
    question: "Does Discord big text work on mobile?",
    answer:
      "Yes. Headers and emoji letters work on the Discord app for iPhone and Android, as well as on desktop and in the browser.",
  },
  {
    question: "What is the biggest text you can make in Discord?",
    answer:
      "Emoji letters sent on their own and ASCII art banners appear the largest. Among markdown options, a single # header is the biggest.",
  },
  {
    question: "Can I make my Discord name bigger?",
    answer:
      "No. Discord doesn't allow headers or larger text in display names, but you can use wide text or fancy Unicode fonts to make your name stand out.",
    answerContent: (
      <>
        No. Discord doesn&apos;t allow headers or larger text in display names, but you can use wide text or{" "}
        <Link href="/discord-name-generator">fancy Unicode fonts</Link> to make your name stand out.
      </>
    ),
  },
  {
    question: "How do I make small text in Discord?",
    answer:
      "Type -# followed by a space at the start of a line to create small gray subtext. You can also use our Small Text generator for tiny Unicode letters.",
    answerContent: (
      <>
        Type -# followed by a space at the start of a line to create small gray subtext. You can also use our{" "}
        <Link href="/small-text-discord">Small Text generator</Link> for tiny Unicode letters.
      </>
    ),
  },
];

/** "What is" through "Where can you use it", above the copyable ideas. */
export function BigTextGuide() {
  return (
    <>
      <h2>What Is Discord Big Text?</h2>
      <p>
        Discord doesn&apos;t have a font size setting, but there are several ways to make your text appear
        bigger in chat. Discord big text is any text that shows up larger than normal messages. The most
        common methods are markdown headers, emoji letters, wide Unicode text and ASCII art. Each one looks
        different, so you can pick the style that fits your message best.
      </p>

      <h2>4 Ways to Make Big Text in Discord</h2>
      <h3>1. Header Text (the Easiest Way)</h3>
      <p>
        Discord supports markdown headers, which make your text large and bold. Type one, two or three hash
        symbols at the start of a line, followed by a space:
      </p>
      <ul>
        <li>
          <code># Big text</code> → the largest size
        </li>
        <li>
          <code>## Medium text</code> → slightly smaller
        </li>
        <li>
          <code>### Small header</code> → a little bigger than normal text
        </li>
      </ul>
      <p>
        <strong>Important:</strong> the space after the <code>#</code> is required, and the header must be at
        the very start of the line. Headers are great for announcements, rules channels and section titles.
        See our <Link href="/discord-text-formatting">Discord text formatting guide</Link> for every markdown
        option.
      </p>

      <h3>2. Emoji Letters (Giant Text)</h3>
      <p>
        You can spell words with regional indicator emojis like 🇭 🇪 🇾. When a message contains only emojis,
        Discord shows them extra large, which makes this one of the biggest text styles available. You can
        also type the shortcode manually, such as <code>:regional_indicator_a:</code>.
      </p>

      <h3>3. Wide Aesthetic Text</h3>
      <p>
        Fullwidth Unicode characters, such as ＷＩＤＥ ＴＥＸＴ, take up more space than normal letters. They
        don&apos;t change the height of your text, but they make it look wider and more spaced out. Wide text
        also works in places where markdown doesn&apos;t, like your display name and bio. Our{" "}
        <Link href="/discord-font-generator/wide-text">wide text generator</Link> has more wide styles.
      </p>

      <h3>4. ASCII Art Banners</h3>
      <p>
        ASCII art uses blocks and symbols to draw huge letters across several lines. Place it inside a code
        block (three backticks on each side) so Discord keeps the letters lined up. ASCII banners are perfect
        for server welcome messages and channel headers.
      </p>

      <h2>How to Use the Discord Big Text Generator</h2>
      <ol>
        <li>Type your text in the box above.</li>
        <li>Browse the styles: headers, emoji letters, wide text and ASCII banners update instantly.</li>
        <li>
          Tap <strong>Copy</strong> next to the style you like.
        </li>
        <li>Open Discord and click the message box in any server, channel or DM.</li>
        <li>Paste and send. Your big text appears right away.</li>
      </ol>

      <h2>Where Can You Use Big Text in Discord?</h2>
      <div className="overflow-x-auto">
        <table className="min-w-[34rem]">
          <thead>
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Headers</th>
              <th scope="col">Emoji letters</th>
              <th scope="col">Wide text</th>
              <th scope="col">ASCII art</th>
            </tr>
          </thead>
          <tbody>
            {whereRows.map(([place, ...cells]) => (
              <tr key={place}>
                <td>
                  <strong>{place}</strong>
                </td>
                {cells.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        ⚠️ Markdown support in bios can vary, so test it before you rely on it. Emoji letters can go in names,
        but they stay normal size there. Usernames and server names don&apos;t support markdown, so use wide
        text or a style from our <Link href="/">Discord Fonts generator</Link> instead.
      </p>
    </>
  );
}

const whereRows = [
  ["Server messages", "✅", "✅", "✅", "✅"],
  ["Direct messages", "✅", "✅", "✅", "✅"],
  ["Announcement channels", "✅", "✅", "✅", "✅"],
  ["Display name", "❌", "⚠️", "✅", "❌"],
  ["Server name", "❌", "⚠️", "✅", "❌"],
  ["About Me / bio", "⚠️", "✅", "✅", "❌"],
] as const;

const ideaGroups = [
  {
    title: "For announcements",
    items: ["# 📢 ANNOUNCEMENT", "# 🎉 GIVEAWAY TIME 🎉", "## ⚠️ Server Rules", "# 🔴 WE ARE LIVE"],
  },
  {
    title: "For reactions and hype",
    items: ["🇬 🇬", "🇼 🇴 🇼", "🇱 🇴 🇱", "🇬 🇴 🇴 🇩   🇬 🇦 🇲 🇪", "🇭 🇾 🇵 🇪 ❗"],
  },
  {
    title: "For welcome messages",
    items: [
      "# 👋 Welcome to the server!",
      "## Read the rules, grab your roles and have fun!",
      "ＷＥＬＣＯＭＥ",
    ],
  },
] as const;

/** Copyable big text ideas (outside the prose styles so the chips lay out properly). */
export function BigTextIdeas({ headingClass }: { headingClass: string }) {
  return (
    <section aria-labelledby="big-text-ideas">
      <h2 id="big-text-ideas" className={headingClass}>
        Big Text Ideas to Copy
      </h2>
      <p className="mt-2 text-muted">Tap any idea to copy it, then paste it into Discord.</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {ideaGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-border bg-surface p-4">
            <h3 className="font-bold text-text">{group.title}</h3>
            <CopyChips items={group.items} className="mt-3" />
          </div>
        ))}
      </div>
    </section>
  );
}

/** Tips and troubleshooting, below the ideas. */
export function BigTextTips() {
  return (
    <>
      <h2>Tips for Using Big Text the Right Way</h2>
      <ul>
        <li>
          <strong>Don&apos;t overdo it.</strong> Big text in every message can feel like shouting, and some
          servers count it as spam.
        </li>
        <li>
          <strong>Check server rules.</strong> Many communities limit headers or emoji spam in general chat
          channels.
        </li>
        <li>
          <strong>Use headers for structure.</strong> They work best for rules, announcements and guides, not
          casual replies.
        </li>
        <li>
          <strong>Keep emoji words short.</strong> Two to five letters look best. Long sentences in emoji
          letters are hard to read.
        </li>
        <li>
          <strong>Combine styles.</strong> Try <code># **BOLD HEADER**</code> or add an emoji at the start,
          like <code># 🎮 Game Night</code>.
        </li>
        <li>
          <strong>Use subtext for balance.</strong> Add <code>-# small note</code> under a big header for
          extra details in tiny gray text.
        </li>
      </ul>

      <h2>Why Isn&apos;t My Discord Big Text Working?</h2>
      <h3>The # shows up as a symbol instead of a header.</h3>
      <p>
        Make sure there&apos;s a space between the <code>#</code> and your text, and that the <code>#</code>{" "}
        is the very first character on the line.
      </p>
      <h3>My emoji letters turned into a flag.</h3>
      <p>
        Some letter pairs, like U + S or G + B, combine into country flags. Add a space between each letter to
        stop this. Our generator does it for you automatically.
      </p>
      <h3>My ASCII art looks broken.</h3>
      <p>
        Wrap it in a code block using three backticks (<code>```</code>) before and after. Without a code
        block, Discord removes the extra spaces and the letters fall out of line. Our generator adds the
        backticks for you.
      </p>
      <h3>Wide text shows as boxes.</h3>
      <p>
        Some older devices don&apos;t support every Unicode character. Try a different style or update your
        app.
      </p>
    </>
  );
}
