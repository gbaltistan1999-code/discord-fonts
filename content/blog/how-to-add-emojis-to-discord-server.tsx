import Link from "next/link";
import type { BlogPost } from ".";

/** Emoji slots per Server Boost level (Discord Server Boosting FAQ, checked November 2026). */
const slotRows = [
  ["No level", "0", "50", "50", "100"],
  ["Level 1", "2", "100", "100", "200"],
  ["Level 2", "7", "150", "150", "300"],
  ["Level 3", "14", "250", "250", "500"],
] as const;

const requirementRows = [
  ["File type", "PNG, JPG, GIF or WEBP"],
  ["Maximum file size", "256 KB"],
  ["Recommended size", "128 × 128 pixels (square)"],
  ["Name", "At least 2 characters: letters, numbers and underscores only"],
] as const;

export const addEmojisToDiscordServer: BlogPost = {
  slug: "how-to-add-emojis-to-discord-server",
  title: "How to Add Emojis to a Discord Server (PC & Mobile, 2026)",
  description:
    "Learn how to add custom emojis to your Discord server on PC and mobile, plus size limits, emoji slots, naming rules and fixes for upload errors.",
  tagline: "Upload steps, size limits & emoji slots",
  icon: "sparkle",
  datePublished: "2026-11-10",
  dateModified: "2026-11-10",
  readingMinutes: 7,
  faqs: [
    {
      question: "How many emojis can a Discord server have?",
      answer:
        "Every server starts with 50 static and 50 animated emoji slots. Server Boosts raise that to 100 each at Level 1, 150 each at Level 2 and 250 each at Level 3.",
    },
    {
      question: "What size should a Discord emoji be?",
      answer:
        "Keep the file under 256 KB and use a square image. 128 × 128 pixels is the sweet spot: sharp enough to look good, small enough to stay under the size limit.",
    },
    {
      question: "Do I need Nitro to add emojis to a server?",
      answer:
        "No. Anyone with the Create Expressions or Manage Expressions permission can upload static and animated emojis. Nitro is only needed to use animated emojis, or to use a server's emojis in other servers.",
    },
    {
      question: "Why can't I upload an emoji to my server?",
      answer:
        "The most common reasons are a file over 256 KB, a missing Create Expressions permission, or full emoji slots. Shrink the image, ask an admin for the permission, or delete an emoji you no longer use.",
    },
    {
      question: "Can I add emojis on the Discord mobile app?",
      answer:
        "Yes. Tap your server name, open Settings, then Emoji, and tap Upload Emoji. It works the same on iPhone and Android.",
    },
    {
      question: "How do I use a custom emoji after adding it?",
      answer:
        "Type a colon followed by the emoji name, like :party_cat:, or pick it from the emoji menu in the message box. It shows up under your server's icon in the menu.",
    },
  ],
  body: (
    <>
      <p>
        Custom emojis are one of the easiest ways to give a Discord server its own personality. Instead of
        sticking to the standard smileys everyone has, your members can react with your server&apos;s mascot,
        an inside joke, or a little badge that only makes sense in your community.
      </p>
      <p>
        They&apos;re also useful. Admins use them for role menus, event check-ins and quick &ldquo;approved&rdquo;
        or &ldquo;denied&rdquo; reactions. And adding them takes less than a minute once you know where the
        button is.
      </p>
      <p>
        This guide walks you through it on PC and on your phone, then covers the size limits, how many emojis
        your server can hold, and what to do when Discord refuses your upload.
      </p>

      <h2>What you need first: the right permission</h2>
      <p>
        You can only add emojis to a server where you have permission. If you own the server or you&apos;re an
        admin, you already have it. Everyone else needs one of these two permissions on one of their roles:
      </p>
      <ul>
        <li>
          <strong>Create Expressions</strong> lets you upload new emojis, stickers and soundboard sounds, and
          edit or delete the ones you added yourself.
        </li>
        <li>
          <strong>Manage Expressions</strong> lets you edit or delete every emoji in the server, including ones
          other people uploaded.
        </li>
      </ul>
      <p>
        If you don&apos;t see the Emoji option in Server Settings, you&apos;re missing this permission. Ask a
        server admin to turn it on for your role under <strong>Server Settings &gt; Roles &gt; Permissions</strong>.
      </p>

      <h2>How to add emojis to a Discord server on desktop</h2>
      <p>These steps work the same in the Windows and Mac apps and in your browser.</p>
      <ol>
        <li>Open your server and click the server name at the top left.</li>
        <li>
          Choose <strong>Server Settings</strong> from the menu.
        </li>
        <li>
          Click <strong>Emoji</strong> in the left sidebar.
        </li>
        <li>
          Click the <strong>Upload Emoji</strong> button and pick an image from your computer.
        </li>
        <li>
          The emoji appears in the list straight away. Click its name to rename it, then press Enter to save.
        </li>
      </ol>
      <p>
        You can select several images at once in the file picker to upload a whole batch in one go. Discord
        fills in a name from each file name, so rename them afterwards if the names are messy.
      </p>

      <h2>How to add emojis on mobile (iPhone and Android)</h2>
      <p>The mobile app hides the setting a little deeper, but it&apos;s the same on both platforms.</p>
      <ol>
        <li>Open the Discord app and go to your server.</li>
        <li>Tap the server name at the top of the channel list.</li>
        <li>
          Tap <strong>Settings</strong> (the gear icon).
        </li>
        <li>
          Scroll down and tap <strong>Emoji</strong>.
        </li>
        <li>
          Tap <strong>Upload Emoji</strong> and choose an image from your photos. Allow photo access if your
          phone asks.
        </li>
        <li>Crop the image if needed, give the emoji a name, and tap Upload or Save.</li>
      </ol>
      <p>
        Tip: phone screenshots and photos are usually far bigger than 256 KB. If the upload fails, crop the
        image to a small square first or run it through an image resizer.
      </p>

      <h2>Discord emoji requirements</h2>
      <p>Discord checks every upload against these rules:</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Requirement</th>
              <th scope="col">Rule</th>
            </tr>
          </thead>
          <tbody>
            {requirementRows.map(([rule, value]) => (
              <tr key={rule}>
                <td>{rule}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Emojis are shown tiny in chat, so simple designs with bold outlines read best. A transparent PNG
        background looks much cleaner than a white box, especially for people using dark mode. For names, short
        and clear wins: <code>party_cat</code> is easy to type, <code>IMG_20261110_final2</code> is not.
      </p>

      <h2>How many emojis can a Discord server have?</h2>
      <p>
        Every server gets separate slots for static and animated emojis, so filling one type never uses up the
        other. Server Boosts unlock more slots:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Server level</th>
              <th scope="col">Boosts needed</th>
              <th scope="col">Static emojis</th>
              <th scope="col">Animated emojis</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {slotRows.map(([level, boosts, staticSlots, animated, total]) => (
              <tr key={level}>
                <td>{level}</td>
                <td>{boosts}</td>
                <td>{staticSlots}</td>
                <td>{animated}</td>
                <td>{total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        If your server drops a level because boosts run out, the extra emojis aren&apos;t deleted. They just
        become unavailable until the server reaches that level again.
      </p>

      <h2>Animated emojis and Nitro: who can do what</h2>
      <p>This part confuses a lot of people, because uploading and using are two different things.</p>
      <ul>
        <li>
          <strong>Uploading:</strong> anyone with the Create Expressions permission can upload animated GIF
          emojis to a server. No Nitro needed.
        </li>
        <li>
          <strong>Using static emojis:</strong> every member can use the server&apos;s static custom emojis
          inside that server for free.
        </li>
        <li>
          <strong>Using animated emojis:</strong> sending them in messages needs a Nitro subscription.
        </li>
        <li>
          <strong>Using emojis in other servers:</strong> taking a server&apos;s custom emojis into other servers
          or DMs also needs Nitro (Nitro Basic covers custom emojis too).
        </li>
      </ul>
      <p>
        So if you&apos;re running a community where most people don&apos;t have Nitro, prioritize good static
        emojis. Animated ones are a nice bonus for the members who can use them.
      </p>

      <h2>Where to find or make emojis</h2>
      <p>The best server emojis are usually ones made for your community. A few ideas:</p>
      <ul>
        <li>
          <strong>Make your own.</strong> Crop a funny moment from a screenshot, draw something simple, or
          remove the background from a photo of your pet. Any image editor can export a 128 × 128 PNG.
        </li>
        <li>
          <strong>Ask your members.</strong> Run an emoji contest. People love seeing their art used, and it
          makes the server feel like theirs.
        </li>
        <li>
          <strong>Commission an artist.</strong> Many artists sell custom emoji packs, and a matching set looks
          far more polished than random images.
        </li>
        <li>
          <strong>Use free emoji libraries carefully.</strong> Only upload images you have the right to use,
          credit the creator if they ask, and keep everything within Discord&apos;s community guidelines.
        </li>
      </ul>
      <p>
        Want text that stands out as much as your emojis? Pair them with a styled server name from our{" "}
        <Link href="/">Discord font generator</Link>, or learn how to{" "}
        <Link href="/blog/how-to-change-font-on-discord">change your font on Discord</Link> for names and bios.
      </p>

      <h2>Fixes for common emoji problems</h2>
      <h3>&ldquo;File too large&rdquo;</h3>
      <p>
        The file is over 256 KB. Resize it to 128 × 128 pixels, save it as PNG or WEBP, or compress it with an
        image optimizer. For GIFs, cut some frames or reduce the colors, since long animations add up fast.
      </p>
      <h3>No Emoji option or no upload button</h3>
      <p>
        You&apos;re missing the Create Expressions permission. Ask an admin to add it to your role. On mobile,
        make sure you opened the server&apos;s Settings, not your own User Settings.
      </p>
      <h3>&ldquo;Maximum number of emojis reached&rdquo;</h3>
      <p>
        Your emoji slots are full. Delete emojis nobody uses (hover over one in the list and click the X), or
        boost the server to the next level for more slots. Remember static and animated slots are counted
        separately.
      </p>
      <h3>The emoji isn&apos;t showing up</h3>
      <ul>
        <li>Restart Discord or press Ctrl+R on desktop to refresh the emoji list.</li>
        <li>Check you typed the name exactly, with colons on both sides.</li>
        <li>Animated emojis and emojis from other servers only work with Nitro.</li>
        <li>If the server lost a boost level, emojis above the free limit are unavailable until it&apos;s regained.</li>
      </ul>
      <p>
        Once your emojis are set up, make your announcements match. Our guide to{" "}
        <Link href="/discord-text-formatting">Discord text formatting</Link> covers headers, spoilers and
        lists, and you can even add <Link href="/blog/discord-colored-text">colored text in Discord</Link>{" "}
        messages.
      </p>
    </>
  ),
  outro: (
    <>
      <h2>Wrapping up</h2>
      <p>
        Adding emojis to a Discord server comes down to three things: the right permission, a small square image
        under 256 KB, and a free slot. Open <strong>Server Settings &gt; Emoji</strong>, hit Upload Emoji, and
        your community has a new way to react in seconds.
      </p>
      <p>
        Start with a handful of emojis your members will actually use, like a server mascot, a &ldquo;GG&rdquo;
        and a few reaction faces, then grow the collection as your server does.
      </p>
    </>
  ),
};
