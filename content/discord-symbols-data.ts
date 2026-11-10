/** Symbol library, channel name builder options and ready-made packs for /discord-symbols. Plain data, safe for client components. */

// ---------------------------------------------------------------------------
// Symbol library (plain data, shared with the client components)
// ---------------------------------------------------------------------------

export interface SymbolCategory {
  id: string;
  label: string;
  /** H3 above the category in the library. */
  heading: string;
  /** Extra words the search box matches, besides the label. */
  keywords: string;
  symbols: readonly string[];
}

/** Space-separated list to array, dropping duplicates inside a category. */
const list = (s: string): readonly string[] => [...new Set(s.trim().split(/\s+/))];

export const symbolCategories: readonly SymbolCategory[] = [
  {
    id: "dividers",
    label: "Dividers",
    heading: "Dividers & separators",
    keywords: "separator bar line vertical dot pipe",
    symbols: list("︱ ┃ │ ┊ ┆ ╎ ╏ ║ ・ • · ∙ ⋆ ⌇ ⁞ ⋮ ୨ ୧ ︳ ┇ ┋ ‖ ‧ ⁝ ∘ ⊹"),
  },
  {
    id: "brackets",
    label: "Brackets",
    heading: "Brackets & frames",
    keywords: "frame corner parenthesis japanese",
    symbols: list(
      "『 』 「 」 【 】 〔 〕 〖 〗 《 》 〈 〉 ꒰ ꒱ ⟨ ⟩ ⟦ ⟧ ꧁ ꧂ ༺ ༻ ⫷ ⫸ ⋘ ⋙ ⦃ ⦄ ⌈ ⌉ ⌊ ⌋ ❨ ❩ ❪ ❫ ❬ ❭ ❮ ❯ ❰ ❱ ❲ ❳ ⦗ ⦘",
    ),
  },
  {
    id: "stars",
    label: "Stars",
    heading: "Stars & sparkles",
    keywords: "sparkle star twinkle asterisk",
    symbols: list("★ ☆ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⋆ ✶ ✷ ✸ ✹ ✺ ✻ ✼ ❉ ❊ ❋ ✱ ✲ ⁂ ⁎ ˚ ⟡ ✡ ✵ ✴ ❇ ❈ ✳ ⭑ ⭒"),
  },
  {
    id: "flowers",
    label: "Flowers",
    heading: "Flowers",
    keywords: "flower floral blossom cute aesthetic",
    symbols: list("❀ ✿ ❁ ✾ ❃ ⚘ ꕤ ꕥ ୨ৎ ✽ ❦ ❧ ✤ ✥ ⚜ ✣ ✢"),
  },
  {
    id: "hearts",
    label: "Hearts",
    heading: "Hearts",
    keywords: "heart love cute",
    symbols: list("♡ ♥ ❤ ❥ ❣ ღ ᥫ᭡ ʚɞ ❤︎ ꨄ ⸜♡⸝ ʚ♡ɞ"),
  },
  {
    id: "arrows",
    label: "Arrows",
    heading: "Arrows",
    keywords: "arrow pointer direction",
    symbols: list(
      "→ ← ↑ ↓ ↔ ⇒ ⇨ ➜ ➤ ➢ ➣ ➥ ➦ ↳ ↪ ⟶ ⇢ ⇾ » « › ‹ ⤷ ⤶ ↬ ↗ ↘ ↙ ↖ ⇐ ⇑ ⇓ ⇔ ⟵ ⟷ ➔ ➙ ➛ ➝ ➞ ➟ ➠ ➧ ➨ ⤴ ⤵ ↻ ↺",
    ),
  },
  {
    id: "lines",
    label: "Lines",
    heading: "Lines & borders",
    keywords: "line border box corner divider horizontal",
    symbols: list(
      "━ ─ ═ ┄ ┈ ╌ ⋯ ⸻ ﹏ ﹋ ﹌ ┏ ┓ ┗ ┛ ╭ ╮ ╰ ╯ ┌ ┐ └ ┘ ├ ┤ ╔ ╗ ╚ ╝ ┳ ┻ ╋ ┣ ┫ ╠ ╣ ╦ ╩ ╬ ▬ ▭ ⎯ ⎼ ⏤",
    ),
  },
  {
    id: "japanese",
    label: "Japanese",
    heading: "Japanese-style symbols",
    keywords: "japanese kanji katakana anime kaomoji",
    symbols: list("彡 亗 ツ ヅ シ ッ 乂 〆 々 ミ ヾ ゞ ノ ＊ 〜 ゝ 〃"),
  },
  {
    id: "music-games",
    label: "Music & Games",
    heading: "Music & games",
    keywords: "music note game chess card dice sword crown skull",
    symbols: list("♪ ♫ ♬ ♩ ♭ ♯ ⚔ ⚡ ☠ ♔ ♕ ♚ ♛ ♠ ♣ ♦ ♤ ♧ ♢ ♮ 𝄞 ⚑ ⚐ ♜ ♝ ♞ ♟ ♖ ♗ ♘ ♙ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅"),
  },
  {
    id: "weather",
    label: "Weather",
    heading: "Weather & sky",
    keywords: "weather sky moon sun cloud snow star",
    symbols: list("☾ ☽ ☼ ☀ ☁ ☂ ☃ ❄ ☄ ✺ ☉ ϟ ❅ ❆ ☇"),
  },
  {
    id: "bullets",
    label: "Bullets",
    heading: "Bullets & checks",
    keywords: "bullet check tick box square circle triangle diamond",
    symbols: list("✓ ✔ ✗ ✘ ☐ ☑ ☒ ▸ ▹ ▶ ▷ ◆ ◇ ◈ ○ ● ◦ ◉ ⬥ ❖ ▪ ▫ ■ □ ▲ △ ▼ ▽ ◀ ◁ ⬦ ⬧ ⦿ ◎ ✕ ✖"),
  },
  {
    id: "misc",
    label: "Misc",
    heading: "Misc symbols",
    keywords: "math currency copyright misc other",
    symbols: list("∞ ≈ ≠ ± × ÷ ° ∆ ∑ π Ω † ‡ § ¶ © ® ™ ⌘ ‰ √ ∂ ∫ µ ¢ £ ¥ € ¤ ⚠ ⌂ ☯ ☮ ♻ ⚛ ☘ ⚓ ✈ ☎ ✉ ✂"),
  },
];

