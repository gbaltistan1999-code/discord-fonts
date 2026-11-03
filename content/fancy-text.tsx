import Link from "next/link";
import type { Faq } from "./faqs";

export const fancyTextPage = {
  path: "/fancy-text-generator",
  name: "Fancy Text Generator",
  h1: "Fancy Text Generator",
  title: "Fancy Text Generator – 170+ Cool Fonts to Copy & Paste",
  description:
    "Turn plain text into 170+ fancy fonts: script, gothic, bubble, aesthetic and more. Copy with one click and paste into Discord, Instagram, TikTok or anywhere.",
  intro:
    "Type a word, a name or a whole sentence, and you'll see it in more than 170 fancy fonts at once. Tap any style to copy it, then paste it wherever you want: a Discord name, an Instagram bio, a TikTok caption, a group chat. Nothing to install, no account, and your text never leaves your browser.",
  sampleText: "Fancy Text",
  /** Bold Script, Gothic Fraktur, Bold Gothic, Double-Struck, Vaporwave Fullwidth, Bubble, Small Caps, Circled. */
  order: [
    "bold-script",
    "fraktur",
    "bold-fraktur",
    "double-struck",
    "fullwidth",
    "bubble",
    "small-caps",
    "circled",
  ],
} as const;

export const fancyTextFaqs: readonly Faq[] = [
  {
    question: "What is a fancy text generator?",
    answer:
      "It's a tool that converts normal letters into look-alike Unicode characters, so you can copy styled text and paste it anywhere that accepts text.",
  },
  {
    question: "Is fancy text the same as changing the font?",
    answer:
      "No. Changing a font only affects your own screen. Fancy text uses different characters, so everyone who sees it gets the same style without installing anything.",
  },
  {
    question: "Why does my fancy text show as boxes or question marks?",
    answer:
      "The device viewing it doesn't have a font that includes those characters. It mostly happens with squared, dark bubble and glitch styles on older phones, smart TVs and consoles. Bold, script and gothic are the safest.",
  },
  {
    question: "Can I use fancy text in my Discord username?",
    answer:
      "Not in your @username. Use it in your display name or a server nickname, which is what people actually see in chat. Our Discord name generator walks you through it.",
    answerContent: (
      <>
        Not in your @username. Use it in your display name or a server nickname, which is what people actually
        see in chat. Our <Link href="/discord-name-generator">Discord name generator</Link> walks you through
        it.
      </>
    ),
  },
  {
    question: "Is fancy text safe to use?",
    answer:
      "Yes. It's just text. The only risks are practical: some people may not be able to read it, and some sites block unusual characters.",
  },
  {
    question: "Is this generator free?",
    answer:
      "Yes, completely free with no sign-up, and the conversion runs in your browser, so your text isn't sent anywhere.",
  },
];

const styleGuideRows = [
  ["Bold / Bold Sans", "𝐅𝐚𝐧𝐜𝐲", "High", "Excellent", "Names, headlines"],
  ["Script / Bold Script", "𝓕𝓪𝓷𝓬𝔂", "Medium", "Excellent", "Display names, bios"],
  ["Gothic (Fraktur)", "𝕱𝖆𝖓𝖈𝖞", "Medium", "Excellent", "Gaming profiles, server names"],
  ["Double-Struck", "𝔽𝕒𝕟𝕔𝕪", "High", "Excellent", "Clean, modern names"],
  ["Small Caps", "ꜰᴀɴᴄʏ", "High", "Very good", "Bios, channel names"],
  ["Vaporwave", "Ｆａｎｃｙ", "High", "Very good", "Aesthetic bios"],
  ["Bubble / Circled", "Ⓕⓐⓝⓒⓨ", "Medium", "Good", "Playful names, messages"],
  ["Squared / Dark Bubble", "🅵🅰🅽🅲🆈", "Medium", "Weaker on older devices", "Short words, announcements"],
  ["Glitch / Zalgo", "F̸a̵n̷c̶y̴", "Low", "Varies", "Jokes and memes only"],
] as const;

/** The example column, shared with the translated tables (the samples are Unicode, not words). */
export const fancyExamples: readonly string[] = styleGuideRows.map((row) => row[1]);

