/**
 * Unicode "font" engine. Nothing here is a real font: every style swaps plain
 * letters for look-alike Unicode characters (or adds combining marks), so the
 * output stays styled wherever it is pasted.
 *
 * To add a style: add a CharMap to `charMaps` (if it is a 1:1 letter swap) and
 * an entry to `fontStyles`. Everything else (filters, pages, tests) picks it up.
 */

export type CharMap = Readonly<Record<string, string>>;

export type FontCategory = "bold" | "cursive" | "gothic" | "decorative" | "aesthetic" | "glitch";

export const fontCategories: readonly { id: FontCategory; label: string }[] = [
  { id: "bold", label: "Bold" },
  { id: "cursive", label: "Cursive" },
  { id: "gothic", label: "Gothic" },
  { id: "decorative", label: "Decorative" },
  { id: "aesthetic", label: "Aesthetic" },
  { id: "glitch", label: "Glitch" },
];

export interface TransformOptions {
  /** Zalgo strength from 1 (subtle) to 10 (chaos). */
  zalgoIntensity?: number;
}

export type Transform = (text: string, options?: TransformOptions) => string;

export interface FontStyle {
  id: string;
  name: string;
  categories: readonly FontCategory[];
  transform: Transform;
}

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";

// ---------------------------------------------------------------------------
// Map builders (pure)
// ---------------------------------------------------------------------------

/** Build a map from contiguous code point blocks, with per-letter exceptions for reserved holes. */
export function rangeMap(
  upperStart: number | null,
  lowerStart: number | null,
  digitStart: number | null = null,
  exceptions: Record<string, string> = {},
): CharMap {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    if (upperStart !== null) map[UPPER[i]!] = String.fromCodePoint(upperStart + i);
    if (lowerStart !== null) map[LOWER[i]!] = String.fromCodePoint(lowerStart + i);
  }
  if (digitStart !== null) {
    for (let i = 0; i < 10; i++) map[DIGITS[i]!] = String.fromCodePoint(digitStart + i);
  }
  return { ...map, ...exceptions };
}

/** Zip two equal-length strings (by code point) into a map. */
export function zipMap(from: string, to: string): CharMap {
  const source = Array.from(from);
  const target = Array.from(to);
  if (source.length !== target.length) {
    throw new Error(`zipMap length mismatch: ${source.length} vs ${target.length}`);
  }
  const map: Record<string, string> = {};
  source.forEach((char, i) => {
    map[char] = target[i]!;
  });
  return map;
}

/** Map a 26-letter alphabet onto both cases (uppercase defaults to the lowercase set). */
export function alphabetMap(lower: string, upper: string = lower): CharMap {
  return { ...zipMap(LOWER, lower), ...zipMap(UPPER, upper) };
}

function mergeMaps(...maps: CharMap[]): CharMap {
  return Object.assign({}, ...maps) as CharMap;
}

// ---------------------------------------------------------------------------
// Text primitives (pure)
// ---------------------------------------------------------------------------

const segmenter =
  typeof Intl !== "undefined" && "Segmenter" in Intl
    ? new Intl.Segmenter("en", { granularity: "grapheme" })
    : null;

/** Split into user-perceived characters so emoji and accented letters stay intact. */
export function graphemes(text: string): string[] {
  if (segmenter) return Array.from(segmenter.segment(text), (s) => s.segment);
  return Array.from(text);
}

const isWhitespace = (char: string) => /^\s+$/.test(char);

/** Replace each character found in the map; leave everything else untouched. */
export function applyMap(text: string, map: CharMap): string {
  let out = "";
  for (const char of text) out += map[char] ?? char;
  return out;
}

/** Append a combining mark after every character (optionally skipping whitespace). */
export function combineEach(text: string, marks: string, includeSpaces = true): string {
  return graphemes(text)
    .map((g) => (g === "\n" || (!includeSpaces && isWhitespace(g)) ? g : g + marks))
    .join("");
}

export function reverseText(text: string): string {
  return graphemes(text).reverse().join("");
}

/** Put a separator between every character; word gaps are widened to stay readable. */
export function spaceOut(text: string, separator = " "): string {
  return text
    .split(/(\s+)/)
    .map((part) => (isWhitespace(part) ? part.replace(/[^\n]/g, "   ") : graphemes(part).join(separator)))
    .join("")
    .trim();
}

