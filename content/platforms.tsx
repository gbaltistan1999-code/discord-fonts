import Link from "next/link";
import type { FeaturedStyles } from "@/components/FontGenerator";
import type { Faq } from "./faqs";

export interface PlatformPage {
  /** URL path segment, e.g. "roblox-fonts". */
  slug: string;
  /** Platform name used in links, e.g. "Roblox". */
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  /** Example text shown in the generator before the visitor types. */
  sampleText: string;
  /** Styles picked for this platform, shown first. */
  featured: FeaturedStyles;
  faqs: readonly Faq[];
  body: React.ReactNode;
}

/** "Where fancy text works" table: [place, works?, note] per row. */
function WhereItWorks({ rows }: { rows: readonly (readonly [string, string, string])[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[32rem]">
        <thead>
          <tr>
            <th scope="col">Where</th>
            <th scope="col">Fancy text?</th>
            <th scope="col">Good to know</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([place, works, note]) => (
            <tr key={place}>
              <th scope="row">{place}</th>
              <td>{works}</td>
              <td>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const generatorLink = <Link href="/">Discord Fonts generator</Link>;

export const platformPages: readonly PlatformPage[] = [
  {
    slug: "roblox-fonts",
    name: "Roblox",
    sampleText: "Roblox Builder",
    featured: {
      label: "Best for Roblox",
      ids: [
        "small-caps-all",
        "small-caps",
        "wide-spaced",
        "bold-sans",
        "bold-serif",
        "sans",
        "italic",
        "sans-italic",
        "monospace",
        "double-struck",
        "fullwidth",
        "vaporwave-spaced",
        "superscript",
        "circled",
        "bubble",
        "bold-script",
        "script",
        "fraktur",
        "bold-fraktur",
        "gothic-caps",
        "accented",
        "greekish",
        "faux-cyrillic",
        "currency",
        "stroked",
        "kanji",
        "syllabic",
        "middle-dot",
        "bullet-between",
        "dash-between",
        "verified",
        "trademark",
      ],
    },
    faqs: [
      {
        question: "Can I use fancy fonts in my Roblox username?",
        answer:
          "No. Roblox usernames only accept letters, numbers and one underscore, between 3 and 20 characters. Fancy Unicode letters are rejected, so use them in descriptions and your About section instead.",
      },
      {
        question: "Why does Roblox turn my text into hashtags?",
        answer:
          "Roblox filters all text, and characters or words its filter can't read are often replaced with hashtags. Simple styles such as Small Caps, Bold and Wide Spaced are the most likely to get through.",
      },
      {
        question: "Which Roblox fonts work best?",
        answer:
          "The styles in the Best for Roblox tab are the simplest ones, which survive the filter most often. Heavy decorations, emoji frames and glitch text are more likely to be removed.",
      },
      {
        question: "Can I use these fonts in Roblox chat?",
        answer:
          "Sometimes. Chat goes through the same filter, so plain-looking styles have the best chance. If a message is hashed, switch to a simpler style or plain text.",
      },
    ],
    h1: "Roblox Fonts Generator",
    title: "Roblox Fonts – Copy & Paste Cool Text for Roblox",
    description:
      "Make cool Roblox fonts for group descriptions, game titles and bios. Copy and paste fancy Unicode text and learn where Roblox accepts it.",
    intro:
      "Type below to turn your text into fancy Unicode letters for Roblox. Copy any style and test it in a group description, game page or bio.",
    body: (
      <>
        <h2>Where Roblox Fonts Work</h2>
        <p>
          Roblox is stricter than most platforms. Usernames only allow letters, numbers and a single
          underscore (3 to 20 characters), and display names follow similar rules, so fancy letters are
          usually rejected there. Fancy text has a better chance in places with longer free text, such as
          group descriptions, game descriptions and your profile’s About section.
        </p>
        <h2>Why Some Characters Turn Into Hashtags</h2>
        <p>
          Roblox runs every piece of text through its chat filter. Characters it doesn’t recognise, or text
          the filter can’t read, are often replaced with hashtags (####) or removed. Simple styles like{" "}
          <strong>Small Caps</strong>, <strong>Bold</strong> and <strong>Wide Spaced</strong> tend to survive
          better than heavy decorations or glitch text. Always preview your text after saving it.
        </p>
        <h2>Tips for Roblox Text</h2>
        <ul>
          <li>Keep group and game titles readable, so players can still search for them.</li>
          <li>Use one fancy word as an accent instead of styling a whole paragraph.</li>
          <li>If a style is filtered, try a cleaner one from the list rather than retrying the same text.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "instagram-fonts",
    name: "Instagram",
    sampleText: "my aesthetic bio",
    featured: {
      label: "Best for Instagram",
      ids: [
        "script",
        "bold-script",
        "italic",
        "small-caps-all",
        "sparkle-frame",
        "flower-frame",
        "sparkles",
        "flower-ribbon",
        "kawaii",
        "hearts",
        "heart-frame",
        "heart-suffix",
        "sparkle-suffix",
        "moon-prefix",
        "flower-prefix",
        "bunny-prefix",
        "bear-prefix",
        "corner-brackets",
        "corner-quotes",
        "fullwidth",
        "butterfly",
        "hibiscus",
        "ribbon",
        "sakura",
        "dizzy",
        "birds",
        "heart-between",
        "star-between",
        "pipe-between",
        "union-between",
        "soft-glyphs",
        "script-caps",
      ],
    },
    faqs: [
      {
        question: "How do I change the font in my Instagram bio?",
        answer:
          "Instagram has no font setting for bios. Type your text here, copy a style, then open Edit profile on Instagram and paste it into your Bio or Name field.",
      },
      {
        question: "Can I use fancy fonts in my Instagram username?",
        answer:
          "No. Your @username only allows letters, numbers, periods and underscores. Use fancy fonts in the Name field instead, which appears in bold on your profile.",
      },
      {
        question: "Do Instagram fonts work in captions and comments?",
        answer:
          "Yes. Styled text pastes into captions, comments and story text. Keep hashtags plain, because styled hashtags won't link to the tag.",
      },
      {
        question: "Why do some fonts look different on iPhone and Android?",
        answer:
          "Each phone draws Unicode characters with its own system fonts, so some symbols look slightly different or may not appear on older devices. Script, Small Caps and Bold styles display almost everywhere.",
      },
    ],
    h1: "Instagram Fonts Generator",
    title: "Instagram Fonts – Copy & Paste Fonts for Bio and Captions",
    description:
      "Instagram fonts for your bio, name, captions and comments. Copy and paste cool, cursive and aesthetic text that works on Instagram.",
    intro:
      "Type below to turn your text into fancy fonts for Instagram. Copy any style into your bio, name field, captions, stories or comments.",
    body: (
      <>
        <h2>Where Instagram Fonts Work</h2>
        <p>
          Fancy Unicode text works in your Instagram bio, the Name field on your profile, captions, comments
          and story text. Your @username is the exception: it only allows letters, numbers, periods and
          underscores, up to 30 characters.
        </p>
        <h2>Make the Most of a 150-Character Bio</h2>
        <p>
          Instagram bios are limited to 150 characters, and decorated styles use more of that space. A good
          pattern is one styled line for your name or tagline, followed by plain text for links and details.
          Cursive, Small Caps and aesthetic styles such as Sparkle Frame or Flower Frame are popular choices.
        </p>
        <h2>Fonts and Discoverability</h2>
        <p>
          Instagram search reads fancy letters as different characters, so a styled name may be harder to
          find. Keep your username plain and use fonts in the Name field or bio instead. In captions, avoid
          styling hashtags, because styled hashtags won’t link to the right tag.
        </p>
      </>
    ),
  },
  {
    slug: "snapchat-fonts",
    name: "Snapchat",
    sampleText: "Snap me",
    featured: {
      label: "Best for Snapchat",
      ids: [
        "bold-sans",
        "bubble",
        "negative-circled",
        "double-struck",
        "squared",
        "negative-squared",
        "sakura",
        "butterfly",
        "rainbow",
        "gem",
        "fire",
        "dizzy",
        "ribbon",
        "hibiscus",
        "kawaii",
        "hearts",
        "sparkle-frame",
        "tulip-between",
        "blossom-between",
        "heart-chain",
        "random-emoji",
        "upside-down",
        "clap",
        "small-caps-all",
        "script",
        "bold-script",
        "star-wings",
        "rainbow-hearts",
      ],
    },
    faqs: [
      {
        question: "Can I change my Snapchat display name font?",
        answer:
          "Yes. Copy a style from this page, then open your Snapchat profile, tap your name and paste it in. Your username itself must stay plain letters, numbers, hyphens, underscores and periods.",
      },
      {
        question: "Do fancy fonts work in Snapchat chats?",
        answer: "Yes. Styled text pastes into chats and the text you add to snaps and stories.",
      },
      {
        question: "Which fonts are easiest to read on a snap?",
        answer:
          "Bold and solid styles such as Bold Sans, Bubble and Double-Struck stay readable on top of photos. Thin or glitchy styles can get lost against busy backgrounds.",
      },
      {
        question: "Will a fancy display name stop friends finding me?",
        answer: "No. People add you by your username, Snapcode or contacts, not by your display name.",
      },
    ],
    h1: "Snapchat Fonts Generator",
    title: "Snapchat Fonts – Copy & Paste Cool Text for Snapchat",
    description:
      "Snapchat fonts for your display name, chats and snap captions. Copy and paste fancy text styles that show up on Snapchat.",
    intro:
      "Type below to turn your text into fancy fonts for Snapchat. Copy any style into your display name, chats, captions or story text.",
    body: (
      <>
        <h2>Where Snapchat Fonts Work</h2>
        <p>
          Your Snapchat display name, chat messages and the text you add to snaps and stories can all use
          fancy Unicode letters. Your username can’t: it must start with a letter and only use letters,
          numbers, hyphens, underscores and periods, between 3 and 15 characters.
        </p>
        <h2>Choosing a Style for Snaps</h2>
        <p>
          Snap captions sit on top of photos, so bold and clean styles are easier to read than thin or glitchy
          ones. Bold Sans, Double-Struck and Bubble styles stand out well, while Small Caps and Cursive suit
          display names.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Friends search by username, so a fancy display name won’t make you harder to add.</li>
          <li>Emoji frames like Sakura or Butterfly match Snapchat’s playful style.</li>
          <li>Check how your text looks on the snap before sending, as some phones show fewer symbols.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "youtube-fonts",
    name: "YouTube",
    sampleText: "Watch Now",
    featured: {
      label: "Best for YouTube",
      ids: [
        "bold-sans",
        "bold-serif",
        "sans-bold-italic",
        "bold-italic",
        "double-struck-caps",
        "monospace",
        "small-caps-all",
        "lenticular",
        "white-lenticular",
        "corner-brackets",
        "white-square",
        "arrows",
        "double-angle",
        "heavy-angle",
        "gradient-blocks",
        "fire",
        "verified",
        "music",
        "strikethrough",
        "underline",
        "double-underline",
        "boxed-lines",
        "checkered",
        "circled",
        "squared",
        "star-wings",
        "line-frame",
        "middle-dot",
      ],
    },
    faqs: [
      {
        question: "Can I use fancy fonts in YouTube comments?",
        answer:
          "Yes. Copy a style and paste it into a comment. Bold or bracketed first lines help a pinned comment stand out.",
      },
      {
        question: "Should I use fancy fonts in video titles?",
        answer:
          "Use them sparingly. Search reads styled letters as different characters, so keep your main keywords plain and style only a short label.",
      },
      {
        question: "Can my YouTube channel name use a fancy font?",
        answer:
          "Channel names generally accept Unicode, but your @handle only allows letters, numbers, underscores, hyphens and periods.",
      },
      {
        question: "How can fonts help my video descriptions?",
        answer:
          "Styled section headings such as 𝗖𝗛𝗔𝗣𝗧𝗘𝗥𝗦 or 【 ʟɪɴᴋꜱ 】 make long descriptions easier to scan. Keep links and timestamps in plain text so they stay clickable.",
      },
    ],
    h1: "YouTube Fonts Generator",
    title: "YouTube Fonts – Copy & Paste Fancy Text for YouTube",
    description:
      "YouTube fonts for channel names, video descriptions and comments. Copy and paste bold, cursive and fancy text for your YouTube channel.",
    intro:
      "Type below to turn your text into fancy fonts for YouTube. Copy any style into comments, descriptions, community posts or your channel name.",
    body: (
      <>
        <h2>Where YouTube Fonts Work</h2>
        <p>
          Fancy text works in comments, video descriptions, community posts and channel descriptions, and
          YouTube generally accepts it in channel names too. Your @handle is limited to letters, numbers,
          underscores, hyphens and periods, so it stays plain.
        </p>
        <h2>Titles and Search</h2>
        <p>
          Video titles can be up to 100 characters, but styled letters are read as different characters by
          search. If you want a video to be found, keep the main keywords in plain text and style only a short
          accent, such as an episode label. Descriptions allow up to 5,000 characters, so fancy section
          headings like 𝗖𝗛𝗔𝗣𝗧𝗘𝗥𝗦 or 【 ʟɪɴᴋꜱ 】 can make them easier to scan.
        </p>
        <h2>Comment Tips</h2>
        <p>
          A bold or boxed first line helps a pinned comment stand out. Avoid heavy glitch text in comments, as
          it can overlap other comments and may look like spam.
        </p>
      </>
    ),
  },
  {
    slug: "twitter-fonts",
    name: "Twitter",
    sampleText: "Big news",
    featured: {
      label: "Best for Twitter",
      ids: [
        "bold-serif",
        "bold-sans",
        "italic",
        "bold-italic",
        "sans-italic",
        "sans-bold-italic",
        "monospace",
        "double-struck",
        "script",
        "bold-script",
        "small-caps",
        "small-caps-all",
        "strikethrough",
        "underline",
        "short-strike",
        "superscript",
        "subscript",
        "upside-down",
        "mirrored",
        "reversed",
        "clap",
        "wide-spaced",
        "fullwidth",
        "circled",
        "verified",
        "sparkle-suffix",
        "guillemets",
        "low-underline",
      ],
    },
    faqs: [
      {
        question: "How do I write bold text on Twitter (X)?",
        answer:
          "Standard posts have no bold button. Type your text here, copy the Bold or Bold Sans style and paste it into your post.",
      },
      {
        question: "Can I use fancy fonts in my X display name?",
        answer:
          "Yes. Display names accept Unicode up to 50 characters. Your @handle only allows letters, numbers and underscores.",
      },
      {
        question: "Do fancy fonts count toward the character limit?",
        answer:
          "Yes. Every styled letter counts, and some decorated styles use extra characters, so check the length before posting.",
      },
      {
        question: "Are fancy fonts accessible?",
        answer:
          "Not always. Screen readers may read styled letters one at a time or skip them. Style a word or two for emphasis and keep the main message plain.",
      },
    ],
    h1: "Twitter (X) Fonts Generator",
    title: "Twitter Fonts – Copy & Paste Fancy Text for X Bios and Posts",
    description:
      "Twitter (X) fonts for your display name, bio and posts. Copy and paste bold, italic and cool fonts that work on X.",
    intro:
      "Type below to turn your text into fancy fonts for Twitter (X). Copy any style into your display name, bio, posts or replies.",
    body: (
      <>
        <h2>Where Twitter Fonts Work</h2>
        <p>
          X accepts fancy Unicode text in your display name (up to 50 characters), your bio (up to 160
          characters), posts and replies. Your @handle only allows letters, numbers and underscores, up to 15
          characters.
        </p>
        <h2>Bold and Italic Posts</h2>
        <p>
          Standard posts have no bold or italic button, so Bold, Italic and Bold Sans letters are a common way
          to add emphasis. Each styled letter still counts toward the character limit, and some decorated
          styles count as more than one character.
        </p>
        <h2>Accessibility</h2>
        <p>
          Screen readers can read styled letters one by one or skip them entirely. Style a word or a short
          phrase for emphasis, and keep the important part of the post in plain text so everyone can read it.
        </p>
      </>
    ),
  },
  {
    slug: "facebook-fonts",
    name: "Facebook",
    sampleText: "Happy Birthday",
    featured: {
      label: "Best for Facebook",
      ids: [
        "bold-sans",
        "bold-serif",
        "italic",
        "bold-italic",
        "sans-bold-italic",
        "script",
        "bold-script",
        "underline",
        "double-underline",
        "strikethrough",
        "crossed-out",
        "small-caps-all",
        "double-struck",
        "circled",
        "bubble",
        "hearts",
        "sparkles",
        "star-wings",
        "sakura",
        "fire",
        "ribbon",
        "heart-frame",
        "stardust",
        "wave",
        "flower-frame",
        "twinkle",
        "heart-brackets",
        "music",
      ],
    },
    faqs: [
      {
        question: "How do I make bold text in a Facebook post?",
        answer:
          "Personal posts have no formatting buttons. Copy the Bold or Bold Sans style from this page and paste it into your post or comment.",
      },
      {
        question: "Can I use a fancy font for my Facebook name?",
        answer:
          "Usually not. Facebook's name standards don't allow symbols, unusual characters or mixed alphabets, so fancy names are rejected.",
      },
      {
        question: "Where do Facebook fonts work?",
        answer: "In posts, comments, Messenger, your profile Intro, and page and group descriptions.",
      },
      {
        question: "Which styles suit celebration posts?",
        answer:
          "Frames such as Hearts, Sparkles, Star Wings and Sakura work well for birthdays, anniversaries and announcements.",
      },
    ],
    h1: "Facebook Fonts Generator",
    title: "Facebook Fonts – Copy & Paste Fancy Text for Posts and Bio",
    description:
      "Facebook fonts for posts, comments, bios and page descriptions. Copy and paste bold, italic and fancy text that works on Facebook.",
    intro:
      "Type below to turn your text into fancy fonts for Facebook. Copy any style into posts, comments, your Intro bio or a page description.",
    body: (
      <>
        <h2>Where Facebook Fonts Work</h2>
        <p>
          Fancy text works in posts, comments, Messenger, your profile Intro and page or group descriptions.
          Your profile name is different: Facebook’s name standards don’t allow symbols, unusual characters or
          mixed alphabets, so a fancy name will usually be rejected.
        </p>
        <h2>Formatting Posts</h2>
        <p>
          Personal posts have no bold or italic option, so styled letters are an easy way to add a heading or
          highlight a key line. Bold Sans works well for headings, and Strikethrough or Underline can mark
          changes in a sale or event post.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Keep your profile Intro short, as Facebook limits it to a brief line.</li>
          <li>Use plain text for links, prices and dates so they stay easy to read and search.</li>
          <li>Frames such as Hearts or Sparkles suit birthday and celebration posts.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "tiktok-fonts",
    name: "TikTok",
    sampleText: "for you page",
    featured: {
      label: "Best for TikTok",
      ids: [
        "fullwidth",
        "vaporwave-spaced",
        "small-caps-all",
        "kawaii",
        "bunny-prefix",
        "bear-prefix",
        "sparkles",
        "sparkle-frame",
        "butterfly",
        "sakura",
        "ribbon",
        "hearts",
        "heart-suffix",
        "star-wings",
        "katakana",
        "kanji",
        "gothic-cross",
        "bold-fraktur",
        "zalgo",
        "crossed-out",
        "random-bars",
        "random-stars",
        "upside-down",
        "gradient-blocks",
        "dizzy",
        "birds",
        "corner-brackets",
        "script",
        "bold-script",
        "soft-glyphs",
      ],
    },
    faqs: [
      {
        question: "How do I get a fancy font in my TikTok bio?",
        answer:
          "Copy a style from this page, then open Edit profile on TikTok and paste it into your Bio or Name field.",
      },
      {
        question: "Can I use fancy fonts in my TikTok username?",
        answer:
          "No. Usernames only allow letters, numbers, underscores and periods. Use fonts in your profile name instead.",
      },
      {
        question: "What are the best fonts for a TikTok bio?",
        answer:
          "Compact styles such as Small Caps, Bold Sans and Kawaii fit TikTok's 80-character bio. Vaporwave suits edit and fan accounts, while Gothic and Glitch styles fit dark or gaming profiles.",
      },
      {
        question: "Do fancy fonts affect TikTok search?",
        answer:
          "Yes. Search reads styled letters as different characters, so keep keywords and hashtags in plain text.",
      },
    ],
    h1: "TikTok Fonts Generator",
    title: "TikTok Fonts – Copy & Paste Cool Fonts for TikTok Bio",
    description:
      "TikTok fonts for your name, bio, captions and comments. Copy and paste aesthetic, cursive and cool text that works on TikTok.",
    intro:
      "Type below to turn your text into fancy fonts for TikTok. Copy any style into your profile name, bio, captions or comments.",
    body: (
      <>
        <h2>Where TikTok Fonts Work</h2>
        <p>
          Fancy Unicode text works in your TikTok profile name (up to 30 characters), your bio (up to 80
          characters), video captions and comments. Your @username only allows letters, numbers, underscores
          and periods.
        </p>
        <h2>An 80-Character Bio</h2>
        <p>
          TikTok bios are short, and decorated styles use extra characters. Pick a compact style such as Small
          Caps, Bold Sans or Kawaii, and save frames and emoji for a single word. Aesthetic styles like
          Vaporwave Fullwidth suit edit and fan accounts, while Gothic and Glitch styles fit gaming and dark
          aesthetic profiles.
        </p>
        <h2>Captions and Search</h2>
        <p>
          TikTok search reads styled letters as different characters, so keep keywords and hashtags in plain
          text. Use fonts for the hook or a short label at the start of your caption instead.
        </p>
      </>
    ),
  },
  {
    slug: "steam-fonts",
    name: "Steam",
    sampleText: "Gamer Tag",
    featured: {
      label: "Best for Steam",
      ids: [
        "bold-fraktur",
        "gothic-caps",
        "fraktur",
        "gamer-tag",
        "crossbones",
        "gothic-cross",
        "javanese-frame",
        "crown",
        "crown-emoji",
        "x-mark",
        "skull",
        "lightning",
        "lenticular",
        "double-angle",
        "heavy-angle",
        "double-struck",
        "double-struck-caps",
        "monospace",
        "bold-sans",
        "sans-bold-italic",
        "stroked",
        "currency",
        "kanji",
        "katakana",
        "cherokee",
        "zalgo",
        "random-bars",
        "blade",
        "equalizer",
        "reference-mark",
        "small-caps-all",
      ],
    },
    faqs: [
      {
        question: "How do I change my Steam name to a fancy font?",
        answer:
          "Copy a style from this page, then open Edit Profile on Steam and paste it into Profile Name. You can change it as often as you like.",
      },
      {
        question: "How long can a Steam profile name be?",
        answer: "Up to 32 characters. Frames and symbols count toward that, so keep decorated names short.",
      },
      {
        question: "Why does my fancy name look different in games?",
        answer:
          "Some games show your Steam name in their own font, which may not include every symbol. Bold, gothic and small caps styles are the safest choices.",
      },
      {
        question: "Can I use fonts in my Steam profile summary?",
        answer:
          "Yes. Fancy text works in your summary, reviews, comments and group pages, and Bold Sans headings help organise long sections.",
      },
    ],
    h1: "Steam Fonts Generator",
    title: "Steam Fonts – Copy & Paste Cool Steam Name Fonts",
    description:
      "Steam fonts for your profile name, summary and group pages. Copy and paste cool gamer text styles that work on Steam.",
    intro:
      "Type below to turn your text into fancy fonts for Steam. Copy any style into your profile name, profile summary, reviews or group page.",
    body: (
      <>
        <h2>Where Steam Fonts Work</h2>
        <p>
          Steam lets you use Unicode in your profile name, which can be up to 32 characters and changed at any
          time. Fancy text also works in your profile summary, reviews, comments and group descriptions. Your
          account name and custom profile URL stay plain.
        </p>
        <h2>Gamer Name Ideas</h2>
        <p>
          Short names with one strong style work best in friends lists and game lobbies. Bold Gothic, Gamer
          Tag (亗) and Crossbones (×͜×) are popular for competitive players, while Small Caps and Double-Struck
          give a cleaner look. Keep an eye on the 32-character limit when adding frames.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Some games show your Steam name in their own font, which may not display every symbol.</li>
          <li>Friends can still find you by your profile URL or friend code, even with a fancy name.</li>
          <li>Use Bold Sans headings to organise a long profile summary or guide.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "xbox-fonts",
    name: "Xbox",
    sampleText: "Game On",
    featured: {
      label: "Best for Xbox",
      ids: [
        "bold-sans",
        "bold-serif",
        "sans-bold-italic",
        "bold-italic",
        "double-struck",
        "monospace",
        "small-caps-all",
        "script",
        "bold-script",
        "fraktur",
        "bold-fraktur",
        "gothic-caps",
        "gamer-tag",
        "lenticular",
        "arrows",
        "crown",
        "lightning",
        "fire",
        "skull",
        "x-mark",
        "stardust",
        "line-frame",
        "middle-dot",
        "dash-between",
        "verified",
        "circled",
        "fullwidth",
      ],
    },
    faqs: [
      {
        question: "Can I use fancy fonts in my Xbox gamertag?",
        answer:
          "No. Gamertags are limited to 12 characters of letters, numbers and spaces, so fancy Unicode letters are rejected.",
      },
      {
        question: "Where can I use fonts on Xbox?",
        answer: "In your profile bio, club descriptions and messages.",
      },
      {
        question: "Why do some symbols not show on my console?",
        answer:
          "Consoles include fewer fonts than phones and computers, so rare symbols may appear as boxes. Bold, script and small caps styles display most reliably.",
      },
      {
        question: "Which styles suit gaming clubs?",
        answer:
          "Bold Gothic, Gamer Tag and Lenticular Brackets make strong club titles. Use plain text for schedules and rules so members can read them easily.",
      },
    ],
    h1: "Xbox Fonts Generator",
    title: "Xbox Fonts – Copy & Paste Fancy Text for Xbox Bio and Clubs",
    description:
      "Xbox fonts for your bio, club descriptions and messages. Copy and paste cool text styles and learn what Xbox gamertags allow.",
    intro:
      "Type below to turn your text into fancy fonts for Xbox. Copy any style into your profile bio, club descriptions or messages.",
    body: (
      <>
        <h2>Can You Use Fancy Fonts in an Xbox Gamertag?</h2>
        <p>
          Not usually. Xbox gamertags are limited to 12 characters and allow letters, numbers and spaces, so
          fancy Unicode letters are rejected. They do work in places with free text, such as your profile bio,
          club descriptions and messages.
        </p>
        <h2>Styling Your Bio and Clubs</h2>
        <p>
          A short styled headline at the top of your bio makes your profile stand out, followed by plain text
          for your main games or schedule. For clubs, a bold or gothic title line and a few decorated dividers
          can give the page a clear identity.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Consoles may not show every symbol, so stick to bold, script and small caps styles.</li>
          <li>Keep your gamertag plain so friends can find and invite you easily.</li>
          <li>Use the same style across your bio and club for a consistent brand.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "whatsapp-fonts",
    name: "WhatsApp",
    sampleText: "Good vibes only",
    featured: {
      label: "Best for WhatsApp",
      ids: [
        "bold-script",
        "script",
        "bold-serif",
        "bold-sans",
        "italic",
        "small-caps-all",
        "golden-heart",
        "ribbon-blossom",
        "love-brackets",
        "hearts",
        "heart-frame",
        "sparkles",
        "sparkle-frame",
        "kawaii",
        "sakura",
        "flower-frame",
        "star-wings",
        "javanese-frame",
        "crown",
        "bubble",
        "double-struck",
        "fullwidth",
        "upside-down",
      ],
    },
    faqs: [
      {
        question: "Does WhatsApp have its own fonts?",
        answer:
          "Only a few formats: *bold*, _italic_, ~strikethrough~ and ```monospace```, plus lists, quotes and inline code. There is no cursive, gothic or bubble option, so people copy those from a generator like this one.",
      },
      {
        question: "Where can I use fancy fonts on WhatsApp?",
        answer:
          "Anywhere you can type: chats, group names, group descriptions, your status, your About line and your profile name. The styles are ordinary Unicode characters, so WhatsApp stores them like any other text.",
      },
      {
        question: "Will the person I send it to see the same font?",
        answer:
          "Almost always. Bold, cursive and bubble letters show up on any modern phone. Very rare symbols can appear as empty boxes on old Android phones, so send a test to yourself before using a new style in a big group.",
      },
      {
        question: "How many characters can my WhatsApp name have?",
        answer:
          "Your profile name can be up to 25 characters, and every symbol in a frame counts. If a styled name gets cut off, drop one side of the frame or pick a style that only changes the letters, such as Bold Script.",
      },
      {
        question: "Can I mix fancy fonts with WhatsApp formatting?",
        answer:
          "Yes. For example, you can wrap a cursive word in tildes to strike it through. Bold letters from the generator are already heavy, though, so wrapping them in asterisks doesn't change much.",
      },
    ],
    h1: "WhatsApp Fonts Generator",
    title: "WhatsApp Fonts – Stylish Text for Chats, Status & Your Name",
    description:
      "Stylish WhatsApp fonts for chats, status, group names and your About line. Copy and paste cursive, bold and cute text that shows up on every phone.",
    intro:
      "Type a message, a name or a status below and pick a style you like. Tap Copy, then paste it straight into WhatsApp. It works in chats, group names, your status and your About line.",
    body: (
      <>
        <h2>What WhatsApp Can and Can’t Do on Its Own</h2>
        <p>
          WhatsApp gives you a handful of formats: wrap a word in asterisks for <strong>*bold*</strong>, in
          underscores for <em>_italic_</em>, in tildes for ~strikethrough~, or in three backticks for
          monospace. Newer versions also turn lines starting with “- ” or “1. ” into lists and “&gt; ” into a
          quote. That’s it. If you want cursive for a birthday message, hearts around a name, or gothic
          letters in a group title, WhatsApp has no button for it.
        </p>
        <p>
          The styles on this page fill that gap. They aren’t a font in the usual sense: each letter is swapped
          for a look-alike Unicode character, like 𝓗 instead of H. Because they’re real characters, they keep
          their look when you paste, forward or screenshot them, and the other person doesn’t need to install
          anything.
        </p>

        <h2>Where Fancy Text Works on WhatsApp</h2>
        <WhereItWorks
          rows={[
            ["Chats and replies", "Yes", "Every style works; keep long messages mostly plain."],
            ["Status", "Yes", "Great for greetings and quotes over a colour background."],
            ["Profile name", "Yes", "Up to 25 characters, symbols included."],
            ["About line", "Yes", "A short styled line reads better than a whole sentence."],
            ["Group name and description", "Yes", "Add one emoji so the group is easy to spot."],
          ]}
        />

        <h2>How to Change Your WhatsApp Name to a Stylish Font</h2>
        <ol>
          <li>Type your name in the box above and copy the style you like.</li>
          <li>
            Open WhatsApp, go to <strong>Settings</strong> and tap your profile photo or name.
          </li>
          <li>
            Tap <strong>Name</strong>, delete the old one, paste the new one and tap <strong>Save</strong>.
          </li>
        </ol>
        <p>
          The same steps work for your About line. For a group, open the group, tap its name at the top and
          then tap the name again to edit it.
        </p>

        <h2>Ideas That Work Well</h2>
        <ul>
          <li>
            <strong>Good morning and good night messages:</strong> 🌞 or 🌙 with a script greeting, for
            example 🎀🌸 𝐺𝑜𝑜𝑑 𝑀𝑜𝑟𝑛𝑖𝑛𝑔 🌸🎀. Use the Good Morning and Good Night buttons in the generator for
            ready-made sets.
          </li>
          <li>
            <strong>Love notes:</strong> heart frames and the Love Fonts button, such as ღ 【I】 ❤️ 【LOVE】
            ❤️ 【YOU】 ღ.
          </li>
          <li>
            <strong>Family and friends groups:</strong> a bold or framed title like ★彡 𝓕𝓪𝓶𝓲𝓵𝔂 彡★.
          </li>
          <li>
            <strong>Business accounts:</strong> keep your name plain so customers can find you, and use a bold
            style only for short offers in your status.
          </li>
        </ul>

        <h2>A Few Honest Tips</h2>
        <ul>
          <li>
            Search inside WhatsApp looks for normal letters, so a chat called 𝓜𝓸𝓶 won’t show up when you
            search “Mom”. Keep at least one plain word in contact and group names you search for often.
          </li>
          <li>
            Screen readers can’t read most fancy letters. If someone in your group uses one, keep the
            important part of the message (times, addresses, amounts) in plain text.
          </li>
          <li>A styled first word plus a plain sentence looks better than styling everything.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "telegram-fonts",
    name: "Telegram",
    sampleText: "Telegram Channel",
    featured: {
      label: "Best for Telegram",
      ids: [
        "bold-sans",
        "bold-serif",
        "bold-script",
        "script",
        "small-caps-all",
        "monospace",
        "double-struck",
        "bold-fraktur",
        "fraktur",
        "gothic-caps",
        "sans-bold-italic",
        "star-wings",
        "javanese-frame",
        "crown",
        "sparkles",
        "hearts",
        "lenticular",
        "corner-brackets",
        "arrows",
        "verified",
        "fullwidth",
        "bubble",
        "negative-circled",
      ],
    },
    faqs: [
      {
        question: "Can I use fancy fonts in my Telegram name?",
        answer:
          "Yes, in your display name (first and last name). Your @username is different: it only allows Latin letters, numbers and underscores and must be at least 5 characters, so fancy letters won't work there.",
      },
      {
        question: "Does Telegram have built-in formatting?",
        answer:
          "Yes. Select text to make it bold, italic, underlined, strikethrough, monospace or a spoiler, or type **bold**, __italic__, ~~strike~~ and ||spoiler|| directly. Cursive, gothic or bubble letters aren't built in, so those come from Unicode styles like the ones here.",
      },
      {
        question: "What's the difference between Telegram formatting and these fonts?",
        answer:
          "Telegram formatting is stored separately from the text, so it usually disappears when you copy a message somewhere else, and it can't be used in names or channel titles. Unicode styles are the letters themselves, so they look the same wherever you paste them.",
      },
      {
        question: "Can I style channel and group names?",
        answer:
          "Yes. Titles, descriptions, pinned messages and posts all accept Unicode. Keep the main keyword plain if you want people to find your channel in Telegram search.",
      },
      {
        question: "Why does a symbol show as a box?",
        answer:
          "The viewer's device doesn't have that character in any of its fonts. Bold, script and small caps styles are the safest; rare symbols are the most likely to break.",
      },
    ],
    h1: "Telegram Fonts Generator",
    title: "Telegram Fonts – Fancy Text for Your Name, Bio & Channels",
    description:
      "Telegram fonts for your display name, bio, channel titles and posts. Copy and paste bold, cursive and decorated text, and see where Telegram accepts it.",
    intro:
      "Type below and copy a style for your Telegram name, bio, channel title or posts. Everything here is plain Unicode text, so it works in the app, on desktop and on the web.",
    body: (
      <>
        <h2>Telegram Already Has Formatting. Why Use These?</h2>
        <p>
          Telegram’s formatting menu is good: bold, italic, underline, strikethrough, monospace and spoilers
          are all a tap away. But that formatting only lives inside messages. You can’t use it in your name,
          your bio or a channel title, and it usually vanishes when you copy text somewhere else.
        </p>
        <p>
          Unicode styles work differently. 𝗕𝗼𝗹𝗱 here isn’t normal text with a bold setting; it’s a different
          set of characters that happens to look bold. That’s why it survives copy and paste and works in
          places Telegram’s menu can’t reach.
        </p>

        <h2>Where Fancy Text Works on Telegram</h2>
        <WhereItWorks
          rows={[
            ["Display name", "Yes", "First and last name both accept Unicode."],
            ["@username", "No", "Only a–z, 0–9 and underscores, at least 5 characters."],
            ["Bio", "Yes", "Short: 70 characters on a free account, so every symbol counts."],
            ["Channel and group titles", "Yes", "Keep one plain keyword for search."],
            ["Posts and messages", "Yes", "Mix with Telegram’s own formatting if you like."],
          ]}
        />

        <h2>How to Use a Fancy Font in Your Telegram Name</h2>
        <ol>
          <li>Type your name above and copy a style.</li>
          <li>
            In Telegram, open <strong>Settings</strong>, then tap <strong>Edit</strong> (or your name on
            desktop).
          </li>
          <li>Paste the styled text into the first name field, add a last name if you want, and save.</li>
        </ol>

        <h2>Styling a Channel People Actually Read</h2>
        <p>
          Channel admins use fancy text the way magazines use headline fonts: sparingly and consistently. A
          few patterns that work:
        </p>
        <ul>
          <li>
            <strong>Headers for regular posts:</strong> “📌 𝗗𝗔𝗜𝗟𝗬 𝗨𝗣𝗗𝗔𝗧𝗘” in Bold Sans, then plain text
            underneath.
          </li>
          <li>
            <strong>Section dividers:</strong> a line of ━━━ or a framed word like 「 𝙽𝙴𝚆𝚂 」 between topics.
          </li>
          <li>
            <strong>Channel title:</strong> style a symbol or one word, not the keyword. “✦ Crypto Signals ✦”
            is searchable; “𝒞𝓇𝓎𝓅𝓉ℴ 𝒮𝒾ℊ𝓃𝒶𝓁𝓈” isn’t.
          </li>
        </ul>

        <h2>Tips</h2>
        <ul>
          <li>Telegram search matches plain letters, so a fully styled channel name is hard to find.</li>
          <li>Monospace looks great for codes, prices and lists that need to line up.</li>
          <li>Pick one or two styles for your channel and stick with them, like a logo.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "linkedin-fonts",
    name: "LinkedIn",
    sampleText: "Open to work",
    featured: {
      label: "Best for LinkedIn",
      ids: [
        "bold-sans",
        "bold-serif",
        "sans-bold-italic",
        "bold-italic",
        "italic",
        "sans-italic",
        "sans",
        "monospace",
        "small-caps-all",
        "double-struck",
        "script",
        "bold-script",
        "underline",
        "strikethrough",
        "circled",
        "negative-squared",
        "verified",
        "arrows",
        "middle-dot",
      ],
    },
    faqs: [
      {
        question: "How do I make text bold on LinkedIn?",
        answer:
          "LinkedIn posts and profiles have no bold button. Type your text above, copy the Bold Sans style (it matches LinkedIn's own font best) and paste it into your post, headline or About section.",
      },
      {
        question: "Does bold text hurt my LinkedIn search ranking?",
        answer:
          "It can. Unicode bold letters are different characters from normal letters, so LinkedIn search, recruiters' searches and Google may not match them. Keep job titles, skills and company names plain and use bold for hooks and headings.",
      },
      {
        question: "Can I use a fancy font in my LinkedIn name?",
        answer:
          "Don't. LinkedIn's rules ask for your real name without symbols or special characters, and a styled name can get your profile flagged or simply look unprofessional to recruiters.",
      },
      {
        question: "Is bold Unicode text accessible?",
        answer:
          "Not fully. Screen readers often spell Unicode bold letters out one by one or skip them. Use it for a few words, never for whole paragraphs or key details.",
      },
      {
        question: "Can I underline or strike through text on LinkedIn?",
        answer:
          "Yes. The Underline and Strikethrough styles add combining lines to each letter, which LinkedIn shows like any other text.",
      },
    ],
    h1: "LinkedIn Bold Text Generator and Fonts",
    title: "LinkedIn Bold Text Generator – Bold & Italic Fonts for Posts",
    description:
      "LinkedIn bold text generator: make bold, italic and underlined text for posts, headlines and your About section, plus tips so your profile stays searchable.",
    intro:
      "Type your hook, heading or phrase below and copy the bold or italic style. Paste it into a LinkedIn post, your headline or your About section.",
    body: (
      <>
        <h2>Why LinkedIn Posts Use “Fake” Bold</h2>
        <p>
          LinkedIn doesn’t let you format normal posts or your profile. There’s no bold button, no italics, no
          headings. So when you see a post with a bold first line or a heading in the middle, the writer used
          Unicode letters: 𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀 for punch, 𝘐𝘵𝘢𝘭𝘪𝘤 for quotes, and sometimes U̲n̲d̲e̲r̲l̲i̲n̲e̲ for emphasis.
        </p>
        <p>
          Bold Sans is the one to start with. It sits closest to LinkedIn’s own typeface, so it looks like
          real formatting instead of a decoration.
        </p>

        <h2>Where to Use It (and Where Not To)</h2>
        <WhereItWorks
          rows={[
            ["First line of a post", "Yes", "The hook people see before “…see more”."],
            ["Headings inside a long post", "Yes", "Breaks up text so people keep reading."],
            ["About section headers", "Yes", "E.g. 𝗪𝗵𝗮𝘁 𝗜 𝗱𝗼, 𝗦𝗲𝗹𝗲𝗰𝘁𝗲𝗱 𝘄𝗼𝗿𝗸."],
            ["Headline", "Partly", "Style a separator or one word, keep the job title plain."],
            ["Your name", "No", "Against LinkedIn’s rules and bad for search."],
            ["Skills, job titles, companies", "No", "Search needs plain letters to find you."],
          ]}
        />

        <h2>A Simple Post Structure That Works</h2>
        <ol>
          <li>
            <strong>Bold hook:</strong> one short line in Bold Sans, under about 200 characters, so it shows
            fully before “see more”.
          </li>
          <li>
            <strong>Plain body:</strong> short paragraphs in normal text. This is what LinkedIn reads and
            recommends.
          </li>
          <li>
            <strong>Bold mini-headings</strong> if the post is long, like 𝗪𝗵𝗮𝘁 𝘄𝗲𝗻𝘁 𝘄𝗿𝗼𝗻𝗴 and 𝗪𝗵𝗮𝘁 𝗜’𝗱 𝗱𝗼
            𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁𝗹𝘆.
          </li>
          <li>
            <strong>Plain call to action</strong> at the end, so it’s easy to read on every device.
          </li>
        </ol>

        <h2>The Search Problem, Explained</h2>
        <p>
          To a computer, 𝗠𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴 and Marketing are two different words. If your headline says 𝗠𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴
          𝗠𝗮𝗻𝗮𝗴𝗲𝗿, a recruiter searching for “marketing manager” may never see you. That’s why the rule of
          thumb is simple: anything you want to be found for stays plain. Style the decoration around it, not
          the words themselves.
        </p>

        <h2>Tips</h2>
        <ul>
          <li>One bold phrase per paragraph at most. More than that reads like shouting.</li>
          <li>Avoid script and gothic styles here; they look out of place in a professional feed.</li>
          <li>Never put dates, links or contact details only in a fancy style.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "threads-fonts",
    name: "Threads",
    sampleText: "thread worth reading",
    featured: {
      label: "Best for Threads",
      ids: [
        "bold-sans",
        "bold-serif",
        "script",
        "bold-script",
        "italic",
        "small-caps-all",
        "monospace",
        "fullwidth",
        "vaporwave-spaced",
        "double-struck",
        "sparkles",
        "sparkle-frame",
        "kawaii",
        "hearts",
        "moon-prefix",
        "flower-prefix",
        "sparkle-suffix",
        "star-wings",
        "bubble",
        "upside-down",
        "strikethrough",
      ],
    },
    faqs: [
      {
        question: "Can I use fancy fonts on Threads?",
        answer:
          "Yes. Threads shows Unicode text in posts, replies and your bio, so any style here can be pasted in. Your name and bio come from your Instagram profile.",
      },
      {
        question: "How do I make bold text on Threads?",
        answer:
          "Copy the Bold Sans or Bold style from this page and paste it into your post. Threads doesn't have a bold button for normal posts.",
      },
      {
        question: "Will fancy text hurt my reach on Threads?",
        answer:
          "Styled letters aren't matched by search the way plain words are, and topic tags need plain text. Keep topics and keywords plain and style only a short hook or a heading.",
      },
      {
        question: "Can I change my Threads bio font?",
        answer:
          "Yes. Edit your profile and paste a styled line into your bio. The Threads bio is separate from your Instagram bio, but both accept the same styles.",
      },
    ],
    h1: "Threads Fonts Generator",
    title: "Threads Fonts – Bold, Cursive & Aesthetic Text for Posts and Bio",
    description:
      "Threads fonts for posts, replies and your bio. Copy and paste bold hooks, cursive and aesthetic text that shows up in the Threads app and on the web.",
    intro:
      "Type a hook, a reply or a bio line below and copy the style you like. Paste it straight into Threads.",
    body: (
      <>
        <h2>Fancy Text on Threads</h2>
        <p>
          Threads keeps posts simple: up to 500 characters, no bold button, no headings. That’s exactly why a
          styled first line works. In a fast feed, a 𝗯𝗼𝗹𝗱 hook or a 𝓈𝑜𝒻𝓉 cursive line is often what makes
          someone stop and tap.
        </p>
        <p>
          Everything here is Unicode, so it looks the same on iPhone, Android and threads.net, and it stays
          styled if someone quotes or reposts you.
        </p>

        <h2>Where Fancy Text Works on Threads</h2>
        <WhereItWorks
          rows={[
            ["Posts and replies", "Yes", "Best for the first line or a short punchline."],
            ["Bio", "Yes", "A cursive or small caps line gives the profile a vibe."],
            ["Topic tags", "No", "Tags need plain words to connect to a topic."],
            ["Username", "No", "Comes from Instagram and only allows plain characters."],
          ]}
        />

        <h2>Three Ways People Use It</h2>
        <ul>
          <li>
            <strong>The bold hook:</strong> “𝗛𝗼𝘁 𝘁𝗮𝗸𝗲:” or “𝗨𝗻𝗽𝗼𝗽𝘂𝗹𝗮𝗿 𝗼𝗽𝗶𝗻𝗶𝗼𝗻:” in Bold Sans, then the rest in
            plain text.
          </li>
          <li>
            <strong>The aesthetic bio:</strong> small caps or vaporwave, like ᴡʀɪᴛᴇʀ · ᴄᴏꜰꜰᴇᴇ · ᴄᴀᴛꜱ, often
            with ☾ or ✿ in front.
          </li>
          <li>
            <strong>The joke format:</strong> strikethrough for the thing you’re pretending not to say, as in
            “I l̶o̶v̶e̶ tolerate Mondays”.
          </li>
        </ul>

        <h2>Tips</h2>
        <ul>
          <li>Style the hook, not the whole post; long fancy text is tiring to read on a phone.</li>
          <li>Keep words you want to be found for in plain text.</li>
          <li>Small caps and monospace give a clean, minimal look that suits Threads.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "pinterest-fonts",
    name: "Pinterest",
    sampleText: "aesthetic ideas",
    featured: {
      label: "Best for Pinterest",
      ids: [
        "script",
        "bold-script",
        "italic",
        "small-caps-all",
        "fullwidth",
        "vaporwave-spaced",
        "wide-spaced",
        "sparkles",
        "sparkle-frame",
        "flower-frame",
        "flower-ribbon",
        "ribbon-blossom",
        "sakura",
        "kawaii",
        "hearts",
        "butterfly",
        "moon-prefix",
        "flower-prefix",
        "double-struck",
        "bold-serif",
        "bubble",
      ],
    },
    faqs: [
      {
        question: "Where can I use fancy fonts on Pinterest?",
        answer:
          "In your profile name, bio, board names, board descriptions, pin titles and pin descriptions. They're Unicode characters, so Pinterest saves them like normal text.",
      },
      {
        question: "Do fancy fonts hurt Pinterest SEO?",
        answer:
          "They can. Pinterest search reads plain words, so a board called 𝓌𝑒𝒹𝒹𝒾𝓃𝑔 𝒾𝒹𝑒𝒶𝓈 may not show up for “wedding ideas”. Write keywords in plain text and decorate around them, like ✿ wedding ideas ✿.",
      },
      {
        question: "Which styles fit an aesthetic Pinterest profile?",
        answer:
          "Script, Vaporwave, Small Caps and soft frames with flowers, ribbons or sparkles match the moodboard style Pinterest is known for.",
      },
      {
        question: "Can I use these fonts on the text inside my pin images?",
        answer:
          "These are text characters, not image fonts, so they're meant for titles and descriptions. For text on the image itself, use a design tool's own fonts.",
      },
    ],
    h1: "Pinterest Fonts Generator",
    title: "Pinterest Fonts – Aesthetic Text for Boards, Bio & Pin Titles",
    description:
      "Aesthetic Pinterest fonts for your name, bio, board names and pin titles. Copy and paste cursive and vaporwave text, plus how to keep boards searchable.",
    intro:
      "Type a board name, bio line or pin title below and copy an aesthetic style. Paste it into Pinterest wherever you edit text.",
    body: (
      <>
        <h2>Aesthetic Text That Matches Your Boards</h2>
        <p>
          On Pinterest, people judge a profile in a second, and the words are part of the look. A board called
          ✿ 𝒸ℴ𝓉𝓉𝒶ℊℯ 𝒹𝓇ℯ𝒶𝓂𝓈 ✿ feels different from “Cottage dreams”. Script and vaporwave suit moodboards,
          small caps looks calm and editorial, and flower, ribbon and sparkle frames fit cute, soft and
          cottagecore themes.
        </p>

        <h2>Where Fancy Text Works on Pinterest</h2>
        <WhereItWorks
          rows={[
            ["Profile name", "Yes", "Add a style around your name, not instead of it."],
            ["Bio", "Yes", "A short aesthetic line, then plain words about your niche."],
            ["Board names", "Partly", "Decorate around the keyword so the board stays searchable."],
            ["Pin titles", "Partly", "Titles are short (up to 100 characters); one styled word is plenty."],
            ["Pin descriptions", "Yes", "Keep the keywords plain, use style for a closing line."],
          ]}
        />

        <h2>Keep Your Boards Searchable</h2>
        <p>
          Pinterest is a visual search engine as much as a social network, and most of your traffic comes from
          search. Fancy letters are different characters to a computer, so a fully styled title can quietly
          drop out of results. The fix is easy: write the keyword plainly and add the style around it.
        </p>
        <ul>
          <li>
            Instead of 𝓢𝓾𝓶𝓶𝓮𝓻 𝓞𝓾𝓽𝓯𝓲𝓽𝓼, try <strong>☀︎ Summer outfits ☀︎</strong>.
          </li>
          <li>
            Instead of a styled description, end a plain description with a styled sign-off like ⋆˙⟡ 𝓈𝒶𝓋ℯ 𝒻ℴ𝓇
            𝓁𝒶𝓉ℯ𝓇.
          </li>
        </ul>

        <h2>Tips</h2>
        <ul>
          <li>Use the same frame for every board name for a tidy, consistent profile grid.</li>
          <li>Vaporwave spacing (ａｅｓｔｈｅｔｉｃ) takes a lot of room; save it for short words.</li>
          <li>Check your profile on a phone, where long styled titles get cut off first.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "twitch-fonts",
    name: "Twitch",
    sampleText: "Live Now",
    featured: {
      label: "Best for Twitch",
      ids: [
        "bold-sans",
        "bold-serif",
        "bold-fraktur",
        "gothic-caps",
        "bold-script",
        "script",
        "small-caps-all",
        "monospace",
        "double-struck",
        "fullwidth",
        "gamer-tag",
        "star-wings",
        "javanese-frame",
        "crown",
        "fire",
        "lightning",
        "skull",
        "sniper",
        "boss-stars",
        "beast-mode",
        "x-mark",
        "lenticular",
        "verified",
        "negative-squared",
        "zalgo",
      ],
    },
    faqs: [
      {
        question: "Can I use fancy fonts in my Twitch name?",
        answer:
          "No. Twitch usernames only allow letters, numbers and underscores, and your display name can only change the capitalisation of your username. Use fancy text in your bio, panels, stream title and chat instead.",
      },
      {
        question: "Can I use fancy text in Twitch chat?",
        answer:
          "Usually, yes. Twitch chat shows Unicode, but many channels use moderation bots that block symbols, long messages or glitch text, so check the channel's rules first.",
      },
      {
        question: "Should I use fancy fonts in my stream title?",
        answer:
          "Lightly. Viewers find streams through categories and search, so keep the game and topic plain and add one styled word or a symbol frame for personality.",
      },
      {
        question: "Which styles suit a streamer brand?",
        answer:
          "Bold Gothic, Gamer Tag and framed styles look great on panels and in your bio. Pick one and use it everywhere, including your Discord server and socials.",
      },
    ],
    h1: "Twitch Fonts Generator",
    title: "Twitch Fonts – Cool Text for Your Bio, Panels, Titles & Chat",
    description:
      "Twitch fonts for your bio, panels, stream titles and chat. Copy and paste gaming text styles and see exactly what Twitch names allow.",
    intro:
      "Type your channel name, a panel heading or a stream title below and copy a style. Paste it into your Twitch bio, panels, title or chat.",
    body: (
      <>
        <h2>What Twitch Lets You Style</h2>
        <p>
          Let’s get the disappointing bit out of the way: your Twitch name can’t be fancy. Usernames only
          allow letters, numbers and underscores, and your display name can only change capitalisation. Almost
          everything else on your channel is fair game, though, and that’s where a consistent style makes your
          channel look put together.
        </p>
        <WhereItWorks
          rows={[
            ["Username and display name", "No", "Letters, numbers and underscores only."],
            ["Bio", "Yes", "Up to 300 characters; a styled tagline works well."],
            ["Panels", "Yes", "Headings like 「 𝗦𝗖𝗛𝗘𝗗𝗨𝗟𝗘 」 and 「 𝗥𝗨𝗟𝗘𝗦 」."],
            ["Stream title", "Partly", "Keep the game and topic plain for search."],
            ["Chat", "Usually", "Some channels’ bots block symbols or glitch text."],
            ["Channel point rewards", "Yes", "Fun names stand out in the rewards menu."],
          ]}
        />

        <h2>Building a Streamer Look</h2>
        <p>
          Viewers recognise channels the way they recognise logos. Pick one signature style and use it for
          your panel headings, your schedule, your Discord server and your social bios. Competitive FPS
          streams suit Bold Gothic, Sniper or Gamer Tag. Cosy, art and music streams suit script, small caps
          and sparkle frames.
        </p>
        <p>A simple, readable panel set might look like this:</p>
        <ul>
          <li>「 𝗔𝗕𝗢𝗨𝗧 𝗠𝗘 」</li>
          <li>「 𝗦𝗖𝗛𝗘𝗗𝗨𝗟𝗘 」</li>
          <li>「 𝗥𝗨𝗟𝗘𝗦 」</li>
          <li>「 𝗗𝗜𝗦𝗖𝗢𝗥𝗗 」</li>
        </ul>

        <h2>Tips</h2>
        <ul>
          <li>
            Stream titles have about 140 characters. A short styled tag like ⚡𝗟𝗜𝗩𝗘⚡ plus plain words beats a
            fully styled title.
          </li>
          <li>Zalgo and heavy glitch text often trip chat filters; save them for your bio.</li>
          <li>Check your panels on a phone, where symbols look smaller and long lines wrap.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "free-fire-fonts",
    name: "Free Fire",
    sampleText: "FF King",
    featured: {
      label: "Best for Free Fire",
      ids: [
        "gamer-tag",
        "javanese-frame",
        "star-wings",
        "crown",
        "boss-stars",
        "sniper",
        "beast-mode",
        "bold-fraktur",
        "gothic-caps",
        "bold-script",
        "small-caps-all",
        "fire",
        "skull",
        "crossbones",
        "x-mark",
        "lightning",
        "blade",
        "stardust",
        "lenticular",
        "kanji",
        "currency",
        "stroked",
        "negative-squared",
        "negative-circled",
      ],
    },
    faqs: [
      {
        question: "How do I make a stylish Free Fire name?",
        answer:
          "Type your name above, copy a style such as Gamer Tag, Royal Frame or Star Wings, and paste it into the nickname box when you rename your account. Renaming costs diamonds or a name change card.",
      },
      {
        question: "Why does Free Fire reject my stylish name?",
        answer:
          "Two usual reasons: it's too long (nicknames are short, and every symbol counts), or it contains a symbol Free Fire doesn't allow. Shorten your name, drop one side of the frame, or switch to a style that only changes letters.",
      },
      {
        question: "What are the most popular Free Fire name symbols?",
        answer:
          "Frames like ꧁ ꧂, star wings ★彡 彡★, crowns ♛, and Japanese-looking letters such as 亗, 乂 and 么 are the classic Free Fire name symbols.",
      },
      {
        question: "Can I use these styles for my guild name?",
        answer:
          "Yes. Guild names accept many of the same symbols. Keep it short and readable so new members can find and recognise your guild.",
      },
      {
        question: "Why does my name show boxes for some friends?",
        answer:
          "Their phone doesn't have a font for that symbol. Bold and gothic letters are the safest; rare symbols are the most likely to show as boxes on older phones.",
      },
    ],
    h1: "Free Fire Name Style and Fonts Generator",
    title: "Free Fire Name Style – Stylish FF Nickname & Fonts Generator",
    description:
      "Free Fire name style generator: make stylish FF nicknames and guild names with ꧁꧂, ★彡 and ♛ symbols. Copy and paste, plus tips to fit the name limit.",
    intro:
      "Type your nickname below to see it in stylish Free Fire name styles. Copy the one you like and paste it when you rename your account or guild.",
    body: (
      <>
        <h2>What Makes a Good Free Fire Name</h2>
        <p>
          In Free Fire, your nickname shows up in the lobby, on the kill feed and above your head in a match,
          so it’s basically your logo. The classic FF look mixes three things: a frame (꧁ ꧂ or ★彡 彡★), a
          bold or gothic version of your name, and sometimes a Japanese-looking letter like 亗 or 乂 as a clan
          mark.
        </p>
        <p>A few examples built with the styles above:</p>
        <ul>
          <li>꧁ 𝕱𝖋 𝕶𝖎𝖓𝖌 ꧂ (Royal Frame with Bold Gothic)</li>
          <li>★彡 𝓢𝓱𝓪𝓭𝓸𝔀 彡★ (Star Wings)</li>
          <li>♛ 𝔅𝔬𝔰𝔰 ♛ (Crowned)</li>
          <li>亗 ᴋɪɴɢ 亗 (Tiny Caps with a symbol on each side)</li>
        </ul>

        <h2>How to Change Your Free Fire Name</h2>
        <ol>
          <li>Type your name in the generator above and copy the style you like.</li>
          <li>Open Free Fire and tap your profile banner in the top-left corner of the lobby.</li>
          <li>Tap the edit (pencil) icon next to your nickname.</li>
          <li>Paste the styled name and confirm. You’ll pay with diamonds or a name change card.</li>
        </ol>
        <p>
          Because renaming isn’t free, it’s worth trying a few styles here first and checking how each one
          looks before you spend anything.
        </p>

        <h2>When Your Name Is Too Long</h2>
        <p>
          Free Fire nicknames have a short character limit, and every symbol in a frame counts as a character.
          A long name inside ꧁ ꧂ can easily go over. If that happens:
        </p>
        <ul>
          <li>Use a shorter version or nickname of your name.</li>
          <li>Keep only one decoration, like 亗 in front, instead of a frame on both sides.</li>
          <li>
            Choose a style that changes the letters without adding extras, such as Bold Gothic or Tiny Caps.
          </li>
        </ul>

        <h2>Guild Names</h2>
        <p>
          Guild names accept many of the same symbols, and a matching style helps your squad look like a team.
          A common trick is to give every member the same symbol, like 乂 or 亗, before their name.
        </p>
      </>
    ),
  },
  {
    slug: "pubg-fonts",
    name: "PUBG",
    sampleText: "Pro Player",
    featured: {
      label: "Best for PUBG & BGMI",
      ids: [
        "gamer-tag",
        "javanese-frame",
        "star-wings",
        "crown",
        "sniper",
        "boss-stars",
        "beast-mode",
        "bold-fraktur",
        "gothic-caps",
        "small-caps-all",
        "bold-script",
        "fire",
        "skull",
        "crossbones",
        "x-mark",
        "blade",
        "lightning",
        "lenticular",
        "kanji",
        "katakana",
        "currency",
        "stroked",
        "negative-squared",
      ],
    },
    faqs: [
      {
        question: "How do I make a stylish PUBG or BGMI name?",
        answer:
          "Type your name above, copy a style and paste it when you rename your character with a Rename Card. The same styles work in PUBG Mobile and Battlegrounds Mobile India (BGMI).",
      },
      {
        question: "Why does PUBG reject my name?",
        answer:
          "Names have a short character limit and some symbols aren't allowed. Shorten the name, use one symbol instead of a full frame, and avoid emoji.",
      },
      {
        question: "Can I use these fonts for my clan name?",
        answer:
          "Yes, many of them. Clan names accept a similar set of characters. Test a style here first and keep it short.",
      },
      {
        question: "Which symbols are popular for PUBG names?",
        answer:
          "Frames like ꧁ ꧂, star wings ★彡, crowns ♛, skulls ☠ and Japanese-style letters such as 乂 and 亗.",
      },
      {
        question: "Where do I get a Rename Card?",
        answer:
          "Rename Cards come from events, the Royale Pass, crates and the in-game shop. Check the shop and current events in your version of the game.",
      },
    ],
    h1: "PUBG & BGMI Name Generator",
    title: "PUBG Name Generator – Stylish Names & Fonts for PUBG Mobile and BGMI",
    description:
      "PUBG name generator for PUBG Mobile and BGMI: make stylish nicknames and clan names with cool fonts and symbols. Copy and paste, plus how to rename.",
    intro:
      "Type your name below to see it in stylish PUBG and BGMI name styles. Copy one and paste it when you rename your character or clan.",
    body: (
      <>
        <h2>Stylish Names for PUBG Mobile and BGMI</h2>
        <p>
          Your name is the first thing other players see when you knock them, and the last thing they see in
          the kill feed. That’s why so many PUBG and BGMI players dress theirs up with gothic letters, frames
          like ꧁ ꧂ and sniper or skull symbols. The styles here are made from Unicode characters, so you can
          paste them into the rename box directly.
        </p>
        <p>A few name ideas made with the styles above:</p>
        <ul>
          <li>▄︻デ══━一 𝔊𝔥𝔬𝔰𝔱 (Sniper)</li>
          <li>꧁ 𝕻𝖗𝖔 𝕻𝖑𝖆𝖞𝖊𝖗 ꧂ (Royal Frame with Bold Gothic)</li>
          <li>乂 ᴅᴇᴀᴅʟʏ 乂 (Tiny Caps with 乂)</li>
          <li>☠ 𝙻𝚎𝚐𝚎𝚗𝚍 ☠ (Skull frame)</li>
        </ul>

        <h2>How to Change Your Name in PUBG Mobile or BGMI</h2>
        <ol>
          <li>Copy the styled name you like from the generator.</li>
          <li>
            Open your <strong>Inventory</strong> and find the <strong>Rename Card</strong> (usually under
            consumables).
          </li>
          <li>Use the card, paste your new name and confirm.</li>
        </ol>
        <p>
          Rename Cards come from events, the Royale Pass, crates and the shop, so preview a few styles here
          before you use one.
        </p>

        <h2>Making Sure Your Name Fits</h2>
        <p>
          Names have a short character limit, and every symbol counts. If your styled name is too long or gets
          rejected:
        </p>
        <ul>
          <li>Use a shorter name or drop one side of a frame.</li>
          <li>Pick a style that only changes letters, like Bold Gothic or Tiny Caps.</li>
          <li>Avoid emoji; they are usually blocked in names.</li>
        </ul>

        <h2>Clan Names and Squad Style</h2>
        <p>
          A matching clan style makes your squad look organised in the lobby. Many clans put the same symbol
          in front of every member’s name, and use the same style for their Discord server so the team feels
          connected outside the game too.
        </p>
      </>
    ),
  },
  {
    slug: "fortnite-fonts",
    name: "Fortnite",
    sampleText: "Victory Royale",
    featured: {
      label: "Best for Fortnite",
      ids: [
        "bold-sans",
        "bold-serif",
        "bold-fraktur",
        "gothic-caps",
        "small-caps-all",
        "bold-script",
        "gamer-tag",
        "star-wings",
        "crown",
        "lightning",
        "fire",
        "skull",
        "x-mark",
        "sniper",
        "boss-stars",
        "lenticular",
        "fullwidth",
        "double-struck",
        "negative-squared",
        "bubble",
      ],
    },
    faqs: [
      {
        question: "Can I use fancy fonts in my Fortnite name?",
        answer:
          "Mostly no. Your Fortnite name is your Epic Games display name, which only accepts a limited set of characters, so most fancy letters and symbols are rejected. Use these styles around the game instead: Discord, YouTube, TikTok and your stream.",
      },
      {
        question: "Where can I use Fortnite fonts?",
        answer:
          "In clip and video titles, TikTok and YouTube captions, stream panels, social bios and the Discord server for your squad or creative maps.",
      },
      {
        question: "How often can I change my Epic display name?",
        answer:
          "Epic only lets you change your display name every couple of weeks, so plan the name you want before you change it.",
      },
      {
        question: "Which styles look most like Fortnite?",
        answer:
          "Bold Sans and Bold Gothic give a punchy, title-card look. Lightning, fire and star frames fit victory and highlight clips.",
      },
    ],
    h1: "Fortnite Fonts Generator",
    title: "Fortnite Fonts – Cool Text for Clips, Bios, Streams & Discord",
    description:
      "Fortnite fonts for clip titles, bios, streams and your Discord server. Copy and paste cool gaming text, and learn what your Epic display name allows.",
    intro:
      "Type a clip title, your gamer name or a squad name below and copy a style. Use it on YouTube, TikTok, Twitch or your Discord server.",
    body: (
      <>
        <h2>The Honest Answer About Fortnite Names</h2>
        <p>
          A lot of people search for Fortnite fonts hoping to put one in their in-game name. Here’s the truth:
          your Fortnite name is your Epic Games display name, and Epic only accepts a limited set of
          characters. Most fancy letters and symbols are rejected, and you can only change the name every
          couple of weeks anyway.
        </p>
        <p>
          Where these styles really pay off is everywhere around the game, where your audience and your squad
          actually see them.
        </p>
        <WhereItWorks
          rows={[
            ["Epic display name", "Mostly no", "Limited characters; fancy letters usually fail."],
            ["YouTube and TikTok titles", "Yes", "Keep “Fortnite” plain so people can find the video."],
            ["Stream panels and bio", "Yes", "One signature style ties your channel together."],
            ["Discord server", "Yes", "Server name, channels and roles for your squad."],
            ["Creative map descriptions", "Partly", "Test first; keep the map code plain."],
          ]}
        />

        <h2>Styles That Fit Fortnite Content</h2>
        <ul>
          <li>
            <strong>Clip titles:</strong> Bold Sans for punch, e.g. 𝗖𝗥𝗔𝗭𝗬 𝗙𝗜𝗡𝗔𝗟 𝗖𝗜𝗥𝗖𝗟𝗘 + plain “Fortnite Zero
            Build”.
          </li>
          <li>
            <strong>Player names on socials:</strong> Gamer Tag or Star Wings, like ★彡 𝓥𝓲𝓹𝓮𝓻 彡★.
          </li>
          <li>
            <strong>Wins and highlights:</strong> lightning or fire frames, like ⚡ 𝐕𝐈𝐂𝐓𝐎𝐑𝐘 𝐑𝐎𝐘𝐀𝐋𝐄 ⚡.
          </li>
        </ul>

        <h2>Tips</h2>
        <ul>
          <li>Search-friendly titles style one or two words and keep the game name plain.</li>
          <li>Use the same name style on TikTok, YouTube and Discord so fans recognise you.</li>
          <li>Plan your Epic display name carefully, since you can’t change it often.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "valorant-fonts",
    name: "Valorant",
    sampleText: "Radiant Soon",
    featured: {
      label: "Best for Valorant",
      ids: [
        "small-caps-all",
        "small-caps",
        "bold-sans",
        "bold-serif",
        "sans",
        "monospace",
        "bold-fraktur",
        "gothic-caps",
        "bold-script",
        "gamer-tag",
        "sniper",
        "star-wings",
        "crown",
        "lightning",
        "x-mark",
        "skull",
        "lenticular",
        "kanji",
        "katakana",
        "fullwidth",
        "accented",
      ],
    },
    faqs: [
      {
        question: "Can I use fancy fonts in my Valorant name?",
        answer:
          "Partly. Your Riot ID accepts letters from many alphabets, but most decorative symbols and math-style letters (like bold or script) are rejected. Clean styles that use real letters, such as accented letters or some small caps, have the best chance.",
      },
      {
        question: "How long can a Riot ID be?",
        answer:
          "The name part can be 3 to 16 characters and the #tagline 3 to 5 characters. Every symbol counts toward the limit.",
      },
      {
        question: "How often can I change my Riot ID?",
        answer: "About once every 30 days, so try a few styles here before you commit to one.",
      },
      {
        question: "Where else can I use Valorant fonts?",
        answer:
          "Your team's Discord server, social bios, clip titles, stream panels and tournament team names on social media.",
      },
    ],
    h1: "Valorant Name Fonts Generator",
    title: "Valorant Name Fonts – Cool Riot ID Styles for Players and Teams",
    description:
      "Valorant name fonts for your Riot ID, team, clips and Discord. Copy and paste cool text styles and learn which ones Riot ID actually accepts.",
    intro:
      "Type your name or team name below and copy a style. Try it in your Riot ID, or use it for your team's Discord, clips and socials.",
    body: (
      <>
        <h2>Valorant Names and Your Riot ID</h2>
        <p>
          In Valorant, your name is your Riot ID: a 3 to 16 character name plus a #tag. Riot supports letters
          from many alphabets, which is great for players worldwide, but it blocks most decorative symbols and
          the “math” letters that make bold and script styles work. So frames like ꧁ ꧂ usually fail, while
          names built from real letters have a chance.
        </p>
        <WhereItWorks
          rows={[
            ["Riot ID name", "Partly", "Real letters (like é or ǩ) can work; most symbols don’t."],
            ["#tagline", "Partly", "3–5 characters; keep it simple."],
            ["Team Discord", "Yes", "Server name, roles and channels."],
            ["Clips and socials", "Yes", "Titles, bios and tournament graphics captions."],
          ]}
        />

        <h2>Styles Worth Trying in Your Riot ID</h2>
        <ul>
          <li>
            <strong>Accented letters</strong> like Ǵĥóśť use real letters with marks, so they often pass.
          </li>
          <li>
            <strong>Small caps</strong> like ɢʜᴏꜱᴛ are partly made of phonetic letters; some pass, some don’t.
          </li>
          <li>
            <strong>Bold, script and gothic</strong> are math symbols and are usually rejected in-game, but
            look great on Discord.
          </li>
        </ul>
        <p>
          Because you can only change your Riot ID about once a month, check the name in the Riot account
          settings before you confirm.
        </p>

        <h2>Styles for Teams and Content</h2>
        <p>
          Outside the game, anything goes. Sniper (▄︻デ══━一), Gamer Tag and Bold Gothic suit the tactical
          shooter look for team names, clip titles and your squad’s Discord. Keep your in-game name readable
          so teammates can call you out quickly in comms.
        </p>
      </>
    ),
  },
  {
    slug: "call-of-duty-fonts",
    name: "Call of Duty",
    sampleText: "Warzone Squad",
    featured: {
      label: "Best for Call of Duty",
      ids: [
        "bold-sans",
        "bold-serif",
        "bold-fraktur",
        "gothic-caps",
        "small-caps-all",
        "monospace",
        "gamer-tag",
        "sniper",
        "x-mark",
        "skull",
        "crossbones",
        "blade",
        "lightning",
        "fire",
        "boss-stars",
        "crown",
        "lenticular",
        "negative-squared",
        "stroked",
        "fullwidth",
      ],
    },
    faqs: [
      {
        question: "Can I use fancy fonts in my Call of Duty name?",
        answer:
          "Mostly no. Your Activision ID and in-game name accept a limited set of characters, so fancy Unicode letters and symbols are usually rejected. They work well for clan Discord servers, clip titles and social bios.",
      },
      {
        question: "Do these fonts work for Warzone names?",
        answer:
          "The same rules apply in Warzone, since it uses your Activision ID. Use these styles for your squad's Discord, streams and content instead.",
      },
      {
        question: "Which styles suit a Call of Duty clan?",
        answer:
          "Sniper, Skull, Crossbones, Bold Gothic and Gamer Tag fit the military shooter look for clan names on Discord and social media.",
      },
      {
        question: "Can I put symbols in my clan tag?",
        answer:
          "Clan tags are short and limited, so most symbols won't save. Keep the in-game tag plain and use the styled version on Discord and socials.",
      },
    ],
    h1: "Call of Duty & Warzone Name Fonts",
    title: "Call of Duty Fonts – Warzone Name Styles for Clans, Clips & Discord",
    description:
      "Call of Duty and Warzone name fonts for clans, clips, streams and Discord. Copy and paste cool text, and learn what your Activision ID allows.",
    intro:
      "Type your gamer name or clan name below and copy a style. Use it for your squad's Discord, clip titles, stream panels and socials.",
    body: (
      <>
        <h2>Can You Use Fancy Fonts in Call of Duty?</h2>
        <p>
          Short answer: not really in-game. Call of Duty and Warzone use your Activision ID, which only
          accepts a limited set of characters, so fancy letters and most symbols get rejected. Clan tags are
          even stricter.
        </p>
        <p>
          The good news is that your squad spends just as much time around the game as in it: planning in
          Discord, sharing clips and watching streams. That’s where these styles shine.
        </p>
        <WhereItWorks
          rows={[
            ["Activision ID / in-game name", "Mostly no", "Limited characters; fancy text usually fails."],
            ["Clan tag", "No", "Short and strict; keep it plain in-game."],
            ["Clan Discord server", "Yes", "Server name, roles like 「 𝗢𝗙𝗙𝗜𝗖𝗘𝗥 」, channels."],
            ["Clip titles and captions", "Yes", "Keep “Warzone” or the mode plain for search."],
            ["Stream panels and bios", "Yes", "One signature style across platforms."],
          ]}
        />

        <h2>Styles With a Battle-Ready Look</h2>
        <ul>
          <li>▄︻デ══━一 𝔊𝔥𝔬𝔰𝔱 (Sniper) for snipers and clip intros.</li>
          <li>☠ 𝗥𝗘𝗔𝗣𝗘𝗥 ☠ (Skull) for clan and squad names.</li>
          <li>⚔ 𝕭𝖗𝖆𝖛𝖔 𝕾𝖖𝖚𝖆𝖉 ⚔ (Crossed swords with Bold Gothic) for team branding.</li>
        </ul>

        <h2>Setting Up a Clan Discord</h2>
        <p>
          A consistent style makes a clan server feel official. Use one style for the server name, a bold
          style for role names (𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗘𝗥, 𝗢𝗙𝗙𝗜𝗖𝗘𝗥, 𝗥𝗘𝗖𝗥𝗨𝗜𝗧) and simple symbols for channel names. Our{" "}
          <Link href="/discord-name-generator">Discord name generator</Link> shows how a styled name looks in
          a real Discord member list before you change it.
        </p>
      </>
    ),
  },
  {
    slug: "minecraft-fonts",
    name: "Minecraft",
    sampleText: "Survival Server",
    featured: {
      label: "Best for Minecraft",
      ids: [
        "small-caps-all",
        "small-caps",
        "bold-sans",
        "bold-serif",
        "monospace",
        "fullwidth",
        "double-struck",
        "bold-script",
        "script",
        "bold-fraktur",
        "fraktur",
        "runic",
        "gamer-tag",
        "star-wings",
        "crown",
        "sparkles",
        "hearts",
        "x-mark",
        "lenticular",
        "middle-dot",
        "superscript",
        "circled",
      ],
    },
    faqs: [
      {
        question: "Can I use fancy fonts in my Minecraft username?",
        answer:
          "No. Minecraft Java usernames only allow letters, numbers and underscores (3 to 16 characters). Fancy text works in chat on many servers, in books, on renamed items, on signs and in server descriptions.",
      },
      {
        question: "Why do Minecraft servers use small caps so much?",
        answer:
          "Small Caps (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ) stays neat and readable next to Minecraft's pixel font, so servers use it for ranks, menus, scoreboards and announcements.",
      },
      {
        question: "Why do some letters show as boxes in Minecraft?",
        answer:
          "Minecraft has its own font and falls back to another for unusual characters, and a few rare symbols are missing. Small caps, bold and common symbols display most reliably.",
      },
      {
        question: "Can I use these fonts for my server name?",
        answer:
          "Yes, in server lists, your MOTD (with a plugin or server software that supports it), your Discord server and your website. Keep the main server name plain so players can search for it.",
      },
    ],
    h1: "Minecraft Name Fonts Generator",
    title: "Minecraft Fonts – Small Caps & Cool Text for Servers, Chat and Items",
    description:
      "Minecraft fonts for server ranks, chat, books, item names and signs. Copy and paste small caps and cool text, and learn what Minecraft usernames allow.",
    intro:
      "Type a rank, item name or server message below and copy a style. Paste it into chat, a book, an anvil or your server's config.",
    body: (
      <>
        <h2>Where Fancy Text Works in Minecraft</h2>
        <p>
          Your username is off limits: Minecraft Java names are 3 to 16 letters, numbers and underscores, and
          nothing else. But Minecraft shows Unicode almost everywhere else, which is why big servers are full
          of ꜱᴍᴀʟʟ ᴄᴀᴘꜱ ranks and fancy item names.
        </p>
        <WhereItWorks
          rows={[
            ["Username", "No", "Letters, numbers and underscores only."],
            ["Chat", "Usually", "Works on most servers unless a plugin filters it."],
            ["Books and signs", "Yes", "Paste works in books; signs depend on your version."],
            ["Anvil item names", "Yes", "Great for named swords, pets and trophies."],
            ["Server ranks, scoreboards, menus", "Yes", "Set them in your plugin configs."],
            ["Server list MOTD", "Partly", "Depends on your server software and client version."],
          ]}
        />

        <h2>Small Caps: The Server Favourite</h2>
        <p>
          If you’ve played on a big network, you’ve seen it: ᴠɪᴘ, ᴍᴏᴅ, ʙᴜɪʟᴅᴇʀ, ꜱᴛᴀᴛꜱ. Small caps look tidy
          next to the blocky pixel font and line up well in menus and scoreboards. If you run a server, using
          it for every rank and menu title is one of the quickest ways to make your server feel polished.
        </p>

        <h2>Fun Ideas for Players</h2>
        <ul>
          <li>
            <strong>Named weapons:</strong> rename a sword in an anvil to ⚔ 𝔈𝔵𝔠𝔞𝔩𝔦𝔟𝔲𝔯 ⚔ or ᛞᚱᚨᚷᛟᚾᛒᚨᚾᛖ in
            runes.
          </li>
          <li>
            <strong>Pets:</strong> name tags like ♡ 𝓑𝓾𝓽𝓽𝓮𝓻𝓼 ♡ for your dog or cat.
          </li>
          <li>
            <strong>Shop signs and books:</strong> a bold or small caps title, plain text underneath.
          </li>
        </ul>

        <h2>Tips</h2>
        <ul>
          <li>Test a style in a book first; Minecraft’s fallback font doesn’t include every symbol.</li>
          <li>Keep your server name plain in server lists so players can find it.</li>
          <li>Use one style for ranks and another for announcements to keep chat readable.</li>
        </ul>
      </>
    ),
  },
];

export function getPlatformPage(slug: string): PlatformPage | undefined {
  return platformPages.find((page) => page.slug === slug);
}

/** Closing paragraph shared by every platform page. */
export const platformOutro = (
  <p>
    Every style here also works on Discord. The main {generatorLink} has Discord-specific tips for names,
    nicknames and server branding.
  </p>
);
