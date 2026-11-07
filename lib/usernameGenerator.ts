/**
 * Discord username generator. Pure functions, no network: every name it returns passes
 * `isValidUsername` (Discord's 2023 username rules plus a few safety filters).
 *
 * Reuse it for other pages through `length`, e.g. `generateUsernames({ length: 4 })` for 4-letter names.
 */

export const USERNAME_STYLES = [
  "random",
  "cool",
  "aesthetic",
  "gaming",
  "cute",
  "funny",
  "dark",
  "short",
] as const;
export type UsernameStyle = (typeof USERNAME_STYLES)[number];

export const LENGTH_FILTERS = ["any", "3", "4", "5", "6-8", "9-12"] as const;
export type LengthFilter = (typeof LENGTH_FILTERS)[number];

export interface LengthRange {
  min: number;
  max: number;
}

export interface GenerateOptions {
  /** Optional word to build names around. Lowercased and stripped of invalid characters. */
  keyword?: string;
  style?: UsernameStyle;
  /** A filter id ("4", "6-8"…), an exact length, or a range. */
  length?: LengthFilter | number | LengthRange;
  allowNumbers?: boolean;
  /** Allow "_" and "." in names. */
  allowSeparators?: boolean;
  count?: number;
  /** Random source in [0, 1). Pass a seeded one for repeatable output. */
  random?: () => number;
}

export const USERNAME_MIN = 2;
export const USERNAME_MAX = 32;
const RESERVED = ["discord", "everyone", "here"];

/**
 * Substrings that never appear in a generated name. Made-up syllable names are random,
 * so this keeps accidental rude words out; the word lists are written to avoid them too.
 */
const BLOCKED = [
  "anal",
  "anus",
  "arse",
  "bum",
  "bitch",
  "boob",
  "cock",
  "coc",
  "cum",
  "cunt",
  "dick",
  "dik",
  "dildo",
  "fag",
  "fuc",
  "fuk",
  "gay",
  "hitler",
  "homo",
  "jizz",
  "kkk",
  "kill",
  "nazi",
  "nigg",
  "nigr",
  "nud",
  "penis",
  "porn",
  "pussy",
  "rape",
  "sex",
  "shit",
  "slut",
  "suicid",
  "tit",
  "twat",
  "vagin",
  "whore",
  "xxx",
];

/** True when a name follows Discord's username rules and the generator's safety filters. */
export function isValidUsername(name: string): boolean {
  if (name.length < USERNAME_MIN || name.length > USERNAME_MAX) return false;
  if (!/^[a-z0-9_.]+$/.test(name)) return false;
  if (name.includes("..")) return false;
  if (RESERVED.some((word) => name.includes(word))) return false;
  if (BLOCKED.some((word) => name.includes(word))) return false;
  return true;
}

/** Lowercases a keyword and removes anything a username can't contain. */
export function sanitizeKeyword(raw: string, { allowNumbers = true, allowSeparators = true } = {}): string {
  let word = raw.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "");
  word = word.replace(allowSeparators ? /[^a-z0-9_.]/g : /[^a-z0-9]/g, "");
  if (!allowNumbers) word = word.replace(/[0-9]/g, "");
  word = word.replace(/\.{2,}/g, ".").replace(/^[._]+|[._]+$/g, "");
  return word.slice(0, 20);
}

export function resolveLength(length: GenerateOptions["length"] = "any"): LengthRange {
  if (typeof length === "number") return { min: length, max: length };
  if (typeof length === "object") return length;
  switch (length) {
    case "3":
    case "4":
    case "5":
      return { min: Number(length), max: Number(length) };
    case "6-8":
      return { min: 6, max: 8 };
    case "9-12":
      return { min: 9, max: 12 };
    default:
      return { min: 3, max: 20 };
  }
}

// ---------------------------------------------------------------------------
// Word lists (lowercase a–z only, 2–9 letters)
// ---------------------------------------------------------------------------

type WordStyle = Exclude<UsernameStyle, "random" | "short">;

