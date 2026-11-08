import Link from "next/link";
import type { BlogPost } from ".";

const generator = <Link href="/">Discord font generator</Link>;
const site = <Link href="/">discordfont.app</Link>;

const cheatSheet = [
  ["Italic", "*text* or _text_", "One symbol on each side"],
  ["Bold", "**text**", "Two asterisks"],
  ["Bold italic", "***text***", "Three asterisks"],
  ["Underline", "__text__", "Two underscores, not one"],
  ["Strikethrough", "~~text~~", "Two tildes"],
  ["Spoiler", "||text||", "Two vertical bars"],
  ["Inline code", "`text`", "Backtick, the key under Esc"],
  ["Code block", "``` above and below", "Ignores all other formatting"],
  ["Quote one line", "> text", "Needs a space after >"],
  ["Quote everything after", ">>> text", "Lasts until you send"],
  ["Big header", "# text", "Must start the line"],
  ["Medium header", "## text", ""],
  ["Small header", "### text", ""],
  ["Subtext", "-# text", "Small gray text"],
  ["Bullet list", "- text", "Two spaces before to nest"],
  ["Numbered list", "1. text", ""],
  ["Masked link", "[text](https://link.com)", "Clickable words instead of a URL"],
  ["Cancel formatting", "\\*text\\*", "Backslash before the symbol"],
] as const;

const combos = [
  ["Bold + italic", "***text***"],
  ["Underline + italic", "__*text*__"],
  ["Underline + bold", "__**text**__"],
  ["Underline + bold + italic", "__***text***__"],
  ["Bold + strikethrough", "~~**text**~~"],
  ["Bold spoiler", "||**text**||"],
] as const;

const whereItWorks = [
  ["Messages in servers and DMs", "Yes, everything"],
  ["Threads and forum posts", "Yes"],
  ["About Me (bio)", "Most of the basic styles"],
  ["Bot messages and embeds", "Yes"],
  ["Username and display name", "No"],
  ["Server nickname", "No"],
  ["Server, channel and role names", "No"],
] as const;

