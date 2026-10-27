import Generator from "@/components/Generator";
import { faqs } from "@/lib/faqs";

const h2 = "mt-14 mb-3 text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 scroll-mt-8";
const h3 = "mt-6 mb-1 text-base font-semibold text-neutral-900 dark:text-neutral-100";
const code = "rounded bg-neutral-100 px-1.5 py-0.5 text-[13px] dark:bg-neutral-800";

const toc = [
  ["how-to-use", "How to use the generator"],
  ["what-are-discord-fonts", "What are Discord fonts?"],
  ["where-to-use", "Where you can use them"],
  ["styles", "Popular styles and when to use them"],
  ["markdown", "Discord text formatting (Markdown)"],
  ["troubleshooting", "Problems and fixes"],
  ["tips", "Tips for a name people can read"],
  ["faq", "Frequently asked questions"],
] as const;

const markdownRows = [
  ["Bold", "**text**"],
  ["Italic", "*text* or _text_"],
  ["Bold italic", "***text***"],
  ["Underline", "__text__"],
  ["Strikethrough", "~~text~~"],
  ["Spoiler", "||text||"],
  ["Inline code", "`text`"],
  ["Quote", "> text"],
  ["Heading", "# text, ## text, ### text"],
  ["Small subtext", "-# text"],
] as const;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Discord Fonts Generator",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description:
          "Free tool that converts text into Unicode styles you can copy and paste into Discord names, nicknames, bios and messages.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1 className="text-3xl font-semibold tracking-tight">Discord fonts generator</h1>
      <p className="mt-2 mb-8 text-neutral-500 dark:text-neutral-400">
        Free, no sign-up. Type your text, then click a style to copy it.
      </p>

      <Generator />

      <div className="mt-14 space-y-4 text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">
        <p>
          Discord does not let you choose a font, but you can still make your name, bio and messages stand out. This
          free Discord fonts generator turns plain text into dozens of styles, including bold, script, gothic,
          small caps, bubble, strikethrough and decorated nicknames. Pick one, copy it, and paste it straight into
          Discord.
        </p>

        <nav aria-label="On this page" className="my-8 rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
          <p className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">On this page</p>
          <ul className="space-y-1 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="underline-offset-4 hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <h2 id="how-to-use" className={h2}>
          How to use the Discord font generator
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Type or paste your name, bio or message into the box at the top of the page.</li>
          <li>Scroll the list. Every style updates instantly as you type.</li>
          <li>Click a style to copy it. The button changes to “Copied” when it works.</li>
          <li>Paste it into Discord, for example into your display name, a server nickname or your About Me.</li>
        </ol>
        <p>
          Try a few styles before you settle. The same word can look elegant in one style and hard to read in another,
          and a style that looks great on your computer may look different on a friend’s phone.
        </p>

        <h2 id="what-are-discord-fonts" className={h2}>
          What are Discord fonts?
        </h2>
        <p>
          “Discord fonts” is the common name for fancy text that you copy and paste into Discord. They are not fonts in
          the usual sense. A font is a file installed on a device that controls how letters are drawn. Discord does
          not offer a font setting, so there is nothing to install or switch.
        </p>
        <p>
          What the generator does instead is use Unicode, the global standard that gives every character a code. Unicode
          contains many alphabets and symbol sets that happen to look like stylised letters, such as mathematical bold
          letters, script letters and enclosed circled letters. The generator swaps each letter you type for the
          matching symbol, so “Midnight Fox” becomes 𝐌𝐢𝐝𝐧𝐢𝐠𝐡𝐭 𝐅𝐨𝐱 or 𝓜𝓲𝓭𝓷𝓲𝓰𝓱𝓽 𝓕𝓸𝔁.
        </p>
        <p>
          Because the result is plain text, it survives copy and paste, and it works in any app that accepts Unicode,
          which includes Discord, Instagram, TikTok, X, Steam and most chat tools. The same approach is why the styles
          carry over unchanged between devices.
        </p>

        <h2 id="where-to-use" className={h2}>
          Where you can use Discord fonts
        </h2>
        <h3 className={h3}>Display name</h3>
        <p>
          Your display name is what people see next to your messages. It accepts a wide range of characters, so it is
          the best place for a styled name.
        </p>
        <h3 className={h3}>Server nickname</h3>
        <p>
          You can set a different nickname on each server, which lets you match a gaming clan, a school group or a
          community theme. Server owners can restrict nicknames, so a server may block some symbols.
        </p>
        <h3 className={h3}>About Me and server descriptions</h3>
        <p>
          Bios have more room, so they suit longer styled lines, decorated headings and dividers made from symbols.
        </p>
        <h3 className={h3}>Messages, channel topics and status</h3>
        <p>
          Styled text works in chat messages, channel topics and custom status. Channel names have extra limits: Discord
          changes text channel names to lowercase with hyphens, so some styles may not carry over.
        </p>
        <h3 className={h3}>The unique username</h3>
        <p>
          Your unique username, the @handle, is the strictest field. It only allows a small set of characters, so most
          Unicode styles will be rejected there. Use your display name for styling and keep the username simple.
        </p>

        <h2 id="styles" className={h2}>
          Popular styles and when to use them
        </h2>
        <p>
          Here is how a few of the most used styles look, using the example “Midnight Fox”, and what each suits best.
        </p>
        <dl className="space-y-4">
          {[
            ["𝐌𝐢𝐝𝐧𝐢𝐠𝐡𝐭 𝐅𝐨𝐱", "Bold", "Clean and readable at small sizes. The safest choice for display names and nicknames."],
            ["𝓜𝓲𝓭𝓷𝓲𝓰𝓱𝓽 𝓕𝓸𝔁", "Bold script", "Handwritten and elegant. Good for bios and names, though thin strokes can blur on small screens."],
            ["𝔐𝔦𝔡𝔫𝔦𝔤𝔥𝔱 𝔉𝔬𝔵", "Fraktur (gothic)", "Medieval, dark look that suits gaming and fantasy servers. Less readable in long text."],
            ["Mɪᴅɴɪɢʜᴛ Fᴏx", "Small caps", "Subtle and tidy. Reads well because the letters keep a familiar shape."],
            ["𝕄𝕚𝕕𝕟𝕚𝕘𝕙𝕥 𝔽𝕠𝕩", "Double-struck", "Outlined, technical look. Works for short names and headings."],
            ["Ⓜⓘⓓⓝⓘⓖⓗⓣ Ⓕⓞⓧ", "Circled", "Playful bubble letters. Best for short words, as long names get cluttered."],
            ["Ｍｉｄｎｉｇｈｔ　Ｆｏｘ", "Fullwidth", "Wide, aesthetic spacing popular with music and retro themes."],
            ["M̶i̶d̶n̶i̶g̶h̶t̶ ̶F̶o̶x̶", "Strikethrough", "Crossed-out text for jokes, edits and emphasis in a bio."],
          ].map(([sample, name, note]) => (
            <div key={name}>
              <dt className="text-lg text-neutral-900 dark:text-neutral-100">{sample}</dt>
              <dd>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">{name}.</span> {note}
              </dd>
            </div>
          ))}
        </dl>
        <p>
          The generator also includes decorated nicknames, which wrap your text in symbols and emoji, and combining
          styles such as underline, overline and wavy lines. Decorated styles are fun for a banner or bio but can
          crowd a name, so check how they look next to your messages before you commit.
        </p>

        <h2 id="markdown" className={h2}>
          Discord text formatting (Markdown)
        </h2>
        <p>
          Discord also has its own formatting for messages, called Markdown. It does not use Unicode, so it works
          alongside the styles above. It applies in messages and some profile fields, but not in usernames, display
          names or nicknames, which is why symbol styles are the way to style a name.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <th className="py-2 pr-4 font-medium text-neutral-900 dark:text-neutral-100">Effect</th>
                <th className="py-2 font-medium text-neutral-900 dark:text-neutral-100">What you type</th>
              </tr>
            </thead>
            <tbody>
              {markdownRows.map(([effect, syntax]) => (
                <tr key={effect} className="border-b border-neutral-100 dark:border-neutral-900">
                  <td className="py-2 pr-4">{effect}</td>
                  <td className="py-2">
                    <code className={code}>{syntax}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Put three backticks before and after a block of text to make a code block. Combining both methods is common:
          a styled phrase from this page inside a message that also uses Markdown for a quote or a spoiler.
        </p>

        <h2 id="troubleshooting" className={h2}>
          Problems and fixes
        </h2>
        <h3 className={h3}>I see empty boxes or question marks</h3>
        <p>
          The device showing the text has no font for that symbol. Rarer styles such as Cherokee mix or squared letters
          are the most likely to fail. Choose bold, italic, small caps or fullwidth, which are widely supported.
        </p>
        <h3 className={h3}>Discord rejected my name</h3>
        <p>
          You may be using the unique username, which has strict rules. Set the styled text as your display name
          instead. If a server nickname is rejected, the server may restrict special characters.
        </p>
        <h3 className={h3}>My name is cut off or too long</h3>
        <p>
          Names have a length limit, and many styled characters are stored as two units instead of one, so a styled name
          can reach the limit sooner than a plain one. Shorten the text or remove decorations.
        </p>
        <h3 className={h3}>Search or mentions are harder</h3>
        <p>
          Other people search and type plain letters, so a heavily styled name can be difficult to find or @mention. If
          friends need to reach you easily, keep the name readable or mention your plain name in your bio.
        </p>

        <h2 id="tips" className={h2}>
          Tips for a name people can read
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Choose one style and stay with it. Mixing several in one name looks messy.</li>
          <li>Keep names short. Long styled text wraps badly in member lists on mobile.</li>
          <li>Test on a phone and in dark and light themes before you finalise.</li>
          <li>Avoid stacking symbols that distort lines, such as heavy combining marks. They can overlap other text and moderators often dislike them.</li>
          <li>Never use styles to copy another person’s name or to get around a filter. Servers can and do remove those names.</li>
          <li>Keep important information, like rules or instructions, in plain text so everyone can read it, including people who use screen readers.</li>
        </ul>

        <h2 id="faq" className={h2}>
          Frequently asked questions
        </h2>
        <dl className="space-y-5">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-medium text-neutral-900 dark:text-neutral-100">{f.q}</dt>
              <dd className="mt-1">{f.a}</dd>
            </div>
          ))}
        </dl>

        <p className="pt-6 text-sm text-neutral-500 dark:text-neutral-400">
          DiscordFonts is an independent tool and is not affiliated with Discord Inc.
        </p>
      </div>
    </>
  );
}
