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
