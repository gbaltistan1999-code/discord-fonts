import Link from "next/link";
import type { StylePage } from "./style-pages";

const teal = {
  accent: "accent-teal",
  heading: "from-teal-600 to-cyan-600 dark:from-teal-300 dark:to-cyan-300",
};

/**
 * Style pages added in November 2026. English only for now: their paths are not in `translatedPaths`,
 * so other languages link to these English versions.
 */
export const moreStylePages: readonly StylePage[] = [
  {
    slug: "italic",
    name: "Italic",
    h1: "Discord Italic Font Generator",
    title: "Discord Italic Font – Copy & Paste Italic & Bold Italic Text",
    description:
      "Italic Discord fonts for names, bios and server titles. Copy italic, bold italic and sans italic text that stays slanted where Discord markdown doesn’t work.",
    intro:
      "Type below to turn your words into italic and bold italic Unicode letters. They stay slanted anywhere you paste them, including display names and nicknames where *markdown* is ignored.",
    featured: {
      label: "Italic styles",
      ids: ["italic", "bold-italic", "sans-italic", "sans-bold-italic"],
    },
    related: ["bold", "cursive", "small-caps"],
    look: teal,
    body: (
      <>
        <h2>Italic Text in Discord: Markdown or Unicode?</h2>
        <p>
          In a normal message you can write italics with one asterisk or underscore, like <code>*this*</code>{" "}
          or <code>_this_</code>. Discord turns that into slanted text, but only in messages. Display names,
          server nicknames, channel names and your About Me ignore markdown, so the asterisks just show up as
          they are. That is where this generator helps: it swaps each letter for its italic twin from Unicode,
          so 𝐼𝑡𝑎𝑙𝑖𝑐 or 𝙄𝙩𝙖𝙡𝙞𝙘 is real text that keeps its slant wherever it goes. For message formatting, see
          the <Link href="/discord-text-formatting">Discord text formatting guide</Link>.
        </p>
        <h2>Which Italic Style Should You Use?</h2>
        <ul>
          <li>
            <strong>Italic</strong> (𝑁𝑜𝑣𝑎) is the light, book-style italic. It looks elegant in bios and
            roleplay names.
          </li>
          <li>
            <strong>Bold Italic</strong> (𝑵𝒐𝒗𝒂) adds weight, so it reads well at the small size names appear
            in chat.
          </li>
          <li>
            <strong>Sans Italic</strong> (𝘕𝘰𝘷𝘢) is clean and modern, a good fit for gaming and tech servers.
          </li>
          <li>
            <strong>Sans Bold Italic</strong> (𝙉𝙤𝙫𝙖) is the punchiest option, popular for esports tags and
            hype channels.
          </li>
        </ul>
        <h2>Tips for Italic Discord Names</h2>
        <p>
          Bold italic styles are the easiest to read in the member list, because thin italics can look faint
          on small screens. If you only want one word to stand out, italicize that word and keep the rest
          plain, like “Nova 𝙁𝙋𝙎”. Italic letters are well supported on current Windows, Mac, iPhone and
          Android devices.
        </p>
        <p>
          Styled letters are different characters from normal ones, so someone searching the member list for
          “Nova” won’t find “𝑵𝒐𝒗𝒂”. Keep part of your name plain if you want to be easy to @mention. Want even
          more slant? The <Link href="/discord-font-generator/cursive">cursive font generator</Link> has
          flowing script styles, and the <Link href="/discord-font-generator/bold">bold font generator</Link>{" "}
          has upright bold letters.
        </p>
      </>
    ),
  },
  {
    slug: "strikethrough",
    name: "Strikethrough",
    h1: "Discord Strikethrough Text Generator",
    title: "Discord Strikethrough Text Generator – Copy & Paste",
    description:
      "Make s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ text for Discord names, bios and channel names. Copy crossed-out text styles that work where ~~markdown~~ doesn’t.",
    intro:
      "Type below to cross out your text with Unicode lines. Copy any strikethrough style and paste it into your display name, bio or server, where ~~markdown~~ doesn’t work.",
    featured: {
      label: "Strikethrough styles",
      ids: ["strikethrough", "short-strike", "tilde-strike", "slashed", "crossed-out", "sunny-strike"],
    },
    related: ["underline", "glitch", "italic"],
    look: teal,
    body: (
      <>
        <h2>Two Ways to Cross Out Text on Discord</h2>
        <p>
          Inside a message, wrap text in two tildes, like <code>~~this~~</code>, and Discord draws a line
          through it. That only works in messages, though. In a display name, nickname, channel name or bio
          the tildes stay as plain characters. This generator uses a different trick: it adds a Unicode
          “combining” line after every letter, so the line becomes part of the text itself and shows up
          anywhere. See the <Link href="/discord-text-formatting">Discord text formatting guide</Link> for the
          markdown version.
        </p>
        <h2>Strikethrough Styles Explained</h2>
        <ul>
          <li>
            <strong>Strikethrough</strong> (s̶t̶r̶i̶k̶e̶) draws one long line through the middle, the classic
            crossed-out look.
          </li>
          <li>
            <strong>Short Strike</strong> (s̵t̵r̵i̵k̵e̵) and <strong>Tilde Strike</strong> (s̴t̴r̴i̴k̴e̴) use shorter or
            wavy lines for a softer effect.
          </li>
          <li>
            <strong>Slashed</strong> (s̸t̸r̸i̸k̸e̸) puts a diagonal slash through each letter.
          </li>
          <li>
            <strong>Crossed Out</strong> stacks a line and a slash, which reads as fully deleted.
          </li>
        </ul>
        <h2>Ideas for Strikethrough Text</h2>
        <p>
          Strikethrough is great for jokes and self-corrections, like “I’m s̶l̶e̶e̶p̶i̶n̶g̶ gaming”, or for a
          status-style bio line such as “s̶t̶u̶d̶y̶i̶n̶g̶ procrastinating”. Server owners use it to mark old or
          archived channels, for example “📁︱o̶l̶d̶-̶e̶v̶e̶n̶t̶s̶”.
        </p>
        <h2>Things to Know</h2>
        <p>
          Each crossed-out letter is really two characters: the letter and the line. That makes these names
          use up Discord’s 32-character display name limit faster, so keep them short. Lines are drawn by your
          device’s font, so they can sit slightly higher or lower on different phones. For a messier, creepier
          look, try the <Link href="/discord-font-generator/glitch">glitch text generator</Link>, or underline
          words instead with the <Link href="/discord-font-generator/underline">underline generator</Link>.
        </p>
      </>
    ),
  },
  {
    slug: "underline",
    name: "Underline",
    h1: "Discord Underline Text Generator",
    title: "Discord Underline Text Generator – Copy & Paste",
    description:
      "Make u̲n̲d̲e̲r̲l̲i̲n̲e̲d̲ text for Discord names, bios and channels. Copy single, double and wavy underline styles that work where __markdown__ doesn’t.",
    intro:
      "Type below to underline your text with Unicode lines. Copy single, double or wavy underlines and paste them into your display name, bio or server, where __markdown__ doesn’t work.",
    featured: {
      label: "Underline styles",
      ids: ["underline", "double-underline", "low-underline", "wavy", "equals-underline", "boxed-lines"],
    },
    related: ["strikethrough", "italic", "bold"],
    look: teal,
    body: (
      <>
        <h2>Underlining Text on Discord</h2>
        <p>
          In messages, Discord underlines anything wrapped in two underscores: <code>__like this__</code>.
          Names, nicknames, channel names and bios don’t support markdown, so the underscores just appear as
          they are. This generator adds a Unicode combining line under every letter instead, so the underline
          is part of the text and travels with it. For the markdown way, see the{" "}
          <Link href="/discord-text-formatting">Discord text formatting guide</Link>.
        </p>
        <h2>Underline Styles You Can Copy</h2>
        <ul>
          <li>
            <strong>Underline</strong> (u̲n̲d̲e̲r̲) is a single clean line, the closest match to a normal
            underline.
          </li>
          <li>
            <strong>Double Underline</strong> (u̳n̳d̳e̳r̳) adds a second line for extra emphasis.
          </li>
          <li>
            <strong>Low Underline</strong> and <strong>Wavy Underline</strong> sit lower or wiggle, which
            looks more decorative.
          </li>
          <li>
            <strong>Boxed Lines</strong> (u̲̅n̲̅d̲̅e̲̅r̲̅) adds a line above and below, so the word looks framed.
          </li>
        </ul>
        <h2>Where Underlined Text Works Best</h2>
        <p>
          Underlines are handy for headings inside your About Me, like “A̲b̲o̲u̲t̲ m̲e̲” followed by a few lines, and
          for category names in a server’s channel list. In names, underline only the part you want people to
          notice, such as a clan tag.
        </p>
        <h2>Things to Know</h2>
        <p>
          Every underlined letter is two characters (the letter plus the line), so long names hit Discord’s
          32-character display name limit sooner. The line comes from your device’s font, so it may look
          slightly thicker or thinner on other phones. Want a line through the text instead? Use the{" "}
          <Link href="/discord-font-generator/strikethrough">strikethrough generator</Link>, or make the
          letters themselves heavier with the{" "}
          <Link href="/discord-font-generator/bold">bold font generator</Link>.
        </p>
      </>
    ),
  },
  {
    slug: "wide-text",
    name: "Wide Text",
    h1: "Wide Text Generator for Discord",
    title: "Wide Text Generator for Discord – Vaporwave Fullwidth Text",
    description:
      "Turn words into ｗｉｄｅ ｔｅｘｔ for Discord. Copy vaporwave fullwidth and spaced-out letters for names, bios and server titles in one click.",
    intro:
      "Type below to stretch your text into wide, vaporwave-style letters. Copy fullwidth or spaced-out text and paste it into your Discord name, bio or server.",
    featured: {
      label: "Wide text styles",
      ids: ["fullwidth", "vaporwave-spaced", "wide-spaced"],
    },
    related: ["aesthetic", "monospace", "small-caps"],
    look: teal,
    body: (
      <>
        <h2>What Is Wide Text?</h2>
        <p>
          Wide text, also called fullwidth or vaporwave text, uses letters that are as wide as Chinese,
          Japanese and Korean characters. They were made so Latin letters line up neatly in East Asian text,
          but online they became the signature look of vaporwave art: ｃｈｉｌｌ ｖｉｂｅｓ. Because they are
          real Unicode characters, they keep their width in Discord names, bios, channel names and messages.
        </p>
        <h2>Wide Text Styles</h2>
        <ul>
          <li>
            <strong>Vaporwave Fullwidth</strong> (ｗｉｄｅ) is true fullwidth text, the classic aesthetic
            look.
          </li>
          <li>
            <strong>Vaporwave Spaced</strong> (ｗ ｉ ｄ ｅ) adds a space between fullwidth letters for an even
            more stretched feel.
          </li>
          <li>
            <strong>Wide Spaced</strong> (w i d e) keeps normal letters but spreads them out, which stays easy
            to read.
          </li>
        </ul>
        <h2>Tips for Wide Text on Discord</h2>
        <p>
          Wide letters take about twice the room of normal ones, so a long name can wrap or get cut off in the
          member list. Short words work best: one or two words in a name, or a single heading in your bio.
          Wide Spaced uses real spaces, and every space counts toward the 32-character display name limit.
        </p>
        <p>
          Pair wide text with soft symbols like ✧ or ☁ for a full vaporwave profile, or browse more pastel and
          cute styles in the <Link href="/discord-font-generator/aesthetic">aesthetic font generator</Link>.
          For letters that are evenly spaced but not stretched, try the{" "}
          <Link href="/discord-font-generator/monospace">monospace generator</Link>.
        </p>
      </>
    ),
  },
  {
    slug: "monospace",
    name: "Monospace",
    h1: "Discord Monospace Font Generator",
    title: "Discord Monospace Font Generator – Copy & Paste Mono Text",
    description:
      "Get a 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 Discord font for names, bios and channels. Copy typewriter-style text that works outside code blocks, in one click.",
    intro:
      "Type below to turn your text into monospace Unicode letters, the typewriter look of code. Copy it into your display name, bio or channel names, where `code` formatting doesn’t work.",
    featured: {
      label: "Monospace styles",
      ids: ["monospace", "white-square"],
    },
    related: ["wide-text", "double-struck", "bold"],
    look: teal,
    body: (
      <>
        <h2>Monospace Text Without Code Blocks</h2>
        <p>
          In messages, Discord shows text in a monospace font when you wrap it in backticks, like{" "}
          <code>`this`</code>, or in a code block with three backticks. That formatting is ignored in names,
          nicknames, channel names and bios. Unicode has its own monospace alphabet, 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎, so this
          generator swaps each letter for its monospace version, and the look stays wherever you paste it. The{" "}
          <Link href="/discord-text-formatting">Discord text formatting guide</Link> covers backticks and code
          blocks.
        </p>
        <h2>Monospace Styles</h2>
        <ul>
          <li>
            <strong>Monospace</strong> (𝚗𝚘𝚟𝚊) gives every letter the same width, like a typewriter or code
            editor. Digits are included, so 𝚃𝚎𝚊𝚖 𝟶𝟽 works too.
          </li>
          <li>
            <strong>White Square Brackets</strong> wraps monospace text in ⟦ ⟧ for a clean, technical label.
          </li>
        </ul>
        <h2>Who Uses Monospace Names?</h2>
        <p>
          Monospace suits developer communities, hacker and cyberpunk roleplay, bot channels and anyone who
          likes a minimal, techy look. Server owners use it for channel names like “𝚋𝚘𝚝-𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜” or
          “𝚌𝚑𝚊𝚗𝚐𝚎𝚕𝚘𝚐”, and it pairs nicely with plain lowercase text.
        </p>
        <h2>Things to Know</h2>
        <p>
          Monospace letters are well supported on modern devices. Like all styled text, they are different
          characters from normal letters, so members searching for “nova” won’t find “𝚗𝚘𝚟𝚊”. For stretched
          vaporwave letters, try the <Link href="/discord-font-generator/wide-text">wide text generator</Link>
          ; for outlined letters, see the{" "}
          <Link href="/discord-font-generator/double-struck">double struck font</Link>.
        </p>
      </>
    ),
  },
  {
    slug: "double-struck",
    name: "Double Struck",
    h1: "Discord Double Struck Font Generator",
    title: "Discord Double Struck Font Generator – Blackboard Bold Text",
    description:
      "Copy 𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜 text for Discord names, bios and server titles. Outlined blackboard bold letters and numbers, free to copy and paste.",
    intro:
      "Type below to turn your text into double struck letters, the outlined “blackboard bold” style. Copy it into your Discord display name, bio, channel names or messages.",
    featured: {
      label: "Double struck styles",
      ids: ["double-struck", "double-struck-caps"],
    },
    related: ["monospace", "square-text", "bold"],
    look: teal,
    body: (
      <>
        <h2>What Is Double Struck Text?</h2>
        <p>
          Double struck letters, like 𝔻𝕠𝕦𝕓𝕝𝕖, have an extra line inside each stroke, so they look outlined.
          The style comes from mathematics, where teachers drew bold letters on a blackboard by doubling the
          lines. That is why it is also called “blackboard bold”. Unicode includes a full double struck
          alphabet with numbers (𝟙𝟚𝟛), so it works anywhere you can paste text, including Discord names and
          channel names.
        </p>
        <h2>Double Struck Styles</h2>
        <ul>
          <li>
            <strong>Double-Struck</strong> (ℕ𝕠𝕧𝕒) keeps your capital and lowercase letters as typed.
          </li>
          <li>
            <strong>Double-Struck Caps</strong> (ℕ𝕆𝕍𝔸) turns everything into capitals, which looks bold and
            clean in server names and channel categories.
          </li>
        </ul>
        <h2>Ideas for Double Struck Names</h2>
        <p>
          Double struck works well for clean, confident names like “𝕍𝕖𝕩” and for server titles such as “𝕋ℍ𝔼
          𝕍𝔸𝕌𝕃𝕋”. The outlined numbers are handy for team tags (𝕋𝕖𝕒𝕞 𝟟) and ranked channels (𝕋𝕚𝕖𝕣 𝟙).
        </p>
        <h2>Things to Know</h2>
        <p>
          A few capitals (ℂ, ℍ, ℕ, ℙ, ℚ, ℝ and ℤ) come from a different Unicode block than the rest, so on
          some fonts they can look slightly different from neighboring letters. That’s normal. Styled letters
          also aren’t found by Discord’s member search, so keep part of your name plain if you want to be easy
          to mention. For square letters in boxes, try the{" "}
          <Link href="/discord-font-generator/square-text">square text generator</Link>, or get typewriter
          letters with the <Link href="/discord-font-generator/monospace">monospace generator</Link>.
        </p>
      </>
    ),
  },
  {
    slug: "square-text",
    name: "Square Text",
    h1: "Discord Square Text Generator",
    title: "Discord Square Text Generator – Copy & Paste Squared Letters",
    description:
      "Put letters in boxes for Discord: 🅂🅀🅄🄰🅁🄴 and 🆂🆀🆄🅰︎🆁🅴 text for names, bios and server titles. Copy squared letters in one click.",
    intro:
      "Type below to put every letter in its own square. Copy outlined or filled square text and paste it into your Discord name, bio, channels or messages.",
    featured: {
      label: "Square text styles",
      ids: ["squared", "negative-squared", "squared-melody"],
    },
    related: ["bubble", "double-struck", "aesthetic"],
    look: teal,
    body: (
      <>
        <h2>What Is Square Text?</h2>
        <p>
          Square text places each letter inside a box, like 🅂🅀🅄🄰🅁🄴. These are real Unicode characters from the
          “Enclosed Alphanumeric Supplement” block, so they paste into Discord names, bios, channel names and
          messages like any other text. They are the boxy cousin of the circled letters in the{" "}
          <Link href="/discord-font-generator/bubble">bubble font generator</Link>.
        </p>
        <h2>Square Text Styles</h2>
        <ul>
          <li>
            <strong>Squared</strong> (🄽🄾🅅🄰) draws a thin outline around each letter.
          </li>
          <li>
            <strong>Squared Dark</strong> (🅽🅾︎🆅🅰︎) uses filled black squares with white letters, which stands
            out more.
          </li>
          <li>
            <strong>Squared Melody</strong> adds music notes around outlined squares for a playful look.
          </li>
        </ul>
        <h2>Tips for Square Text on Discord</h2>
        <p>
          Square letters only come in capitals, and they are wide, so short words work best: a name, a clan
          tag or a channel category like “🅅🄾🄸🄲🄴”. Keep longer phrases plain so they stay readable.
        </p>
        <p>
          A few filled letters (🅰, 🅱, 🅾 and 🅿) double as emoji, so some phones show them as red emoji buttons.
          The generator adds a small invisible marker that asks devices to show them as plain text, but not
          every device follows it. If that bothers you, use the outlined Squared style. For outlined letters
          without boxes, see the{" "}
          <Link href="/discord-font-generator/double-struck">double struck font generator</Link>.
        </p>
      </>
    ),
  },
];
