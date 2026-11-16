"use client";

import { useCopy } from "./ToastProvider";

/** Blank characters that Discord accepts in display names and nicknames. Escaped so they survive editing. */
const characters = [
  {
    name: "Hangul Filler",
    code: "U+3164",
    char: "ㅤ",
    use: "Try this first. The most widely used blank character for Discord names.",
  },
  {
    name: "Braille Pattern Blank",
    code: "U+2800",
    char: "⠀",
    use: "Backup option if the Hangul Filler is rejected.",
  },
  {
    name: "Halfwidth Hangul Filler",
    code: "U+FFA0",
    char: "ﾠ",
    use: "Second backup; narrower blank.",
  },
] as const;

/** Table of invisible characters, each with a one-tap Copy button. */
export function InvisibleCharacters() {
  const copy = useCopy();
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[36rem]">
        <thead>
          <tr>
            <th scope="col">Character</th>
            <th scope="col">Unicode</th>
            <th scope="col">Copy</th>
            <th scope="col">When to use it</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((c) => (
            <tr key={c.code}>
              <td>
                <strong>{c.name}</strong>
              </td>
              <td className="whitespace-nowrap">{c.code}</td>
              <td>
                <button
                  type="button"
                  onClick={() => copy(c.char, `${c.name} (invisible)`)}
                  aria-label={`Copy ${c.name} invisible character`}
                  className="min-h-11 rounded-lg bg-accent-solid px-4 text-sm font-semibold whitespace-nowrap text-on-accent transition-opacity hover:opacity-90"
                >
                  Copy
                </button>
              </td>
              <td>{c.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