export function FancyTextArticle() {
  return (
    <>
      <h2>How fancy text actually works</h2>
      <p>Here&apos;s the part most generators don&apos;t explain: fancy text isn&apos;t a font at all.</p>
      <p>
        Apps like Discord and Instagram don&apos;t let you pick a typeface. What they do accept is any
        character in Unicode, the standard that gives every letter, symbol and emoji on every device its own
        code. And Unicode happens to contain several complete look-alike alphabets. In 2001 it added bold,
        italic, script, Fraktur (gothic) and double-struck letters so mathematicians could write formulas.
        Small caps come from the phonetic alphabet linguists use. The wide &quot;vaporwave&quot; letters come
        from Japanese and Chinese typing systems.
      </p>
      <p>
        A fancy text generator swaps each normal letter for its look-alike. &quot;A&quot; becomes{" "}
        <span className="fancy-text">𝓐</span>, <span className="fancy-text">𝔄</span> or{" "}
        <span className="fancy-text">🅐</span>. Because the result is made of real characters, it keeps its
        look wherever you paste it, and everyone sees the same thing.
      </p>

      <h2>Which fancy fonts work best (and where)</h2>
      <p>
        Not every style is equally safe. Some render on nearly every phone and computer; others break on older
        devices. Here&apos;s a quick guide based on how each style is built:
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-[38rem]">
          <thead>
            <tr>
              <th scope="col">Style</th>
              <th scope="col">Example</th>
              <th scope="col">Readability</th>
              <th scope="col">Device support</th>
              <th scope="col">Best for</th>
            </tr>
          </thead>
          <tbody>
            {styleGuideRows.map(([style, example, readability, support, bestFor]) => (
              <tr key={style}>
                <td>{style}</td>
                <td className="fancy-text whitespace-nowrap">{example}</td>
                <td>{readability}</td>
                <td>{support}</td>
                <td>{bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Our generator marks the riskiest styles with a &quot;Limited support&quot; badge, so you can spot them
        before you paste.
      </p>
      <p>
        Want just one look? Try the focused generators:{" "}
        <Link href="/discord-font-generator/cursive">cursive</Link>,{" "}
        <Link href="/discord-font-generator/gothic">gothic</Link>,{" "}
        <Link href="/discord-font-generator/bold">bold</Link>,{" "}
        <Link href="/discord-font-generator/small-caps">small caps</Link>,{" "}
        <Link href="/discord-font-generator/aesthetic">aesthetic</Link>,{" "}
        <Link href="/discord-font-generator/bubble">bubble</Link>,{" "}
        <Link href="/discord-font-generator/glitch">glitch</Link> and{" "}
        <Link href="/discord-font-generator/upside-down">upside down</Link>.
      </p>

      <h2>How to use it</h2>
      <ol>
        <li>Type or paste your text in the box. Every style updates as you type.</li>
        <li>
          Use the filters (Bold, Cursive, Gothic, Decorative, Aesthetic, Glitch) if you already know the vibe
          you want.
        </li>
        <li>Tap a style to copy it. You&apos;ll see a &quot;Copied!&quot; confirmation.</li>
        <li>Paste it into your app and save.</li>
      </ol>
      <p>
        Tip: before you commit to a name, paste it into a message to a friend on a different device. If they
        see it properly, you&apos;re good.
      </p>

      <h2>Where fancy text works, and where it doesn&apos;t</h2>
      <p>
        Fancy text works almost anywhere you can type: Discord display names, nicknames, bios, server names
        and messages, plus Instagram, TikTok, Roblox, Facebook, YouTube and X. For platform-specific tips, see{" "}
        <Link href="/instagram-fonts">Instagram Fonts</Link>, <Link href="/tiktok-fonts">TikTok Fonts</Link>,{" "}
        <Link href="/roblox-fonts">Roblox Fonts</Link> and <Link href="/facebook-fonts">Facebook Fonts</Link>.
      </p>
      <p>It usually won&apos;t work in places that only accept basic characters:</p>
      <ul>
        <li>
          Unique usernames and handles. Your Discord @username, for example, only allows lowercase letters,
          numbers, underscores and periods.
        </li>
        <li>Email addresses, passwords and web addresses.</li>
        <li>Some game chats and older forums, which strip or block unusual characters.</li>
      </ul>

      <h2>Mistakes to avoid</h2>
      <ul>
        <li>
          Styling the whole bio. A line or two of fancy text stands out. A full paragraph is hard to read and
          looks cluttered.
        </li>
        <li>
          Using rare styles for your name. If someone can&apos;t read or type your name, they can&apos;t
          @mention or search for you. Fancy characters also usually don&apos;t match plain-letter searches.
        </li>
        <li>
          Mixing too many fonts. One style plus one symbol almost always looks better than three styles at
          once.
        </li>
        <li>
          Forgetting accessibility. Screen readers often announce each fancy letter by its technical name,
          like &quot;mathematical bold capital F,&quot; or skip it. Keep anything important, like rules or
          contact info, in plain text.
        </li>
      </ul>
    </>
  );
}

export const fancyTextRelated = [
  { href: "/", label: "Discord Fonts Generator" },
  { href: "/discord-name-generator", label: "Discord Name Generator" },
  { href: "/discord-text-formatting", label: "Discord Text Formatting Guide" },
] as const;
