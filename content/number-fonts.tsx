import Link from "next/link";
import type { Faq } from "./faqs";

const fontGenerator = <Link href="/">Discord font generator</Link>;

interface NumberFontsPage {
  path: string;
  name: string;
  /** Title tag. */
  title: string;
  h1: string;
  intro: string;
  description: string;
  /** Styles that restyle digits, shown first in the generator. */
  featuredIds: readonly string[];
  faqs: readonly Faq[];
  body: React.ReactNode;
}

/** Extra number sets that aren't generator styles (most only exist for 1–10 or 1–20). Shown as a copy table. */
const numberSets = [
  ["Bold", "𝟎 𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗", "Stats, scores and team numbers"],
  ["Double-struck", "𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡", "Outlined look for names and titles"],
  ["Monospace", "𝟶 𝟷 𝟸 𝟹 𝟺 𝟻 𝟼 𝟽 𝟾 𝟿", "Tech, code and retro vibes"],
  ["Fullwidth", "０ １ ２ ３ ４ ５ ６ ７ ８ ９", "Wide vaporwave aesthetic"],
  ["Superscript", "⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹", "Tiny raised numbers, footnotes, x²"],
  ["Subscript", "₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉", "Tiny lowered numbers, H₂O"],
  ["Circled", "⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩", "Rules lists, steps (goes up to ㊿)"],
  ["Dark circled", "⓿ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿", "Bold numbered lists (goes up to ⓴)"],
  ["Double circled", "⓵ ⓶ ⓷ ⓸ ⓹ ⓺ ⓻ ⓼ ⓽ ⓾", "Rankings and top 10s (1–10 only)"],
  ["Sans circled", "➀ ➁ ➂ ➃ ➄ ➅ ➆ ➇ ➈ ➉", "Clean step-by-step lists (1–10 only)"],
  ["Dark sans circled", "➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ➓", "Channel names and categories (1–10 only)"],
  ["Parenthesized", "⑴ ⑵ ⑶ ⑷ ⑸ ⑹ ⑺ ⑻ ⑼ ⑽", "Sub-points in rules (goes up to ⒇)"],
  ["With full stop", "⒈ ⒉ ⒊ ⒋ ⒌ ⒍ ⒎ ⒏ ⒐ ⒑", "Numbered lists in one character (up to ⒛)"],
  ["Keycap emoji", "0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟", "Colorful channel and role names"],
  ["Roman numerals", "Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ", "Seasons, chapters and events"],
] as const;