/** Small deterministic PRNG so server and client render identical zalgo output. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ZALGO_UP = Array.from("̍̎̄̅̿̑̆̐͒͗͑̇̈̊͂̓̈́͊͋͌̃̂̌͐̀́̋̏̒̓̔̽̉ͣͤͥͦͧͨͩͪͫͬͭͮͯ̾͛");
const ZALGO_MID = Array.from("̴̵̶̸̷̡̢̧̨̛̀́̕͘͜͟͢͝͞͠͡");
const ZALGO_DOWN = Array.from("̖̗̘̙̜̝̞̟̠̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎͓͔͕͖͙͚̣ͅ");

export const ZALGO_MIN = 1;
export const ZALGO_MAX = 10;
export const ZALGO_DEFAULT = 4;

export function clampZalgo(intensity: number | undefined): number {
  const value = Math.round(intensity ?? ZALGO_DEFAULT);
  return Math.min(ZALGO_MAX, Math.max(ZALGO_MIN, value));
}

/** "Glitch" text: stack random combining marks above, through and below each character. */
export function zalgo(text: string, intensity?: number): string {
  const level = clampZalgo(intensity);
  const random = mulberry32(0x5eed + level);
  const pick = (marks: string[]) => marks[Math.floor(random() * marks.length)]!;
  const between = (min: number, max: number) => min + Math.floor(random() * (max - min + 1));
  return graphemes(text)
    .map((g) => {
      if (isWhitespace(g)) return g;
      let out = g;
      for (let i = between(1, level); i > 0; i--) out += pick(ZALGO_UP);
      for (let i = between(0, Math.ceil(level / 4)); i > 0; i--) out += pick(ZALGO_MID);
      for (let i = between(1, level); i > 0; i--) out += pick(ZALGO_DOWN);
      return out;
    })
    .join("");
}

// ---------------------------------------------------------------------------
// Character maps: one per letter-swap style
// ---------------------------------------------------------------------------

const SMALL_CAPS = "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ";

const fullwidth: Record<string, string> = { " ": "　" };
for (let code = 0x21; code <= 0x7e; code++) {
  fullwidth[String.fromCharCode(code)] = String.fromCodePoint(code + 0xfee0);
}

const circledDigits = { "0": "⓪", ...zipMap("123456789", "①②③④⑤⑥⑦⑧⑨") };

