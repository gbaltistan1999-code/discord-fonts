import Link from "next/link";

export interface PlatformPage {
  /** URL path segment, e.g. "roblox-fonts". */
  slug: string;
  /** Platform name used in links, e.g. "Roblox". */
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  body: React.ReactNode;
}

const generatorLink = <Link href="/">Discord Fonts generator</Link>;

export const platformPages: readonly PlatformPage[] = [
  {
    slug: "roblox-fonts",
    name: "Roblox",
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
