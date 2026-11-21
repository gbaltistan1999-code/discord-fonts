/**
 * Converters for /discord-big-text: emoji letters, emoji shortcodes and ASCII block banners.
 * Markdown styles (# headers, -# subtext) are simple prefixes and live in the component.
 */

const DIGIT_NAMES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
/** Gap between words in emoji output, wide enough to read as a word break. */
const WORD_GAP = "   ";

/** "é" -> "e", so accented letters still get an emoji or a banner letter. */
export function stripAccents(text: string): string {
  return text.normalize("NFD").replace(/\p{M}/gu, "");
}

/** Headers must stay on one line, so newlines become spaces. */
export function oneLine(text: string): string {
  return text.replace(/\s*\n\s*/g, " ").trim();
}

function emojiFor(ch: string): string | null {
  const upper = ch.toUpperCase();
  if (upper >= "A" && upper <= "Z") return String.fromCodePoint(0x1f1e6 + upper.charCodeAt(0) - 65);
  if (ch >= "0" && ch <= "9") return `${ch}️⃣`;
  if (ch === "!") return "❗";
  if (ch === "?") return "❓";
  return null;
}

function shortcodeFor(ch: string): string | null {
  const lower = ch.toLowerCase();
  if (lower >= "a" && lower <= "z") return `:regional_indicator_${lower}:`;
  if (ch >= "0" && ch <= "9") return `:${DIGIT_NAMES[Number(ch)]}:`;
  if (ch === "!") return ":exclamation:";
  if (ch === "?") return ":question:";
  return null;
}

/**
 * Spell text with emoji, one space between letters so pairs like "US" never merge into a flag.
 * Characters without an emoji are kept as they are.
 */
function spell(text: string, convert: (ch: string) => string | null): string {
  return text
    .split("\n")
    .map((line) =>
      line
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => [...stripAccents(word)].map((ch) => convert(ch) ?? ch).join(" "))
        .join(WORD_GAP),
    )
    .join("\n");
}

/** Regional indicator letters (🇭 🇪 🇱 🇱 🇴), keycap digits, ❗ and ❓. */
export function emojiLetters(text: string): string {
  return spell(text, emojiFor);
}

/** The same letters as Discord shortcodes (:regional_indicator_h: …). */
export function emojiShortcodes(text: string): string {
  return spell(text, shortcodeFor);
}

// ---------------------------------------------------------------------------
// ASCII banner: a 5-row block font. "#" marks a filled cell.
// ---------------------------------------------------------------------------

const FONT: Record<string, readonly string[]> = {
  A: [" ### ", "#   #", "#####", "#   #", "#   #"],
  B: ["#### ", "#   #", "#### ", "#   #", "#### "],
  C: [" ####", "#    ", "#    ", "#    ", " ####"],
  D: ["#### ", "#   #", "#   #", "#   #", "#### "],
  E: ["#####", "#    ", "#### ", "#    ", "#####"],
  F: ["#####", "#    ", "#### ", "#    ", "#    "],
  G: [" ####", "#    ", "#  ##", "#   #", " ####"],
  H: ["#   #", "#   #", "#####", "#   #", "#   #"],
  I: ["#####", "  #  ", "  #  ", "  #  ", "#####"],
  J: ["#####", "   # ", "   # ", "#  # ", " ##  "],
  K: ["#   #", "#  # ", "###  ", "#  # ", "#   #"],
  L: ["#    ", "#    ", "#    ", "#    ", "#####"],
  M: ["#   #", "## ##", "# # #", "#   #", "#   #"],
  N: ["#   #", "##  #", "# # #", "#  ##", "#   #"],
  O: [" ### ", "#   #", "#   #", "#   #", " ### "],
  P: ["#### ", "#   #", "#### ", "#    ", "#    "],
  Q: [" ### ", "#   #", "# # #", "#  # ", " ## #"],
  R: ["#### ", "#   #", "#### ", "#  # ", "#   #"],
  S: [" ####", "#    ", " ### ", "    #", "#### "],
  T: ["#####", "  #  ", "  #  ", "  #  ", "  #  "],
  U: ["#   #", "#   #", "#   #", "#   #", " ### "],
  V: ["#   #", "#   #", "#   #", " # # ", "  #  "],
  W: ["#   #", "#   #", "# # #", "## ##", "#   #"],
  X: ["#   #", " # # ", "  #  ", " # # ", "#   #"],
  Y: ["#   #", " # # ", "  #  ", "  #  ", "  #  "],
  Z: ["#####", "   # ", "  #  ", " #   ", "#####"],
  "0": [" ### ", "#  ##", "# # #", "##  #", " ### "],
  "1": ["  #  ", " ##  ", "  #  ", "  #  ", " ### "],
  "2": [" ### ", "#   #", "  ## ", " #   ", "#####"],
  "3": ["#### ", "    #", " ### ", "    #", "#### "],
  "4": ["#   #", "#   #", "#####", "    #", "    #"],
  "5": ["#####", "#    ", "#### ", "    #", "#### "],
  "6": [" ### ", "#    ", "#### ", "#   #", " ### "],
  "7": ["#####", "    #", "   # ", "  #  ", "  #  "],
  "8": [" ### ", "#   #", " ### ", "#   #", " ### "],
  "9": [" ### ", "#   #", " ####", "    #", " ### "],
  "!": ["#", "#", "#", " ", "#"],
  "?": [" ### ", "#   #", "  ## ", "     ", "  #  "],
  ".": [" ", " ", " ", " ", "#"],
  "-": ["   ", "   ", "###", "   ", "   "],
  " ": ["  ", "  ", "  ", "  ", "  "],
};

/** Longest banner we draw; wider ones wrap on phones and fall apart. */
export const BANNER_MAX = 10;

/** Characters the banner font can draw (letters are upper-cased first). */
export function bannerText(text: string): string {
  return [...stripAccents(oneLine(text)).toUpperCase()]
    .filter((ch) => ch in FONT)
    .join("")
    .replace(/ {2,}/g, " ")
    .trim()
    .slice(0, BANNER_MAX)
    .trimEnd();
}

/** Block-letter banner rows, without the code block. Empty when nothing can be drawn. */
export function asciiBanner(text: string): string {
  const chars = [...bannerText(text)];
  if (chars.length === 0) return "";
  const rows = [0, 1, 2, 3, 4].map((r) =>
    chars
      .map((ch) => FONT[ch]![r]!)
      .join("  ")
      .replace(/#/g, "█")
      .trimEnd(),
  );
  return rows.join("\n");
}

/** The banner wrapped in a code block, so Discord keeps the spacing. */
export function asciiBannerBlock(text: string): string {
  const banner = asciiBanner(text);
  return banner ? `\`\`\`\n${banner}\n\`\`\`` : "";
}
