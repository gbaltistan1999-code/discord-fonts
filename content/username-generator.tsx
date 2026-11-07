import Link from "next/link";
import type { Faq } from "./faqs";

/** Copy for /discord-username-generator (English only). Text is used exactly as supplied. */
export const usernameGeneratorPage = {
  path: "/discord-username-generator",
  name: "Discord Username Generator",
  title: "Discord Username Generator – Cool, Unique & Aesthetic Names",
  description:
    "Generate cool, unique Discord usernames instantly. Pick a style, add a word, and copy names that actually follow Discord's username rules. Free, no sign-up.",
  h1: "Discord Username Generator",
  intro:
    "Get cool, unique Discord usernames that actually follow Discord's rules. Pick a style, add a word if you like, and copy the one that feels like you.",
} as const;

const fontGenerator = <Link href="/">Discord font generator</Link>;

export const usernameGeneratorFaqs: readonly Faq[] = [
  {
    question: "Is this Discord username generator free?",
    answer: "Yes. It's completely free, there's no sign-up, and you can generate as many names as you want.",
  },
  {
    question: "Can I use fancy fonts in my Discord username?",
    answer:
      "No. Usernames only allow lowercase letters, numbers, underscores and periods. You can use fancy fonts in your display name, though. Try our Discord font generator for that.",
    answerContent: (
      <>
        No. Usernames only allow lowercase letters, numbers, underscores and periods. You can use fancy fonts
        in your display name, though. Try our {fontGenerator} for that.
      </>
    ),
  },
  {
    question: "Does this tool check if a username is available?",
    answer:
      "No, and we'd rather be honest about it: Discord doesn't offer a public way to check availability. The quickest way to find out is to try the name in Discord's settings. If it's taken, just generate a new batch.",
  },
  {
    question: "How long can a Discord username be?",
    answer: "Between 2 and 32 characters.",
  },
  {
    question: "Can I still get a 4-letter Discord username?",
    answer:
      "It's possible, but most real 4-letter words are already taken. Made-up, pronounceable names give you a much better chance. Set the length filter to 4 and generate a few batches.",
  },
  {
    question: "If I change my username, can I get my old one back?",
    answer:
      "Only if nobody else claims it first. Once you give up a username, anyone can take it, so be sure before you switch.",
  },
];

/** The guide below the tool. */
export function UsernameGeneratorArticle() {
  return (
    <>
      <h2>How to use the Discord username generator</h2>
      <ol>
        <li>Type a word you like (optional). Your name, a hobby, a game character, anything.</li>
        <li>Pick a style and a length.</li>
        <li>
          Hit Generate, copy a name you like, and try it in Discord. Taken? Hit generate again. Every click
          gives you a fresh batch.
        </li>
      </ol>

      <h2>Why so many generated names don&apos;t work on Discord</h2>
      <p>
        In 2023 Discord dropped the old Name#1234 tags. Now every username has to be unique, and the rules got
        stricter:
      </p>
      <ul>
        <li>2 to 32 characters</li>
        <li>Lowercase letters, numbers, underscores and periods only</li>
        <li>No spaces, capital letters, emojis or fancy fonts</li>
        <li>No two periods in a row</li>
      </ul>
      <p>
        A lot of name generators still give you names with capitals, spaces or symbols, and Discord simply
        won&apos;t accept them. Every name this tool shows you has already passed these rules, so you&apos;re
        not wasting time on names that can never work.
      </p>

      <h2>Username vs display name: what&apos;s the difference?</h2>
      <p>
        Your username is your unique ID. It&apos;s how people add you as a friend, and nobody else can have
        it.
      </p>
      <p>
        Your display name is what people actually see in chats and servers. It doesn&apos;t have to be unique,
        and it can include spaces, emojis and fancy fonts.
      </p>
      <p>
        So here&apos;s the trick most people miss: keep your username simple and easy to type, and put the
        style in your display name. Once you&apos;ve picked a username, you can turn it into a fancy display
        name with our {fontGenerator}.
      </p>

      <h2>Tips for picking a username you won&apos;t regret</h2>
      <ul>
        <li>Shorter is easier to share. Somewhere between 5 and 12 characters is the sweet spot.</li>
        <li>
          Skip the number spam. &quot;shadow_48291&quot; is harder to remember than &quot;shadow.wav&quot;.
        </li>
        <li>Say it out loud. If you&apos;d feel awkward telling a friend your username, pick another one.</li>
        <li>
          Leave out your full real name and birth year. Your username is visible to everyone you meet in
          servers.
        </li>
        <li>Think long term. The name that feels cool today should still feel okay a few years from now.</li>
        <li>
          If your favorite name is taken, try adding a period or underscore (luna.exe, kai_codes) before
          giving up on it.
        </li>
      </ul>

      <h2>How to change your Discord username</h2>
      <p>On desktop:</p>
      <ol>
        <li>Click the gear icon next to your name at the bottom left to open User Settings.</li>
        <li>Go to My Account and click Edit next to Username.</li>
        <li>Type your new username, enter your password, and click Done.</li>
      </ol>
      <p>On mobile:</p>
      <ol>
        <li>Tap your profile picture in the bottom right corner.</li>
        <li>Tap the gear icon, then Account.</li>
        <li>Tap Username, type the new one, and save.</li>
      </ol>
      <p>
        Discord limits how many times you can change your username in a short period, so if you see a
        &quot;too many changes&quot; message, wait a while and try again.
      </p>

      <h2>Why does Discord say my username is taken?</h2>
      <p>
        Discord has hundreds of millions of accounts, and every username must be unique, so most short, simple
        names were claimed long ago. That&apos;s especially true for real words with 3 or 4 letters. Your best
        bets are rare word combinations, a period or underscore in the middle, or a made-up word that&apos;s
        easy to pronounce. The Short style in the generator above is built for exactly that.
      </p>
    </>
  );
}
