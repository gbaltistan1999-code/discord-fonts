import Image from "next/image";
import Link from "next/link";
import { AnsiCodeBlock } from "@/components/AnsiCodeBlock";
import type { BlogPost } from ".";

/** The invisible escape character (U+001B) that starts every ANSI color instruction. */
const E = "\u001b";

const textColors = [
  ["30", "Gray"],
  ["31", "Red"],
  ["32", "Green"],
  ["33", "Yellow"],
  ["34", "Blue"],
  ["35", "Pink"],
  ["36", "Cyan"],
  ["37", "White"],
] as const;

const backgroundColors = [
  ["40", "Firefly dark blue"],
  ["41", "Orange"],
  ["42", "Marble blue"],
  ["43", "Greyish turquoise"],
  ["44", "Gray"],
  ["45", "Indigo"],
  ["46", "Light gray"],
  ["47", "White"],
] as const;

const fontsGuide = <Link href="/blog/how-to-change-font-on-discord">how to change your font on Discord</Link>;

export const discordColoredText: BlogPost = {
  slug: "discord-colored-text",
  title: "How to Write Colored Text in Discord (Easy 2026 Guide)",
  description:
    "Learn how to type colored text in Discord using ANSI code blocks. Full color code chart, copy-paste examples, and fixes for when colors don't show up.",
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  readingMinutes: 7,
  hideGeneratorCta: true,
  faqs: [
    {
      question: "Can you change text color in Discord without code?",
      answer:
        "Not inside Discord itself. The easiest no-code option is to copy one of the ready-made examples in this guide, swap in your own words, and paste it into Discord.",
    },
    {
      question: "How do I make red text in Discord?",
      answer:
        "Use an ANSI code block with color code 31, like [ESC][0;31mYour text, or start a line with a minus sign (-) inside a diff code block.",
    },
    {
      question: "Can I use custom hex colors like #FF5733?",
      answer:
        "No. Discord's ANSI support is limited to the 8 text colors and 8 background colors in the chart above.",
    },
    {
      question: "Does colored text work in usernames or channel names?",
      answer:
        "No. ANSI colors only work inside code blocks in messages. Usernames, display names and channel names don't support color, but you can still style them with Unicode fonts.",
    },
    {
      question: "Can I get banned for using colored text?",
      answer:
        "No. ANSI code blocks are a built-in Discord feature. Just follow each server's rules about spam and formatting.",
    },
  ],
  body: (
    <>
      <p>
        You can write colored text in Discord, even though there&apos;s no color button anywhere in the app.
        The trick is a special code block called <strong>ANSI</strong>, which lets you paint words red, green,
        blue, yellow and more, right inside a normal message.
      </p>
      <p>
        If you&apos;ve ever seen someone post a bright red warning or a rainbow-style announcement in a
        server, this is how they did it. In this guide you&apos;ll learn exactly how ANSI works, get a full
        color chart, and copy ready-made examples you can paste straight into Discord.
      </p>
      <p>
        Want to skip the codes? Jump to the <a href="#examples">copy-paste examples</a>. Every one has a copy
        button that includes the hidden escape character, so it works the moment you paste it.
      </p>

      <figure>
        <Image
          src="/blog/discord-colored-text-examples.webp"
          alt="Discord colored text examples: red, green, yellow, blue, pink and cyan text, bold and underlined text, background colors, and green and red diff lines"
          width={1200}
          height={698}
          unoptimized
          className="h-auto w-full rounded-xl"
        />
        <figcaption className="mt-2 text-sm text-muted">
          How ANSI and diff code blocks look on Discord desktop.
        </figcaption>
      </figure>

      <h2>How colored text in Discord works</h2>
      <p>
        Discord uses Markdown for formatting. Wrapping text in three backticks (<code>```</code>) creates a
        code block, and adding a language name after the backticks tells Discord how to highlight it. When
        that language is <code>ansi</code>, Discord reads special color instructions inside the block and
        shows your text in color.
      </p>
      <p>Every color instruction has the same shape:</p>
      <p>
        <code>[ESC][FORMAT;COLORm</code>
      </p>
      <ul>
        <li>
          <strong>ESC</strong> is an invisible &ldquo;escape&rdquo; character (Unicode U+001B). You can&apos;t
          type it on a normal keyboard, which is why most people copy it from an example.
        </li>
        <li>
          <strong>FORMAT</strong> is a number for style: 0 = normal, 1 = bold, 4 = underline.
        </li>
        <li>
          <strong>COLOR</strong> is a number from 30 to 37 for text color, or 40 to 47 for background color.
        </li>
        <li>
          <strong>m</strong> closes the instruction. Everything after it takes the new color until you change
          it or reset it with <code>[ESC][0m</code>.
        </li>
      </ul>
      <p>
        So <code>[ESC][1;31m</code> means &ldquo;bold red&rdquo;, and <code>[ESC][0;34m</code> means
        &ldquo;normal blue&rdquo;.
      </p>

      <h2>How to write colored text in Discord, step by step</h2>
      <ol>
        <li>Open a message box in any server channel or DM on Discord desktop or in your browser.</li>
        <li>
          <strong>Start an ANSI code block.</strong> Type three backticks followed by <code>ansi</code>, then
          press <strong>Shift + Enter</strong> to go to a new line.
        </li>
        <li>
          <strong>Add a color code.</strong> Paste the escape character followed by your format and color, for
          example <code>[ESC][1;32m</code> for bold green.
        </li>
        <li>
          <strong>Type your text</strong> right after the <code>m</code>.
        </li>
        <li>
          <strong>Reset the color (optional).</strong> Add <code>[ESC][0m</code> before any text you want back
          in the default color.
        </li>
        <li>
          <strong>Close the code block</strong> with three more backticks on a new line, then press Enter to
          send.
        </li>
      </ol>
      <p>Your finished message looks like this before you send it:</p>
      <AnsiCodeBlock label="Bold green text" lines={[`${E}[1;32mThis text is bold green`]} />
      <p>
        The fastest way to get the escape character is to hit <strong>Copy</strong> on any example in this
        article, then change the words to your own.
      </p>

      <h2>Discord ANSI color codes chart</h2>
      <p>
        Discord supports 8 text colors, 8 background colors and 3 formats. Mix them freely, separated by
        semicolons.
      </p>
      <h3>Text colors</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Color</th>
              <th scope="col">Example</th>
            </tr>
          </thead>
          <tbody>
            {textColors.map(([code, name]) => (
              <tr key={code}>
                <td>{code}</td>
                <td>{name}</td>
                <td>
                  <code>[ESC][0;{code}m</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Background colors</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Color</th>
              <th scope="col">Example</th>
            </tr>
          </thead>
          <tbody>
            {backgroundColors.map(([code, name]) => (
              <tr key={code}>
                <td>{code}</td>
                <td>{name}</td>
                <td>
                  <code>[ESC][0;{code}m</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Formats</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>Normal (also resets everything)</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Bold</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Underline</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        To combine all three, list them in one instruction. For example, <code>[ESC][1;4;33;40m</code> gives
        bold, underlined yellow text on a dark blue background.
      </p>

      <h2 id="examples">Copy-paste colored text examples</h2>
      <p>
        Hit <strong>Copy</strong> on any block below, paste it into Discord, and change the words to your own.
        The hidden escape character comes along with it.
      </p>
      <h3>Red warning message</h3>
      <AnsiCodeBlock label="Red warning" lines={[`${E}[1;31mWARNING: Read the rules before posting!`]} />
      <h3>Server announcement with mixed colors</h3>
      <AnsiCodeBlock
        label="Server announcement"
        lines={[
          `${E}[1;33mANNOUNCEMENT${E}[0m`,
          `${E}[0;37mGame night starts at ${E}[1;32m8 PM${E}[0;37m this Friday.`,
        ]}
      />
      <h3>Highlighted text with a background</h3>
      <AnsiCodeBlock label="Highlighted text" lines={[`${E}[0;37;45m New role unlocked! ${E}[0m`]} />
      <h3>Rainbow-style text</h3>
      <AnsiCodeBlock
        label="Rainbow text"
        lines={[`${E}[0;31mR${E}[0;33mA${E}[0;32mI${E}[0;36mN${E}[0;34mB${E}[0;35mO${E}[0;31mW`]}
      />
      <h3>Bold underlined heading</h3>
      <AnsiCodeBlock label="Bold underlined heading" lines={[`${E}[1;4;36mServer Rules`]} />

      <h2>Other ways to color text in Discord</h2>
      <p>
        Before ANSI support, people used programming-language syntax highlighting to fake colors. A few of
        these tricks still work, but they&apos;re limited and less predictable.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-[36rem]">
          <thead>
            <tr>
              <th scope="col">Method</th>
              <th scope="col">How to use it</th>
              <th scope="col">Color you get</th>
              <th scope="col">Reliability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ANSI</td>
              <td>
                <code>```ansi</code> + color codes
              </td>
              <td>Any of 8 text and 8 background colors</td>
              <td>Best, works on desktop and web</td>
            </tr>
            <tr>
              <td>Diff</td>
              <td>
                <code>```diff</code> and start a line with + or -
              </td>
              <td>Green (+) or red (-)</td>
              <td>Good, works on most devices</td>
            </tr>
            <tr>
              <td>Fix</td>
              <td>
                <code>```fix</code>
              </td>
              <td>Yellow</td>
              <td>Inconsistent</td>
            </tr>
            <tr>
              <td>CSS / YAML / INI tricks</td>
              <td>Language-specific symbols</td>
              <td>Varies</td>
              <td>Often broken by Discord updates</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>The diff method is handy for quick green or red lines:</p>
      <AnsiCodeBlock label="Diff (green and red)" language="diff" lines={["+ Approved", "- Denied"]} />
      <p>For anything more colorful, ANSI is the only method Discord officially supports.</p>

      <h2>Does colored text work on Discord mobile?</h2>
      <p>
        Mostly no. ANSI colors display on Discord desktop and in the browser, but the iPhone and Android apps
        usually show the text in a plain gray code block. Your message still sends, and anyone on desktop will
        see the colors.
      </p>
      <p>
        You can still send colored text from your phone: open this page, copy a finished example, paste it
        into Discord, and send. Desktop users will see it in full color.
      </p>

      <h2>Why your colored text isn&apos;t showing</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Problem</th>
              <th scope="col">Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                You see <code>[0;31m</code> as plain text
              </td>
              <td>The escape character is missing. Copy an example instead of typing [ESC].</td>
            </tr>
            <tr>
              <td>The whole block is gray</td>
              <td>
                Check you wrote <code>ansi</code> right after the opening backticks, with no space.
              </td>
            </tr>
            <tr>
              <td>Colors run into the next line</td>
              <td>
                Add a reset code <code>[ESC][0m</code> where the color should stop.
              </td>
            </tr>
            <tr>
              <td>Nothing is colored on your phone</td>
              <td>Mobile apps don&apos;t render ANSI yet. Check on desktop.</td>
            </tr>
            <tr>
              <td>You want colored text in your name</td>
              <td>
                Not possible. ANSI only works in messages. Use <Link href="/">fancy fonts</Link> for names
                instead.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>For names, bios and server names, see our guide on {fontsGuide}.</p>
    </>
  ),
  outro: (
    <>
      <h2>Conclusion</h2>
      <p>
        Colored text is one of the easiest ways to make your Discord messages stand out. Remember the formula:
        an <code>ansi</code> code block, the escape character, a format and color number, then your text.
        Bookmark the color chart above, or just come back and copy one of the examples whenever you need a
        colorful message in seconds.
      </p>
    </>
  ),
};
