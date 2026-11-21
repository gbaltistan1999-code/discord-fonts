/**
 * Plain data for /discord-bio-ideas: the bios by category, the templates and the bio symbols.
 * No JSX, so client components can import it.
 */

/** Discord's limit for the About Me section. */
export const BIO_LIMIT = 190;

export interface BioCategory {
  id: string;
  /** Full section heading, e.g. "Aesthetic Discord Bios". */
  heading: string;
  /** Short label for the tabs. */
  label: string;
  bios: readonly string[];
}

export interface BioTemplate {
  name: string;
  /** Multi-line template; [brackets] mark the parts to replace. */
  text: string;
}

export const bioCategories: readonly BioCategory[] = [
  {
    id: "aesthetic",
    heading: "Aesthetic Discord Bios",
    label: "Aesthetic",
    bios: [
      "☾ quiet soul, loud playlist ⋆˚｡",
      "✦ collecting sunsets and good conversations ✦",
      "living in my own little daydream ♡",
      "⊹ coffee, lo-fi and late-night thoughts ⊹",
      "soft heart, sharp mind ☁︎",
      "˚₊‧ painting my world in pastel ‧₊˚",
      "⟡ chasing calm in a noisy world ⟡",
      "moonlight is my favorite color ☾",
      "✧ main character energy, background character budget ✧",
      "♡ be kind, stay curious, drink water ♡",
      "⋆ lost in thought, found in music ⋆",
      "── ⋅ ⋅ just vibing through the chaos ⋅ ⋅ ──",
      "☁︎ head in the clouds, feet on the keyboard ☁︎",
      "✿ growing slowly, but growing ✿",
      "˚ ༘ ♡ ⋆｡˚ stargazer at heart",
      "✧˖° slow mornings and soft music °˖✧",
      "⋆ made of stardust and late-night thoughts ⋆",
      "☾ dreaming in shades of lavender",
      "˚✧ finding magic in ordinary days ✧˚",
      "🌙 night owl with a sunflower heart 🌻",
    ],
  },
  {
    id: "cute",
    heading: "Cute Discord Bios",
    label: "Cute",
    bios: [
      "just a little bean trying my best ♡",
      "powered by snacks and naps 🍓",
      "professional cat petter, amateur human 🐱",
      "i like soft blankets and softer people ☁︎",
      "here for good vibes and cute emojis ✿",
      "tiny but mighty ⋆",
      "sending virtual hugs to everyone (っ◕‿◕)っ",
      "certified cuddle enthusiast 🧸",
      "my love language is sharing memes ♡",
      "small human, big heart 💗",
      "running on boba and good energy 🧋",
      "if you're reading this, you're awesome ✨",
      "mostly harmless, occasionally adorable 🐾",
      "please be gentle, i bruise like a peach 🍑",
      "spreading sunshine one message at a time ☀︎",
      "collector of stickers and good vibes ✨",
      "i'm shy at first but i promise i'm fun ♡",
      "powered by hugs and strawberry milk 🍓",
      "professional snack sharer 🍪",
      "happy little cloud floating by ☁︎",
    ],
  },
  {
    id: "cool",
    heading: "Cool Discord Bios",
    label: "Cool",
    bios: [
      "Not here to fit in. Here to log in.",
      "Quiet until I'm not.",
      "I don't lag. I build suspense.",
      "Less talk, more clutch.",
      "Too busy winning to write a bio.",
      "Online when the world is offline.",
      "Built different, patched weekly.",
      "Real ones know.",
      "Low ping, high standards.",
      "Keep calm and stay unbothered.",
      "Born to game, forced to sleep.",
      "My vibe speaks before I do.",
      "Silent player, loud results.",
      "Don't follow me. I'm lost too.",
      "Rare drop. Handle with care.",
    ],
  },
  {
    id: "funny",
    heading: "Funny Discord Bios",
    label: "Funny",
    bios: [
      "I'm not lazy, I'm in energy-saving mode.",
      "My bio is under construction. So is my life.",
      "Professional overthinker, part-time napper.",
      "I came, I saw, I forgot why I came.",
      "Error 404: bio not found.",
      'I put the "pro" in procrastination.',
      "I would tell you a joke, but I'm still loading.",
      "My sleep schedule is a myth.",
      "Fluent in sarcasm and typos.",
      "Reply time: somewhere between 2 minutes and 3 business days.",
      "I'm on a seafood diet. I see food, I eat it.",
      "Plot twist: I actually read the rules.",
      "Here for the memes, staying for the drama.",
      "I don't have a bio. I have a vibe.",
      "Please do not feed the gamer after midnight.",
      "I'm not arguing, I'm just explaining why I'm right.",
      "Currently accepting snacks as payment.",
      "My hobbies include snacking and forgetting things.",
      "I'm not short, I'm concentrated awesome.",
      "Running on 3 hours of sleep and pure chaos.",
    ],
  },
  {
    id: "gamer",
    heading: "Gamer Discord Bios",
    label: "Gamer",
    bios: [
      "🎮 Ranked grinder | Duo queue? DM me",
      "GG or GTFO. Mostly GG.",
      "One more game. Said 4 hours ago.",
      "🕹️ Main: support | Favorite: healing your mistakes",
      "I don't rage quit. My Wi-Fi does.",
      "Headset on, world off 🎧",
      "Respawning since 2010.",
      "Carry me and I'll carry you emotionally.",
      "Valorant | Minecraft | Apex | Snacks",
      "Stuck in silver, dreaming of diamond 💎",
      "Professional button presser 🎮",
      "Lagging in real life, cracked in game.",
      'AFK means "Away For Kitchen."',
      "🏆 Victory royale enthusiast, defeat royale specialist",
      "Add me for chill games and bad aim.",
    ],
  },
  {
    id: "short",
    heading: "Short Discord Bios",
    label: "Short",
    bios: [
      "Just vibing.",
      "Stay weird.",
      "Be kind.",
      "Online.",
      "Here for fun.",
      "Lost in music.",
      "Quietly chaotic.",
      "Main character.",
      "Good vibes only.",
      "Just a gamer.",
      "Coffee first.",
      "Still loading…",
      "Not a bot.",
      "Dream big.",
      "Always learning.",
    ],
  },
  {
    id: "soft",
    heading: "Soft Discord Bios",
    label: "Soft",
    bios: [
      "you are allowed to rest ♡",
      "learning to love the little things ✿",
      "healing at my own pace ☁︎",
      "gentle words only, please ♡",
      "soft playlists and warm tea 🍵",
      "i hope today treats you kindly ✧",
      "still soft, even when the world isn't ☾",
      "grateful for the people who stay ♡",
      "slowly becoming who i want to be ✿",
      "warm hearts make the best homes ☀︎",
      "small steps still count ✿",
      "kindness is always in style ♡",
      "cozy sweaters and quiet evenings ☁︎",
      "here to make someone's day a little lighter ✧",
      "soft voice, warm heart, good intentions ♡",
    ],
  },
  {
    id: "dark",
    heading: "Dark Discord Bios",
    label: "Dark",
    bios: [
      "☾ I come alive after midnight.",
      "Darkness is just light with nowhere to go.",
      "Silent like the night, sharp like the moon ☾",
      "Not cold, just careful.",
      "🖤 Black hoodie, blacker coffee.",
      "Lost in the static.",
      "I talk to the stars more than people ✦",
      "Shadows know my name.",
      "Calm on the surface, storm underneath.",
      "Born in the dark, raised by the night ☾",
      "Midnight thoughts, morning regrets ☾",
      "I'm the calm before the storm.",
      "Painted in shades of black and silence.",
      "Collecting stars in the dark ✦",
      "Not everyone deserves an explanation.",
    ],
  },
  {
    id: "anime",
    heading: "Anime Discord Bios",
    label: "Anime",
    bios: [
      "Probably rewatching my favorite anime again 🍥",
      "Living like it's episode one ✦",
      "Main character in my own anime ⚔️",
      "Ramen enthusiast, anime survivor 🍜",
      "I believe in the power of friendship (and snacks).",
      "Still waiting for my letter from an academy of magic ✨",
      "Training arc in progress 💪",
      "Sub over dub. Fight me (politely).",
      "Currently in my villain era 😈",
      "My power level is classified.",
      "Waiting for my protagonist moment ✨",
      "Plot armor: still loading.",
      "Powered by anime openings 🎶",
      "Side character with main character dreams ⭐",
      "Just one more episode… said 12 episodes ago.",
    ],
  },
];

