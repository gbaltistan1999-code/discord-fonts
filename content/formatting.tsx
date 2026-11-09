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

const comboRows: [string, string][] = [
  ["Bold + italic", "***text***"],
  ["Underline + italic", "__*text*__"],
  ["Underline + bold", "__**text**__"],
  ["Underline + bold + italic", "__***text***__"],
  ["Bold + strikethrough", "~~**text**~~"],
  ["Bold spoiler", "||**text**||"],
];

const whereRows: [string, string][] = [
  ["Messages in servers and DMs", "Yes, everything"],
  ["Threads and forum posts", "Yes"],
  ["About Me (bio)", "Most of the basic styles"],
  ["Bot messages and embeds", "Yes"],
  ["Username and display name", "No"],
  ["Server nickname", "No"],
  ["Server, channel and role names", "No"],
];

/** The syntax column, shared with the translated cheat sheets. */
export const markdownSyntaxes: readonly string[] = syntaxRows.map((row) => row[1]);

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
      <p>
        Dates and times have their own syntax: <code>&lt;t:1793740800:R&gt;</code> becomes a live countdown
        that shows in each reader’s time zone. Make one with the{" "}
        <Link href="/discord-timestamp-generator">Discord timestamp generator</Link>.
      </p>

      <h2 id="formatting-shortcuts">Formatting Without Typing the Symbols</h2>
      <p>
        On the desktop app or in your browser, highlight some text in the message box and a small toolbar pops
        up with bold, italic, strikethrough, quote, code and spoiler buttons. <strong>Ctrl+B</strong> and{" "}
        <strong>Ctrl+I</strong> work too (Cmd on a Mac). The mobile apps don’t have this toolbar, so on a phone
        you type the symbols yourself. A quick way to remember underline: one underscore leans the text over
        (italic), two underscores draw a line under it.
      </p>

      <h2 id="headers-and-subtext">Headers and Subtext</h2>
      <p>
        Start a line with <code>#</code>, <code>##</code> or <code>###</code> followed by a space to create a
        large, medium or small header. Headers are perfect for rules channels, announcements and event posts.
        For the opposite effect, start a line with <code>-#</code> and a space to make small, muted subtext,
        useful for footnotes, credits or “edited for clarity” notes. Both only work at the very start of a
        line, and the space matters: <code>#Rules</code> just shows up as plain text.
      </p>

      <h2 id="lists-and-links">Lists and Masked Links</h2>
      <p>
        Start a line with <code>-</code> and a space for bullet points, or <code>1.</code> and a space for a
        numbered list. To tuck a point under another one, add two spaces before the dash. On desktop, press{" "}
        <strong>Shift+Enter</strong> to start a new line without sending the message halfway through.
      </p>
      <p>
        Masked links hide a long URL behind words: <code>[Grab a fancy font](https://discordfont.app)</code>{" "}
        shows only “Grab a fancy font” as a clickable link. Discord still shows a warning with the real address
        before opening it, so nobody gets tricked.
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
        inside a plain code block without color, so don’t rely on color alone to convey meaning. For the full
        color chart and copy-paste examples, see our guide to{" "}
        <Link href="/blog/discord-colored-text">colored text in Discord</Link>.
      </p>

      <h2 id="code-blocks">Code Blocks and Syntax Highlighting</h2>
      <p>
        Wrap text in three backticks for a code block. Add a language name right after the opening backticks,
        such as <code>```js</code>, <code>```py</code> or <code>```css</code>, and Discord adds syntax
        highlighting. Code blocks also keep spacing exactly as typed, which makes them handy for tables and
        text art.
      </p>
      <p>
        A favorite trick is <code>```diff</code>: start a line with <code>+</code> and it turns green, start
        one with <code>-</code> and it turns red. It’s an easy way to post win and lose lists or changelogs
        without any color codes.
      </p>

      <h2 id="spoiler-tags">Spoiler Tags</h2>
      <p>Spoilers hide text behind a dark bar until someone clicks it. There are three ways to add one:</p>
      <ol>
        <li>
          Wrap the text in two vertical bars on each side: <code>||the ending||</code>. The bar key is Shift +
          backslash on most keyboards.
        </li>
        <li>
          Type <code>/spoiler</code> followed by your message, and Discord hides the whole thing.
        </li>
        <li>On desktop, highlight the text and click the eye icon in the pop-up toolbar.</li>
      </ol>
      <p>
        Images and videos can be hidden too: after attaching a file, click the eye icon on the preview before
        sending (on mobile, tap the file and turn on <strong>Mark as spoiler</strong>). If spoilers show up
        already revealed for you, check <strong>User Settings &gt; Chat</strong>, where a setting controls when
        spoilers are shown.
      </p>

      <h2 id="combining-and-escaping">Combining and Escaping Formatting</h2>
      <p>
        Most styles can be stacked. Put underline, strikethrough and spoiler on the outside and the asterisks
        on the inside:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">You want</th>
              <th scope="col">Type this</th>
            </tr>
          </thead>
          <tbody>
            {comboRows.map(([want, syntax]) => (
              <tr key={want}>
                <td>{want}</td>
                <td>
                  <code>{syntax}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        If you want to show the symbols
        themselves instead of formatting, put a backslash in front: <code>\*not italic\*</code>. Wrapping text
        in single backticks also displays symbols literally. This is handy for names like{" "}
        <code>dark_knight_07</code> or sums like <code>5*4*3</code>, which Discord would otherwise turn partly
        italic.
      </p>

      <h2 id="where-formatting-works">Where Formatting Works</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Place</th>
              <th scope="col">Does formatting work?</th>
            </tr>
          </thead>
          <tbody>
            {whereRows.map(([place, works]) => (
              <tr key={place}>
                <td>{place}</td>
                <td>{works}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        So typing <code>**YourName**</code> in your display name just shows the asterisks. For styled names,
        see how to <Link href="/blog/how-to-change-font-on-discord">change your font on Discord</Link> with
        Unicode fonts.
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

      <h2 id="formatting-not-working">Formatting Not Working? Check These First</h2>
      <ul>
        <li>
          <strong>There’s a space next to the symbols.</strong> <code>** hello **</code> won’t work, but{" "}
          <code>**hello**</code> will.
        </li>
        <li>
          <strong>The header isn’t at the start of the line.</strong> Even one character before{" "}
          <code>#</code> or <code>-#</code> breaks it.
        </li>
        <li>
          <strong>You used one underscore instead of two.</strong> One gives italics, two gives an underline.
        </li>
        <li>
          <strong>The text is inside a code block.</strong> Code blocks ignore formatting on purpose.
        </li>
        <li>
          <strong>Your app is out of date.</strong> Headers, subtext and lists are newer features, so update or
          restart Discord.
        </li>
        <li>
          <strong>You’re trying it on a name.</strong> Names don’t support markdown, so use a Unicode font
          instead.
        </li>
      </ul>

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
