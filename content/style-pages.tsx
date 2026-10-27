import Link from "next/link";
import type { FeaturedStyles } from "@/components/FontGenerator";
import { getStylesByCategory, type FontCategory } from "@/lib/fonts";

export interface StylePage {
  slug: string;
  /** Short name used in links and breadcrumbs, e.g. "Bold". */
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  featured: FeaturedStyles;
  body: React.ReactNode;
  related: readonly string[];
}

const fromCategory = (category: FontCategory, label: string): FeaturedStyles => ({
  label,
  ids: getStylesByCategory(category).map((s) => s.id),
});

export const stylePages: readonly StylePage[] = [
  {
    slug: "bold",
    name: "Bold",
    h1: "Discord Bold Font Generator",
    title: "Discord Bold Font Generator – Copy & Paste Bold Text",
    description:
      "Make bold Discord text for names, nicknames and server titles. Type once, copy any bold Discord font (serif, sans or italic) and paste it anywhere.",
    intro:
      "Type below to turn your text into bold Unicode letters that stay bold wherever you paste them, including Discord display names and server nicknames where markdown doesn’t work.",
    featured: fromCategory("bold", "Bold styles"),
    related: ["cursive", "gothic", "small-caps"],
    body: (
      <>
        <h2>Why Use a Bold Discord Font?</h2>
        <p>
          In a Discord message you can make text bold by wrapping it in two asterisks, like{" "}
          <code>**this**</code>. That markdown is ignored in names, though, so a bold display name or channel
          name needs a different approach. This generator swaps each letter for its bold twin from Unicode’s
          “Mathematical Alphanumeric Symbols” block. The result, such as 𝐆𝐚𝐦𝐞𝐫 or 𝗚𝗮𝗺𝗲𝗿, is real text that
          keeps its weight in any field that accepts Unicode.
        </p>
        <h2>Which Bold Style Should You Pick?</h2>
        <ul>
          <li>
            <strong>Bold (serif)</strong> has classic book-style letters with small feet. It suits formal
            server names and roleplay characters.
          </li>
          <li>
            <strong>Bold Sans</strong> is clean and modern, and it is the most readable choice for gaming
            names and channel titles.
          </li>
          <li>
            <strong>Bold Italic</strong> and <strong>Sans Bold Italic</strong> add movement, which works well
            for hype channels and esports team tags.
          </li>
          <li>
            <strong>Bold Script</strong> and <strong>Bold Gothic</strong> mix weight with personality when
            plain bold feels too simple.
          </li>
        </ul>
        <h2>Tips for Bold Discord Names</h2>
        <p>
          Bold letters are among the best-supported fancy characters, so they display correctly on current
          Windows, Mac, iPhone and Android devices. Bold serif and Bold Sans also include digits, which makes
          them handy for clan tags like 𝐓𝐞𝐚𝐦 𝟕. Remember that display names and nicknames are capped at 32
          characters; the live preview shows your count as you type.
        </p>
        <p>
          One thing to keep in mind: people searching the member list for “Gamer” will not find “𝐆𝐚𝐦𝐞𝐫”,
          because they are different characters. If you want to be easy to @mention, keep part of your name
          plain, or bold just one word. For bold text inside messages, standard markdown is usually the better
          choice. See the <Link href="/discord-text-formatting">Discord text formatting guide</Link> for every
          option.
        </p>
        <h2>Bold Discord Name Ideas</h2>
        <p>
          Bold works best when it highlights something specific. Try bolding only your main name and leaving a
          tag plain, like “𝗡𝗼𝘃𝗮 | FPS”, or use bold digits for a team number such as “𝐒𝐪𝐮𝐚𝐝 𝟕”. Server owners
          often bold the category names in the channel list, for example “𝗩𝗢𝗜𝗖𝗘 𝗖𝗛𝗔𝗡𝗡𝗘𝗟𝗦”, so they stand out
          from the channels underneath. Bold Italic is a popular pick for streamers and content creators
          because it looks energetic in chat without being hard to read.
        </p>
      </>
    ),
  },
  {
    slug: "cursive",
    name: "Cursive",
    h1: "Discord Cursive Font Generator",
    title: "Discord Cursive Font – Copy & Paste Cursive Text",
    description:
      "Turn your name into elegant cursive Discord text. Script, bold script and italic Discord fonts you can copy and paste into nicknames, bios and servers.",
    intro:
      "Write your text once and get flowing script, bold script and italic letters ready to copy into your Discord display name, About Me or server name.",
    featured: fromCategory("cursive", "Cursive styles"),
    related: ["bold", "aesthetic", "small-caps"],
    body: (
      <>
        <h2>What Is a Discord Cursive Font?</h2>
        <p>
          Cursive or script text, like 𝒮𝓉𝒶𝓇𝓁𝒾𝑔𝒽𝓉 or 𝓢𝓽𝓪𝓻𝓵𝓲𝓰𝓱𝓽, comes from the script alphabets in Unicode.
          They were created for mathematical notation, but their handwritten look made them one of the most
          popular ways to decorate a Discord name. Because they are characters rather than formatting, the
          curls survive in places where markdown italics can’t reach, such as nicknames and channel names.
        </p>
        <h2>Script vs. Bold Script vs. Italic</h2>
        <p>
          <strong>Script Cursive</strong> is light and elegant, a natural fit for aesthetic profiles, art
          servers and soft themes. A handful of its capitals (B, E, F, H, I, L, M and R) and the lowercase e,
          g and o come from an older Unicode block, so they can look slightly different from their neighbors
          in some fonts.
        </p>
        <p>
          <strong>Bold Script</strong> uses one consistent set of heavier strokes, so it is easier to read at
          small sizes and generally looks better in the member list. If you only pick one cursive Discord font
          for a name, make it this one.
        </p>
        <p>
          <strong>Italic</strong> and <strong>Sans Italic</strong> are slanted rather than joined-up, a subtle
          option when full script feels too fancy.
        </p>
        <h2>Where Cursive Text Looks Best</h2>
        <ul>
          <li>Display names for artists, writers and roleplay characters.</li>
          <li>About Me bios, especially combined with decorations like the Ornate or Sparkles styles.</li>
          <li>Server names for cozy, creative or community spaces.</li>
          <li>Welcome and rules channel titles, paired with a plain description.</li>
        </ul>
        <p>
          Script letters are thin, so they can be hard to read on small phone screens and in dark mode at low
          brightness. Check the live preview before you commit, and keep the name short. For a softer look
          that is still easy to read, try the{" "}
          <Link href="/discord-font-generator/small-caps">small caps generator</Link> instead.
        </p>
        <h2>Cursive Name Ideas</h2>
        <p>
          Short names look best in script. A single word like “𝓛𝓾𝓷𝓪” or “𝒱ℯ𝓁𝓋ℯ𝓉” reads beautifully, while long
          phrases quickly become a tangle of loops. Many people pair a cursive name with a simple symbol, for
          example “༺ 𝓡𝓸𝓼𝓮 ༻”, or use script only for the first letter and keep the rest plain. If your server
          has a soft or creative theme, a cursive server name with plain channel names is an easy way to set
          the mood without hurting readability.
        </p>
      </>
    ),
  },
  {
    slug: "gothic",
    name: "Gothic",
    h1: "Discord Gothic Font Generator",
    title: "Discord Gothic Font Generator – Old English Fraktur Text",
    description:
      "Create gothic Discord text in Fraktur and bold blackletter. Copy and paste Old English style Discord fonts for server names, roles and nicknames.",
    intro:
      "Turn plain text into dramatic blackletter. These gothic Discord fonts use Fraktur characters that look like Old English lettering and paste anywhere on Discord.",
    featured: fromCategory("gothic", "Gothic styles"),
    related: ["bold", "glitch", "cursive"],
    body: (
      <>
        <h2>Fraktur: The Gothic Discord Font</h2>
        <p>
          Gothic text such as 𝔇𝔞𝔯𝔨 𝔎𝔫𝔦𝔤𝔥𝔱 or 𝕯𝖆𝖗𝖐 𝕶𝖓𝖎𝖌𝖍𝖙 uses Unicode’s Fraktur letters, a style based on the
          blackletter type that was common in German printing for centuries. People often call it Old English
          text because it resembles the lettering on old manuscripts, newspaper mastheads and tattoo designs.
        </p>
        <h2>Gothic Styles in This Generator</h2>
        <ul>
          <li>
            <strong>Gothic Fraktur</strong> is the classic, lighter blackletter. It is elegant but can be hard
            to read at small sizes.
          </li>
          <li>
            <strong>Bold Gothic</strong> is heavier and much more legible in member lists, and it is the best
            choice for a gothic display name.
          </li>
          <li>
            <strong>Gothic Cross</strong>, <strong>Crowned</strong>, <strong>Royal Frame</strong> and{" "}
            <strong>Crossed Swords</strong> wrap the letters in symbols for a medieval or clan look.
          </li>
          <li>
            <strong>Runic Style</strong> borrows look-alike letters from the Cherokee syllabary for an
            ancient, carved feel.
          </li>
        </ul>
        <h2>Ideas for Gothic Text on Discord</h2>
        <p>
          Gothic Discord fonts suit horror, fantasy, metal music and roleplay communities. They make great
          server names, staff role names and category headers. A single gothic word can set the tone, as in
          “𝕿𝖍𝖊 𝕮𝖗𝖞𝖕𝖙” for a voice channel, while the rest of the server stays readable.
        </p>
        <p>
          Note that Fraktur has no digits, so numbers stay plain. A few capitals (C, H, I, R and Z) in the
          lighter style come from a separate Unicode block and may look slightly different on some devices. If
          you want something heavier still, combine Bold Gothic with the{" "}
          <Link href="/discord-font-generator/glitch">glitch text generator</Link> for a cursed look, or keep
          things clean with the <Link href="/discord-font-generator/bold">bold font generator</Link>.
        </p>
        <h2>Gothic Server and Role Name Ideas</h2>
        <p>
          Blackletter shines in titles. Server names like “𝕾𝖍𝖆𝖉𝖔𝖜 𝕽𝖊𝖆𝖑𝖒” or “꧁༒☬ 𝕹𝖎𝖌𝖍𝖙𝖋𝖆𝖑𝖑 ☬༒꧂” instantly
          signal a dark or medieval theme. Role names are another great fit, since they appear in the member
          list and on profiles: “𝕺𝖛𝖊𝖗𝖑𝖔𝖗𝖉”, “♛ 𝕽𝖔𝖞𝖆𝖑 𝕲𝖚𝖆𝖗𝖉 ♛” or “𝔎𝔫𝔦𝔤𝔥𝔱” feel at home in roleplay and guild
          servers. Keep gothic text to one or two words, because long blackletter sentences are tiring to read
          and many people skim straight past them.
        </p>
      </>
    ),
  },
  {
    slug: "small-caps",
    name: "Small Caps",
    h1: "Discord Small Caps Font Generator",
    title: "Discord Small Caps Generator – Tiny Text Copy & Paste",
    description:
      "Make small caps and tiny text for Discord. Copy and paste ᴛɪɴʏ ᴄᴀᴘꜱ, superscript and subscript Discord fonts for minimal names, bios and channels.",
    intro:
      "Get clean, minimal small caps and tiny text for your Discord profile. Type your words and copy the version that fits your style.",
    featured: {
      label: "Small caps styles",
      ids: ["small-caps", "small-caps-all", "corner-brackets", "hearts", "superscript", "subscript"],
    },
    related: ["aesthetic", "cursive", "bold"],
    body: (
      <>
        <h2>What Are Small Caps?</h2>
        <p>
          Small caps are capital letters drawn at the height of lowercase letters. In Discord they give names
          a calm, minimal look: ᴍɪᴅɴɪɢʜᴛ instead of Midnight. Unicode never got a complete small caps
          alphabet, so generators collect look-alikes from the phonetic alphabet. Most are perfect matches; q
          and x have no true small capital, so we use the closest readable characters.
        </p>
        <h2>Small Caps vs. Tiny Caps</h2>
        <p>
          <strong>Small Caps</strong> keeps your capital letters full size and shrinks the rest, which reads
          naturally for names: Mɪᴅɴɪɢʜᴛ. <strong>Tiny Caps</strong> shrinks everything for a uniform,
          understated look: ᴍɪᴅɴɪɢʜᴛ. Both are well supported on modern phones and computers, which makes them
          one of the safest fancy styles for display names.
        </p>
        <h2>Superscript and Subscript Tiny Text</h2>
        <p>
          <strong>Superscript</strong> raises letters above the line (ᵗⁱⁿʸ) and <strong>subscript</strong>{" "}
          lowers them. They are fun for whispers, footnotes and cute bios, but Unicode only includes some
          letters: there is no superscript q, and subscript is missing about a third of the alphabet. Those
          letters stay plain, which is why these styles carry a Limited support badge.
        </p>
        <h2>Best Uses for Small Caps on Discord</h2>
        <ul>
          <li>Channel names like ︱ʀᴜʟᴇꜱ or ︱ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛꜱ for a tidy, consistent sidebar.</li>
          <li>Display names that feel stylish without being hard to read.</li>
          <li>Role names, where short labels such as ᴍᴏᴅᴇʀᴀᴛᴏʀ look clean in the member list.</li>
          <li>Aesthetic bios combined with the Corner Brackets or Hearts decorations.</li>
        </ul>
        <p>
          Because small caps characters are part of the phonetic alphabet, screen readers may read them oddly,
          so keep key information in plain text. For more soft styles, browse the{" "}
          <Link href="/discord-font-generator/aesthetic">aesthetic font generator</Link>.
        </p>
        <h2>Small Caps for a Clean Server Layout</h2>
        <p>
          Server designers love small caps because every channel name ends up the same height. A common
          pattern is an emoji, a thin divider and a small caps label, such as “💬︱ɢᴇɴᴇʀᴀʟ” or “🎮︱ɢᴀᴍᴇ
          ɴɪɢʜᴛ”. Discord shows channel names in lowercase with hyphens, but the small caps characters survive
          intact, which is part of their appeal. Pick one divider style and use it everywhere so the channel
          list looks deliberate rather than random.
        </p>
      </>
    ),
  },
  {
    slug: "aesthetic",
    name: "Aesthetic",
    h1: "Discord Aesthetic Font Generator",
    title: "Aesthetic Discord Fonts – Vaporwave & Cute Text Generator",
    description:
      "Aesthetic Discord fonts for bios and names: vaporwave fullwidth text, small caps, kawaii and sparkle styles. Copy and paste cute Discord text in one click.",
    intro:
      "Find soft, cute and vaporwave text styles for your Discord profile. Type your words, then copy an aesthetic Discord font with one click.",
    featured: fromCategory("aesthetic", "Aesthetic styles"),
    related: ["small-caps", "cursive", "bubble"],
    body: (
      <>
        <h2>What Makes a Discord Font “Aesthetic”?</h2>
        <p>
          On Discord, “aesthetic” usually means soft, spaced-out and decorated text that matches a mood:
          pastel, vaporwave, cottagecore or lo-fi. It is less about one alphabet and more about combining
          styles, spacing and small symbols so your bio feels curated.
        </p>
        <h2>Popular Aesthetic Styles</h2>
        <ul>
          <li>
            <strong>Vaporwave Fullwidth</strong> (ａｅｓｔｈｅｔｉｃ) uses the wide letters from East Asian
            typefaces for that retro 80s and 90s look. <strong>Vaporwave Spaced</strong> adds extra breathing
            room.
          </li>
          <li>
            <strong>Small Caps</strong> and <strong>Tiny Caps</strong> give a quiet, minimal feel that works
            for almost any theme.
          </li>
          <li>
            <strong>Kawaii</strong>, <strong>Sparkles</strong>, <strong>Flower Ribbon</strong>,{" "}
            <strong>Hearts</strong> and <strong>Sakura</strong> wrap your text in cute symbols and emoji.
          </li>
          <li>
            <strong>Double-Struck</strong>, <strong>Monospace</strong> and <strong>Wide Spaced</strong> are
            clean options for a techy or minimalist profile.
          </li>
        </ul>
        <h2>Building an Aesthetic Discord Profile</h2>
        <p>
          Pick one or two styles and use them consistently. For example, a Tiny Caps display name, a Flower
          Ribbon headline at the top of your About Me and plain text for the rest. Too many styles at once can
          look messy and become hard to read. Your bio has a 190-character limit, and decorations and spacing
          use it up quickly, so check the length as you go.
        </p>
        <p>
          Fullwidth letters take twice the space of normal ones, so a long vaporwave name may wrap or get cut
          off in the member list. Emoji-based wrappers display in color on most devices, but their exact look
          depends on each platform’s emoji set. For rounder letters, try the{" "}
          <Link href="/discord-font-generator/bubble">bubble text generator</Link>, or go smaller with the{" "}
          <Link href="/discord-font-generator/small-caps">small caps generator</Link>.
        </p>
        <h2>A Simple Aesthetic Bio Template</h2>
        <p>
          Not sure where to start? Use a decorated headline, two or three short plain lines and one closing
          symbol. For example: “⋆˚｡⋆୨୧˚ 𝑑𝑟𝑒𝑎𝑚𝑒𝑟 ˚୨୧⋆｡˚⋆”, then your pronouns, time zone and favorite games in
          plain text, then a single “✧” at the end. The decorated line gives your profile personality while
          the plain lines stay readable for everyone, including people using screen readers. Swap the headline
          style whenever your mood changes; the rest of the bio can stay the same.
        </p>
      </>
    ),
  },
  {
    slug: "glitch",
    name: "Glitch",
    h1: "Discord Glitch Font Generator",
    title: "Discord Glitch Font Generator – Zalgo & Creepy Text",
    description:
      "Create glitch and zalgo text for Discord with adjustable intensity. Copy and paste creepy, corrupted, strikethrough and slashed Discord fonts.",
    intro:
      "Corrupt your text with zalgo marks, strikethroughs and slashes. Adjust the glitch intensity, then copy the creepy result straight into Discord.",
    featured: fromCategory("glitch", "Glitch styles"),
    related: ["gothic", "upside-down", "bold"],
    body: (
      <>
        <h2>How Glitch Text Works</h2>
        <p>
          Glitch text relies on combining characters: invisible marks that attach to the letter before them,
          like accents. Normally a letter gets one accent at most, but nothing stops you from stacking dozens.
          Pile them above, through and below each letter and you get the tall, corrupted “zalgo” look that
          spills over the lines around it.
        </p>
        <h2>Glitch Styles You Can Copy</h2>
        <ul>
          <li>
            <strong>Zalgo Glitch</strong>: use the intensity slider from 1 (a light flicker) to 10 (total
            chaos). The output is generated the same way every time, so you can come back for the same result.
          </li>
          <li>
            <strong>Strikethrough</strong>, <strong>Slashed</strong>, <strong>Overline</strong>,{" "}
            <strong>Wavy</strong> and <strong>Dotted</strong> add a single mark to each letter for a subtler
            damaged effect.
          </li>
          <li>
            <strong>Upside Down</strong>, <strong>Mirrored</strong> and <strong>Reversed</strong> flip your
            text for confusing, meme-friendly messages.
          </li>
        </ul>
        <h2>Using Zalgo Responsibly on Discord</h2>
        <p>
          Heavy zalgo can cover other people’s messages, which is why many servers ban it, and AutoMod rules
          often filter it. In display names it can also make you impossible to @mention or read in the member
          list. A low intensity of 1 to 3 is usually enough for a spooky name or a Halloween event channel,
          and it is less likely to be removed.
        </p>
        <p>
          Combining marks are drawn differently on each operating system, so the same glitch text can look
          tidy on a computer and messy on a phone. Check the live preview, and test it in a private channel
          first. Want something dark but readable? Try the{" "}
          <Link href="/discord-font-generator/gothic">gothic font generator</Link>. For plain crossed-out text
          in messages, Discord’s own <code>~~strikethrough~~</code> markdown is cleaner. Learn more in our{" "}
          <Link href="/discord-text-formatting">text formatting guide</Link>.
        </p>
        <h2>Glitch Text Ideas</h2>
        <p>
          Glitch styles are perfect for horror events, ARG and mystery servers, and “corrupted” bot personas.
          A light zalgo channel name like “v̥͊o̸̙̓ǐ̷͈d̻ͭ́” sets an eerie tone without spilling into the channel list.
          Slashed or strikethrough text works for joke corrections such as “h̶o̶m̶e̶w̶o̶r̶k̶ gaming”. For
          announcements, combine one glitched word with plain text, for example “the s̸i̸g̸n̸a̸l̸ is back”, so the
          message still makes sense at a glance.
        </p>
      </>
    ),
  },
  {
    slug: "bubble",
    name: "Bubble",
    h1: "Discord Bubble Font Generator",
    title: "Discord Bubble Font Generator – Circled Letter Text",
    description:
      "Make bubble text for Discord with circled letters, dark bubbles and squares. Copy and paste ⓑⓤⓑⓑⓛⓔ Discord fonts for names, servers and messages.",
    intro:
      "Wrap every letter in a circle or square. Type below to create bubble text you can copy and paste into Discord names, channels and chats.",
    featured: {
      label: "Bubble styles",
      ids: ["bubble", "circled", "negative-circled", "squared", "negative-squared", "parenthesized"],
    },
    related: ["aesthetic", "bold", "upside-down"],
    body: (
      <>
        <h2>What Is Bubble Text?</h2>
        <p>
          Bubble text puts each letter inside a circle, like ⓑⓤⓑⓑⓛⓔ or Ⓑⓤⓑⓑⓛⓔ. Unicode includes these
          “enclosed alphanumerics” for labelling lists and diagrams, and they have become a playful favorite
          for Discord names. Unlike emoji, they inherit your text color, so they blend into the chat theme.
        </p>
        <h2>Bubble Styles Explained</h2>
        <ul>
          <li>
            <strong>Bubble</strong> uses lowercase circled letters for a soft, uniform look.
          </li>
          <li>
            <strong>Circled</strong> keeps your capital letters, so names stay easy to read: Ⓜⓐⓧ.
          </li>
          <li>
            <strong>Bubble Dark</strong> fills each circle (🅑🅤🅑🅑🅛🅔) for a bold, high-contrast effect.
          </li>
          <li>
            <strong>Squared</strong> and <strong>Squared Dark</strong> swap circles for boxes, a blocky look
            that suits gaming tags.
          </li>
          <li>
            <strong>Parenthesized</strong> wraps each letter in brackets for a retro, typewriter feel.
          </li>
        </ul>
        <h2>Compatibility Notes</h2>
        <p>
          Regular circled letters and numbers have been in Unicode for decades and show up almost everywhere.
          The dark bubbles, squares and parenthesized capitals come from a newer block, so older Android
          phones, some smart TVs and consoles may show boxes. Some apps also display the dark versions as
          colorful emoji, so they can look different from one device to the next.
        </p>
        <p>
          Circled characters are wider than normal letters, so a long bubble name may be cut off in the member
          list. Short names, server tags and single words like “ⓖⓖ” work best. For more cute styles, try the{" "}
          <Link href="/discord-font-generator/aesthetic">aesthetic font generator</Link>, or flip things
          around with the <Link href="/discord-font-generator/upside-down">upside down text generator</Link>.
        </p>
        <h2>Bubble Text Ideas for Discord</h2>
        <p>
          Bubble letters are great for short, punchy words: reactions like “ⓛⓞⓛ” or “🅖🅖”, cute nicknames like
          “Ⓜⓞⓒⓗⓘ”, or labels for event channels. Circled numbers are handy too: use ① ② ③ to number rules or
          steps in a post, since they stay neatly aligned and are easy to scan. The Squared style looks great
          for game tags such as “🅰🅵🅺”, but remember to check the preview on your phone first, because some
          devices show squared letters as colorful emoji.
        </p>
      </>
    ),
  },
  {
    slug: "upside-down",
    name: "Upside Down",
    h1: "Discord Upside Down Font Generator",
    title: "Upside Down Discord Font – Flip & Mirror Text Generator",
    description:
      "Flip your text upside down, mirror it or write it backwards for Discord. Copy and paste ʇxǝʇ uʍop ǝpᴉsdn Discord fonts into messages and nicknames.",
    intro:
      "Turn your text on its head. This generator flips, mirrors and reverses your words so you can paste them into Discord for jokes, riddles and memes.",
    featured: { label: "Flip styles", ids: ["upside-down", "mirrored", "reversed"] },
    related: ["glitch", "bubble", "aesthetic"],
    body: (
      <>
        <h2>How Upside Down Text Works</h2>
        <p>
          There is no Unicode setting that rotates text, so upside down generators find a look-alike for each
          letter turned 180 degrees and then reverse the order of the characters. Some matches are perfect (n
          becomes u, p becomes d), while others borrow from the phonetic alphabet (ɐ, ǝ, ɹ) or from other
          scripts. The result reads correctly when you turn your phone around: ¡pɹoɔsᴉp ollǝɥ.
        </p>
        <h2>Upside Down vs. Mirrored vs. Reversed</h2>
        <ul>
          <li>
            <strong>Upside Down</strong> flips letters vertically and reverses them, like turning a page
            around.
          </li>
          <li>
            <strong>Mirrored</strong> flips letters horizontally, as if held up to a mirror, so the text reads
            right to left.
          </li>
          <li>
            <strong>Reversed</strong> simply writes your text backwards without changing the letters. It is
            the most compatible of the three.
          </li>
        </ul>
        <h2>Fun Ways to Use Flipped Text on Discord</h2>
        <ul>
          <li>Post riddle answers or spoilers that people have to work to read.</li>
          <li>React to chaotic moments in chat with a flipped “what just happened”.</li>
          <li>Use an upside down nickname for April Fools’ Day or an Australia joke.</li>
          <li>Hide easter eggs in channel topics and server event descriptions.</li>
        </ul>
        <h2>Limits to Keep in Mind</h2>
        <p>
          A few flipped capitals use rare characters that older devices cannot display, which is why these
          styles have a Limited support badge. Punctuation and numbers are flipped too, but some have no good
          match and stay as they are. Flipped names are also very hard to search for or @mention, so they are
          better as a short-term joke than a permanent identity.
        </p>
        <p>
          For a hidden message that is properly concealed, Discord’s spoiler tag (<code>||text||</code>) is
          the built-in option. See the <Link href="/discord-text-formatting">Discord formatting guide</Link>,
          or add extra chaos with the <Link href="/discord-font-generator/glitch">glitch font generator</Link>
          .
        </p>
        <h2>Copying Flipped Text on Mobile</h2>
        <p>
          On a phone, tap the Copy button rather than selecting the text by hand. Upside down text is written
          right to left, so dragging selection handles across it often grabs the wrong part or splits a
          character in half. After pasting into Discord, read it once with your phone turned around to make
          sure it says what you meant. If your keyboard offers autocorrect suggestions after pasting, ignore
          them, because accepting one can replace a flipped word with a normal one.
        </p>
      </>
    ),
  },
];

export function getStylePage(slug: string): StylePage | undefined {
  return stylePages.find((page) => page.slug === slug);
}
