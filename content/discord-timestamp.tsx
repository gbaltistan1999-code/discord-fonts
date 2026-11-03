import Image from "next/image";
import { timestampStyles } from "@/lib/discord-timestamp";
import type { Faq } from "./faqs";

export const discordTimestampPage = {
  path: "/discord-timestamp-generator",
  name: "Discord Timestamp Generator",
  h1: "Discord Timestamp Generator",
  title: "Discord Timestamp Generator – Countdowns & Local Times",
  description:
    "Create Discord timestamps that show the right time in every viewer's time zone. Pick a date, choose a format or countdown, and copy the code.",
  intro: "Pick a date and time, and get a code that shows the right local time for everyone in your server.",
} as const;

export const discordTimestampFaqs: readonly Faq[] = [
  {
    question: "What is a Discord timestamp?",
    answer:
      "It's a short code like <t:1793740800:F> that Discord turns into a date or time when the message is sent. Instead of a fixed time, it stores one moment in Unix time, so Discord can show it in each reader's own time zone.",
  },
  {
    question: "How do I make a countdown in Discord?",
    answer:
      'Use the Relative style, R. Pick the date and time of your event in the generator, copy the Relative code, and paste it into your message. Discord shows it as "in 3 days" or "in 2 hours" and keeps it up to date, then switches to "2 hours ago" once the moment has passed.',
  },
  {
    question: "Do Discord timestamps show in each person's time zone?",
    answer:
      "Yes. That's the main reason to use them. The code holds a single moment, and every viewer's Discord app shows that moment in their own time zone and language, so nobody has to convert times in their head.",
  },
  {
    question: "Why is my Discord timestamp not working?",
    answer:
      "The usual causes are a typo in the code (it must be <t: followed by the number, with no spaces), a capital T at the start, a style letter Discord doesn't know, or a timestamp in milliseconds instead of seconds. A 13-digit number is milliseconds; remove the last three digits. Timestamps also don't work in usernames, display names, nicknames or channel names.",
  },
  {
    question: "Can I use timestamps in embeds or bots?",
    answer:
      "Yes. A bot can send the same <t:...> code in a normal message, and it also works in embed descriptions and field values. Bots should send Unix time in seconds. Embeds also have a separate timestamp field that takes an ISO 8601 date and shows it at the bottom of the embed.",
  },
  {
    question: "Do Discord timestamps work on mobile?",
    answer:
      "Yes. Timestamps render in the Discord apps for iOS and Android as well as on desktop and in the browser, and each device uses its own time zone and language settings.",
  },
  {
    question: "What is a Unix timestamp?",
    answer:
      "A Unix timestamp is the number of seconds since 00:00:00 UTC on January 1, 1970. Because it counts from one fixed moment, it means the same instant everywhere, which is why Discord uses it. For example, 1793740800 is November 3, 2026 at 21:20 UTC.",
  },
];