export const discordTextFormatting: BlogPost = {
  slug: "discord-text-formatting",
  title: "Discord Text Formatting Guide: Bold, Italic, Strikethrough, Spoilers & More (2026)",
  metaTitle: "Discord Text Formatting Guide: Bold, Italic, Spoilers & More",
  description:
    "Learn every Discord text formatting trick: bold, italic, underline, strikethrough, spoilers, headers, subtext, code blocks and quotes, with a copy-paste cheat sheet.",
  tagline: "Markdown cheat sheet, spoilers, headers & code blocks",
  icon: "chat",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  readingMinutes: 7,
  faqs: [
    {
      question: "How do I make text bold on Discord?",
      answer:
        "Put two asterisks on each side, like **hello**. On a computer, you can also highlight the text and press Ctrl+B (Cmd+B on Mac).",
    },
    {
      question: "How do I cross out text on Discord?",
      answer: "Use two tildes on each side: ~~text~~.",
    },
    {
      question: "How do I write small text on Discord?",
      answer:
        "Start the line with -# and a space, and your text turns small and gray. If you want tiny letters that also work in your name, use a small text font from a font generator instead.",
    },
    {
      question: "How do I make text bigger?",
      answer:
        "Start the line with # and a space for the biggest size, ## for medium or ### for a little smaller.",
    },
    {
      question: "Can I change my font on Discord?",
      answer:
        "Not through a setting for messages. You can change the chat text size for yourself under User Settings > Appearance, but to change how your text looks to everyone, you'll need Unicode fonts from a site like discordfont.app.",
    },
    {
      question: "Does formatting work on the Discord mobile app?",
      answer:
        "Yes, all of it works on iPhone and Android. You just won't get the pop-up toolbar, so type the symbols yourself.",
    },
    {
      question: "How do I hide a message on Discord?",
      answer: "Wrap it in spoiler bars, ||like this||, or start your message with /spoiler.",
    },
  ],
  body: (
    <>
      <p>
        You&apos;ve probably seen it in a server you&apos;re in. Someone posts the rules with a big bold title,
        small gray notes under each point, and a spoiler that hides the answer to a riddle. Meanwhile your
        messages look like plain text from 2009.
      </p>
      <p>
        The good news? There&apos;s no secret setting or paid feature behind any of it. Discord reads a handful
        of keyboard symbols, like asterisks and underscores, and turns them into styles the moment you hit
        Enter. Once you know which symbol does what, you&apos;ll never forget it.
      </p>
      <p>
        I put this page together because I kept looking up the same tricks over and over while setting up
        servers. So here&apos;s everything in one place: a cheat sheet you can bookmark, real examples you can
        copy, and the fixes for when Discord just refuses to cooperate.
      </p>
      <p>
        Quick heads-up before we start. These tricks only work inside messages and a couple of profile fields.
        They won&apos;t touch your username or server name. For that you need Unicode fonts, which is exactly
        what our {generator} is for. More on that near the end.
      </p>

      <h2>The cheat sheet (save this one)</h2>
      <p>
        If you only need a quick reminder, this table is all you need. Type what&apos;s in the middle column
        and Discord does the rest.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Style</th>
              <th>What you type</th>
              <th>Good to know</th>
            </tr>
          </thead>
          <tbody>
            {cheatSheet.map(([style, syntax, note]) => (
              <tr key={style}>
                <td>{style}</td>
                <td className="whitespace-nowrap">
                  <code>{syntax}</code>
                </td>
                <td>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Bold, italic, underline and strikethrough</h2>
      <p>
        These are the four you&apos;ll use every day. The only rule: the symbols have to hug the text. No
        spaces in between.
      </p>
      <h3>Bold</h3>
      <p>
        Two asterisks on each side. <code>{"**don't ping everyone**"}</code> comes out bold. I use it for
        anything I don&apos;t want people to scroll past, like event times or a rule that keeps getting broken.
      </p>
      <h3>Italic</h3>
      <p>
        One asterisk or one underscore on each side, so <code>*maybe*</code> or <code>_maybe_</code>. Italics
        are great for tone. &ldquo;I <em>love</em> waking up at 6am&rdquo; reads very differently without
        them.
      </p>
      <h3>Underline</h3>
      <p>
        Two underscores on each side: <code>__read this first__</code>. This is the one people mix up the most.
        Here&apos;s how I remember it: one underscore leans the text over (italic), two underscores draw a line
        under it.
      </p>
      <h3>Strikethrough</h3>
      <p>
        Two tildes on each side: <code>~~text~~</code>. The tilde is the squiggly key next to 1 on most
        keyboards (hold Shift). Strikethrough is perfect for jokes, like &ldquo;I&apos;m <s>not</s> salty
        about that match,&rdquo; or for crossing off finished tasks in a to-do channel.
      </p>
      <h3>The lazy way on desktop</h3>
      <p>
        On the desktop app or in your browser, just highlight some text in the message box. A little toolbar
        pops up with bold, italic, strikethrough, quote, code and spoiler buttons. <strong>Ctrl+B</strong> and{" "}
        <strong>Ctrl+I</strong> work too (Cmd on a Mac). Phones don&apos;t have this toolbar, so on mobile
        you&apos;ll need to type the symbols.
      </p>

      <h2>Mixing styles together</h2>
      <p>
        You can stack them. The trick is to put underline and strikethrough on the outside and the asterisks on
        the inside, a bit like wrapping a gift in two layers.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>You want</th>
              <th>Type this</th>
            </tr>
          </thead>
          <tbody>
            {combos.map(([want, syntax]) => (
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
        A word of advice: don&apos;t go overboard. A message where every word is bold, underlined and italic is
        just as hard to read as one with no formatting at all.
      </p>

      <h2>Headers, subtext, lists and links</h2>
      <p>
        These are the ones that make a server look properly put together. If you&apos;ve ever wondered how a
        rules channel gets that clean, organized look, this is how.
      </p>
      <h3>Headers</h3>
      <p>Put one, two or three hash symbols at the start of a line, then a space:</p>
      <ul>
        <li>
          <code># Server Rules</code> gives you the biggest text
        </li>
        <li>
          <code>## Voice Channels</code> is a step smaller
        </li>
        <li>
          <code>### No spam, please</code> is the smallest
        </li>
      </ul>
      <p>
        Two things trip people up here. The hash has to be the very first thing on the line, and you need that
        space after it. Type <code>#Rules</code> and Discord just shows &ldquo;#Rules&rdquo; as plain text. I
        made this mistake more times than I&apos;d like to admit.
      </p>
      <h3>Subtext</h3>
      <p>
        Start a line with <code>-#</code> and a space, and you get small, faded gray text. It&apos;s one of my
        favorite additions because it&apos;s so useful for little side notes. Think &ldquo;last updated
        Monday,&rdquo; a credit for fan art, or a sneaky joke under a serious announcement.
      </p>
      <h3>Lists</h3>
      <p>
        Start a line with <code>-</code> and a space for bullet points, or <code>1.</code> and a space for a
        numbered list. Want a point tucked under another one? Add two spaces before the dash. On desktop, press{" "}
        <strong>Shift+Enter</strong> to drop to a new line without sending the message halfway through.
      </p>
      <h3>Masked links</h3>
      <p>
        Instead of pasting a long ugly URL, you can hide it behind words. Type{" "}
        <code>[Grab a fancy font](https://discordfont.app)</code> and people see only the clickable words.
        Discord still shows a quick warning with the real address before opening it, so nobody gets tricked.
      </p>

      <h2>Quotes and code blocks</h2>
      <h3>Quoting someone</h3>
      <p>
        Type <code>{">"}</code> and a space at the start of a line (that&apos;s the greater-than sign) and a
        gray bar shows up on the left. It&apos;s handy when you want to reply to something specific in a busy
        chat without using Discord&apos;s reply button.
      </p>
      <p>
        Got a few lines to quote? Use <code>{">>>"}</code> and a space instead. Everything you type after it
        stays inside the quote, new lines and all, until you send.
      </p>
      <h3>Inline code</h3>
      <p>
        Wrap a word in single backticks, like <code>{"`!help`"}</code>, and it shows in a typewriter-style font
        on a dark background. Bot commands are the classic use. On a phone, the backtick is usually hiding on
        the symbols keyboard, or you can long-press the apostrophe.
      </p>
      <h3>Code blocks</h3>
      <p>For anything longer, put three backticks on their own line above and below your text:</p>
      <pre>
        <code>{"```\nYour text here\nas many lines as you like\n```"}</code>
      </pre>
      <p>
        Everything inside a code block shows exactly as typed. Asterisks stay asterisks, underscores stay
        underscores. That&apos;s why people use code blocks for ASCII art, copy-paste templates and, of course,
        actual code.
      </p>
      <h3>A little color with syntax highlighting</h3>
      <p>
        Add a language name right after the first three backticks, like <code>{"```js"}</code>,{" "}
        <code>{"```py"}</code> or <code>{"```css"}</code>, and Discord colors the text like a code editor
        would. My favorite trick is <code>{"```diff"}</code>: start a line with <code>+</code> and it turns
        green, start one with <code>-</code> and it turns red. Instant win and lose lists for game night.
      </p>
      <p>
        If you want proper colors like yellow, blue or pink, you&apos;ll need an <code>ansi</code> code block.
        I wrote a full walkthrough with every color code in our guide on{" "}
        <Link href="/blog/discord-colored-text">how to write colored text in Discord</Link>.
      </p>

      <h2>Spoiler tags</h2>
      <p>
        If your server talks about movies, anime or games, spoiler tags will save friendships. They hide text
        behind a dark bar until someone chooses to click it.
      </p>
      <p>There are three ways to do it:</p>
      <ol>
        <li>
          Wrap the text in two vertical bars on each side: <code>||Snape was good all along||</code>. The bar
          key is Shift + backslash on most keyboards.
        </li>
        <li>
          Type <code>/spoiler</code> and then your message. Discord hides the whole thing for you.
        </li>
        <li>On desktop, highlight the text and click the eye icon in the pop-up toolbar.</li>
      </ol>
      <p>
        Images and videos can be hidden too. After you attach a file, click the eye icon on the preview before
        sending (on mobile, tap the file and turn on <strong>Mark as spoiler</strong>).
      </p>
      <p>
        One thing worth knowing: if spoilers seem to show up already revealed for you, check{" "}
        <strong>User Settings &gt; Chat</strong>. There&apos;s a setting that controls when spoilers are shown,
        and it might have been changed.
      </p>

      <h2>When you want the symbol, not the style</h2>
      <p>
        Here&apos;s an annoying one. You type a username like <code>dark_knight_07</code> or a quick sum like{" "}
        <code>5*4*3</code>, and Discord decides half of it should be italic.
      </p>
      <p>
        The fix is a backslash. Put <code>\</code> right before the symbol and Discord leaves it alone, so
        typing <code>{"5\\*4\\*3"}</code> shows up as 5*4*3. Wrapping the text in single backticks works too,
        since nothing inside inline code gets formatted.
      </p>

      <h2>Where formatting works (and where it doesn&apos;t)</h2>
      <p>This catches a lot of people out, so here&apos;s the short version:</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>Does formatting work?</th>
            </tr>
          </thead>
          <tbody>
            {whereItWorks.map(([place, works]) => (
              <tr key={place}>
                <td>{place}</td>
                <td>{works}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        So no, <code>**YourName**</code> won&apos;t make your name bold. Discord will just show the asterisks.
      </p>
      <h3>So how do people get fancy names?</h3>
      <p>
        They use Unicode fonts. These aren&apos;t formatting at all. They&apos;re special characters that
        happen to look like bold, cursive, gothic or bubble letters, so they work anywhere you can type text,
        including names, nicknames, server names and channel names.
      </p>
      <p>
        That&apos;s exactly what we built {site} for. Type your name, pick a style you like and copy it. If you
        want the step-by-step version, our guide on{" "}
        <Link href="/blog/how-to-change-font-on-discord">how to change your font on Discord</Link> walks through
        names, bios and messages one by one.
      </p>

      <h2>Formatting not working? Check these first</h2>
      <p>Nine times out of ten, it&apos;s one of these:</p>
      <ul>
        <li>
          <strong>There&apos;s a space next to the symbols.</strong> <code>** hello **</code> won&apos;t work,
          but <code>**hello**</code> will.
        </li>
        <li>
          <strong>Your header isn&apos;t at the start of the line.</strong> Even one character before the{" "}
          <code>#</code> breaks it. Same goes for <code>-#</code> subtext.
        </li>
        <li>
          <strong>You used one underscore instead of two.</strong> One gives you italics, two gives you an
          underline.
        </li>
        <li>
          <strong>The text is inside a code block.</strong> Code blocks ignore formatting on purpose, so take it
          out of the backticks.
        </li>
        <li>
          <strong>Your app is out of date.</strong> Headers, subtext and lists are newer features. Update the
          app or restart desktop Discord.
        </li>
        <li>
          <strong>You&apos;re trying it on a name.</strong> Names don&apos;t support formatting, so grab a
          Unicode font instead.
        </li>
      </ul>
    </>
  ),
  outro: (
    <>
      <h2>Wrapping up</h2>
      <p>
        That&apos;s really all there is to it. A few asterisks, some underscores, a couple of tildes and those
        vertical bars, and your messages instantly look more put together. Keep the cheat sheet bookmarked for
        the first week or so. After that, your fingers will remember on their own.
      </p>
      <p>
        And when you hit the limits of what formatting can do, like making your username or server name stand
        out, head over to {site}. It&apos;s free, there&apos;s nothing to install, and you can copy a new font
        in about two seconds.
      </p>
    </>
  ),
};