// ---------------------------------------------------------------------------
// Channel name builder options and ready-made packs
// ---------------------------------------------------------------------------

export const builderEmojis = [
  "📜", "📢", "👋", "💬", "😂", "🎮", "🎵", "🖼️", "🤖", "🎉",
  "💡", "🆘", "🔊", "🎧", "⭐", "🔥", "💜", "🌸", "✨", "🏆",
] as const;
export const builderLeft = ["┊", "╭", "꒰", "『", "⟡", "▸", "✦"] as const;
export const builderDividers = ["︱", "┃", "│", "・", "•", "⋆", "»", "→"] as const;
export const builderRight = ["꒱", "』", "✦", "⋆"] as const;

export interface ChannelPack {
  title: string;
  names: readonly string[];
}

export const channelPacks: readonly ChannelPack[] = [
  {
    title: "Emoji + bar",
    names: ["📜︱rules", "📢︱announcements", "👋︱welcome", "💬︱general", "😂︱memes", "🎮︱gaming", "🎵︱music", "🖼️︱media", "🤖︱bot-commands", "🎉︱events", "💡︱suggestions", "🆘︱support"],
  },
  {
    title: "Dotted",
    names: ["┊📜・rules", "┊📢・announcements", "┊👋・welcome", "┊💬・general", "┊😂・memes", "┊🎮・gaming", "┊🎵・music", "┊🖼️・media"],
  },
  {
    title: "Cute brackets",
    names: ["꒰📜꒱rules", "꒰📢꒱news", "꒰👋꒱welcome", "꒰💬꒱chat", "꒰🌸꒱selfies", "꒰🎀꒱art", "꒰🎵꒱music", "꒰✨꒱vibes"],
  },
  {
    title: "Minimal sparkle",
    names: ["⟡・rules", "⟡・announcements", "⟡・general", "⟡・memes", "⟡・gaming", "⟡・music", "⟡・media", "⟡・events"],
  },
  {
    title: "Japanese frame",
    names: ["『📜』rules", "『📢』announcements", "『💬』general", "『🎮』gaming", "『🎵』music", "『🖼️』media"],
  },
  {
    title: "Arrow",
    names: ["»📜︱rules", "»📢︱announcements", "»💬︱general", "»🎮︱gaming", "»🎵︱music", "»🎉︱events"],
  },
  {
    title: "Category names",
    names: ["━━ 𝐈𝐍𝐅𝐎 ━━", "━━ 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 ━━", "✦ COMMUNITY ✦", "『 VOICE CHANNELS 』", "╭── ⋅ ⋅ STAFF ⋅ ⋅ ──╮", "꒰ GAMES ꒱"],
  },
  {
    title: "Voice channels",
    names: ["🔊︱Lounge", "🎧︱Music Room", "🎮︱Gaming VC", "💤︱AFK", "🎤︱Stage", "📚︱Study Room"],
  },
];