export const charMaps = {
  boldSerif: rangeMap(0x1d400, 0x1d41a, 0x1d7ce),
  italicSerif: rangeMap(0x1d434, 0x1d44e, null, { h: "ℎ" }),
  boldItalicSerif: rangeMap(0x1d468, 0x1d482),
  sans: rangeMap(0x1d5a0, 0x1d5ba, 0x1d7e2),
  boldSans: rangeMap(0x1d5d4, 0x1d5ee, 0x1d7ec),
  italicSans: rangeMap(0x1d608, 0x1d622),
  boldItalicSans: rangeMap(0x1d63c, 0x1d656),
  script: rangeMap(0x1d49c, 0x1d4b6, null, {
    B: "ℬ",
    E: "ℰ",
    F: "ℱ",
    H: "ℋ",
    I: "ℐ",
    L: "ℒ",
    M: "ℳ",
    R: "ℛ",
    e: "ℯ",
    g: "ℊ",
    o: "ℴ",
  }),
  boldScript: rangeMap(0x1d4d0, 0x1d4ea),
  fraktur: rangeMap(0x1d504, 0x1d51e, null, {
    C: "ℭ",
    H: "ℌ",
    I: "ℑ",
    R: "ℜ",
    Z: "ℨ",
  }),
  boldFraktur: rangeMap(0x1d56c, 0x1d586),
  doubleStruck: rangeMap(0x1d538, 0x1d552, 0x1d7d8, {
    C: "ℂ",
    H: "ℍ",
    N: "ℕ",
    P: "ℙ",
    Q: "ℚ",
    R: "ℝ",
    Z: "ℤ",
  }),
  monospace: rangeMap(0x1d670, 0x1d68a, 0x1d7f6),
  fullwidth,
  smallCaps: zipMap(LOWER, SMALL_CAPS),
  smallCapsAll: alphabetMap(SMALL_CAPS),
  superscript: mergeMaps(
    alphabetMap("ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ", "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ"),
    zipMap("0123456789+-=()", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾"),
  ),
  subscript: mergeMaps(
    alphabetMap("ₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz"),
    zipMap("0123456789+-=()", "₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎"),
  ),
  circled: mergeMaps(rangeMap(0x24b6, 0x24d0), circledDigits),
  bubble: mergeMaps(rangeMap(0x24d0, 0x24d0), circledDigits),
  negativeCircled: mergeMaps(rangeMap(0x1f150, 0x1f150), { "0": "⓿" }, zipMap("123456789", "❶❷❸❹❺❻❼❽❾")),
  squared: rangeMap(0x1f130, 0x1f130),
  negativeSquared: rangeMap(0x1f170, 0x1f170),
  parenthesized: mergeMaps(rangeMap(0x1f110, 0x249c), zipMap("123456789", "⑴⑵⑶⑷⑸⑹⑺⑻⑼")),
  upsideDown: mergeMaps(
    alphabetMap("ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz", "∀ꓭƆꓷƎℲ⅁HIſꓘ˥WNOԀΌᴚS⊥∩ΛMX⅄Z"),
    zipMap("0123456789", "0ƖᄅƐㄣϛ9ㄥ86"),
    zipMap(".,'\"?!()[]{}<>_&;", "˙',„¿¡)(][}{><‾⅋؛"),
  ),
  mirrored: mergeMaps(
    alphabetMap("ɒdɔbɘʇϱʜiꞁʞlmnoqpɿꙅƚuvwxγƹ", "AᙠƆᗡƎꟻᎮHIႱꓘ⅃MИOꟼỌЯꙄTUVWXYƸ"),
    zipMap("()[]{}<>?", ")(][}{><⸮"),
  ),
  currency: alphabetMap("₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ"),
  squiggle: alphabetMap("ꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꎭꈤꂦᖘꆰꋪꌗ꓄ꀎᐯꅏꊼꌩꁴ"),
  softGlyphs: alphabetMap("αႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥ"),
  greekish: alphabetMap("αвcdєfghíjklmnσpqrstυvwхчz", "ΛBᄃDΣFGΉIJKᄂMПӨPQЯƧƬЦVЩXYZ"),
  fauxCyrillic: alphabetMap("аьсԁеfɡһіјкӏмпорԛгѕтцvшхуz", "ДБCDЕFGНІЈКLМИОРQЯЅТЦVШЖЧZ"),
  cherokee: alphabetMap("ᎪᏴᏟᎠᎬᖴᏀᎻᏆᎫᏦᏞᎷᏁᎾᏢᎤᏒՏᎢᏌᏉᏔ᙭ᎽᏃ"),
  accented: alphabetMap("áḃćďéḟǵĥíĵḱĺḿńóṕǫŕśťúṽẃẍýź", "ÁḂĆĎÉḞǴĤÍĴḰĹḾŃÓṔǪŔŚŤÚṼẂẌÝŹ"),
  syllabic: alphabetMap("ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ"),
} satisfies Record<string, CharMap>;

export type CharMapName = keyof typeof charMaps;

// ---------------------------------------------------------------------------
// Transform factories
// ---------------------------------------------------------------------------

const mapWith =
  (name: CharMapName): Transform =>
  (text) =>
    applyMap(text, charMaps[name]);

const marks =
  (mark: string, includeSpaces = false): Transform =>
  (text) =>
    combineEach(text, mark, includeSpaces);

const wrap =
  (prefix: string, suffix: string, inner: Transform = (t) => t): Transform =>
  (text, options) =>
    `${prefix}${inner(text, options)}${suffix}`;

/** Put a symbol between every character, spaces included (D✧i✧s✧c). */
const between =
  (separator: string, inner: Transform = (t) => t): Transform =>
  (text, options) =>
    inner(text, options)
      .split("\n")
      .map((line) => graphemes(line).join(separator))
      .join("\n");

/** Wrap each non-space character on its own, e.g. ⟨D⟩⟨i⟩. */
const eachChar =
  (prefix: string, suffix: string): Transform =>
  (text) =>
    graphemes(text)
      .map((g) => (isWhitespace(g) ? g : `${prefix}${g}${suffix}`))
      .join("");

const MIX_POOL: readonly CharMapName[] = [
  "boldSerif",
  "script",
  "circled",
  "smallCapsAll",
  "currency",
  "accented",
  "boldFraktur",
  "italicSerif",
  "softGlyphs",
  "syllabic",
];

/** "Random" text: each letter gets a different style, seeded so server and client agree. */
const mixed =
  (seed: number): Transform =>
  (text) => {
    const random = mulberry32(seed);
    return graphemes(text)
      .map((g) =>
        isWhitespace(g) ? g : applyMap(g, charMaps[MIX_POOL[Math.floor(random() * MIX_POOL.length)]!]),
      )
      .join("");
  };

const FRAME_EMOJI = [
  "👺",
  "😝",
  "😍",
  "🐒",
  "😈",
  "💢",
  "🐯",
  "😡",
  "💋",
  "⛵",
  "🍭",
  "♨️",
  "👽",
  "🦄",
  "🎃",
  "🍒",
];

/** Mixed letters between two emoji picked from the text itself, so the pair changes as you type. */
const randomEmoji: Transform = (text) => {
  let hash = 0;
  for (const char of text) hash = (hash * 31 + char.codePointAt(0)!) >>> 0;
  const random = mulberry32(hash);
  const pick = () => FRAME_EMOJI[Math.floor(random() * FRAME_EMOJI.length)]!;
  return `${pick()}${pick()} ${mixed(5)(text)} ${pick()}${pick()}`;
};

// ---------------------------------------------------------------------------
// Style registry (display order)
// ---------------------------------------------------------------------------

export const fontStyles: readonly FontStyle[] = [
  // Core letter styles
  { id: "bold-serif", name: "Bold", categories: ["bold"], transform: mapWith("boldSerif") },
  { id: "bold-sans", name: "Bold Sans", categories: ["bold"], transform: mapWith("boldSans") },
  { id: "italic", name: "Italic", categories: ["cursive"], transform: mapWith("italicSerif") },
  {
    id: "bold-italic",
    name: "Bold Italic",
    categories: ["bold", "cursive"],
    transform: mapWith("boldItalicSerif"),
  },
  { id: "script", name: "Script Cursive", categories: ["cursive"], transform: mapWith("script") },
  {
    id: "bold-script",
    name: "Bold Script",
    categories: ["bold", "cursive"],
    transform: mapWith("boldScript"),
  },
  { id: "fraktur", name: "Gothic Fraktur", categories: ["gothic"], transform: mapWith("fraktur") },
  {
    id: "bold-fraktur",
    name: "Bold Gothic",
    categories: ["gothic", "bold"],
    transform: mapWith("boldFraktur"),
  },
  {
    id: "double-struck",
    name: "Double-Struck",
    categories: ["aesthetic"],
    transform: mapWith("doubleStruck"),
  },
  { id: "monospace", name: "Monospace", categories: ["aesthetic"], transform: mapWith("monospace") },
  { id: "small-caps", name: "Small Caps", categories: ["aesthetic"], transform: mapWith("smallCaps") },
  { id: "small-caps-all", name: "Tiny Caps", categories: ["aesthetic"], transform: mapWith("smallCapsAll") },
  {
    id: "fullwidth",
    name: "Vaporwave Fullwidth",
    categories: ["aesthetic"],
    transform: mapWith("fullwidth"),
  },
  {
    id: "vaporwave-spaced",
    name: "Vaporwave Spaced",
    categories: ["aesthetic"],
    transform: (text) => spaceOut(applyMap(text, charMaps.fullwidth)),
  },
  { id: "sans-italic", name: "Sans Italic", categories: ["cursive"], transform: mapWith("italicSans") },
  {
    id: "sans-bold-italic",
    name: "Sans Bold Italic",
    categories: ["bold", "cursive"],
    transform: mapWith("boldItalicSans"),
  },
  { id: "sans", name: "Sans Serif", categories: ["aesthetic"], transform: mapWith("sans") },
  {
    id: "superscript",
    name: "Superscript",
    categories: ["aesthetic"],
    transform: mapWith("superscript"),
  },
  {
    id: "subscript",
    name: "Subscript",
    categories: ["aesthetic"],
    transform: mapWith("subscript"),
  },
  { id: "circled", name: "Circled", categories: ["decorative"], transform: mapWith("circled") },
  { id: "bubble", name: "Bubble", categories: ["decorative", "aesthetic"], transform: mapWith("bubble") },
  {
    id: "negative-circled",
    name: "Bubble Dark",
    categories: ["decorative", "bold"],
    transform: mapWith("negativeCircled"),
  },
  {
    id: "squared",
    name: "Squared",
    categories: ["decorative"],
    transform: mapWith("squared"),
  },
  {
    id: "negative-squared",
    name: "Squared Dark",
    categories: ["decorative", "bold"],
    transform: mapWith("negativeSquared"),
  },
  {
    id: "parenthesized",
    name: "Parenthesized",
    categories: ["decorative"],
    transform: mapWith("parenthesized"),
  },
  {
    id: "upside-down",
    name: "Upside Down",
    categories: ["glitch"],
    transform: (text) => reverseText(applyMap(text, charMaps.upsideDown)),
  },
  {
    id: "mirrored",
    name: "Mirrored",
    categories: ["glitch"],
    transform: (text) => reverseText(applyMap(text, charMaps.mirrored)),
  },
  { id: "reversed", name: "Reversed", categories: ["glitch"], transform: reverseText },
  { id: "strikethrough", name: "Strikethrough", categories: ["glitch"], transform: marks("̶", true) },
  { id: "underline", name: "Underline", categories: ["aesthetic"], transform: marks("̲", true) },
  {
    id: "double-underline",
    name: "Double Underline",
    categories: ["aesthetic"],
    transform: marks("̳", true),
  },
  { id: "slashed", name: "Slashed", categories: ["glitch"], transform: marks("̸") },
  {
    id: "overline",
    name: "Overline",
    categories: ["glitch"],
    transform: marks("̅", true),
  },
  {
    id: "wavy",
    name: "Wavy Underline",
    categories: ["glitch"],
    transform: marks("̰"),
  },
  { id: "dotted", name: "Dotted", categories: ["glitch"], transform: marks("̤") },
  {
    id: "zalgo",
    name: "Zalgo Glitch",
    categories: ["glitch"],
    transform: (text, options) => zalgo(text, options?.zalgoIntensity),
  },
  { id: "wide-spaced", name: "Wide Spaced", categories: ["aesthetic"], transform: (text) => spaceOut(text) },
  {
    id: "clap",
    name: "Clap Text",
    categories: ["aesthetic"],
    transform: (text) => text.trim().split(/\s+/).join(" 👏 "),
  },
  { id: "currency", name: "Currency", categories: ["decorative"], transform: mapWith("currency") },
  {
    id: "squiggle",
    name: "Squiggle",
    categories: ["decorative"],
    transform: mapWith("squiggle"),
  },
  { id: "soft-glyphs", name: "Soft Glyphs", categories: ["aesthetic"], transform: mapWith("softGlyphs") },
  { id: "greekish", name: "Greek Style", categories: ["decorative"], transform: mapWith("greekish") },
  {
    id: "faux-cyrillic",
    name: "Faux Cyrillic",
    categories: ["decorative"],
    transform: mapWith("fauxCyrillic"),
  },
  {
    id: "cherokee",
    name: "Runic Style",
    categories: ["gothic", "decorative"],
    transform: mapWith("cherokee"),
  },
  { id: "accented", name: "Accented", categories: ["aesthetic"], transform: mapWith("accented") },
  { id: "syllabic", name: "Syllabic", categories: ["decorative"], transform: mapWith("syllabic") },

  // Decorated wrappers (symbols around a base style)
  {
    id: "star-wings",
    name: "Star Wings",
    categories: ["decorative"],
    transform: wrap("★彡 ", " 彡★", mapWith("boldScript")),
  },
  {
    id: "javanese-frame",
    name: "Royal Frame",
    categories: ["decorative", "gothic"],
    transform: wrap("꧁ ", " ꧂", mapWith("fraktur")),
  },
  {
    id: "corner-brackets",
    name: "Corner Brackets",
    categories: ["decorative", "aesthetic"],
    transform: wrap("『 ", " 』", mapWith("smallCapsAll")),
  },
  {
    id: "lenticular",
    name: "Lenticular Brackets",
    categories: ["decorative", "bold"],
    transform: wrap("【 ", " 】", mapWith("boldSans")),
  },
  {
    id: "gothic-cross",
    name: "Gothic Cross",
    categories: ["gothic", "decorative"],
    transform: wrap("꧁༒☬ ", " ☬༒꧂", mapWith("boldFraktur")),
  },
  {
    id: "crown",
    name: "Crowned",
    categories: ["gothic", "decorative"],
    transform: wrap("♛ ", " ♛", mapWith("boldFraktur")),
  },
  {
    id: "gamer-tag",
    name: "Gamer Tag",
    categories: ["decorative", "bold"],
    transform: wrap("亗 ", " 亗", mapWith("boldItalicSans")),
  },
  {
    id: "crossbones",
    name: "Crossbones",
    categories: ["decorative", "bold"],
    transform: wrap("×͜× ", "", mapWith("boldItalicSans")),
  },
  {
    id: "kawaii",
    name: "Kawaii",
    categories: ["aesthetic", "decorative"],
    transform: wrap("꒰ ", " ꒱", mapWith("italicSerif")),
  },
  {
    id: "sparkles",
    name: "Sparkles",
    categories: ["aesthetic", "decorative"],
    transform: wrap("✧･ﾟ: *✧･ﾟ:* ", " *:･ﾟ✧*:･ﾟ✧", mapWith("script")),
  },
  {
    id: "flower-ribbon",
    name: "Flower Ribbon",
    categories: ["aesthetic", "decorative"],
    transform: wrap("⋆˚｡⋆୨୧˚ ", " ˚୨୧⋆｡˚⋆", mapWith("italicSerif")),
  },
  {
    id: "gradient-blocks",
    name: "Gradient Blocks",
    categories: ["aesthetic", "decorative"],
    transform: wrap("░▒▓█ ", " █▓▒░", mapWith("monospace")),
  },
  {
    id: "ornate",
    name: "Ornate",
    categories: ["decorative", "cursive"],
    transform: wrap("༺ ", " ༻", mapWith("boldScript")),
  },
  {
    id: "birds",
    name: "Birds",
    categories: ["aesthetic", "decorative"],
    transform: wrap("𓆩 ", " 𓆪", mapWith("script")),
  },
  {
    id: "music",
    name: "Music Notes",
    categories: ["decorative"],
    transform: wrap("♪♫ ", " ♫♪", mapWith("italicSans")),
  },
  {
    id: "wave",
    name: "Wave",
    categories: ["decorative"],
    transform: wrap("•°¯`•• ", " ••`¯°•", mapWith("doubleStruck")),
  },
  {
    id: "arrows",
    name: "Arrows",
    categories: ["decorative", "bold"],
    transform: wrap("»» ", " ««", mapWith("boldSans")),
  },
  {
    id: "hearts",
    name: "Hearts",
    categories: ["aesthetic", "decorative"],
    transform: wrap("♡ ", " ♡", mapWith("smallCapsAll")),
  },
  {
    id: "x-mark",
    name: "Crossed Swords",
    categories: ["decorative", "gothic"],
    transform: wrap("⚔ ", " ⚔", mapWith("fraktur")),
  },
  {
    id: "fire",
    name: "Fire",
    categories: ["decorative", "bold"],
    transform: wrap("🔥 ", " 🔥", mapWith("boldSerif")),
  },
  {
    id: "sakura",
    name: "Sakura",
    categories: ["aesthetic", "decorative"],
    transform: wrap("🌸 ", " 🌸", mapWith("script")),
  },
  {
    id: "skull",
    name: "Skull",
    categories: ["decorative", "glitch"],
    transform: wrap("💀 ", " 💀", mapWith("boldFraktur")),
  },
  {
    id: "sparkle-frame",
    name: "Sparkle Frame",
    categories: ["aesthetic", "decorative"],
    transform: wrap("✧˖° ", " °˖✧", mapWith("boldScript")),
  },
  {
    id: "heart-frame",
    name: "Heart Frame",
    categories: ["cursive", "decorative"],
    transform: wrap("♥ ", " ♥", mapWith("boldScript")),
  },
  {
    id: "flower-frame",
    name: "Flower Frame",
    categories: ["aesthetic", "decorative"],
    transform: wrap("✿❀ ", " ❀✿", mapWith("smallCapsAll")),
  },
  {
    id: "lightning",
    name: "Lightning",
    categories: ["gothic", "decorative"],
    transform: wrap("⚡ ", " ⚡", mapWith("boldFraktur")),
  },
  {
    id: "butterfly",
    name: "Butterfly",
    categories: ["aesthetic", "decorative"],
    transform: wrap("🦋 ", " 🦋", mapWith("smallCapsAll")),
  },
  {
    id: "retro-wave",
    name: "Retro Wave",
    categories: ["cursive", "decorative"],
    transform: wrap("¸,ø¤º°` ", " ´°º¤ø,¸", mapWith("boldScript")),
  },
  {
    id: "line-frame",
    name: "Line Frame",
    categories: ["bold", "decorative"],
    transform: wrap("——— ", " ———", mapWith("boldItalicSans")),
  },
  {
    id: "dash-frame",
    name: "Dash Frame",
    categories: ["cursive", "decorative"],
    transform: wrap("─── ", " ───", mapWith("boldScript")),
  },
  {
    id: "chain-frame",
    name: "Chain Frame",
    categories: ["decorative"],
    transform: wrap("➰ ", " ➰", mapWith("smallCapsAll")),
  },
  {
    id: "zigzag-frame",
    name: "Zigzag Frame",
    categories: ["cursive", "decorative"],
    transform: wrap("ʢ ", " ʢ", mapWith("italicSans")),
  },
  {
    id: "floral-heart",
    name: "Floral Heart",
    categories: ["cursive", "decorative"],
    transform: wrap("❦ ", " ❦", mapWith("boldScript")),
  },
  {
    id: "starburst",
    name: "Starburst",
    categories: ["aesthetic", "decorative"],
    transform: wrap("🌟·° ", " °·🌟", mapWith("smallCapsAll")),
  },
  {
    id: "hourglass",
    name: "Hourglass Frame",
    categories: ["cursive", "decorative"],
    transform: wrap("⧗ ", " ⧗", mapWith("boldScript")),
  },
  {
    id: "double-diamond",
    name: "Double Diamond",
    categories: ["decorative"],
    transform: wrap("◈ ", " ◈", mapWith("smallCapsAll")),
  },
  {
    id: "lozenge",
    name: "Lozenge Frame",
    categories: ["aesthetic", "decorative"],
    transform: wrap("◊ ", " ◊", mapWith("sans")),
  },
  {
    id: "bowtie",
    name: "Bowtie Frame",
    categories: ["cursive", "decorative"],
    transform: wrap("⋈ ", " ⋈", mapWith("italicSans")),
  },
  {
    id: "reference-mark",
    name: "Reference Mark",
    categories: ["gothic", "decorative"],
    transform: wrap("※ ", " ※", mapWith("boldFraktur")),
  },
  {
    id: "asterism",
    name: "Asterism Frame",
    categories: ["cursive", "decorative"],
    transform: wrap("⁂ ", " ⁂", mapWith("boldScript")),
  },
  {
    id: "circled-spaced",
    name: "Circled Spaced",
    categories: ["decorative"],
    transform: (text) => spaceOut(applyMap(text, charMaps.circled)),
  },

  // Emoji frames
  {
    id: "hibiscus",
    name: "Hibiscus",
    categories: ["aesthetic", "decorative"],
    transform: wrap("🌺 ", " 🌺", mapWith("smallCapsAll")),
  },
  {
    id: "ribbon",
    name: "Ribbon",
    categories: ["aesthetic", "cursive"],
    transform: wrap("🎀 ", " 🎀", mapWith("boldScript")),
  },
  {
    id: "gem",
    name: "Gem",
    categories: ["bold", "decorative"],
    transform: wrap("💎 ", " 💎", mapWith("boldItalicSans")),
  },
  {
    id: "rainbow",
    name: "Rainbow",
    categories: ["aesthetic"],
    transform: wrap("🌈 ", " 🌈", mapWith("sans")),
  },
  {
    id: "crown-emoji",
    name: "Crown Emoji",
    categories: ["gothic", "decorative"],
    transform: wrap("👑 ", " 👑", mapWith("boldFraktur")),
  },
  {
    id: "dizzy",
    name: "Dizzy",
    categories: ["cursive", "decorative"],
    transform: wrap("💫 ", " 💫", mapWith("boldScript")),
  },

  // Symbol between every letter
  {
    id: "sparkle-between",
    name: "Sparkle Between",
    categories: ["cursive", "decorative"],
    transform: between("✧", mapWith("boldScript")),
  },
  {
    id: "diamond-between",
    name: "Diamond Between",
    categories: ["decorative"],
    transform: between("◆", mapWith("smallCapsAll")),
  },
  {
    id: "snow-between",
    name: "Snow Between",
    categories: ["cursive", "decorative"],
    transform: between("❄", mapWith("italicSerif")),
  },
  {
    id: "music-between",
    name: "Music Between",
    categories: ["cursive", "decorative"],
    transform: between("♬", mapWith("boldScript")),
  },
  {
    id: "cross-between",
    name: "Cross Between",
    categories: ["gothic", "decorative"],
    transform: between("†", mapWith("boldFraktur")),
  },
  {
    id: "middle-dot",
    name: "Middle Dot",
    categories: ["bold", "cursive"],
    transform: between("·", mapWith("boldItalicSerif")),
  },
  {
    id: "bullet-between",
    name: "Bullet Between",
    categories: ["aesthetic"],
    transform: between("•", mapWith("smallCapsAll")),
  },
  {
    id: "wave-between",
    name: "Wave Between",
    categories: ["cursive", "decorative"],
    transform: between("⌣", mapWith("boldScript")),
  },
  {
    id: "tulip-between",
    name: "Tulip Between",
    categories: ["aesthetic", "decorative"],
    transform: between("🌷", mapWith("smallCapsAll")),
  },
  {
    id: "blossom-between",
    name: "Blossom Between",
    categories: ["cursive", "decorative"],
    transform: between("🌼", mapWith("boldScript")),
  },

  // Heart and symbol decorations
  {
    id: "sparkle-hearts",
    name: "Sparkle Hearts",
    categories: ["decorative"],
    transform: wrap("💖´ *•.¸♥¸.•** ", " **•.¸♥¸.•*´💖", marks("̇⁞")),
  },
  {
    id: "heart-arrows",
    name: "Heart Arrows",
    categories: ["decorative"],
    transform: wrap("♥♥♥.¸•♥`.•♥`¸ ", " ¸.•♥`.•♥`¸.♥♥♥", marks("̣̇→")),
  },
  {
    id: "heart-chain",
    name: "Heart Chain",
    categories: ["decorative"],
    transform: wrap("♥♡♥♡♥♡ ", " ♡♥♡♥♡♥", mixed(1)),
  },
  {
    id: "heart-brackets",
    name: "Heart Brackets",
    categories: ["decorative"],
    transform: wrap("•¤»((¯♥¯))«¤• ", " •¤»((¯♥¯))«¤•"),
  },
  {
    id: "heart-swirl",
    name: "Heart Swirl",
    categories: ["decorative"],
    transform: wrap('♡¨¨~^"°¹~•.„¸* ', ' *¸„.•~¹°"^~¨¨♡', mapWith("syllabic")),
  },
  {
    id: "heart-melody",
    name: "Heart Melody",
    categories: ["decorative"],
    transform: wrap("(¯`'•.¸♥♫♪♥(◠‿◠)♥♫♪♥¸.•'´¯) ", " (¯`'•.¸♥♫♪♥(◠‿◠)♥♫♪♥¸.•'´¯)", mapWith("subscript")),
  },
  {
    id: "checkered",
    name: "Checkered",
    categories: ["decorative"],
    transform: wrap("▀▄▀▄▀▄ ", " ▀▄▀▄▀▄", mapWith("squared")),
  },
  {
    id: "squared-melody",
    name: "Squared Melody",
    categories: ["decorative"],
    transform: wrap(".•♫•♬• ", " •♬•♫•.", mapWith("squared")),
  },
  {
    id: "angle-melody",
    name: "Angle Melody",
    categories: ["decorative"],
    transform: wrap("¸¸♬·¯·♩¸¸♪·¯·♫¸¸ ", " ¸¸♬·¯·♩¸¸♪·¯·♫¸¸", eachChar("⟨", "⟩")),
  },
  {
    id: "stardust",
    name: "Stardust",
    categories: ["bold", "decorative"],
    transform: wrap("★·.·´¯`·.·★ ", " ★·.·´¯`·.·★", mapWith("boldSerif")),
  },
  {
    id: "blade",
    name: "Blade",
    categories: ["decorative", "glitch"],
    transform: wrap("░▒▓█►─═ ", " ═─◄█▓▒░", marks("̇⁞")),
  },
  {
    id: "rainbow-hearts",
    name: "Rainbow Hearts",
    categories: ["decorative"],
    transform: wrap("💙💜💛🧡❤️ ", " ❤️🧡💛💜💙", marks("̊⁚")),
  },
  {
    id: "equalizer",
    name: "Equalizer",
    categories: ["decorative", "glitch"],
    transform: wrap("_▂▃▄▅▆▇█ ", " █▇▆▅▄▃▂_", marks("̣̇→")),
  },
  {
    id: "twinkle",
    name: "Twinkle",
    categories: ["decorative"],
    transform: wrap('~"*°•.~"*°• ', ' •°*"~.•°*"~'),
  },

  // Random mixes (a different style on every letter)
  {
    id: "random-bars",
    name: "Random Bars",
    categories: ["glitch", "decorative"],
    transform: wrap("ıllıllı ", " ıllıllı", mixed(2)),
  },
  { id: "random-emoji", name: "Random Emoji", categories: ["glitch", "decorative"], transform: randomEmoji },
  {
    id: "random-stars",
    name: "Random Stars",
    categories: ["glitch", "decorative"],
    transform: wrap("¤ (¯´☆✭.¸_)¤ ", " ¤(_¸.✭☆´¯) ¤", mixed(3)),
  },
  {
    id: "random-curls",
    name: "Random Curls",
    categories: ["glitch", "decorative"],
    transform: wrap("•´¯`•. ", " .•´¯`•", mixed(4)),
  },
];

// ---------------------------------------------------------------------------
// Lookup and conversion helpers
// ---------------------------------------------------------------------------

const styleIndex = new Map(fontStyles.map((style) => [style.id, style]));

export function getFontStyle(id: string): FontStyle | undefined {
  return styleIndex.get(id);
}

export function getStylesByCategory(category: FontCategory): FontStyle[] {
  return fontStyles.filter((style) => style.categories.includes(category));
}

export function convert(styleId: string, text: string, options?: TransformOptions): string {
  const style = styleIndex.get(styleId);
  if (!style) throw new Error(`Unknown font style: ${styleId}`);
  return style.transform(text, options);
}

/** Length as Discord users would count it (one per visible character, emoji included). */
export function visibleLength(text: string): number {
  return graphemes(text).length;
}

/** Display names and server nicknames are limited to 32 characters. */
export const DISCORD_NAME_LIMIT = 32;