export const WORDS: Record<WordStyle, readonly string[]> = {
  cool: [
    "ace",
    "apex",
    "arc",
    "atlas",
    "axis",
    "blaze",
    "blitz",
    "bolt",
    "chrome",
    "cipher",
    "cobalt",
    "comet",
    "crest",
    "delta",
    "drift",
    "echo",
    "ember",
    "falcon",
    "flux",
    "frost",
    "glint",
    "hawk",
    "iron",
    "jet",
    "lynx",
    "neon",
    "nexus",
    "nomad",
    "nova",
    "onyx",
    "orbit",
    "prism",
    "pulse",
    "quartz",
    "raven",
    "razor",
    "rebel",
    "rift",
    "rogue",
    "sable",
    "slate",
    "solar",
    "sonic",
    "steel",
    "storm",
    "surge",
    "vector",
    "viper",
    "volt",
    "vortex",
    "wolf",
    "zenith",
    "zero",
    "kairo",
    "matrix",
    "turbo",
  ],
  aesthetic: [
    "aster",
    "aura",
    "bloom",
    "blush",
    "cafe",
    "cloud",
    "coral",
    "daisy",
    "dew",
    "dream",
    "ether",
    "faded",
    "fern",
    "film",
    "glow",
    "golden",
    "halo",
    "haze",
    "hazel",
    "honey",
    "iris",
    "ivory",
    "latte",
    "lilac",
    "lumen",
    "luna",
    "matcha",
    "mist",
    "misty",
    "moon",
    "moss",
    "muse",
    "ocean",
    "opal",
    "peach",
    "pearl",
    "petal",
    "poem",
    "rose",
    "sage",
    "serene",
    "silk",
    "sky",
    "sol",
    "solace",
    "sonnet",
    "starry",
    "tide",
    "tulip",
    "velvet",
    "vinyl",
    "wave",
    "willow",
    "lavender",
    "dusk",
    "aurora",
  ],
  gaming: [
    "arcade",
    "bit",
    "blaster",
    "boss",
    "buff",
    "byte",
    "carry",
    "clan",
    "clutch",
    "combo",
    "console",
    "crit",
    "cyber",
    "droid",
    "duo",
    "elite",
    "frag",
    "glitch",
    "guild",
    "healer",
    "hero",
    "knight",
    "lag",
    "laser",
    "legend",
    "level",
    "loot",
    "mage",
    "mech",
    "mod",
    "nerf",
    "ninja",
    "noob",
    "ping",
    "pixel",
    "pro",
    "quest",
    "raid",
    "ranger",
    "ranked",
    "respawn",
    "rocket",
    "samurai",
    "sniper",
    "solo",
    "spawn",
    "speedrun",
    "squad",
    "tank",
    "turbo",
    "headshot",
    "gamer",
    "lobby",
    "joystick",
    "ultra",
    "warden",
  ],
  cute: [
    "acorn",
    "bean",
    "berry",
    "boba",
    "bubbles",
    "bun",
    "bunny",
    "button",
    "candy",
    "cherry",
    "chick",
    "cookie",
    "cub",
    "cupcake",
    "daisy",
    "duckie",
    "dumpling",
    "fawn",
    "fluffy",
    "froggy",
    "fuzzy",
    "gummy",
    "hamster",
    "honey",
    "jelly",
    "kitten",
    "kiwi",
    "koala",
    "lamb",
    "marsh",
    "mochi",
    "muffin",
    "nugget",
    "otter",
    "pancake",
    "panda",
    "peachy",
    "pebble",
    "petal",
    "piggy",
    "pip",
    "plum",
    "pudding",
    "puppy",
    "sprinkle",
    "sugar",
    "sunny",
    "sushi",
    "teddy",
    "toast",
    "tofu",
    "waffle",
    "star",
    "cloud",
  ],
  funny: [
    "bagel",
    "banana",
    "beans",
    "bonk",
    "broccoli",
    "burrito",
    "cabbage",
    "chaos",
    "cheese",
    "chonk",
    "clown",
    "couch",
    "crouton",
    "derp",
    "donut",
    "duck",
    "goblin",
    "goose",
    "gravy",
    "gremlin",
    "grumpy",
    "jester",
    "kazoo",
    "lazy",
    "llama",
    "meme",
    "moose",
    "nacho",
    "nap",
    "noodle",
    "oops",
    "pancake",
    "penguin",
    "pickle",
    "pigeon",
    "potato",
    "pretzel",
    "radish",
    "sandwich",
    "sleepy",
    "sloth",
    "snack",
    "sneaky",
    "sock",
    "spatula",
    "spoon",
    "taco",
    "tater",
    "toad",
    "toaster",
    "turnip",
    "walrus",
    "wobble",
    "yak",
    "yeet",
    "waffle",
  ],
  dark: [
    "abyss",
    "ash",
    "bane",
    "cinder",
    "crow",
    "cursed",
    "doom",
    "dread",
    "dusk",
    "eclipse",
    "ember",
    "fang",
    "frost",
    "ghost",
    "gloom",
    "goth",
    "grim",
    "hex",
    "hollow",
    "howl",
    "midnight",
    "moth",
    "mourn",
    "night",
    "noir",
    "nocturne",
    "nyx",
    "obsidian",
    "omen",
    "onyx",
    "phantom",
    "raven",
    "raze",
    "reaper",
    "ruin",
    "rune",
    "sable",
    "scar",
    "shadow",
    "smoke",
    "soul",
    "specter",
    "storm",
    "thorn",
    "umbra",
    "venom",
    "vex",
    "void",
    "wither",
    "wraith",
    "wolf",
    "grave",
    "veil",
    "lunar",
  ],
};

