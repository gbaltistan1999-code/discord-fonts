/**
 * Discord server name generator. Pure functions, no network. Names are built from theme word lists
 * and templates, optionally around the visitor's own keyword.
 */

import { seededRandom } from "./usernameGenerator";

export { seededRandom };

export const SERVER_THEMES = [
  "random",
  "gaming",
  "friends",
  "aesthetic",
  "funny",
  "study",
  "anime",
  "community",
] as const;
export type ServerTheme = (typeof SERVER_THEMES)[number];

/** Discord's own limits for a server name. */
export const SERVER_NAME_MIN = 2;
export const SERVER_NAME_MAX = 100;
/** Generated names stay well under the limit so they read cleanly in the server list. */
const GENERATED_MAX = 40;
export const KEYWORD_MAX = 24;

interface ThemeWords {
  adjectives: readonly string[];
  nouns: readonly string[];
  /** Stand-in keywords used when the visitor doesn't type one. */
  seeds: readonly string[];
}

const THEMES: Record<Exclude<ServerTheme, "random">, ThemeWords> = {
  gaming: {
    adjectives: [
      "Rogue",
      "Silent",
      "Crimson",
      "Iron",
      "Neon",
      "Shadow",
      "Frost",
      "Savage",
      "Hidden",
      "Final",
      "Rapid",
    ],
    nouns: [
      "Squad",
      "Clan",
      "Raiders",
      "Legion",
      "Syndicate",
      "Guild",
      "Outlaws",
      "Wolves",
      "Lobby",
      "Arena",
      "Strike Team",
    ],
    seeds: ["Pixel", "Respawn", "Headshot", "Loot", "Clutch", "Frag", "Boss Fight", "Combo"],
  },
  friends: {
    adjectives: ["Cozy", "Late Night", "Chaotic", "Little", "Sunday", "Secret", "Golden", "Lazy"],
    nouns: ["Hangout", "Couch", "Crew", "Gang", "Corner", "Club", "Circle", "Den", "Basement", "Treehouse"],
    seeds: ["Snack", "Pizza", "Chill", "Midnight", "Bestie", "Weekend", "Sleepover", "Road Trip"],
  },
  aesthetic: {
    adjectives: ["Velvet", "Lunar", "Pastel", "Soft", "Dreamy", "Starlit", "Hazy", "Faded", "Misty"],
    nouns: ["Garden", "Haven", "Bloom", "Atelier", "Cloud", "Grove", "Daydream", "Petals", "Sanctuary"],
    seeds: ["Moonlight", "Lavender", "Stardust", "Cherry Blossom", "Honey", "Aurora", "Willow", "Seafoam"],
  },
  funny: {
    adjectives: [
      "Questionable",
      "Unpaid",
      "Slightly Damp",
      "Mildly Chaotic",
      "Sleep Deprived",
      "Overcooked",
      "Confused",
    ],
    nouns: [
      "Goblins",
      "Potatoes",
      "Raccoons",
      "Gremlins",
      "Committee",
      "Support Group",
      "Brain Cells",
      "Disaster Zone",
    ],
    seeds: ["Goose", "Spaghetti", "Nugget", "Toaster", "Pigeon", "Noodle", "Waffle", "Pickle"],
  },
  study: {
    adjectives: ["Focused", "Quiet", "Midnight", "Daily", "Deep", "Steady", "Bright"],
    nouns: ["Study Hall", "Library", "Study Club", "Notes", "Focus Room", "Academy", "Lab", "Brain Trust"],
    seeds: ["Pomodoro", "Coffee", "Exam", "Flashcard", "Homework", "Lo-fi", "Bookworm", "Deadline"],
  },
  anime: {
    adjectives: ["Sakura", "Neo", "Moonlit", "Spirit", "Crimson", "Silver", "Wandering"],
    nouns: ["Dojo", "Academy", "Shrine", "Guild", "Clan", "Tea House", "Inn", "Village"],
    seeds: ["Ramen", "Kitsune", "Tanuki", "Mochi", "Shinobi", "Onigiri", "Bento", "Sensei"],
  },
  community: {
    adjectives: ["Open", "Friendly", "United", "Global", "Creative", "Kind"],
    nouns: ["Collective", "Community", "Hub", "Network", "Society", "Commons", "Workshop", "Space"],
    seeds: ["Makers", "Creators", "Builders", "Artists", "Dreamers", "Coders", "Writers", "Explorers"],
  },
};

/** Templates using the keyword {k}. {a} is an adjective and {n} a noun from the theme. */
const KEYWORD_TEMPLATES = [
  "{k} {n}",
  "The {k} {n}",
  "{a} {k}",
  "{k} HQ",
  "{k} Central",
  "House of {k}",
  "{k} & Friends",
  "{k}'s {n}",
  "The {a} {k}",
] as const;

/** Templates that only use theme words, mixed in when there is no keyword. */
const THEME_TEMPLATES = ["{a} {n}", "The {a} {n}"] as const;

export interface GenerateServerNameOptions {
  /** Optional word to build names around. */
  keyword?: string;
  theme?: ServerTheme;
  count?: number;
  /** Random source in [0, 1). Pass a seeded one for repeatable output. */
  random?: () => number;
}

/** Trim, collapse spaces, drop characters that don't belong in a name and capitalize each word. */
export function cleanKeyword(raw: string): string {
  const words = raw
    .replace(/[^\p{L}\p{N}\s'&-]/gu, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0]!.toUpperCase() + w.slice(1));
  return words.join(" ").slice(0, KEYWORD_MAX).trim();
}

/** True when a word repeats, e.g. "Squad Squad" or "Guild of the Guild". */
function hasRepeatedWord(name: string): boolean {
  const words = name.toLowerCase().split(/\s+/);
  return new Set(words).size !== words.length;
}

/** Up to `count` unique server names for a theme, optionally built around `keyword`. */
export function generateServerNames({
  keyword = "",
  theme = "random",
  count = 24,
  random = Math.random,
}: GenerateServerNameOptions = {}): string[] {
  const pick = <T>(list: readonly T[]): T => list[Math.floor(random() * list.length)]!;
  const themeIds = SERVER_THEMES.filter((t) => t !== "random") as Exclude<ServerTheme, "random">[];
  const k = cleanKeyword(keyword);

  const names: string[] = [];
  const seen = new Set<string>();
  for (let attempt = 0; attempt < count * 30 && names.length < count; attempt++) {
    const words = THEMES[theme === "random" ? pick(themeIds) : theme];
    const useTheme = !k && random() < 0.3;
    const template = useTheme ? pick(THEME_TEMPLATES) : pick(KEYWORD_TEMPLATES);
    const name = template
      .replace("{k}", k || pick(words.seeds))
      .replace("{a}", pick(words.adjectives))
      .replace("{n}", pick(words.nouns));

    const key = name.toLowerCase();
    if (seen.has(key) || name.length > GENERATED_MAX || hasRepeatedWord(name)) continue;
    seen.add(key);
    names.push(name);
  }
  return names;
}

/** Whether Discord accepts `name` as a server name (2 to 100 characters). */
export function isValidServerName(name: string): boolean {
  const length = [...name.trim()].length;
  return length >= SERVER_NAME_MIN && length <= SERVER_NAME_MAX;
}