/** Copy for /number-fonts (English only). */
export const numberFontsPage: NumberFontsPage = {
  path: "/number-fonts",
  name: "Number Fonts",
  title: "Number Fonts – Copy & Paste Fancy Numbers (Bold, Circled & More)",
  h1: "Number Fonts Generator",
  intro:
    "Type any number below to turn it into bold, circled, tiny or outlined digits you can copy and paste into Discord, Instagram, games and anywhere else.",
  description:
    "Free number fonts generator: turn 123 into 𝟏𝟐𝟑, ①②③, ¹²³ and more. Copy and paste fancy numbers into Discord names, bios, channels and games.",
  featuredIds: [
    "bold-serif",
    "bold-sans",
    "double-struck",
    "sans",
    "monospace",
    "fullwidth",
    "superscript",
    "subscript",
    "circled",
    "negative-circled",
    "parenthesized",
    "circled-spaced",
    "vaporwave-spaced",
    "lenticular",
    "white-lenticular",
    "fire",
    "stardust",
    "verified",
    "arrows",
    "wave",
  ],
  faqs: [
    {
      question: "What are number fonts?",
      answer:
        "They're Unicode characters that look like styled digits, such as 𝟏𝟐𝟑, ①②③ or ¹²³. They aren't real fonts, so you can copy and paste them anywhere that accepts text, without installing anything.",
    },
    {
      question: "Can I use fancy numbers in my Discord username?",
      answer:
        "No. Your @username only allows lowercase letters, plain numbers, underscores and periods. Put fancy numbers in your display name or server nickname instead.",
    },
    {
      question: "Why do some numbers show as boxes?",
      answer:
        "The device viewing them doesn't have a font for that character. Bold, superscript and circled numbers work almost everywhere. Dark circled and double circled numbers are the most likely to break on older phones.",
    },
    {
      question: "How do I get circled numbers above 10?",
      answer:
        "Circled numbers go up to ㊿ (50) and dark circled numbers up to ⓴ (20). Our generator handles 0–9, so for bigger numbers copy them from the table on this page.",
    },
    {
      question: "Do fancy numbers work in games?",
      answer:
        "It depends on the game. Many in-game names block special characters, but bios, clan descriptions and chat often accept them. Bold and superscript digits are the safest to try first.",
    },
    {
      question: "Can I do maths with fancy numbers?",
      answer:
        "No. Apps treat 𝟓 as a symbol, not the number 5, so calculators, spreadsheets and search won't read it as a number. Use them for looks, not for data.",
    },
  ],
  body: (
    <>
      <h2>What are number fonts?</h2>
      <p>
        Number fonts are styled versions of the digits 0 to 9, like 𝟏𝟐𝟑, 𝟙𝟚𝟛, ①②③ or ¹²³. They aren&apos;t
        actual fonts you install. They&apos;re separate Unicode characters that happen to look like bold,
        outlined, circled or tiny numbers, which is why they stay styled when you paste them into Discord, a
        game or a social media bio.
      </p>
      <p>
        Most fancy text tools focus on letters and leave numbers plain. That&apos;s a problem when your name is
        &ldquo;Nova 7&rdquo; or your server has a &ldquo;Top 10&rdquo; channel. This page only shows styles
        that change the digits too, so every result works for numbers.
      </p>

      <h2>How to use the number fonts generator</h2>
      <ol>
        <li>Type a number (or a name with numbers) into the box above.</li>
        <li>Scroll through the styles. Each one changes your digits as you type.</li>
        <li>Click a style to copy it.</li>
        <li>Paste it into your Discord display name, bio, channel name, or anywhere else.</li>
      </ol>
      <p>
        Letters change too, so you can style a whole name like &ldquo;𝐒𝐪𝐮𝐚𝐝 𝟕&rdquo; in one go. Want more
        letter styles? The full {fontGenerator} has 220+ of them.
      </p>

      <h2>Copy and paste number sets</h2>
      <p>
        Here&apos;s every number style in one place, ready to copy. Some of these only exist for 1 to 10, and
        others go past 9 (circled numbers go all the way to ㊿), so you won&apos;t find them all in the
        generator. Select the ones you need and paste them.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Style</th>
              <th>Numbers</th>
              <th>Good for</th>
            </tr>
          </thead>
          <tbody>
            {numberSets.map(([name, digits, use]) => (
              <tr key={name}>
                <td className="whitespace-nowrap">{name}</td>
                <td className="fancy-text whitespace-nowrap select-all">{digits}</td>
                <td>{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Where to use fancy numbers on Discord</h2>
      <ul>
        <li>
          <strong>Display names and nicknames.</strong> A styled number makes a name stand out without making it
          unreadable, like &ldquo;Nova 𝟕&rdquo; or &ldquo;ᴋɪʀᴀ ⁹⁹&rdquo;.
        </li>
        <li>
          <strong>Rules channels.</strong> Circled or dark circled numbers (① ② ③ or ❶ ❷ ❸) make rules easy to
          scan and reference: &ldquo;see rule ④&rdquo;.
        </li>
        <li>
          <strong>Channel and category names.</strong> Number your channels in order, like
          &ldquo;➊・welcome&rdquo; or &ldquo;1️⃣-announcements&rdquo;, so new members know where to start.
        </li>
        <li>
          <strong>Leaderboards and events.</strong> Bold or double-struck digits work well for scores, dates
          and rankings, like &ldquo;Season 𝟑&rdquo; or &ldquo;𝟭𝘀𝘁 place&rdquo;.
        </li>
        <li>
          <strong>Bios.</strong> Superscript numbers are perfect for small details, like your age, timezone or
          a favourite number, without taking up much space.
        </li>
      </ul>
      <p>
        One thing to remember: your Discord @username only accepts plain characters. Fancy numbers go in your
        display name, server nickname, About Me, messages and channel names.
      </p>

      <h2>Which number style should you pick?</h2>
      <ul>
        <li>
          <strong>Most readable:</strong> Bold (𝟏𝟐𝟑) and Bold Sans (𝟭𝟮𝟯). They look like normal numbers, just
          heavier, and display on almost every device.
        </li>
        <li>
          <strong>Most stylish:</strong> Double-struck (𝟙𝟚𝟛) and Monospace (𝟷𝟸𝟹) give an outlined or retro
          feel that suits gaming and tech names.
        </li>
        <li>
          <strong>Smallest:</strong> Superscript (¹²³) and subscript (₁₂₃) are tiny and great for subtle
          details.
        </li>
        <li>
          <strong>Best for lists:</strong> Circled (①②③) and dark circled (❶❷❸) numbers are made for
          numbering things.
        </li>
      </ul>

      <h2>Tips before you paste</h2>
      <ul>
        <li>
          <strong>Test on another device.</strong> Rarer styles like dark circled and double circled numbers can
          show as empty boxes on older phones. Send yourself a DM and check it on your phone.
        </li>
        <li>
          <strong>Mind the character limit.</strong> Discord display names are capped at 32 characters, and some
          fancy digits count as two.
        </li>
        <li>
          <strong>Keep important numbers plain.</strong> Screen readers may read 𝟓 as &ldquo;mathematical bold
          digit five&rdquo;, and searches won&apos;t match it. Use plain digits for things like phone numbers,
          prices and dates people need to search for.
        </li>
      </ul>
    </>
  ),
};
