export type FontStyle = { name: string; convert: (s: string) => string };

type CharMap = Record<string, string>;

const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const a = "abcdefghijklmnopqrstuvwxyz";
const D = "0123456789";
const cp = (n: number) => String.fromCodePoint(n);
const chars = (s: string) => Array.from(s);

/** Build a map from consecutive Unicode ranges (upper, lower, optional digits) plus exceptions. */
function range(upper: number, lower: number, digit: number | null, ex: CharMap = {}): CharMap {
  const m: CharMap = {};
  for (let i = 0; i < 26; i++) {
    m[A[i]] = cp(upper + i);
    m[a[i]] = cp(lower + i);
  }
  if (digit !== null) for (let i = 0; i < 10; i++) m[D[i]] = cp(digit + i);
  return { ...m, ...ex };
}

function pairs(from: string, to: string): CharMap {
  const f = chars(from);
  const t = chars(to);
  const m: CharMap = {};
  f.forEach((c, i) => (m[c] = t[i]));
  return m;
}

/** Lowercase string + optional uppercase string, 26 characters each. */
function both(lo: string, up?: string): CharMap {
  const l = chars(lo);
  const u = chars(up ?? lo);
  const m: CharMap = {};
  for (let i = 0; i < 26; i++) {
    m[a[i]] = l[i];
    m[A[i]] = u[i];
  }
  return m;
}

const mapper = (m: CharMap) => (s: string) => chars(s).map((c) => m[c] ?? c).join("");
const combine = (mark: string, skipSpaces = false) => (s: string) =>
  chars(s)
    .map((c) => (skipSpaces && c === " " ? c : c + mark))
    .join("");

const circledDigits = (m: CharMap) => {
  m["0"] = "\u24EA";
  for (let i = 1; i < 10; i++) m[D[i]] = cp(0x2460 + i - 1);
  return m;
};

const squared: CharMap = {};
for (let i = 0; i < 26; i++) {
  squared[A[i]] = cp(0x1f130 + i);
  squared[a[i]] = cp(0x1f130 + i);
}

const upsideDown = pairs(
  a + A + "?!.,'",
  "ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎzɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz¿¡˙'‘"
);

const smallCapsLower = "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ";

const maps: Record<string, CharMap> = {
  Bold: range(0x1d400, 0x1d41a, 0x1d7ce),
  Italic: range(0x1d434, 0x1d44e, null, { h: "\u210E" }),
  "Bold italic": range(0x1d468, 0x1d482, null),
  Script: range(0x1d49c, 0x1d4b6, null, {
    B: "\u212C", E: "\u2130", F: "\u2131", H: "\u210B", I: "\u2110", L: "\u2112",
    M: "\u2133", R: "\u211B", e: "\u212F", g: "\u210A", o: "\u2134",
  }),
  "Bold script": range(0x1d4d0, 0x1d4ea, null),
  Fraktur: range(0x1d504, 0x1d51e, null, {
    C: "\u212D", H: "\u210C", I: "\u2111", R: "\u211C", Z: "\u2128",
  }),
  "Double-struck": range(0x1d538, 0x1d552, 0x1d7d8, {
    C: "\u2102", H: "\u210D", N: "\u2115", P: "\u2119", Q: "\u211A", R: "\u211D", Z: "\u2124",
  }),
  Monospace: range(0x1d670, 0x1d68a, 0x1d7f6),
  "Sans bold": range(0x1d5d4, 0x1d5ee, 0x1d7ec),
  "Sans italic": range(0x1d608, 0x1d622, null),
  Circled: circledDigits(range(0x24b6, 0x24d0, null)),
  Squared: squared,
  Fullwidth: range(0xff21, 0xff41, 0xff10, { " ": "\u3000" }),
  "Small caps": pairs(a, smallCapsLower),
  "Negative circled": range(0x1f150, 0x1f150, null),
  "Negative squared": range(0x1f170, 0x1f170, null),
  Parenthesized: both("⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵"),
  Superscript: both("ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ", "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ"),
  Accents: both("áḃćďéḟǵĥíĵḱĺḿńóṕǫŕśťúṽẃẍýź", "ÁḂĆĎÉḞǴĤÍĴḰĹḾŃÓṔǪŔŚŤÚṼẂẌÝŹ"),
  Squiggle: both("ꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꎭꈤꂦᖘꆰꋪꌗ꓄ꀎᐯꅏꉧꌩꁴ"),
  "Cherokee mix": both("ᎪᏴᏟᎠᎬᖴᏀᏂᎥᎫᏦᏞᎷᏁᎾᏢᏆᏒՏᎢᏌᏉᏔ᙭ᎽᏃ"),
  "Soft glyphs": both("αႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥ"),
  "Mixed symbols": both("ɑɓƈɗɛʄɠɦɨʝƙɭɱɳσρϙɾʂƚʊʋɯxʏʐ", "ΔβCDΣFGHIJKLMNΘPQRSTUVWXYZ"),
  "Cyrillic mix": both("аЬсԁеfgһіјкӏmпорԛгѕtцvшхуz", "ДБCDЕFGНІЈКLМИОРQЯЅТЦVШЖЧZ"),
  "Bold gothic": range(0x1d56c, 0x1d586, null),
  "Sans bold italic": range(0x1d63c, 0x1d656, null),
  "Full small caps": both(smallCapsLower),
  "Bubble dark": circledDigits(range(0x1f150, 0x24d0, null)),
  "Superscript lowercase": both("ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ"),
};

const fns: Record<string, (s: string) => string> = {};
for (const k of Object.keys(maps)) fns[k] = mapper(maps[k]);

fns["Upside down"] = (s) =>
  chars(s)
    .map((c) => upsideDown[c.toLowerCase()] ?? c)
    .reverse()
    .join("");
