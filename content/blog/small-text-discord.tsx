import Link from "next/link";
import type { BlogPost } from ".";

const fontGenerator = <Link href="/">Discord font generator</Link>;

export const smallTextDiscord: BlogPost = {
  slug: "small-text-discord",
  title: "Small Text Discord: How to Make Text Small in Discord (Subtext + Copy-Paste)",
  metaTitle: "Small Text Discord: How to Make Text Small in Discord",
  description:
    "Small text in Discord is easy: type -# for subtext in messages, or copy-paste tiny text for your name and bio. Works on desktop and mobile.",
  tagline: "-# subtext, tiny copy-paste text & fixes",
  icon: "chat",
  datePublished: "2026-11-07",
  dateModified: "2026-11-07",
  readingMinutes: 6,
  hideGeneratorCta: true,
  faqs: [
    {
      question: "What is the command for small text in Discord?",
      answer: "Type -# followed by a space at the start of a line. Discord calls this subtext.",
    },
    {
      question: "Why does my -# show up as plain text?",
      answer:
        "Usually there's a space or character before it, no space after it, or a longer dash instead of a hyphen. Updating your Discord app also fixes it on older versions.",
    },
    {
      question: "Does small text work on Discord mobile?",
      answer: "Yes. Type -# and a space the same way. The # is on your keyboard's symbols page.",
    },
    {
      question: "Can I make my Discord name small?",
      answer:
        "Not with -#. Use copy-paste small caps or superscript letters in your display name instead. Your username can't use them, since it only allows lowercase letters, numbers, underscores and periods.",
    },
    {
      question: "Can I make a whole message small?",
      answer:
        "Yes, but each line needs its own -#. For long messages it gets hard to read, so most people keep subtext for short notes.",
    },
    {
      question: "Does small text work in bots and webhooks?",
      answer:
        "Yes. Bots and webhooks can send -# lines like any user, which is why you often see it for footnotes in bot messages.",
    },
  ],
  body: (
    <>
      <h2>How to make small text in Discord (quick answer)</h2>
      <p>
        To make text small in Discord, type <code>-#</code> and a space at the start of your message, then
        your text. Hit Enter and it shows up as small grey text under the normal chat size.
      </p>
      <p>
        That&apos;s it for messages. Discord calls this subtext, and it works on desktop, browser and mobile.
      </p>
      <p>
        But there&apos;s a catch most guides skip: <code>-#</code> only works in messages. It won&apos;t
        shrink your display name, your bio or your server name. For those, you need copy-paste small text made
        from special characters, which I&apos;ll show you further down.
      </p>
      <p>So this guide covers both: small text in chat, and small text everywhere else.</p>

      <h2>How to type small text in Discord messages</h2>
      <p>The steps are the same on PC, Mac, the browser version and the mobile app.</p>
      <ol>
        <li>Click (or tap) the message box in any channel or DM.</li>
        <li>
          Type <code>-#</code> at the very start of the line.
        </li>
        <li>Add one space.</li>
        <li>Type your message and send it.</li>
      </ol>
      <p>So if you type this:</p>
      <pre>
        <code>-# this is small text</code>
      </pre>
      <p>
        Discord shows &ldquo;this is small text&rdquo; in a smaller, lighter font than the rest of the chat.
      </p>
      <p>
        People use it for side notes, &ldquo;edited&rdquo; tags, credits under an image, disclaimers in bot
        messages, or just to whisper a joke without it taking over the chat. It&apos;s subtle on purpose, so
        it works best for short lines, not whole paragraphs.
      </p>
      <p>
        <strong>On mobile:</strong> the # key is usually on the symbols page of your keyboard (tap ?123 or the
        number key). Some keyboards auto-capitalize or add a space after the dash. If your text doesn&apos;t
        shrink, check that you typed a hyphen, then #, then a single space, with nothing before them.
      </p>

      <h2>Mixing small text with other formatting</h2>
      <p>
        Subtext plays nicely with most of Discord&apos;s other formatting, as long as the <code>-#</code>{" "}
        stays at the very front of the line.
      </p>
      <ul>
        <li>
          Bold small text: <code>-# **important**</code>
        </li>
        <li>
          Italic small text: <code>-# *just saying*</code>
        </li>
        <li>
          Small spoiler: <code>-# ||the ending||</code>
        </li>
        <li>
          Small link: <code>-# [source](https://example.com)</code>
        </li>
      </ul>
      <p>
        <strong>Several small lines in one message:</strong> every line needs its own <code>-#</code>. Press{" "}
        <strong>Shift + Enter</strong> for a new line (on mobile, the return key does this), then start the
        next line with <code>-#</code> again:
      </p>
      <pre>
        <code>{"Main message in normal size\n-# small note one\n-# small note two"}</code>
      </pre>
      <p>
        If you only put <code>-#</code> on the first line, everything after the line break goes back to normal
        size.
      </p>
      <p>
        One thing that won&apos;t work: subtext and headers on the same line. A line is either a header (
        <code>#</code>, <code>##</code>, <code>###</code>) or subtext (<code>-#</code>), not both.
      </p>

      <h2>Small text not working? Check these first</h2>
      <p>Nine times out of ten, it&apos;s one of these:</p>
      <ul>
        <li>
          <strong>Something comes before -#.</strong> Even a single space or an emoji in front breaks it. The{" "}
          <code>-#</code> has to be the first thing on the line.
        </li>
        <li>
          <strong>No space after -#.</strong> <code>-#hello</code> stays normal. <code>-# hello</code> turns
          small.
        </li>
        <li>
          <strong>Wrong dash.</strong> Some phones and text editors swap a hyphen (-) for a longer dash (– or
          —) when you paste. Delete it and type a normal hyphen.
        </li>
        <li>
          <strong>It&apos;s inside a code block.</strong> Anything between backticks shows exactly as typed,
          so <code>-#</code> appears as plain characters there.
        </li>
        <li>
          <strong>You escaped it by accident.</strong> A backslash in front (<code>\-#</code>) tells Discord
          to show the symbols instead of formatting them.
        </li>
        <li>
          <strong>Your app is out of date.</strong> Older versions of the Discord app don&apos;t understand
          subtext. Update the app and the text shows correctly.
        </li>
        <li>
          <strong>You&apos;re trying it in a name or bio.</strong> Subtext is for messages. For names and
          profiles, use the copy-paste method below.
        </li>
      </ul>

      <h2>Small text for your Discord name, bio and server name</h2>
      <p>
        For anything outside chat messages, the trick is Unicode: special characters that look like tiny
        letters. Discord treats them as normal text, so they show up anywhere you can type.
      </p>
      <p>There are two styles that work well:</p>
      <ul>
        <li>
          <strong>
            <Link href="/discord-font-generator/small-caps">Small caps</Link>:
          </strong>{" "}
          <span className="fancy-text">ᴛʜɪꜱ ɪꜱ ꜱᴍᴀʟʟ ᴛᴇxᴛ</span> (clean and readable, great for display names)
        </li>
        <li>
          <strong>Superscript:</strong> <span className="fancy-text">ᵗⁱⁿʸ ᵗᵉˣᵗ</span> (raised and really
          small, fun for bios and short tags)
        </li>
      </ul>
      <p>
        You don&apos;t have to hunt for each letter. Type your text into our {fontGenerator}, copy the small
        style you like, and paste it where you want it.
      </p>
      <p>
        <strong>Where copy-paste small text works:</strong>
      </p>
      <ul>
        <li>Display name and server nickname</li>
        <li>About Me (your bio)</li>
        <li>Server names and role names</li>
        <li>Regular messages, if you want the look without the grey subtext color</li>
      </ul>
      <p>
        <strong>Where it doesn&apos;t:</strong> your username. Discord usernames only allow lowercase letters,
        numbers, underscores and periods, so fancy characters get rejected. If you need a new one, our{" "}
        <Link href="/discord-username-generator">Discord username generator</Link> only gives you names that
        pass those rules.
      </p>
      <p>
        Two honest downsides before you go all in. Not every letter has a tiny version (there&apos;s no
        superscript q, for example), so a few letters may look slightly off. And screen readers can read these
        characters strangely, so keep anything important, like server rules, in normal text.
      </p>

      <h2>Subtext vs copy-paste small text: which one to use</h2>
      <p>Use -# for chat messages and Unicode small text for everything else.</p>
      <div className="overflow-x-auto">
        <table className="min-w-[34rem]">
          <thead>
            <tr>
              <th scope="col">
                <span className="sr-only">Feature</span>
              </th>
              <th scope="col">Subtext (-#)</th>
              <th scope="col">Copy-paste small text</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Works in messages</th>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <th scope="row">Works in display name, bio, server name</th>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <th scope="row">Works in username</th>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <th scope="row">Looks like</th>
              <td>Smaller, grey, normal letters</td>
              <td>Tiny letter-shaped characters, normal color</td>
            </tr>
            <tr>
              <th scope="row">Easy to read</th>
              <td>Very</td>
              <td>Mostly; a few letters look off</td>
            </tr>
            <tr>
              <th scope="row">How to make it</th>
              <td>
                Type <code>-#</code> and a space
              </td>
              <td>Copy from a font generator</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Want bigger text instead?</h2>
      <p>
        Subtext has a big sibling. Start a line with one, two or three <code>#</code> and a space to make
        headers:
      </p>
      <pre>
        <code>{"# Big header\n## Medium header\n### Small header"}</code>
      </pre>
      <p>A few other formatting tricks that pair well with small text:</p>
      <ul>
        <li>
          <code>**bold**</code>, <code>*italic*</code>, <code>__underline__</code> and{" "}
          <code>~~strikethrough~~</code>
        </li>
        <li>
          <code>||spoiler||</code> to hide text until someone clicks it
        </li>
        <li>
          <code>&gt; quote</code> for a quote line
        </li>
        <li>
          Colored text with ANSI code blocks, explained step by step in our{" "}
          <Link href="/blog/discord-colored-text">colored text guide</Link>
        </li>
      </ul>
      <p>
        And if what you really want is a different look for your name or messages, see{" "}
        <Link href="/blog/how-to-change-font-on-discord">how to change your font on Discord</Link>.
      </p>
    </>
  ),
};
