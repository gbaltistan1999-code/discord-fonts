import { BlogImage } from "@/components/BlogImage";
import Link from "next/link";
import { CopyBlock, CopyChipRow, ServerLayoutCard, type ServerLayout } from "@/components/ServerLayouts";
import type { BlogPost } from ".";

const channelFormats = [
  "꒰🌸꒱・general",
  "╭・🍓﹒welcome",
  "┊🌙┊chat",
  "︰🎀︰rules",
  "✦・announcements",
  "⌗・media",
  "₊˚🫧﹒vent",
  "『🎮』gaming",
];

const dividers = ["・", "﹒", "︰", "┊", "⌗", "╭", "╰", "꒰ ꒱", "『 』", "【 】", "⊹", "₊˚"];

const layouts: readonly (ServerLayout & { title: string })[] = [
  {
    id: "pastel",
    title: "1. Soft Pastel Layout 🌸",
    name: "Soft Pastel",
    intro: "Perfect for friend groups, art servers and chill communities.",
    categories: [
      {
        name: "꒰ 🌸 ꒱ welcome",
        channels: ["╭・🎀﹒rules", "├・🌷﹒announcements", "├・🍓﹒roles", "╰・💌﹒introductions"],
      },
      {
        name: "꒰ ☁️ ꒱ chat",
        channels: ["╭・🧸﹒general", "├・🍰﹒off-topic", "├・🫧﹒memes", "╰・🌙﹒late-night"],
      },
      { name: "꒰ 🎨 ꒱ creative", channels: ["╭・🖌️﹒art", "├・📸﹒selfies", "╰・🎵﹒music"] },
      { name: "꒰ 🔊 ꒱ voice", channels: ["╭・☁️ cozy corner", "╰・🍵 study room"] },
    ],
    roles: ["🌸 Blossom", "🍓 Strawberry", "🧸 Teddy", "☁️ Cloud", "🌙 Moonlight"],
    colors: [
      { hex: "#F7C6D9", name: "pink" },
      { hex: "#C9E4FF", name: "baby blue" },
      { hex: "#D9C8F5", name: "lavender" },
      { hex: "#FFE5B4", name: "peach" },
      { hex: "#C8F0D8", name: "mint" },
    ],
  },
  {
    id: "gothic",
    title: "2. Dark Gothic Layout 🖤",
    name: "Dark Gothic",
    intro: "Ideal for gaming groups, alt communities and night owls.",
    categories: [
      { name: "⛧ ━━ ENTRANCE ━━ ⛧", channels: ["☾・rules", "☾・announcements", "☾・roles"] },
      { name: "⛧ ━━ THE VOID ━━ ⛧", channels: ["🖤・general", "🕯️・confessions", "🦇・memes", "⚰️・vent"] },
      { name: "⛧ ━━ ARCHIVE ━━ ⛧", channels: ["📜・art", "🎻・music", "🌑・photos"] },
      { name: "⛧ ━━ CHAMBERS ━━ ⛧", channels: ["🔊 Crypt", "🔊 Midnight Lounge"] },
    ],
    roles: ["🦇 Vampire", "🕯️ Candle", "🌑 Eclipse", "⚰️ Wraith", "🖤 Shadow"],
    colors: [
      { hex: "#8B0000", name: "blood red" },
      { hex: "#4B0082", name: "deep purple" },
      { hex: "#2F2F2F", name: "charcoal" },
      { hex: "#B0B0B0", name: "silver" },
      { hex: "#5D3A6B", name: "plum" },
    ],
  },
  {
    id: "cottagecore",
    title: "3. Cottagecore Layout 🌿",
    name: "Cottagecore",
    intro: "Great for cozy communities, book clubs and plant lovers.",
    categories: [
      { name: "🌿 ┊ THE GARDEN GATE", channels: ["🍄┊rules", "🌻┊news", "🐝┊roles"] },
      { name: "🧺 ┊ THE COTTAGE", channels: ["🍞┊general", "🫖┊tea-time", "🐸┊memes", "🌼┊daily-wins"] },
      { name: "📚 ┊ THE LIBRARY", channels: ["📖┊book-club", "✍️┊writing", "🌱┊plants"] },
      { name: "🔥 ┊ THE FIREPLACE", channels: ["🔊 Reading Nook", "🔊 Garden Talks"] },
    ],
    roles: ["🌻 Sunflower", "🍄 Mushroom", "🐝 Honeybee", "🌿 Fern", "🫖 Teacup"],
    colors: [
      { hex: "#A3B18A", name: "sage" },
      { hex: "#DDA15E", name: "honey" },
      { hex: "#BC6C25", name: "rust" },
      { hex: "#FEFAE0", name: "cream" },
      { hex: "#606C38", name: "moss" },
    ],
  },
  {
    id: "gaming",
    title: "4. Gaming Layout 🎮",
    name: "Gaming",
    intro: "Built for clans, esports teams and gaming communities.",
    categories: [
      {
        name: "【 📌 INFO 】",
        channels: ["『📜』rules", "『📢』announcements", "『🎖️』roles", "『🏆』leaderboard"],
      },
      { name: "【 💬 COMMUNITY 】", channels: ["『💬』general", "『😂』memes", "『📸』clips", "『🔍』lfg"] },
      {
        name: "【 🎮 GAMES 】",
        channels: ["『🔫』valorant", "『⛏️』minecraft", "『🏹』fortnite", "『🎯』apex"],
      },
      { name: "【 🔊 VOICE 】", channels: ["🎧 Squad 1", "🎧 Squad 2", "🎧 Ranked Grind", "💤 AFK"] },
    ],
    roles: ["👑 Leader", "⚔️ Officer", "🎯 Sniper", "🛡️ Tank", "🎮 Member"],
    colors: [
      { hex: "#FF4655", name: "red" },
      { hex: "#00E5FF", name: "cyan" },
      { hex: "#FFD700", name: "gold" },
      { hex: "#7CFC00", name: "neon green" },
      { hex: "#9146FF", name: "purple" },
    ],
  },
  {
    id: "anime",
    title: "5. Anime Layout 🍥",
    name: "Anime",
    intro: "Perfect for anime fans, manga readers and cosplay groups.",
    categories: [
      { name: "⛩️ ・ GATE", channels: ["🎐・rules", "🍡・news", "🎴・roles"] },
      { name: "🌸 ・ TOWN", channels: ["🍙・general", "🍥・anime-talk", "📚・manga", "😂・memes"] },
      { name: "🎨 ・ STUDIO", channels: ["🖌️・fanart", "👘・cosplay", "🎵・anime-music"] },
      { name: "🏮 ・ STREET", channels: ["🔊 Ramen Shop", "🔊 Watch Party"] },
    ],
    roles: ["🍥 Otaku", "🎴 Sensei", "🌸 Sakura", "⚔️ Samurai", "🦊 Kitsune"],
    colors: [
      { hex: "#FFB7C5", name: "sakura pink" },
      { hex: "#E63946", name: "torii red" },
      { hex: "#F4A261", name: "orange" },
      { hex: "#2A9D8F", name: "teal" },
      { hex: "#264653", name: "navy" },
    ],
  },
  {
    id: "minimalist",
    title: "6. Minimalist Layout ✦",
    name: "Minimalist",
    intro: "Clean and simple. Great for study groups, work teams and creators.",
    categories: [
      { name: "✦ INFO", channels: ["・rules", "・announcements", "・resources"] },
      { name: "✦ CHAT", channels: ["・general", "・questions", "・off-topic"] },
      { name: "✦ WORK", channels: ["・projects", "・feedback", "・showcase"] },
      { name: "✦ VOICE", channels: ["・Focus Room", "・Meeting"] },
    ],
    roles: ["Admin", "Moderator", "Creator", "Member", "Guest"],
    colors: [
      { hex: "#FFFFFF", name: "white" },
      { hex: "#A0A0A0", name: "gray" },
      { hex: "#1E1E1E", name: "black" },
      { hex: "#C9A227", name: "muted gold" },
      { hex: "#6C8EBF", name: "steel blue" },
    ],
  },
  {
    id: "celestial",
    title: "7. Celestial / Space Layout 🌙",
    name: "Celestial",
    intro: "A dreamy theme for night owls, astrology fans and chill hangouts.",
    categories: [
      { name: "☾ ⋆ OBSERVATORY ⋆ ☽", channels: ["✧・rules", "✧・announcements", "✧・zodiac-roles"] },
      { name: "☾ ⋆ GALAXY ⋆ ☽", channels: ["🌌・general", "🌠・wishes", "🪐・memes", "🌙・night-talks"] },
      { name: "☾ ⋆ NEBULA ⋆ ☽", channels: ["🔭・photos", "🎨・art", "🎶・lofi"] },
      { name: "☾ ⋆ ORBIT ⋆ ☽", channels: ["🔊 Stargazing", "🔊 Moon Base"] },
    ],
    roles: ["🌙 Moon", "⭐ Star", "🪐 Planet", "☄️ Comet", "🌌 Galaxy"],
    colors: [
      { hex: "#1B1B3A", name: "midnight" },
      { hex: "#6A4C93", name: "cosmic purple" },
      { hex: "#8EC5FC", name: "starlight blue" },
      { hex: "#FFD6A5", name: "sunrise" },
      { hex: "#E0AAFF", name: "nebula pink" },
    ],
  },
  {
    id: "kawaii",
    title: "8. Kawaii Layout 🍡",
    name: "Kawaii",
    intro: "Super cute and colorful. Perfect for younger communities and fun friend groups.",
    categories: [
      { name: "₊˚ʚ 🍬 ɞ˚₊ welcome", channels: ["₊˚🎀﹒rules", "₊˚📣﹒news", "₊˚🍭﹒roles"] },
      {
        name: "₊˚ʚ 🧁 ɞ˚₊ hangout",
        channels: ["₊˚🍡﹒general", "₊˚🐰﹒pets", "₊˚🍓﹒snacks", "₊˚🌈﹒memes"],
      },
      { name: "₊˚ʚ 🎠 ɞ˚₊ fun", channels: ["₊˚🎮﹒games", "₊˚🎤﹒karaoke", "₊˚📷﹒selfies"] },
      { name: "₊˚ʚ 🔊 ɞ˚₊ voice", channels: ["₊˚🍬 Candy Shop", "₊˚🧁 Bakery"] },
    ],
    roles: ["🐰 Bunny", "🍡 Mochi", "🧁 Cupcake", "🍭 Lollipop", "🌈 Rainbow"],
    colors: [
      { hex: "#FFADAD", name: "coral" },
      { hex: "#FFD6A5", name: "apricot" },
      { hex: "#FDFFB6", name: "lemon" },
      { hex: "#CAFFBF", name: "mint" },
      { hex: "#BDB2FF", name: "periwinkle" },
    ],
  },
];