export const bioTemplates: readonly BioTemplate[] = [
  {
    name: "Simple intro",
    text: "hi, i'm [name] ♡\n[age range or pronouns] | [time zone]\ni like [hobby], [hobby] and [hobby]",
  },
  {
    name: "Gamer profile",
    text: "🎮 [main game] | rank: [rank]\n🕹️ also play: [game], [game]\n🎧 open to duos | DM me",
  },
  {
    name: "Aesthetic card",
    text: "⋆˚｡ [name] ｡˚⋆\n✦ [pronouns]\n✦ [favorite thing]\n✦ [short quote]",
  },
  {
    name: "Creator or artist",
    text: "🎨 [what you create]\n📌 commissions: [open/closed]\n🔗 [portfolio link]",
  },
  {
    name: "Server owner",
    text: "👑 owner of [server name]\n💬 DMs open for questions\n✨ [one-line server description]",
  },
  {
    name: "Pronouns and boundaries",
    text: "[pronouns] | [time zone]\n✓ DMs open  ✗ no spam\nbe kind and we'll get along ♡",
  },
];

/** Single symbols for decorating a bio. */
export const bioSymbols: readonly string[] = [
  "✦",
  "✧",
  "⋆",
  "˚",
  "｡",
  "⊹",
  "⟡",
  "★",
  "☆",
  "♡",
  "❤",
  "💗",
  "✿",
  "❀",
  "☁︎",
  "☾",
  "☀︎",
  "┊",
  "┆",
  "╰┈➤",
  "➥",
  "➜",
];

/** Dividers and bracket pairs. */
export const bioDividers: readonly string[] = [
  "── ⋅ ⋅ ── ✦ ── ⋅ ⋅ ──",
  "˚₊‧꒰ა ♡ ໒꒱ ‧₊˚",
  "⋆｡°✩ ✩°｡⋆",
  "꒰ ꒱",
  "〔 〕",
  "【 】",
];

/** Total bios, rounded down to the nearest ten, for titles like "150+". */
export const BIO_COUNT = `${Math.floor(bioCategories.reduce((n, c) => n + c.bios.length, 0) / 10) * 10}+`;

/** Length the way Discord's About Me counter sees it: fancy letters and most emoji count as 2. */
export function bioLength(text: string): number {
  return text.length;
}

/** Styles offered in the "Apply font" menu (ids from lib/fonts). */
export const bioFonts: readonly { id: string; label: string }[] = [
  { id: "", label: "Normal text" },
  { id: "bold-serif", label: "Bold" },
  { id: "bold-script", label: "Cursive" },
  { id: "small-caps", label: "Small Caps" },
  { id: "fullwidth", label: "Aesthetic" },
  { id: "monospace", label: "Monospace" },
  { id: "bold-sans", label: "Bold Sans" },
];
