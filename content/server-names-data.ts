/**
 * Plain data for /discord-server-names: name lists, fancy examples, channel ideas and the generator's
 * interface strings. No JSX, so client components can import it.
 */

import { convert } from "@/lib/fonts";
import type { ServerTheme } from "@/lib/serverNames";

export interface ServerNameCategory {
  id: string;
  label: string;
  blurb: string;
  names: readonly string[];
}

export const serverNameCategories: readonly ServerNameCategory[] = [
  {
    id: "cool",
    label: "Cool",
    blurb: "Short, confident names that work for almost any kind of server.",
    names: [
      "The Hideout",
      "Nightshift",
      "Afterglow",
      "Static",
      "Echo Chamber",
      "The Vault",
      "Northern Lights",
      "Undertow",
      "Blackout",
      "Signal Lost",
      "Paper Planes",
      "Wildfire",
      "The Outpost",
      "Neon District",
      "Low Orbit",
      "Gravity",
      "Night Owls",
      "Cold Brew",
      "The Basement",
      "Overdrive",
      "Moonshot",
      "Skyline",
      "Lost & Found",
      "Ember",
      "Parallel",
    ],
  },
  {
    id: "funny",
    label: "Funny",
    blurb: "Silly names for friend groups and meme servers that don't take themselves seriously.",
    names: [
      "Certified Goblins",
      "Unpaid Interns",
      "Brain Cell Sharing Program",
      "The Raccoon Committee",
      "Professional Procrastinators",
      "Sleep Is Optional",
      "Snack Overflow",
      "Chaos Department",
      "We Tried",
      "Nobody Read The Rules",
      "Mildly Organized",
      "Potato Republic",
      "Emotional Support Server",
      "Gremlin Hours",
      "Spaghetti Code Club",
      "The Group Project",
      "Questionable Decisions",
      "Pigeon Parliament",
      "Toaster Fan Club",
      "Running On Vibes",
      "Not A Cult",
      "Just Vibing",
      "Waffle House Rules",
      "Overthinkers Anonymous",
      "Goose Patrol",
    ],
  },
  {
    id: "aesthetic",
    label: "Aesthetic",
    blurb: "Soft, dreamy names that pair well with pastel icons and cute channel symbols.",
    names: [
      "Lavender Haze",
      "Moonlit Garden",
      "Velvet Sky",
      "Stardust Café",
      "Cherry Blossom Lane",
      "Honey Moon",
      "Cloud Nine",
      "Pastel Dreams",
      "Golden Hour",
      "Willow Grove",
      "Starlit Haven",
      "Petal Soft",
      "Lunar Bloom",
      "Seafoam Days",
      "Daydream Club",
      "Rosewater",
      "Fairy Lights",
      "Peach Fuzz",
      "Aurora Room",
      "Misty Morning",
      "Sugar Clouds",
      "Butterfly Garden",
      "Sunflower Fields",
      "Milk & Honey",
      "Strawberry Moon",
    ],
  },
  {
    id: "gaming",
    label: "Gaming",
    blurb: "Names for clans, squads and gaming communities that sound good in voice chat.",
    names: [
      "Respawn Point",
      "Rogue Legion",
      "Crimson Raiders",
      "Pixel Syndicate",
      "Loot Goblins",
      "Clutch or Kick",
      "Frag Factory",
      "Iron Wolves",
      "Shadow Strike",
      "Final Boss Energy",
      "Lag Lords",
      "Neon Outlaws",
      "Headshot Haven",
      "Frostbite Clan",
      "Silent Squad",
      "Victory Lap",
      "The Lobby",
      "Combo Breakers",
      "GG Only",
      "One More Round",
      "Side Quest Society",
      "Critical Hit",
      "Ranked Anxiety",
      "Noob Academy",
      "Night Raid",
    ],
  },
  {
    id: "friends",
    label: "Friend group",
    blurb: "Cozy names for a private server with your closest friends.",
    names: [
      "The Couch",
      "Late Night Crew",
      "Group Chat HQ",
      "The Treehouse",
      "Sunday Club",
      "Bestie Bunker",
      "Pizza Party",
      "The Inner Circle",
      "Weekend Warriors",
      "Snack Gang",
      "The Den",
      "Sleepover Club",
      "Chill Zone",
      "Road Trip Radio",
      "Midnight Snacks",
      "The Usual Suspects",
      "Home Base",
      "Cozy Corner",
      "Squad Goals",
      "The Living Room",
    ],
  },
  {
    id: "study",
    label: "Study",
    blurb: "Calm, clear names for study groups, class servers and focus sessions.",
    names: [
      "Pomodoro Club",
      "The Study Hall",
      "Coffee & Notes",
      "Focus Room",
      "Lo-fi Library",
      "Deadline Survivors",
      "Flashcard Factory",
      "Brain Trust",
      "Quiet Hours",
      "Exam Season",
      "Bookworm Lounge",
      "Homework Help Desk",
      "Late Night Lab",
      "The Notebook",
      "Study Buddies",
      "Daily Grind",
      "Smart Cookies",
      "Midnight Oil",
      "Highlighter Club",
      "Steady Progress",
    ],
  },
  {
    id: "anime",
    label: "Anime",
    blurb: "Names with a Japanese twist for anime, manga and cosplay communities.",
    names: [
      "Sakura Shrine",
      "Ramen Dojo",
      "Kitsune Village",
      "Otaku Den",
      "Mochi Café",
      "Moonlit Shrine",
      "Isekai Inn",
      "Tanuki Tea House",
      "Bento Box",
      "Senpai Noticed",
      "Spirit Academy",
      "Onigiri Club",
      "Shinobi Guild",
      "Neo Tokyo Nights",
      "Manga Corner",
      "Cosplay Collective",
      "Weeb Lounge",
      "Wandering Spirits",
      "Kawaii Kingdom",
      "Filler Arc",
    ],
  },
  {
    id: "community",
    label: "Community",
    blurb: "Clear, welcoming names for public servers, creators and hobby groups.",
    names: [
      "The Makers Hub",
      "Creator Commons",
      "Pixel Artists Collective",
      "Code & Coffee",
      "Writers Workshop",
      "Open Mic Night",
      "The Creative Space",
      "Indie Dev Den",
      "Plant Parents",
      "Bookclub Central",
      "Music Makers",
      "Photo Walk",
      "Builders Network",
      "Film Buffs",
      "Tabletop Tavern",
      "Kind Corner",
      "Fitness Friends",
      "Explorers Guild",
      "Art Attack",
      "The Help Desk",
    ],
  },
];