const welcomeMessage = `# ꒰ 🌸 ꒱ welcome to [server name]!

₊˚ we're so happy you're here ♡

╭・📜 read the rules in #rules
├・🎀 grab your roles in #roles
├・💌 say hi in #introductions
╰・🧸 come chat in #general

-# be kind, have fun and enjoy your stay ✦`;

export const aestheticServerLayoutIdeas: BlogPost = {
  slug: "aesthetic-discord-server-layout-ideas",
  title: "Aesthetic Discord Server Layout Ideas (Channels, Categories and Roles)",
  metaTitle: "Aesthetic Discord Server Layout Ideas (Channels and Roles)",
  description:
    "Copy aesthetic Discord server layouts with cute channel names, category dividers and role ideas. 8 themes with symbols, color codes and a full setup guide.",
  tagline: "8 themes: channels, categories, roles & colors",
  icon: "palette",
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  readingMinutes: 8,
  hideGeneratorCta: true,
  faqs: [
    {
      question: "How do I make my Discord server look aesthetic?",
      answer:
        "Pick one theme, use matching emojis and dividers in every channel name, organize channels into clear categories, and choose role colors from the same palette.",
    },
    {
      question: "How do I add symbols to Discord channel names?",
      answer:
        "Copy a symbol, such as ・ or ꒰ ꒱, and paste it into the channel name when you create or edit the channel. You can find more on our Discord Symbols page.",
      answerContent: (
        <>
          Copy a symbol, such as ・ or ꒰ ꒱, and paste it into the channel name when you create or edit the
          channel. You can find more on our <Link href="/discord-symbols">Discord Symbols</Link> page.
        </>
      ),
    },
    {
      question: "Why does Discord add dashes to my channel names?",
      answer:
        "Discord replaces spaces in text channel names with dashes. Use dividers like ・ or ﹒ instead of spaces to keep your names looking clean.",
    },
    {
      question: "Can I use fancy fonts in Discord channel names?",
      answer:
        "Yes. Paste Unicode text from a font generator into your channel name. Keep the main word readable so members can still find the channel.",
      answerContent: (
        <>
          Yes. Paste Unicode text from a <Link href="/">font generator</Link> into your channel name. Keep the
          main word readable so members can still find the channel.
        </>
      ),
    },
    {
      question: "How many roles should an aesthetic server have?",
      answer:
        "Most servers look best with 4–8 main roles in matching colors, plus optional reaction roles for things like pronouns, games or interests.",
    },
  ],
  body: (
    <>
      <BlogImage
        src="/blog/aesthetic-discord-server-layout-ideas.webp"
        alt="Aesthetic Discord server layouts: a pastel server with decorated channel categories and colored roles, plus gothic, cottagecore and gaming server themes"
        href="/discord-symbols"
        label="Discord Symbols"
        priority
      />

      <p>
        A great Discord server isn&apos;t just about who&apos;s in it. It&apos;s also about how it looks. A
        clean, aesthetic layout makes your server feel welcoming, helps new members find their way around, and
        gives your community a personality from the very first click.
      </p>
      <p>
        In this guide, you&apos;ll find 8 ready-to-copy aesthetic server layouts, each with category names,
        channel names and role ideas. You&apos;ll also learn how to style channel names with symbols, pick
        role colors that match, and set everything up step by step.
      </p>
      <p>
        <strong>Quick tip:</strong> Want to turn any channel or role name into a fancy font? Paste it into our{" "}
        <Link href="/">Discord Fonts generator</Link> and copy the style you like.
      </p>

      <h2>What Makes a Discord Server Look Aesthetic?</h2>
      <p>An aesthetic server follows a few simple rules:</p>
      <ul>
        <li>
          <strong>One clear theme.</strong> Pastel, dark, cottagecore or space: pick one mood and stick to it.
        </li>
        <li>
          <strong>Matching symbols.</strong> Use the same divider and emoji style in every channel name.
        </li>
        <li>
          <strong>Organized categories.</strong> Group channels into sections like Info, Chat, Media and
          Voice.
        </li>
        <li>
          <strong>Coordinated role colors.</strong> Choose 4–6 colors from the same palette instead of random
          bright ones.
        </li>
        <li>
          <strong>Readable names.</strong> Decoration should frame the channel name, not hide it.
        </li>
      </ul>

      <h2>How to Style Aesthetic Channel Names</h2>
      <p>Most aesthetic channel names follow the same pattern:</p>
      <p>
        <code>[symbol or emoji] + [divider] + [channel name]</code>
      </p>
      <p>Here are popular formats you can copy. Tap one to copy it:</p>
      <CopyChipRow items={channelFormats} />
      <p>Common dividers:</p>
      <CopyChipRow items={dividers} />
      <p>
        <strong>Good to know:</strong> Discord turns spaces in text channel names into dashes and makes them
        lowercase, so use dividers like ・ or ﹒ instead of spaces. Voice channels allow spaces and capital
        letters, so you have more freedom there. Categories allow spaces too, but Discord always shows them in
        capital letters.
      </p>
      <p>
        Find hundreds more decorations on our <Link href="/discord-symbols">Discord Symbols</Link> page.
      </p>

      <h2>8 Aesthetic Discord Server Layouts to Copy</h2>
      <p>
        Tap any category, channel or role to copy it, or tap a color to copy its hex code. Need a name for the
        server itself? Browse our <Link href="/discord-server-names">Discord server name ideas</Link>.
      </p>
      {layouts.map((layout) => (
        <section key={layout.id} aria-labelledby={`layout-${layout.id}`}>
          <h3 id={`layout-${layout.id}`}>{layout.title}</h3>
          <p>{layout.intro}</p>
          <ServerLayoutCard layout={layout} />
        </section>
      ))}

      <h2>How to Set Up Your Aesthetic Server (Step by Step)</h2>
      <ol>
        <li>
          <strong>Pick a theme.</strong> Choose one of the layouts above, or mix ideas to create your own.
        </li>
        <li>
          <strong>Create categories.</strong> Click your server name at the top left, choose{" "}
          <strong>Create Category</strong>, and paste a category name.
        </li>
        <li>
          <strong>Add channels.</strong> Click the <strong>+</strong> next to a category, select Text or
          Voice, and paste the channel name.
        </li>
        <li>
          <strong>Create roles.</strong> Open <strong>Server Settings → Roles → Create Role</strong>, paste a
          role name, and enter the hex color code. See our full guide on{" "}
          <Link href="/blog/how-to-make-roles-in-discord">how to make roles in Discord</Link>.
        </li>
        <li>
          <strong>Set an icon and banner.</strong> Match your server icon and banner to your theme&apos;s
          colors.
        </li>
        <li>
          <strong>Write a welcome message.</strong> Use the template below in your welcome channel, and grab
          ready-made rules from our{" "}
          <Link href="/blog/discord-server-rules-template">Discord server rules template</Link>.
        </li>
        <li>
          <strong>Test it as a member.</strong> Use <strong>View Server As Role</strong> in the role settings
          to check how new members see your server.
        </li>
      </ol>

      <h2>Aesthetic Welcome Message Template</h2>
      <p>Copy this into your welcome channel and edit the text in [brackets]:</p>
      <CopyBlock text={welcomeMessage} label="Welcome message" />
      <p>
        After pasting, retype each <code>#channel</code> and pick it from the list that pops up, so it becomes
        a clickable link to your decorated channel.
      </p>
      <p>
        This uses Discord&apos;s header (<code>#</code>) and subtext (<code>-#</code>) formatting. Learn more
        in our <Link href="/discord-big-text">Discord Big Text</Link> and{" "}
        <Link href="/discord-text-formatting">Discord Text Formatting</Link> guides.
      </p>

      <h2>Tips for a Clean Aesthetic Layout</h2>
      <ul>
        <li>
          <strong>Stay consistent.</strong> Use the same divider style in every channel. Mixing ┊, ・ and 『』
          looks messy.
        </li>
        <li>
          <strong>Keep names short.</strong> One emoji, one divider and one or two words is the sweet spot.
        </li>
        <li>
          <strong>Don&apos;t use too many channels.</strong> Fifteen well-organized channels beat forty empty
          ones.
        </li>
        <li>
          <strong>Keep names searchable.</strong> Members can&apos;t easily search for channels written
          entirely in fancy fonts, so keep the main word in normal letters.
        </li>
        <li>
          <strong>Think about accessibility.</strong> Screen readers may read decorative symbols out loud, so
          don&apos;t overload names with them.
        </li>
        <li>
          <strong>Test on mobile.</strong> Some symbols look different on phones, so check your server on the
          mobile app before you finish.
        </li>
      </ul>
    </>
  ),
  outro: (
    <>
      <h2>Related Tools</h2>
      <ul>
        <li>
          <Link href="/">Discord Fonts Generator</Link>: fancy fonts for channel, role and server names
        </li>
        <li>
          <Link href="/discord-server-names">Discord Server Names</Link>: cool, cute and aesthetic name ideas
        </li>
        <li>
          <Link href="/discord-symbols">Discord Symbols</Link>: dividers, hearts, stars and more
        </li>
        <li>
          <Link href="/discord-big-text">Discord Big Text</Link>: headers, emoji letters and banners
        </li>
        <li>
          <Link href="/discord-bio-ideas">Discord Bio Ideas</Link>: About Me bios to match your server
        </li>
      </ul>
    </>
  ),
};
