/**
 * Discord markdown helpers. Unlike the Unicode styles in fonts.ts these use
 * Discord's own formatting syntax, so they only render in messages (and a few
 * profile fields), never in names.
 */

export interface MarkdownFormat {
  id: string;
  name: string;
  /** Syntax hint shown to the user, e.g. "**text**". */
  syntax: string;
  apply: (text: string) => string;
}

const ESC = "\u001b";

/** Apply a prefix to every line, as Discord quotes, headers and subtext are line-based. */
export function prefixLines(text: string, prefix: string): string {
  return text
    .split("\n")
    .map((line) => `${prefix}${line}`)
    .join("\n");
}

/** Wrap each non-empty line so inline styles survive multi-line input. */
export function wrapLines(text: string, open: string, close: string = open): string {
  return text
    .split("\n")
    .map((line) => (line.trim() ? `${open}${line}${close}` : line))
    .join("\n");
}

export const markdownFormats: readonly MarkdownFormat[] = [
  { id: "bold", name: "Bold", syntax: "**text**", apply: (t) => wrapLines(t, "**") },
  { id: "italic", name: "Italic", syntax: "*text*", apply: (t) => wrapLines(t, "*") },
  { id: "bold-italic", name: "Bold Italic", syntax: "***text***", apply: (t) => wrapLines(t, "***") },
  { id: "underline", name: "Underline", syntax: "__text__", apply: (t) => wrapLines(t, "__") },
  { id: "strikethrough", name: "Strikethrough", syntax: "~~text~~", apply: (t) => wrapLines(t, "~~") },
  { id: "spoiler", name: "Spoiler", syntax: "||text||", apply: (t) => `||${t}||` },
  { id: "inline-code", name: "Inline Code", syntax: "`text`", apply: (t) => wrapLines(t, "`") },
  { id: "code-block", name: "Code Block", syntax: "```text```", apply: (t) => `\`\`\`\n${t}\n\`\`\`` },
  { id: "quote", name: "Quote", syntax: "> text", apply: (t) => prefixLines(t, "> ") },
  { id: "h1", name: "Big Header", syntax: "# text", apply: (t) => prefixLines(t, "# ") },
  { id: "h2", name: "Medium Header", syntax: "## text", apply: (t) => prefixLines(t, "## ") },
  { id: "h3", name: "Small Header", syntax: "### text", apply: (t) => prefixLines(t, "### ") },
  { id: "subtext", name: "Subtext", syntax: "-# text", apply: (t) => prefixLines(t, "-# ") },
];

export interface AnsiColor {
  code: number;
  name: string;
  /** Approximate color Discord's desktop client renders. */
  hex: string;
}

export const ansiTextColors: readonly AnsiColor[] = [
  { code: 30, name: "Gray", hex: "#4f545c" },
  { code: 31, name: "Red", hex: "#dc322f" },
  { code: 32, name: "Green", hex: "#859900" },
  { code: 33, name: "Yellow", hex: "#b58900" },
  { code: 34, name: "Blue", hex: "#268bd2" },
  { code: 35, name: "Pink", hex: "#d33682" },
  { code: 36, name: "Cyan", hex: "#2aa198" },
  { code: 37, name: "White", hex: "#ffffff" },
];

export const ansiBackgroundColors: readonly AnsiColor[] = [
  { code: 40, name: "Dark Blue", hex: "#002b36" },
  { code: 41, name: "Orange", hex: "#cb4b16" },
  { code: 42, name: "Slate", hex: "#586e75" },
  { code: 43, name: "Teal Gray", hex: "#657b83" },
  { code: 44, name: "Gray", hex: "#839496" },
  { code: 45, name: "Indigo", hex: "#6c71c4" },
  { code: 46, name: "Light Gray", hex: "#93a1a1" },
  { code: 47, name: "Cream", hex: "#fdf6e3" },
];

export interface AnsiOptions {
  color: number;
  background?: number | null;
  bold?: boolean;
  underline?: boolean;
}

/** Build a ```ansi code block. Discord renders the colors on desktop and web. */
export function ansiBlock(text: string, { color, background, bold, underline }: AnsiOptions): string {
  const codes = [bold ? 1 : 0];
  if (underline) codes.push(4);
  codes.push(color);
  if (background) codes.push(background);
  return `\`\`\`ansi\n${ESC}[${codes.join(";")}m${text}${ESC}[0m\n\`\`\``;
}