/** Every name in the lists, used for the page title count. */
export const TOTAL_SERVER_NAMES = serverNameCategories.reduce((sum, c) => sum + c.names.length, 0);

/** "190+" style count, rounded down to the nearest ten. */
export const SERVER_NAME_COUNT = `${Math.floor(TOTAL_SERVER_NAMES / 10) * 10}+`;

/** Decorations wrapped around a styled name. "{}" is replaced with the name. */
export const NAME_FRAMES = {
  none: "{}",
  wings: "꧁ {} ꧂",
  stars: "✧ {} ✧",
  brackets: "『 {} 』",
  sparkle: "⋆｡˚ {} ˚｡⋆",
  hearts: "♡ {} ♡",
  crown: "♛ {} ♛",
  dots: "・{}・",
} as const;
export type NameFrame = keyof typeof NAME_FRAMES;

/** Convert `name` with a style from lib/fonts and wrap it in a frame. */
export function styleName(name: string, font: string, frame: NameFrame = "none"): string {
  const styled = font === "plain" ? name : convert(font, name);
  return NAME_FRAMES[frame].replace("{}", styled);
}

export const fancyServerNameExamples: readonly { name: string; font: string; frame: NameFrame }[] = [
  { name: "Moonlit Garden", font: "script", frame: "sparkle" },
  { name: "The Vault", font: "fraktur", frame: "none" },
  { name: "Rogue Legion", font: "bold-fraktur", frame: "wings" },
  { name: "Lavender Haze", font: "small-caps", frame: "stars" },
  { name: "Night Owls", font: "double-struck", frame: "none" },
  { name: "Pastel Dreams", font: "bold-script", frame: "hearts" },
  { name: "Ramen Dojo", font: "small-caps", frame: "brackets" },
  { name: "Neon District", font: "bold-sans", frame: "dots" },
  { name: "Kawaii Kingdom", font: "script", frame: "crown" },
  { name: "Afterglow", font: "monospace", frame: "stars" },
  { name: "Crimson Raiders", font: "bold-serif", frame: "wings" },
  { name: "Cloud Nine", font: "bubble", frame: "none" },
];

/** Channel names using thin dividers, to match a freshly named server. */
export const serverChannelIdeas: readonly string[] = [
  "📢︱announcements",
  "📜︱rules",
  "👋︱welcome",
  "💬︱general",
  "🎮︱gaming",
  "🎵︱music",
  "📸︱media",
  "😂︱memes",
  "🎨︱art",
  "📚︱study",
  "🤖︱bot-commands",
  "🎉︱events",
];

// ---------------------------------------------------------------------------
// Generator
// ---------------------------------------------------------------------------

/** Font choices in the generator. "plain" leaves the name as typed. */
export const GENERATOR_FONTS = [
  "plain",
  "bold-serif",
  "script",
  "fraktur",
  "small-caps",
  "double-struck",
] as const;
export type GeneratorFont = (typeof GENERATOR_FONTS)[number];

export interface ServerNameGeneratorStrings {
  keywordLabel: string;
  placeholder: string;
  theme: string;
  themes: Record<ServerTheme, string>;
  font: string;
  fonts: Record<GeneratorFont, string>;
  generate: string;
  generateMore: string;
  results: string;
  /** "{count} names" */
  count: string;
  copy: string;
  copied: string;
  /** Shown when a styled name is longer than Discord allows. */
  tooLong: string;
}

export const serverNameGeneratorStringsEn: ServerNameGeneratorStrings = {
  keywordLabel: "Word to build server names around (optional)",
  placeholder: "Type a word, like a game, hobby or inside joke (optional)",
  theme: "Theme",
  themes: {
    random: "Random",
    gaming: "Gaming",
    friends: "Friends",
    aesthetic: "Aesthetic",
    funny: "Funny",
    study: "Study",
    anime: "Anime",
    community: "Community",
  },
  font: "Font",
  fonts: {
    plain: "Plain",
    "bold-serif": "Bold",
    script: "Script",
    fraktur: "Gothic",
    "small-caps": "Small caps",
    "double-struck": "Double",
  },
  generate: "Generate server names",
  generateMore: "Generate more",
  results: "Server name ideas",
  count: "{count} names",
  copy: "Copy",
  copied: "Copied!",
  tooLong: "Too long for Discord",
};