function Figure({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        className="h-auto w-full max-w-xl rounded-xl"
      />
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

export function DiscordTimestampArticle() {
  return (
    <>
      <h2 id="what-is-a-discord-timestamp">What Is a Discord Timestamp?</h2>
      <p>
        A Discord timestamp is a small piece of code that Discord turns into a date or time when you send a
        message. You write something like <code>&lt;t:1793740800:F&gt;</code>, and readers see a proper date,
        such as “Tuesday, November 3, 2026 at 4:20 PM”.
      </p>
      <p>
        The number in the code is a Unix timestamp: one exact moment, not a time on a particular clock. Each
        person’s Discord app shows that moment in their own time zone and language. Someone in New York, a
        friend in London and a teammate in Sydney all read the correct local time from the same message, so
        nobody has to work out the difference, and nobody turns up an hour late.
      </p>
      <Figure
        src="/discord-timestamp-example.svg"
        alt="Example of a Discord timestamp code and how it appears in a Discord message"
        width={640}
        height={380}
        caption="The code you type, and the date and countdown readers see."
      />

      <h2 id="how-to-use">How to Use the Discord Timestamp Generator</h2>
      <ol>
        <li>Choose the date and time of your event, or press Now to start from the current time.</li>
        <li>
          Check the time zone. It starts as yours; change it if the event is set in another zone, such as a
          tournament in Eastern Time.
        </li>
        <li>Fine-tune with the +15 min, +1 hour, +1 day and +1 week buttons if you like.</li>
        <li>Find the format you want in the list and press Copy.</li>
        <li>Paste the code into your Discord message and send it.</li>
      </ol>
      <p>
        Already have a Unix timestamp? Paste it into the Unix field and the generator loads it, whether it’s
        in seconds or milliseconds. That also makes this a quick Discord time converter in reverse.
      </p>
      <Figure
        src="/discord-timestamp-generator-steps.svg"
        alt="Three steps to use the Discord timestamp generator: pick a date and time, choose a format, copy and paste"
        width={640}
        height={260}
        caption="Pick a time, choose a format, then copy and paste it into Discord."
      />

      <h2 id="formats">Discord Timestamp Formats Explained</h2>
      <p>
        The letter at the end of the code sets the Discord time format. There are nine styles. If you leave
        the letter out, Discord uses <code>f</code>. The examples in the table come from Discord’s
        documentation; your readers see each style in their own language and clock format.
      </p>
      <Figure
        src="/discord-timestamp-formats.svg"
        alt="Discord timestamp formats: short time, long time, short date, long date, short date/time, long date/time and relative time with example codes"
        width={640}
        height={600}
        caption="All nine styles for the same moment, as a viewer in New York sees them."
      />
      <div className="overflow-x-auto">
        <table className="min-w-[36rem]">
          <thead>
            <tr>
              <th scope="col">Style</th>
              <th scope="col">Code</th>
              <th scope="col">Example</th>
              <th scope="col">Best for</th>
            </tr>
          </thead>
          <tbody>
            {timestampStyles.map((style) => (
              <tr key={style.code}>
                <td>{style.name}</td>
                <td className="whitespace-nowrap">
                  <code>&lt;t:…:{style.code}&gt;</code>
                </td>
                <td>{style.docsExample}</td>
                <td>{style.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        As a rule of thumb: use Relative (<code>R</code>) for a Discord countdown timestamp, Full Date (
        <code>F</code>) for events where the weekday matters, and Short Time (<code>t</code>) for daily
        reminders like “reset at 4:20 PM”.
      </p>

      <h2 id="write-manually">How to Write a Discord Timestamp Manually</h2>
      <p>
        You don’t need a generator if you have the Unix time. The format is <code>&lt;t:UNIX:STYLE&gt;</code>:
        a lowercase <code>t</code>, a colon, the Unix timestamp in seconds, another colon and the style
        letter, all inside angle brackets with no spaces. <code>&lt;t:1793740800:R&gt;</code> is a valid
        example, and so is <code>&lt;t:1793740800&gt;</code> without a style.
      </p>
      <p>
        To get a Unix timestamp, use this generator, run <code>date +%s</code> in a macOS or Linux terminal,
        or use <code>Math.floor(Date.now() / 1000)</code> in JavaScript. Many tools give milliseconds (13
        digits); Discord needs seconds (10 digits for current dates), so drop the last three digits.
      </p>

      <h2 id="examples">Practical Examples</h2>
      <ul>
        <li>
          <strong>Event announcements:</strong> “Movie night starts <code>&lt;t:1793740800:F&gt;</code> (
          <code>&lt;t:1793740800:R&gt;</code>)” gives the full date and a live countdown.
        </li>
        <li>
          <strong>Giveaways:</strong> “Giveaway ends <code>&lt;t:1793740800:R&gt;</code>” shows how long is
          left, and switches to “ago” once it’s over.
        </li>
        <li>
          <strong>Raids and matches:</strong> “Raid at <code>&lt;t:1793740800:t&gt;</code>” keeps a daily time
          short and correct for every player.
        </li>
        <li>
          <strong>Server rules and notices:</strong> “Rules updated <code>&lt;t:1793740800:D&gt;</code>”
          records the date without a time.
        </li>
        <li>
          <strong>Stream schedules:</strong> list each stream with <code>&lt;t:…:s&gt;</code> for a compact
          date and time per line.
        </li>
      </ul>

      <h2 id="time-zones">Every Viewer Sees Their Own Time</h2>
      <p>
        Because the code stores a single moment, the same message reads correctly around the world. Pick the
        time zone the event is planned in, and Discord does the conversion for everyone else.
      </p>
      <Figure
        src="/discord-timestamp-time-zones.svg"
        alt="One Discord timestamp showing the correct local time for users in New York, London and Sydney"
        width={640}
        height={400}
        caption="One code, three cities: each reader sees their own local time."
      />

      <h2 id="common-problems">Common Problems</h2>
      <ul>
        <li>
          <strong>It shows as plain text.</strong> Check the syntax: it must start with a lowercase{" "}
          <code>&lt;t:</code>, the style must be one of the nine letters (they’re case-sensitive), and there
          can’t be spaces inside the brackets. Code blocks and inline code (backticks) also stop it rendering.
        </li>
        <li>
          <strong>The date is thousands of years away.</strong> The number is in milliseconds. Use seconds
          instead; this generator always outputs seconds.
        </li>
        <li>
          <strong>The time is off by a few hours.</strong> The wrong time zone was selected when the code was
          made. Pick the zone the event is actually in and copy the code again.
        </li>
        <li>
          <strong>It doesn’t work in a name.</strong> Timestamps only render in message text and in bot embed
          descriptions and fields. Usernames, display names, server nicknames and channel names show the code
          as plain text.
        </li>
      </ul>

      <h2 id="tips">Tips</h2>
      <ul>
        <li>
          Combine two styles, like <code>&lt;t:X:F&gt; (&lt;t:X:R&gt;)</code>, so people see both the date and
          how long is left. The Copy combined button does this for you.
        </li>
        <li>Use Relative for countdowns. It updates by itself, so you never need to edit the message.</li>
        <li>
          Double-check the time zone before posting, especially around daylight saving changes. The generator
          warns you if a time is skipped or happens twice that day.
        </li>
      </ul>
    </>
  );
}

export const discordTimestampRelated = [
  { href: "/", label: "Discord Fonts Generator" },
  { href: "/discord-text-formatting", label: "Discord Text Formatting Guide" },
  { href: "/discord-name-generator", label: "Discord Name Generator" },
] as const;