/** Short endings for "word.tag" names like luna.exe or shadow.wav. */
const TAGS: Record<WordStyle, readonly string[]> = {
  cool: ["exe", "gg", "dev", "io", "x"],
  aesthetic: ["wav", "png", "mp3", "jpg", "xo"],
  gaming: ["gg", "exe", "tv", "ttv", "op"],
  cute: ["xo", "png", "uwu", "bb", "pie"],
  funny: ["lol", "exe", "zip", "irl", "wav"],
  dark: ["exe", "wav", "fm", "ok", "x"],
};

const WORD_STYLES = Object.keys(WORDS) as WordStyle[];

// ---------------------------------------------------------------------------
// Pronounceable made-up names ("zeko", "vyra", "kael")
// ---------------------------------------------------------------------------

const CONSONANTS = "bdfgjklmnprstvxz";
const SOFT_CONSONANTS = "klmnrsvz";
const VOWELS = "aeiou";
const VOWEL_PAIRS = ["ae", "ai", "ao", "ea", "ei", "eo", "ia", "io", "ou", "ya", "yo", "ye"];
const ENDINGS = ["n", "r", "x", "s", "l", "k", "th", "sh"];

/** A made-up, pronounceable word of exactly `length` letters. */
export function syllableName(length: number, random: () => number): string {
  const pick = (chars: string | readonly string[]) => chars[Math.floor(random() * chars.length)]!;
  let word = "";
  let wantConsonant = random() < 0.9;
  while (word.length < length) {
    const left = length - word.length;
    if (wantConsonant) {
      word +=
        left <= 2 && random() < 0.5
          ? pick(ENDINGS).slice(0, left)
          : pick(word ? SOFT_CONSONANTS + CONSONANTS : CONSONANTS);
    } else {
      word += left >= 2 && random() < 0.2 ? pick(VOWEL_PAIRS) : pick(VOWELS);
    }
    wantConsonant = !wantConsonant;
  }
  return word.slice(0, length);
}

// ---------------------------------------------------------------------------
// Generator
// ---------------------------------------------------------------------------

type Pattern = (ctx: Context) => string | null;

interface Context {
  random: () => number;
  pick: <T>(list: readonly T[]) => T;
  style: WordStyle;
  keyword: string;
  range: LengthRange;
  allowNumbers: boolean;
  allowSeparators: boolean;
}

/** Two digits, skipping numbers with unwanted meanings. */
const digits = (ctx: Context): string => {
  const n = 10 + Math.floor(ctx.random() * 90);
  return [14, 18, 69, 88].includes(n) ? digits(ctx) : String(n);
};
const sep = (ctx: Context) => (ctx.random() < 0.5 ? "_" : ".");
const word = (ctx: Context) => ctx.pick(WORDS[ctx.style]);
const otherWord = (ctx: Context, not: string) => {
  for (let i = 0; i < 5; i++) {
    const w = word(ctx);
    if (w !== not) return w;
  }
  return word(ctx);
};

/** Patterns without the keyword. */
const PLAIN: Record<string, Pattern> = {
  wordWord: (ctx) => {
    const a = word(ctx);
    return a + otherWord(ctx, a);
  },
  wordUnderscore: (ctx) => {
    if (!ctx.allowSeparators) return null;
    const a = word(ctx);
    return `${a}_${otherWord(ctx, a)}`;
  },
  wordDot: (ctx) => {
    if (!ctx.allowSeparators) return null;
    const a = word(ctx);
    return `${a}.${otherWord(ctx, a)}`;
  },
  wordTag: (ctx) => (ctx.allowSeparators ? `${word(ctx)}.${ctx.pick(TAGS[ctx.style])}` : null),
  wordNumber: (ctx) => (ctx.allowNumbers ? word(ctx) + digits(ctx) : null),
  wordMadeUp: (ctx) => word(ctx) + syllableName(3 + Math.floor(ctx.random() * 2), ctx.random),
};

/** Patterns built around the keyword. */
const KEYWORD: Record<string, Pattern> = {
  keywordWord: (ctx) => ctx.keyword + otherWord(ctx, ctx.keyword),
  wordKeyword: (ctx) => otherWord(ctx, ctx.keyword) + ctx.keyword,
  keywordSepWord: (ctx) =>
    ctx.allowSeparators ? ctx.keyword + sep(ctx) + otherWord(ctx, ctx.keyword) : null,
  wordSepKeyword: (ctx) =>
    ctx.allowSeparators ? otherWord(ctx, ctx.keyword) + sep(ctx) + ctx.keyword : null,
  keywordTag: (ctx) => (ctx.allowSeparators ? `${ctx.keyword}.${ctx.pick(TAGS[ctx.style])}` : null),
  keywordNumber: (ctx) => (ctx.allowNumbers ? ctx.keyword + digits(ctx) : null),
};

