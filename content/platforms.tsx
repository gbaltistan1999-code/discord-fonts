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
          "WhatsApp has a few built-in formats: *bold*, _italic_, ~strikethrough~ and ```monospace```. Fancy styles such as cursive, gothic or bubble letters are not built in, so you copy them from a generator like this one.",
      },
      {
        question: "Where can I use fancy fonts on WhatsApp?",
        answer:
          "In chats, group names, group descriptions, your status, your About line and your profile name. They are ordinary Unicode characters, so they paste anywhere you can type.",
      },
      {
        question: "Will my friends see the same font?",
        answer:
          "Almost always. Phones show bold, script and bubble letters reliably. Very rare symbols can appear as empty boxes on older phones, so check a message before sending it to a big group.",
      },
      {
        question: "Can I combine fancy text with WhatsApp formatting?",
        answer:
          "Yes. Wrap a styled word in asterisks or tildes to add WhatsApp's own bold or strikethrough on top, although bold letters from the generator are already heavy enough on their own.",
      },
    ],
    h1: "WhatsApp Fonts Generator",
    title: "WhatsApp Fonts – Copy & Paste Stylish Text for Chats and Status",
    description:
      "Stylish WhatsApp fonts for chats, status, group names and your About line. Copy and paste bold, cursive and cute text styles that work on every phone.",
    intro:
      "Type below to turn your text into stylish fonts for WhatsApp. Copy any style into a chat, your status, a group name or your About line.",
    body: (
      <>
        <h2>WhatsApp’s Built-In Formatting</h2>
        <p>
          WhatsApp can already make text <strong>bold</strong> (*text*), <em>italic</em> (_text_),
          strikethrough (~text~) and monospace (```text```). It can’t do cursive, gothic, bubble or decorated
          text. Those come from Unicode characters, which is what this generator produces, so you can paste
          them anywhere in the app.
        </p>
        <h2>Where Fancy Fonts Look Best</h2>
        <ul>
          <li>
            <strong>Profile name and About:</strong> a short cursive or framed name stands out in contact
            lists.
          </li>
          <li>
            <strong>Group names:</strong> a styled title with an emoji makes a group easy to spot.
          </li>
          <li>
            <strong>Status and greetings:</strong> love, good morning and good night messages look great with
            hearts, flowers and stars.
          </li>
        </ul>
        <h2>Tips</h2>
        <ul>
          <li>Style a few words, not whole paragraphs, so messages stay easy to read.</li>
          <li>Screen readers can’t read most fancy letters, so keep important information in plain text.</li>
          <li>Send a test message to yourself before posting a new style in a big group.</li>
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
          "Yes, in your display name (first and last name). Your @username is different: it only allows Latin letters, numbers and underscores, so fancy letters don't work there.",
      },
      {
        question: "Does Telegram have built-in formatting?",
        answer:
          "Yes. Telegram supports bold, italic, underline, strikethrough, monospace and spoiler text from the formatting menu. Fancy styles like cursive or gothic come from Unicode characters instead.",
      },
      {
        question: "Can I style channel and group names?",
        answer:
          "Yes. Channel and group titles, descriptions and pinned messages all accept Unicode text. Keep the main keyword plain if you want people to find the channel in search.",
      },
      {
        question: "Why does a symbol show as a box?",
        answer:
          "The viewer's device doesn't have a font for that character. Bold, script and small caps styles are the safest choices.",
      },
    ],
    h1: "Telegram Fonts Generator",
    title: "Telegram Fonts – Copy & Paste Fancy Text for Names and Channels",
    description:
      "Telegram fonts for your name, bio, channels and group titles. Copy and paste bold, cursive and decorated text that works on phones and desktop.",
    intro:
      "Type below to turn your text into fancy fonts for Telegram. Copy any style into your name, bio, channel title or messages.",
    body: (
      <>
        <h2>Where Telegram Accepts Fancy Text</h2>
        <p>
          Telegram is relaxed about Unicode. Your display name, bio, channel and group titles, descriptions
          and messages all accept the styles on this page. The one exception is your @username, which only
          allows Latin letters, numbers and underscores.
        </p>
        <h2>Fancy Fonts vs Telegram Formatting</h2>
        <p>
          Telegram’s own formatting menu adds bold, italic, underline, strikethrough, monospace and spoilers.
          That formatting is removed when text is copied elsewhere, while the Unicode styles here stay styled
          wherever you paste them, which makes them better for names and titles.
        </p>
        <h2>Tips for Channels</h2>
        <ul>
          <li>Keep the main word of a channel name plain so it still shows up in Telegram search.</li>
          <li>Use a bold or framed style for pinned announcements and section headers.</li>
          <li>Pick one or two styles for your channel and use them every time, like a logo.</li>
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
        question: "How do I make bold text on LinkedIn?",
        answer:
          "LinkedIn posts have no bold button, so people use Unicode bold letters. Type your text above, copy the Bold or Bold Sans style and paste it into your post, headline or About section.",
      },
      {
        question: "Does bold text hurt LinkedIn search?",
        answer:
          "It can. Unicode bold letters are different characters, so LinkedIn and Google may not match them to normal words. Keep job titles, skills and company names in plain text, and use bold for short hooks.",
      },
      {
        question: "Can I use fancy fonts in my LinkedIn name?",
        answer:
          "Avoid it. LinkedIn's rules ask for your real name without symbols, and decorated names can look unprofessional to recruiters.",
      },
      {
        question: "Are fancy fonts accessible?",
        answer:
          "Not fully. Screen readers often read Unicode bold letters one by one or skip them, so use styled text for a few words, never whole paragraphs.",
      },
    ],
    h1: "LinkedIn Bold Text and Fonts Generator",
    title: "LinkedIn Fonts – Bold & Italic Text Generator for Posts and Headlines",
    description:
      "Make LinkedIn bold, italic and underlined text for posts, headlines and your About section. Copy and paste, plus tips to keep your profile searchable.",
    intro:
      "Type below to make bold, italic and other text styles for LinkedIn. Copy a style into a post, your headline or your About section.",
    body: (
      <>
        <h2>Bold and Italic Text on LinkedIn</h2>
        <p>
          LinkedIn has no formatting buttons for posts or profiles, which is why bold hooks and italic quotes
          in your feed are made with Unicode letters. <strong>Bold Sans</strong> looks closest to LinkedIn’s
          own font, while <strong>Bold</strong> (serif) and <strong>Italic</strong> work well for quotes and
          emphasis.
        </p>
        <h2>Use It Without Hurting Your Profile</h2>
        <ul>
          <li>Keep your name, job titles, skills and company names in plain text so search can find them.</li>
          <li>Use bold for the first line of a post, the hook people see before “see more”.</li>
          <li>Highlight one phrase per paragraph at most; too much bold reads like shouting.</li>
          <li>
            Screen readers struggle with Unicode letters, so never put key details only in a fancy style.
          </li>
        </ul>
        <h2>Good Places to Use It</h2>
        <p>
          Short section headers in your About section, a bold hook at the start of a post, and emphasis in
          featured project descriptions. Plain text still works best everywhere else.
        </p>
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
          "Yes. Threads accepts Unicode text in posts, replies and your bio, so any style here can be pasted in. Your name and bio are shared with Instagram.",
      },
      {
        question: "Does Threads have bold or italic formatting?",
        answer: "Not in posts. Use the Bold or Italic styles here to emphasise a word or a first line.",
      },
      {
        question: "Will fancy text hurt my reach?",
        answer:
          "Styled words aren't matched by search the way plain words are, so keep topics and keywords plain and style only short hooks or headings.",
      },
    ],
    h1: "Threads Fonts Generator",
    title: "Threads Fonts – Copy & Paste Cool Text for Threads Posts and Bio",
    description:
      "Threads fonts for posts, replies and your bio. Copy and paste bold, cursive and aesthetic text styles that work on the Threads app.",
    intro:
      "Type below to turn your text into fancy fonts for Threads. Copy any style into a post, a reply or your bio.",
    body: (
      <>
        <h2>Fancy Text on Threads</h2>
        <p>
          Threads has no bold or italic buttons, but it shows Unicode text everywhere. A bold first line
          catches attention in a busy feed, and a cursive or aesthetic bio gives your profile some
          personality. Because your profile is linked to Instagram, the same styles suit both.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Style the hook, not the whole post; long fancy text is harder to read.</li>
          <li>Keep hashtags and topic words plain so people can find your posts.</li>
          <li>Small caps and monospace give a clean, minimal look that fits Threads well.</li>
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
          "In your profile name, bio, board names, board descriptions, pin titles and pin descriptions. They are Unicode characters, so Pinterest stores them like normal text.",
      },
      {
        question: "Do fancy fonts affect Pinterest SEO?",
        answer:
          "Yes. Pinterest search reads plain words, so a board called 𝓌𝑒𝒹𝒹𝒾𝓃𝑔 𝒾𝒹𝑒𝒶𝓈 may not appear for “wedding ideas”. Keep keywords plain and add style with a decorated word or symbols around them.",
      },
      {
        question: "Which styles suit an aesthetic profile?",
        answer:
          "Script, Vaporwave, Small Caps and soft frames with flowers or sparkles fit the aesthetic boards Pinterest is known for.",
      },
    ],
    h1: "Pinterest Fonts Generator",
    title: "Pinterest Fonts – Copy & Paste Aesthetic Text for Boards and Bio",
    description:
      "Aesthetic Pinterest fonts for your name, bio, boards and pins. Copy and paste cursive, vaporwave and cute text, plus tips to keep boards searchable.",
    intro:
      "Type below to turn your text into aesthetic fonts for Pinterest. Copy any style into your name, bio, board names or pin descriptions.",
    body: (
      <>
        <h2>Aesthetic Text for Your Boards</h2>
        <p>
          Pinterest is all about the look, and styled text helps your profile match your boards. Script and
          vaporwave letters suit mood boards, small caps look clean and editorial, and flower or sparkle
          frames fit cute and cottagecore themes.
        </p>
        <h2>Keep Your Boards Searchable</h2>
        <p>
          Pinterest is a search engine as much as a social network. Fancy letters are different characters, so
          they may not match what people type. Write the keywords in plain text and decorate around them, for
          example “✿ wedding ideas ✿” instead of styling every letter.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Use one consistent style for all board names for a tidy profile.</li>
          <li>Put a styled word or symbols in your bio, and keep your niche plain.</li>
          <li>Pin titles are short, so a single styled word is enough.</li>
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
          "No. Your Twitch username only allows letters, numbers and underscores, and your display name can only change its capitalisation. Use fancy text in your bio, panels, stream title and chat instead.",
      },
      {
        question: "Can I use fancy text in Twitch chat?",
        answer:
          "Usually, yes. Twitch chat shows Unicode, but some channels block symbols or long messages with moderation bots, so check the channel's rules.",
      },
      {
        question: "Should I style my stream title?",
        answer:
          "Only lightly. Viewers search for games and topics, so keep those words plain and add one styled word or a symbol frame for flair.",
      },
      {
        question: "Which styles suit a streamer brand?",
        answer:
          "Bold Gothic, Gamer Tag and framed styles look great on panels and in your bio. Pick one and use it everywhere, including your Discord server.",
      },
    ],
    h1: "Twitch Fonts Generator",
    title: "Twitch Fonts – Copy & Paste Cool Text for Bio, Panels and Chat",
    description:
      "Twitch fonts for your bio, panels, stream titles and chat. Copy and paste gaming text styles and learn what Twitch usernames allow.",
    intro:
      "Type below to turn your text into cool fonts for Twitch. Copy any style into your bio, panels, stream title or chat.",
    body: (
      <>
        <h2>Where Twitch Fonts Work</h2>
        <p>
          Twitch usernames only allow letters, numbers and underscores, and display names can only change the
          capitalisation of your username, so fancy letters are out there. Everywhere else is fair game: your
          bio, panel text, stream titles, chat messages and channel point reward names all accept Unicode.
        </p>
        <h2>Building a Streamer Brand</h2>
        <p>
          Choose one signature style and use it on your panels, schedule and Discord server so viewers
          recognise you. Bold Gothic and Gamer Tag suit competitive streams, while script and sparkle styles
          fit cosy and creative channels.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Keep the game name in your title plain so you appear in category searches.</li>
          <li>Zalgo and heavy glitch text can be blocked by chat moderation, so use them sparingly.</li>
          <li>Check your panels on a phone; some symbols are smaller on mobile.</li>
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
          "Type your name above, copy a style such as Gamer Tag, Royal Frame or Star Wings, and paste it in Free Fire when you change your nickname. You need a rename card or diamonds to change it.",
      },
      {
        question: "Why is my Free Fire name not accepted?",
        answer:
          "Nicknames are short, so long frames can go over the limit, and some symbols are blocked. Try a shorter style, remove a symbol, or use fewer decorations.",
      },
      {
        question: "What are popular Free Fire name symbols?",
        answer:
          "Frames like ꧁ ꧂, stars ★彡, crowns ♛, and Japanese-looking letters such as 亗 and 乂 are very popular for Free Fire names and guild names.",
      },
      {
        question: "Can I use these styles for my guild name?",
        answer:
          "Yes. Guild names accept many of the same symbols. Keep it short and readable so new members can find your guild.",
      },
    ],
    h1: "Free Fire Name Style and Fonts Generator",
    title: "Free Fire Fonts – Stylish Name Generator for FF Nicknames",
    description:
      "Free Fire name style generator: make stylish FF nicknames and guild names with symbols like ꧁꧂, ★彡 and ♛. Copy and paste, free.",
    intro:
      "Type your nickname below to make a stylish Free Fire name. Copy any style and paste it when you change your FF nickname or guild name.",
    body: (
      <>
        <h2>Stylish Names for Free Fire</h2>
        <p>
          Free Fire players love decorated nicknames: frames like ꧁ Name ꧂, star wings like ★彡 Name 彡★,
          crowns and Japanese-looking letters. Every style on this page is made of Unicode characters, so you
          can paste them straight into the nickname box.
        </p>
        <h2>Keep It Short</h2>
        <p>
          Free Fire nicknames have a small character limit, and each symbol counts. If a name is rejected, try
          a shorter version of your name, drop one side of a frame, or pick a style that changes letters
          without adding symbols, such as Bold Gothic or Small Caps.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Changing your nickname needs a rename card or diamonds, so test the look here first.</li>
          <li>Use the same style for your guild name and Discord server so your squad matches.</li>
          <li>Some symbols show as boxes on older phones; bold and gothic letters are the safest.</li>
        </ul>
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
          "Type your name above, copy a style you like and paste it when you change your name with a rename card. The same styles work in PUBG Mobile and BGMI.",
      },
      {
        question: "Why does PUBG reject my name?",
        answer:
          "Names have a short character limit and some symbols aren't allowed. Use a shorter name or a style with fewer decorations, and avoid emoji.",
      },
      {
        question: "Can I use these fonts for my clan name?",
        answer:
          "Yes, many of them. Clan names accept a similar set of characters, so test a style here and keep it short.",
      },
      {
        question: "Which symbols are popular for PUBG names?",
        answer: "Frames like ꧁ ꧂, stars ★彡, crowns ♛, skulls ☠ and Japanese-style letters like 乂 and 亗.",
      },
    ],
    h1: "PUBG & BGMI Name Generator",
    title: "PUBG Name Generator – Stylish Fonts for PUBG Mobile and BGMI",
    description:
      "PUBG and BGMI name generator: make stylish nicknames and clan names with cool fonts and symbols. Copy and paste into PUBG Mobile or BGMI.",
    intro:
      "Type your name below to make a stylish PUBG or BGMI nickname. Copy any style and paste it when you rename your character or clan.",
    body: (
      <>
        <h2>Stylish Names for PUBG Mobile and BGMI</h2>
        <p>
          A cool name is the first thing other players see in the kill feed. The styles here turn your name
          into gothic, bold or decorated text, with frames like ꧁ ꧂ and ★彡 that are popular in PUBG Mobile
          and Battlegrounds Mobile India (BGMI).
        </p>
        <h2>Making Sure Your Name Fits</h2>
        <p>
          Names have a character limit, and every symbol counts toward it. If your styled name is too long or
          rejected, shorten your name, use one symbol instead of a full frame, or choose a letter style like
          Bold Gothic that adds no extra characters.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Renaming uses a rename card, so preview a few styles here before you change it.</li>
          <li>Match your clan tag and Discord server name for a team look.</li>
          <li>Keep at least part of your name readable so teammates can call you out in voice chat.</li>
        </ul>
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
          "Mostly no. Your Fortnite name is your Epic Games display name, which only accepts a limited set of characters, so most fancy letters and symbols are rejected. Use them on Discord, YouTube, TikTok and your stream instead.",
      },
      {
        question: "Where can I use Fortnite fonts then?",
        answer:
          "In your Discord server, YouTube and TikTok titles, clip captions, stream panels and social bios, anywhere you show off your Fortnite content.",
      },
      {
        question: "How often can I change my Epic display name?",
        answer:
          "Epic limits how often you can change it (about every two weeks), so plan your name before you change it.",
      },
    ],
    h1: "Fortnite Fonts Generator",
    title: "Fortnite Fonts – Copy & Paste Cool Text for Clips, Bios and Discord",
    description:
      "Fortnite fonts for clip titles, bios, Discord servers and streams. Copy and paste gaming text styles, plus what Epic display names allow.",
    intro:
      "Type below to turn your text into cool Fortnite-style fonts. Copy any style into clip titles, bios, your stream or your Discord server.",
    body: (
      <>
        <h2>Fortnite Names and Fancy Fonts</h2>
        <p>
          Your in-game name is your Epic Games display name, and Epic only accepts a limited set of characters
          there, so most fancy letters won’t save. Where Fortnite fonts really shine is around the game: clip
          titles, thumbnails text, TikTok captions, stream panels and the Discord server for your squad.
        </p>
        <h2>Styles That Fit Fortnite</h2>
        <p>
          Bold Sans and Bold Gothic look punchy in clip titles, Gamer Tag and Star Wings suit player names on
          other platforms, and lightning or fire frames match victory royale highlights.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Keep “Fortnite” and the game mode plain in video titles so people can find them.</li>
          <li>Use one signature style for your name on every platform.</li>
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
          "Only partly. Your Riot ID accepts letters from many languages, but most decorative symbols and math-style letters are rejected. Simple styles have the best chance, and fancier text works on Discord and your stream.",
      },
      {
        question: "How often can I change my Riot ID?",
        answer:
          "Riot lets you change your Riot ID about once every 30 days, so test a few styles here before you commit.",
      },
      {
        question: "Where else can I use Valorant fonts?",
        answer: "In your Discord server, team names on social media, clip titles, stream panels and bios.",
      },
    ],
    h1: "Valorant Name Fonts Generator",
    title: "Valorant Fonts – Cool Name Styles for Riot ID, Clips and Discord",
    description:
      "Valorant name fonts and styles for your Riot ID, team, clips and Discord. Copy and paste cool text and learn what Riot ID allows.",
    intro:
      "Type your name below to try cool Valorant name styles. Copy a style for your Riot ID, team name, clip titles or Discord server.",
    body: (
      <>
        <h2>Valorant Names and Riot ID</h2>
        <p>
          Your Valorant name is your Riot ID (a name plus a #tag). Riot accepts letters from many alphabets
          but blocks most decorative symbols, so heavy frames usually fail. Clean styles that use real
          letters, such as Small Caps or accented letters, are your best chance in-game.
        </p>
        <h2>Fancy Text Around the Game</h2>
        <p>
          For team names, clip titles, stream panels and your Discord server, anything goes. Sniper, Gamer Tag
          and Bold Gothic suit the tactical shooter vibe.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Riot ID changes are limited to about once a month, so choose carefully.</li>
          <li>Keep your name readable so teammates can call you in comms.</li>
          <li>Use the same style for your team’s Discord and socials.</li>
        </ul>
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
          "Mostly no. Your Activision ID and in-game name accept a limited set of characters, so fancy Unicode letters and symbols are usually rejected. They work well in clan Discord servers, clip titles and social bios.",
      },
      {
        question: "Do these fonts work for Warzone?",
        answer:
          "The same rules apply in Warzone, since it uses your Activision ID. Use the styles for your squad's Discord, streams and content.",
      },
      {
        question: "Which styles suit a Call of Duty clan?",
        answer:
          "Sniper, Skull, Crossbones, Bold Gothic and Gamer Tag fit the military shooter look for clan names on Discord and social media.",
      },
    ],
    h1: "Call of Duty & Warzone Name Fonts",
    title: "Call of Duty Fonts – Cool Warzone Name Styles for Clans and Clips",
    description:
      "Call of Duty and Warzone name fonts for clans, clips, streams and Discord. Copy and paste cool text and learn what Activision IDs allow.",
    intro:
      "Type below to turn your text into Call of Duty-style fonts. Copy any style for your clan, clip titles, stream or Discord server.",
    body: (
      <>
        <h2>Call of Duty Names and Fancy Fonts</h2>
        <p>
          Call of Duty and Warzone use your Activision ID, which only accepts a limited set of characters, so
          fancy letters rarely work in-game. Around the game is a different story: clan Discord servers, clip
          titles, stream overlays and social bios all accept these styles.
        </p>
        <h2>Styles for Clans and Content</h2>
        <p>
          Sniper (▄︻デ══━一), skulls, crossed swords and Bold Gothic give names a battle-ready look. Use one
          style for your clan tag on every platform so your squad is easy to recognise.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Keep “Warzone” or the game name plain in clip titles so people can find them.</li>
          <li>Short names read best in killfeeds and thumbnails.</li>
          <li>Match your clan’s Discord roles and channel names to your chosen style.</li>
        </ul>
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
          "No. Minecraft Java usernames only allow letters, numbers and underscores (3 to 16 characters). Fancy text works on signs, books, item names, chat on many servers and server descriptions.",
      },
      {
        question: "Why are small caps so popular on Minecraft servers?",
        answer:
          "Small Caps (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ) looks clean in Minecraft's pixel font, so servers use it for ranks, menus and scoreboards.",
      },
      {
        question: "Why do some letters show as boxes in Minecraft?",
        answer:
          "Minecraft has its own font, and very rare symbols may be missing. Small caps, bold and simple symbols display most reliably.",
      },
      {
        question: "Can I use these fonts for my server name?",
        answer:
          "Yes. Server lists, Discord servers and websites accept them. Keep the main server name plain so players can search for it.",
      },
    ],
    h1: "Minecraft Name Fonts Generator",
    title: "Minecraft Fonts – Copy & Paste Small Caps and Cool Text for Servers",
    description:
      "Minecraft fonts for signs, books, item names, chat and servers. Copy and paste small caps and cool text, and learn what Minecraft usernames allow.",
    intro:
      "Type below to turn your text into fonts for Minecraft. Copy any style for signs, books, item names, chat or your server.",
    body: (
      <>
        <h2>Where Minecraft Fonts Work</h2>
        <p>
          Minecraft usernames only allow letters, numbers and underscores, so fancy letters can’t go in your
          name. They do work on signs, in books, on renamed items in an anvil, in chat on most servers, and in
          server descriptions, Discord servers and websites.
        </p>
        <h2>Small Caps: The Server Favourite</h2>
        <p>
          Small Caps (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ) is everywhere on Minecraft servers because it looks neat in the pixel font.
          Servers use it for ranks, scoreboards, menus and announcements. Runic letters are a fun pick for
          fantasy builds and enchanted item names.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Test a style on a sign first; Minecraft’s font doesn’t include every symbol.</li>
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
