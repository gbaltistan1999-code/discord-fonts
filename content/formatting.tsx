import Link from "next/link";

const syntaxRows: [string, string, string][] = [
  ["Bold", "**text**", "Emphasis, keywords"],
  ["Italic", "*text* or _text_", "Tone, titles"],
  ["Bold italic", "***text***", "Strong emphasis"],
  ["Underline", "__text__", "Highlights (combine with others, e.g. __**text**__)"],
  ["Strikethrough", "~~text~~", "Corrections and jokes"],
  ["Spoiler", "||text||", "Hiding plot points or answers until clicked"],
  ["Inline code", "`text`", "Commands, short code"],
  ["Code block", "```text```", "Multi-line code, ASCII art, monospace text"],
  ["Quote", "> text", "Quoting one line"],
  ["Multi-line quote", ">>> text", "Quoting everything after it"],
  ["Headers", "# / ## / ### text", "Big, medium and small titles"],
  ["Subtext", "-# text", "Small gray footnotes"],
  ["List", "- item or 1. item", "Bulleted and numbered lists"],
  ["Masked link", "[label](https://example.com)", "Clickable text links"],
];

/** Guide copy for /discord-text-formatting, rendered below the tool. */
export function FormattingGuide() {
  return (
    <div className="prose-content">
      <h2 id="what-is-discord-markdown">What Is Discord Text Formatting?</h2>
      <p>
        Discord uses a lightweight markup language called <strong>markdown</strong>. You type a few symbols
        around your words and Discord turns them into bold, italic, underlined, crossed-out or hidden text
        when the message is sent. Markdown is built into Discord, so it works the same for everyone, but it
        only applies inside messages and a few profile fields like your About Me. It has no effect on
        usernames, display names or server names.
      </p>

      <h2 id="cheat-sheet">Discord Markdown Cheat Sheet</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Style</th>
              <th scope="col">Type this</th>
              <th scope="col">Good for</th>
            </tr>
          </thead>
          <tbody>
            {syntaxRows.map(([style, syntax, use]) => (
              <tr key={style}>
                <td>{style}</td>
                <td>
                  <code>{syntax}</code>
                </td>
                <td>{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="headers-and-subtext">Headers and Subtext</h2>
      <p>
        Start a line with <code>#</code>, <code>##</code> or <code>###</code> followed by a space to create a
        large, medium or small header. Headers are perfect for rules channels, announcements and event posts.
        For the opposite effect, start a line with <code>-#</code> and a space to make small, muted subtext,
        useful for footnotes, credits or “edited for clarity” notes. Both only work at the very start of a
        line.
      </p>

      <h2 id="colored-text">How to Make Colored Text in Discord</h2>
      <p>
        Discord has no color option for normal messages, but code blocks that use the <code>ansi</code>{" "}
        language support terminal color codes. The tool above builds these for you: pick a text color, an
        optional background, bold or underline, then copy the result. Behind the scenes it creates a block
        like this, where each color code starts with an invisible escape character:
      </p>
      <pre className="overflow-x-auto rounded-lg border border-border bg-surface-2 p-3 font-mono text-sm">
        {"```ansi\n[ESC][0;34mYour blue text[ESC][0m\n```"}
      </pre>
      <p>
        Colors display on the Discord desktop app and in the browser. The mobile apps currently show the text
        inside a plain code block without color, so don’t rely on color alone to convey meaning.
      </p>

      <h2 id="code-blocks">Code Blocks and Syntax Highlighting</h2>
      <p>
        Wrap text in three backticks for a code block. Add a language name right after the opening backticks,
        such as <code>```js</code>, <code>```py</code> or <code>```css</code>, and Discord adds syntax
        highlighting. Code blocks also keep spacing exactly as typed, which makes them handy for tables and
        text art.
      </p>

      <h2 id="combining-and-escaping">Combining and Escaping Formatting</h2>
      <p>
        Most styles can be stacked. <code>__***text***__</code> gives bold, italic and underlined text at
        once, and <code>||**text**||</code> hides bold text behind a spoiler. If you want to show the symbols
        themselves instead of formatting, put a backslash in front: <code>\*not italic\*</code>. Wrapping text
        in single backticks also displays symbols literally.
      </p>

      <h2 id="markdown-vs-unicode">Markdown vs. Unicode Discord Fonts</h2>
      <p>
        Markdown changes how Discord <em>displays</em> ordinary text, while Unicode fonts change the
        characters themselves. That is why markdown is best for readable formatting in messages, and Unicode
        styles are the only way to get bold, cursive or gothic lettering in a display name or channel name.
        Try both with the <Link href="/">Discord Fonts generator</Link> or jump to a specific look like{" "}
        <Link href="/discord-font-generator/bold">bold</Link> or{" "}
        <Link href="/discord-font-generator/cursive">cursive</Link>.
      </p>

      <h2 id="formatting-tips">Tips for Readable Formatting</h2>
      <ul>
        <li>Use headers to structure long posts instead of making everything bold.</li>
        <li>Always put spoiler tags around plot points, puzzle answers and anything sensitive.</li>
        <li>Keep color for emphasis and decoration, since mobile users won’t see it.</li>
        <li>Screen readers handle markdown well, so it is more accessible than fancy Unicode text.</li>
      </ul>
    </div>
  );
}