// ---------------------------------------------------------------------------
// Interface text (English defaults; translations pass their own)
// ---------------------------------------------------------------------------

export interface BuilderStrings {
  typeLegend: string;
  types: { text: string; voice: string; category: string };
  nameLabel: string;
  /** Example name used when the input is empty. */
  sample: string;
  textNote: string;
  emoji: string;
  left: string;
  divider: string;
  right: string;
  none: string;
  preview: string;
  textChannels: string;
  voiceChannels: string;
  /** Neighbouring channels shown in the preview. */
  textNeighbour: string;
  voiceNeighbour: string;
  /** "{count}" and "{limit}" are filled in. */
  characters: string;
  tooLong: string;
  copy: string;
  copied: string;
  /** Toast label, e.g. "Copied channel name!". */
  copyLabel: string;
  randomize: string;
}

export const builderStringsEn: BuilderStrings = {
  typeLegend: "Channel type",
  types: { text: "Text channel", voice: "Voice channel", category: "Category" },
  nameLabel: "Channel name",
  sample: "announcements",
  textNote: "Discord makes text channel names lowercase and turns spaces into hyphens.",
  emoji: "Emoji",
  left: "Left decoration",
  divider: "Divider",
  right: "Right decoration",
  none: "none",
  preview: "Preview",
  textChannels: "Text channels",
  voiceChannels: "Voice channels",
  textNeighbour: "general",
  voiceNeighbour: "Lounge",
  characters: "{count} / {limit} characters",
  tooLong: " – too long for Discord",
  copy: "Copy channel name",
  copied: "Copied!",
  copyLabel: "channel name",
  randomize: "🎲 Randomize",
};

export interface PackStrings {
  copyAll: string;
  /** Screen-reader text after "Copy all"; "{title}" is filled in. */
  copyAllSr: string;
  /** Toast label for a whole pack; "{title}" is filled in. */
  packLabel: string;
}

export const packStringsEn: PackStrings = {
  copyAll: "Copy all",
  copyAllSr: "{title} names",
  packLabel: "{title} pack",
};

export interface LibraryStrings {
  searchLabel: string;
  placeholder: string;
  editFavorites: string;
  doneEditing: string;
  categoriesLabel: string;
  all: string;
  favoritesTitle: string;
  /** Shown when there are no favorites; "{button}" becomes the bold button name. */
  favoritesEmpty: string;
  editingHint: string;
  /** "{query}" is filled in. */
  noMatch: string;
  /** "{symbol}" is filled in. */
  copySymbol: string;
  addFavorite: string;
  removeFavorite: string;
}

export const libraryStringsEn: LibraryStrings = {
  searchLabel: "Search symbols",
  placeholder: "Search symbols (star, heart, arrow, ︱)",
  editFavorites: "☆ Edit favorites",
  doneEditing: "✓ Done editing",
  categoriesLabel: "Symbol categories",
  all: "All",
  favoritesTitle: "★ Your favorites",
  favoritesEmpty: "Tap {button}, then tap symbols to save them here on this device.",
  editingHint: "Editing favorites: tap a symbol to add or remove it. Tap “Done editing” to go back to copying.",
  noMatch: "No symbols match “{query}”. Try another word.",
  copySymbol: "Copy {symbol}",
  addFavorite: "Add {symbol} to favorites",
  removeFavorite: "Remove {symbol} from favorites",
};

/** Translated label, heading and search words for a symbol category. */
export type CategoryText = Readonly<Record<string, { label: string; heading: string; keywords: string }>>;