fns["Strikethrough"] = combine("\u0336");
fns["Underline"] = combine("\u0332");
fns["Spaced out"] = (s) => chars(s).join(" ");
fns["Plain"] = (s) => s;

// Order matches the original page.
const order = [
  "Bold", "Italic", "Bold italic", "Script", "Bold script", "Fraktur", "Double-struck", "Monospace",
  "Sans bold", "Sans italic", "Circled", "Squared", "Fullwidth", "Small caps", "Upside down",
  "Strikethrough", "Underline", "Spaced out", "Negative circled", "Negative squared", "Parenthesized",
  "Superscript", "Accents", "Squiggle", "Cherokee mix", "Soft glyphs", "Mixed symbols", "Cyrillic mix",
  "Bold gothic", "Sans bold italic", "Full small caps", "Bubble dark", "Superscript lowercase",
];

const styles: FontStyle[] = order.map((name) => ({ name, convert: fns[name] }));

// Combining-mark styles.
(
  [
    ["Slash through", "\u0338"],
    ["Double underline", "\u0333"],
    ["Overline", "\u0305"],
    ["Dotted below", "\u0324"],
    ["Wavy", "\u0330"],
    ["Crossed", "\u0337"],
  ] as const
).forEach(([name, mark]) => styles.push({ name, convert: combine(mark, true) }));

// Zalgo-style "Creepy".
const up = "\u030d\u030e\u0304\u0305\u033f\u0311\u0306\u0310\u0352\u0357\u0351\u0307\u0308\u030a\u0342\u0343\u0344\u034a\u034b\u034c\u0303\u0302\u030c\u0350\u0300\u0301\u030b\u030f\u0312\u0313\u0314\u033d\u0309\u0363".split("");
const dn = "\u0316\u0317\u0318\u0319\u031c\u031d\u031e\u031f\u0320\u0324\u0325\u0326\u0329\u032a\u032b\u032c\u032d\u032e\u032f\u0330\u0331\u0332\u0333\u0339\u033a\u033b\u033c".split("");
styles.push({
  name: "Creepy",
  convert: (s) =>
    chars(s)
      .map((c, i) => {
        if (c === " ") return c;
        let r = c;
        for (let j = 0; j < 3; j++) r += up[(i * 7 + j * 5) % up.length] + dn[(i * 3 + j * 4) % dn.length];
        return r;
      })
      .join(""),
});

// Decorated: a base style wrapped in symbols or emoji.
const bases = [
  "Script", "Bold script", "Italic", "Fraktur", "Bold", "Squiggle", "Small caps", "Double-struck",
  "Mixed symbols", "Sans bold", "Soft glyphs", "Bold italic", "Monospace", "Accents", "Cyrillic mix",
];
const decos: [string, string][] = [
  ["🎀 ", " 🎀"], ["★ 🎀 ", " 🎀 ★"], ["🍫 ⋆ 🍒 🎀 ", " 🎀 🍒 ⋆ 🍫"], ["💙 🫶 ", " 🌷 🐠"],
  ["🍓 🥺 ", " 💢 🐊"], ["░▒▓█ ", " █▓▒░"], ["⋆ ˚｡⋆୨୧˚ ", " ˚୨୧⋆｡˚ ⋆"], ["•?((¯°·._.• ", " •._.·°¯))؟•"],
  ["꧁ ", " ꧂"], ["☆彡 ", " 彡☆"], ["⋆.˚ ✮ ", " ✮ ˚.⋆"], ["꒰ ", " ꒱"], ["『 ", " 』"], ["【 ", " 】"],
  ["★·.·´¯`·.·★ ", " ★·.·´¯`·.·★"], ["♡ ", " ♡"], ["༺ ", " ༻"], ["✧･ﾟ: *✧･ﾟ:* ", " *:･ﾟ✧*:･ﾟ✧"],
  ["𓆩 ", " 𓆪"], ["♪ ♫ ", " ♫ ♪"], ["🔥 ", " 🔥"], ["👑 ", " 👑"], ["💀 ", " 💀"], ["🌸 ", " 🌸"],
  ["⚡ ", " ⚡"], ["🦋 ", " 🦋"], ["✨ ", " ✨"], ["❄️ ", " ❄️"], ["🎮 ", " 🎮"], ["🌙 ", " 🌙"],
  ["💜 ", " 💜"], ["🐉 ", " 🐉"], ["☠️ ", " ☠️"], ["♛ ", " ♛"], ["🌷 ", " 🐠"], ["✩ 🎀 ", " 🎀 ✩"],
  ["›››  ", " ‹‹‹"], ["⟬ ", " ⟭"], ["ᯓ★ ", " ★ᯓ"], ["🍒 ", " 🍒"],
];
decos.forEach(([pre, post], i) => {
  const base = fns[bases[i % bases.length]];
  styles.push({ name: "Decorated", convert: (s) => pre + base(s) + post });
});

// Nickname frames.
const nicknames: [string, string, string][] = [
  ["꧁༒☬", "☬༒꧂", "Plain"],
  ["『", "』ツ", "Full small caps"],
  ["亗 ", " 亗", "Sans bold italic"],
  ["★彡[", "]彡★", "Bold italic"],
  ["乂", "乂", "Full small caps"],
  ["么", "么", "Fullwidth"],
  ["×͜× ", "", "Sans bold italic"],
  ["༺♡༻ ", "", "Bold script"],
  ["꧁ঔৣ☬✞ ", " ✞☬ঔৣ꧂", "Bold gothic"],
];
nicknames.forEach(([pre, post, base]) => {
  styles.push({ name: "Nickname", convert: (s) => pre + fns[base](s) + post });
});

export const fontStyles: FontStyle[] = styles;