/** A made-up name in the length range, using the keyword when it fits. */
function madeUpName(ctx: Context, useKeyword: boolean): string {
  const { min, max } = ctx.range;
  const hi = Math.max(min, Math.min(max, 12));
  const target = min + Math.floor(ctx.random() * (hi - min + 1));
  const kw = ctx.keyword;
  if (useKeyword && kw && kw.length <= target) {
    if (kw.length === target) return kw;
    const rest = target - kw.length;
    if (ctx.allowSeparators && rest >= 3 && ctx.random() < 0.4)
      return kw + sep(ctx) + syllableName(rest - 1, ctx.random);
    return ctx.random() < 0.7 ? kw + syllableName(rest, ctx.random) : syllableName(rest, ctx.random) + kw;
  }
  // Longer names read better as a real word plus a short made-up part ("kairo" + "solar").
  if (target >= 7 && ctx.random() < 0.6) {
    const fitting = WORDS[ctx.style].filter((w) => w.length >= 3 && w.length <= target - 3);
    if (fitting.length) {
      const w = ctx.pick(fitting);
      return w + syllableName(target - w.length, ctx.random);
    }
  }
  if (target >= 7 && ctx.allowSeparators && ctx.random() < 0.3) {
    const first = Math.floor(target / 2);
    return syllableName(first, ctx.random) + sep(ctx) + syllableName(target - first - 1, ctx.random);
  }
  return syllableName(target, ctx.random);
}

function fits(name: string, ctx: Context): boolean {
  if (name.length < ctx.range.min || name.length > ctx.range.max) return false;
  if (!ctx.allowNumbers && /[0-9]/.test(name)) return false;
  if (!ctx.allowSeparators && /[_.]/.test(name)) return false;
  return isValidUsername(name);
}

/** Creates `count` unique, valid usernames (24 by default). */
export function generateUsernames(options: GenerateOptions = {}): string[] {
  const {
    style = "random",
    allowNumbers = true,
    allowSeparators = true,
    count = 24,
    random = Math.random,
  } = options;
  let range = resolveLength(options.length);
  if (style === "short" && (options.length === "any" || options.length === undefined))
    range = { min: 4, max: 6 };
  range = { min: Math.max(USERNAME_MIN, range.min), max: Math.min(USERNAME_MAX, range.max) };

  const keyword = sanitizeKeyword(options.keyword ?? "", { allowNumbers, allowSeparators });
  const usableKeyword = keyword && isValidUsername(keyword) ? keyword : "";
  const pick = <T>(list: readonly T[]) => list[Math.floor(random() * list.length)]!;
  const madeUpOnly = style === "short" || range.max <= 5;

  const names = new Set<string>();
  const patternUse = new Map<string, number>();
  // Spread a batch across patterns; with fewer patterns available (separators or numbers off) each may repeat more.
  const available = Object.keys(PLAIN).length - (allowSeparators ? 0 : 3) - (allowNumbers ? 0 : 1);
  const maxPerPattern = Math.ceil(count / Math.max(1, available)) + 1;

  for (let attempt = 0; names.size < count && attempt < count * 60; attempt++) {
    const ctx: Context = {
      random,
      pick,
      style: style === "random" || style === "short" ? pick(WORD_STYLES) : style,
      keyword: usableKeyword,
      range,
      allowNumbers,
      allowSeparators,
    };
    // Most names use the keyword when there is one.
    const useKeyword = Boolean(usableKeyword) && random() < 0.75;

    let id: string;
    let name: string | null;
    if (madeUpOnly || (style === "random" && random() < 0.12)) {
      id = "madeUp";
      name = madeUpName(ctx, useKeyword);
    } else {
      const patterns = useKeyword ? KEYWORD : PLAIN;
      const ids = Object.keys(patterns).filter((p) => (patternUse.get(p) ?? 0) < maxPerPattern);
      id = pick(ids.length ? ids : Object.keys(patterns));
      name = patterns[id]!(ctx);
    }

    if (!name || names.has(name) || !fits(name, ctx)) continue;
    names.add(name);
    patternUse.set(id, (patternUse.get(id) ?? 0) + 1);
  }

  // Word lists can't fill some ranges (e.g. long names with separators off): top up with made-up names.
  for (let attempt = 0; names.size < count && attempt < count * 200; attempt++) {
    const ctx: Context = {
      random,
      pick,
      style: pick(WORD_STYLES),
      keyword: usableKeyword,
      range,
      allowNumbers,
      allowSeparators,
    };
    const name = madeUpName(ctx, Boolean(usableKeyword) && random() < 0.5);
    if (!names.has(name) && fits(name, ctx)) names.add(name);
  }

  return [...names];
}

/** Small seeded random source, so the server and the browser can render the same first batch. */
export function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
