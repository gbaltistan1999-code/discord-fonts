import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from ".";

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure>
      <Image src={src} alt={alt} width={1200} height={675} unoptimized className="h-auto w-full rounded-xl" />
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

export const whatFontDoesDiscordUse: BlogPost = {
  slug: "what-font-does-discord-use",
  title: "What Font Does Discord Use? (gg sans Explained)",
  metaTitle: "What Font Does Discord Use? (gg sans Explained, 2026)",
  description:
    "Discord uses gg sans, a custom font that replaced Whitney in 2022. See every font Discord uses, if you can download it, and free look-alike fonts.",
  tagline: "gg sans, Whitney, Ginto Nord & look-alikes",
  icon: "type",
  datePublished: "2026-11-13",
  dateModified: "2026-11-13",
  readingMinutes: 6,
  faqs: [
    {
      question: "What font does Discord use?",
      answer:
        "Discord uses gg sans, a custom font it introduced in December 2022. It's used across the desktop app, mobile apps and website.",
    },
    {
      question: "What font did Discord use before gg sans?",
      answer: "Discord used Whitney, a licensed font from Hoefler & Co., from launch until December 2022.",
    },
    {
      question: "What font is the Discord logo?",
      answer:
        "The Discord logo uses a custom version of Ginto Nord, made with the Dinamo foundry for the 2021 rebrand. The older logo was based on Uni Sans.",
    },
    {
      question: "Can I download gg sans?",
      answer:
        "No. Discord says gg sans isn't open source, so it isn't available for public use. Free look-alikes such as Nunito Sans or Inter are a safe alternative.",
    },
    {
      question: "Can I change Discord back to the old font?",
      answer:
        "Not with an official setting. You can only change text size under User Settings > Appearance. Mods that change the font break Discord's terms of service.",
    },
    {
      question: "Why does Discord's font look different on my phone?",
      answer:
        "Discord uses gg sans on every platform, but text can look slightly different depending on your screen, text size setting and app version. Updating the app usually fixes it.",
    },
  ],
  body: (
    <>
      <figure>
        <Image
          src="/blog/what-font-does-discord-use.webp"
          alt="What font does Discord use? gg sans explained, with a large lowercase g next to a chat app window"
          width={1200}
          height={675}
          priority
          unoptimized
          className="h-auto w-full rounded-xl"
        />
      </figure>

      <p>
        Discord uses a font called <strong>gg sans</strong>. It&apos;s a custom typeface Discord made for
        itself, and it&apos;s what you see in chat messages, channel lists, menus and settings on desktop, web
        and mobile.
      </p>
      <p>
        If you&apos;ve used Discord for a while, you might remember text looking a little different.
        That&apos;s because Discord switched fonts in December 2022. Before that, everything was set in a font
        called Whitney.
      </p>
      <p>
        In this guide I&apos;ll cover what gg sans is, why Discord changed it, the other fonts Discord uses
        for its logo and website, whether you can download any of them, and the best free fonts that look
        similar.
      </p>
      <p>
        <strong>Quick answer:</strong> Discord&apos;s app font is gg sans. The old font was Whitney. The
        Discord logo uses a custom version of Ginto Nord.
      </p>

      <h2>What is gg sans?</h2>
      <p>
        gg sans is Discord&apos;s own sans-serif font. Discord announced it in late November 2022 and started
        rolling it out on December 1, 2022, across the desktop app, mobile apps, website and blog.
      </p>
      <p>
        The name is a gaming joke with a double meaning. &ldquo;gg&rdquo; is short for &ldquo;good
        game,&rdquo; which people type after matches, and it&apos;s also part of Discord&apos;s invite links
        (discord.gg). Discord says the name also shows off one of its favourite letters in the font, the
        lowercase &ldquo;g&rdquo;.
      </p>

      <h2>Why did Discord switch from Whitney?</h2>
      <p>
        Whitney is a commercial font made by the type foundry Hoefler &amp; Co., so Discord had to license it
        from someone else. With its own font, Discord can change letter shapes, add new languages and tweak
        readability whenever it wants. In its announcement, Discord said the switch gives it the flexibility
        to keep customizing the font going forward.
      </p>
      <p>
        Not everyone was happy. When gg sans launched, a lot of users posted on Discord&apos;s feedback forums
        that it felt harder to read and asked for an option to switch back. Discord kept gg sans, and
        there&apos;s still no official setting to bring Whitney back.
      </p>

      <h3>Whitney vs gg sans</h3>
      <Figure
        src="/blog/discord-whitney-vs-gg-sans.webp"
        alt="Whitney vs gg sans comparison: the sample text Aa Gg 123 in Discord's old font Whitney (2015 to 2022) and its current font gg sans (2022 to now)"
        caption="Whitney (left) was Discord's font until December 2022. gg sans (right) is slightly rounder and wider."
      />
      <div className="overflow-x-auto">
        <table className="min-w-[36rem]">
          <thead>
            <tr>
              <th></th>
              <th>Whitney (old)</th>
              <th>gg sans (current)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Used</strong>
              </td>
              <td>2015 to 2022</td>
              <td>December 2022 to now</td>
            </tr>
            <tr>
              <td>
                <strong>Made by</strong>
              </td>
              <td>Hoefler &amp; Co. (licensed)</td>
              <td>Custom for Discord</td>
            </tr>
            <tr>
              <td>
                <strong>Style</strong>
              </td>
              <td>Humanist sans-serif</td>
              <td>Rounded, geometric-leaning sans-serif</td>
            </tr>
            <tr>
              <td>
                <strong>Can you get it?</strong>
              </td>
              <td>Paid license from the foundry</td>
              <td>No, not available to the public</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Every font Discord uses</h2>
      <p>
        gg sans isn&apos;t the only font Discord uses. The logo and the big headlines on discord.com use a
        different family.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-[36rem]">
          <thead>
            <tr>
              <th>Where you see it</th>
              <th>Font</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chat, menus, settings (the app)</td>
              <td>gg sans</td>
              <td>Custom, since December 2022</td>
            </tr>
            <tr>
              <td>Discord logo (wordmark)</td>
              <td>Ginto Nord (custom)</td>
              <td>Made with the Dinamo foundry for the 2021 rebrand</td>
            </tr>
            <tr>
              <td>Big headlines on discord.com</td>
              <td>Ginto Nord (custom cut)</td>
              <td>A heavy, all-caps display style</td>
            </tr>
            <tr>
              <td>Code blocks in chat</td>
              <td>A monospace font</td>
              <td>Used for text inside backticks</td>
            </tr>
            <tr>
              <td>Old logo (2015 to 2021)</td>
              <td>Modified Uni Sans Heavy</td>
              <td>Replaced in May 2021</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The current logo arrived in May 2021, when Discord refreshed its mascot Clyde. Discord&apos;s own blog
        described the new wordmark as a custom font based on Ginto, and the Dinamo foundry shows the project
        on its website.
      </p>
      <p>
        So if someone asks &ldquo;what&apos;s the Discord font,&rdquo; the right answer depends on what they
        mean: gg sans for the app, Ginto Nord for the logo.
      </p>

      <h2>Can you download the Discord font?</h2>
      <p>
        No, not officially. Discord&apos;s support page says gg sans isn&apos;t open source, so you can&apos;t
        use it in your own projects. You&apos;ll find &ldquo;gg sans free download&rdquo; links on random font
        sites, but those aren&apos;t from Discord, and using them in a logo, thumbnail or product could get
        you into licensing trouble.
      </p>
      <p>
        The logo font is the same story. Ginto Nord is a paid font from Dinamo, and Discord&apos;s version has
        custom changes you can&apos;t buy. The Discord wordmark itself is a trademark, so don&apos;t copy it
        for your own branding.
      </p>

      <h2>Free fonts that look like Discord&apos;s</h2>
      <p>
        If you want the Discord look for a server banner, YouTube thumbnail or website, these free Google
        Fonts get close and are safe to use commercially.
      </p>
      <Figure
        src="/blog/discord-font-alternatives.webp"
        alt="The word Discord written in four free Google Fonts that look like Discord's fonts: Nunito Sans, Inter, Poppins and Anton"
        caption="Free Discord look-alike fonts: Nunito Sans, Inter, Poppins and Anton."
      />
      <ul>
        <li>
          <strong>For the app text (gg sans):</strong> Nunito Sans, Inter or Source Sans 3. They&apos;re
          clean, rounded and easy to read at small sizes.
        </li>
        <li>
          <strong>For the old app text (Whitney):</strong> Open Sans, which has similar humanist shapes.
        </li>
        <li>
          <strong>For the logo (Ginto Nord):</strong> Poppins in Bold or Extra Bold, which is geometric and
          confident.
        </li>
        <li>
          <strong>For big Discord-style headlines:</strong> Anton, which is heavy and condensed and looks
          great in all caps.
        </li>
      </ul>
      <p>
        <strong>Tip:</strong> for a banner that really feels like Discord, set the headline in Anton or
        Poppins Extra Bold, use white text, and put it on Discord&apos;s blurple colour (<code>#5865F2</code>
        ).
      </p>

      <h2>Can you change Discord&apos;s font?</h2>
      <p>
        Not officially. Discord has no font picker, so you can&apos;t swap gg sans for another typeface in
        settings. What you can change is the size: open <strong>User Settings &gt; Appearance</strong> and use
        the chat font scaling slider to make text bigger or smaller.
      </p>
      <p>
        Some people use client mods or custom CSS to force a different font, but those break Discord&apos;s
        terms of service and could get your account banned, so I don&apos;t recommend them.
      </p>
      <p>
        If what you really want is fancy text in your name, bio or messages, that&apos;s a different thing,
        and it&apos;s easy. I explain the whole process in{" "}
        <Link href="/blog/how-to-change-font-on-discord">how to change your font on Discord</Link>.
      </p>

      <h2>Want your text to look different? Use Unicode fonts</h2>
      <p>
        You can&apos;t change the font Discord uses, but you can change the letters you type. Unicode has full
        alphabets that look bold, cursive, gothic and more. Because they&apos;re characters and not a font
        setting, everyone in the server sees them.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Style</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Bold", "𝐃𝐢𝐬𝐜𝐨𝐫𝐝"],
              ["Cursive", "𝓓𝓲𝓼𝓬𝓸𝓻𝓭"],
              ["Gothic", "𝕯𝖎𝖘𝖈𝖔𝖗𝖉"],
              ["Small caps", "ᴅɪꜱᴄᴏʀᴅ"],
              ["Double-struck", "𝔻𝕚𝕤𝕔𝕠𝕣𝕕"],
            ].map(([style, example]) => (
              <tr key={style}>
                <td>{style}</td>
                <td className="fancy-text whitespace-nowrap">{example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Type your name into the <Link href="/">Discord font generator</Link>, tap a style to copy it, and
        paste it into your display name, About Me, server name or a message.
      </p>
      <p>
        Your device draws these styles with its own built-in fonts. That&apos;s also why a rare style
        sometimes shows as boxes on older phones, so test it on another device first.
      </p>
    </>
  ),
};
