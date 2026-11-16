/**
 * Invisible (blank) Unicode characters, shared by /invisible-text and the invisible-name blog post.
 * Built from character codes so editors, formatters and copy-paste can never strip them.
 */

export interface InvisibleChar {
  id: string;
  name: string;
  code: string;
  char: string;
}

export const HANGUL_FILLER: InvisibleChar = {
  id: "hangul",
  name: "Hangul Filler",
  code: "U+3164",
  char: String.fromCharCode(0x3164),
};
export const BRAILLE_BLANK: InvisibleChar = {
  id: "braille",
  name: "Braille Pattern Blank",
  code: "U+2800",
  char: String.fromCharCode(0x2800),
};
export const HALFWIDTH_HANGUL_FILLER: InvisibleChar = {
  id: "halfwidth",
  name: "Halfwidth Hangul Filler",
  code: "U+FFA0",
  char: String.fromCharCode(0xffa0),
};
export const ZERO_WIDTH_SPACE: InvisibleChar = {
  id: "zwsp",
  name: "Zero Width Space",
  code: "U+200B",
  char: String.fromCharCode(0x200b),
};

export const invisibleChars: readonly InvisibleChar[] = [
  HANGUL_FILLER,
  BRAILLE_BLANK,
  HALFWIDTH_HANGUL_FILLER,
  ZERO_WIDTH_SPACE,
];

/** A table row: a character plus a page-specific note ("When to use it" / "Best for"). */
export interface InvisibleCharRow extends InvisibleChar {
  note: string;
}
