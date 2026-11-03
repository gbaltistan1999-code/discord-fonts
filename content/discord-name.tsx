import type { Faq } from "./faqs";

export const discordNamePage = {
  path: "/discord-name-generator",
  name: "Discord Name Generator",
  h1: "Discord Name Generator",
  title: "Discord Name Generator – Stylish Display Names & Fonts",
  description:
    "Make a stylish Discord display name in seconds. Pick a fancy font, add symbols, check the 32-character limit, and copy your new name straight into Discord.",
  intro:
    "Your display name shows up next to every message you send, in every server you're in. It's worth making it look good. Type your name or gamer tag below, try it in different fonts and decorations, and copy the one that feels like you.",
  sampleText: "Your Name",
  /** Bold, Bold Script, Small Caps, Double-Struck, Bold Sans, Sans Bold Italic. */
  order: ["bold-serif", "bold-script", "small-caps", "double-struck", "bold-sans", "sans-bold-italic"],
} as const;

export const discordNameFaqs: readonly Faq[] = [
  {
    question: "Can I use fancy fonts in my Discord username?",
    answer:
      "No. Usernames only accept lowercase letters, numbers, underscores and periods. Fancy fonts work in your display name and server nicknames.",
  },
  {
    question: "How long can a Discord display name be?",
    answer: "Up to 32 characters. Decorations count too, so long names with symbols may need trimming.",
  },
  {
    question: "Will everyone see my styled name the same way?",
    answer:
      "Almost everyone will. A few older devices can't show rare characters and display boxes instead. Stick to bold, script or gothic if you want to be safe.",
  },
  {
    question: "Is it against Discord's rules to use a fancy name?",
    answer:
      "Using Unicode characters isn't against the rules on its own. Problems come from impersonation, offensive names, or names designed to be unreadable. Individual servers can also set their own nickname rules.",
  },
  {
    question: "Can I change my display name as often as I want?",
    answer:
      "Yes, display names and nicknames can be changed whenever you like. Your @username has stricter rules.",
  },
  {
    question: "Is this name generator free?",
    answer: "Yes. No sign-up, and everything is converted in your browser.",
  },
];

const nameTypeRows = [
  [
    "What people see",
    "Next to your messages and in member lists",
    "On your profile, and when someone adds you",
  ],
  ["Fancy fonts and symbols", "Yes", "No"],
  ["Allowed characters", "Almost any Unicode character", "Lowercase letters, numbers, underscores, periods"],
  ["Has to be unique", "No", "Yes"],
  ["Length", "Up to 32 characters", "2 to 32 characters"],
] as const;

const nameIdeaRows = [
  ["Clean", "Bold or double-struck name", "𝐍𝐨𝐚𝐡 / ℕ𝕠𝕒𝕙"],
  ["Soft aesthetic", "Small caps + soft symbols", "✧ ɴᴏᴀʜ ✧"],
  ["Elegant", "Bold script", "𝓝𝓸𝓪𝓱"],
  ["Gamer", "Gothic + tag", "𝕭𝖑𝖆𝖟𝖊"],
  ["Decorated", "Script inside a frame", "꧁ 𝓝𝓸𝓪𝓱 ꧂"],
  ["Minimal", "Plain name + one symbol", "noah ♡"],
] as const;

/** The example column, shared with the translated tables. */
export const nameIdeaExamples: readonly string[] = nameIdeaRows.map((row) => row[2]);

export function DiscordNameArticle() {
  return (
    <>
      <h2>First: display name or username?</h2>
      <p>
        Discord gives every account two names, and only one of them can be styled. This trips up a lot of
        people.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-[34rem]">
          <thead>
            <tr>
              <td />
              <th scope="col">Display name</th>
              <th scope="col">@username</th>
            </tr>
          </thead>
          <tbody>
            {nameTypeRows.map(([label, displayName, username]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{displayName}</td>
                <td>{username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        So the name you build here goes in your display name. Your @username stays plain, and that&apos;s a
        good thing, because it&apos;s how friends find you.
      </p>

      <h2>How to make a name that actually looks good</h2>
      <p>
        Generators give you hundreds of options, which makes it easy to end up with something messy. A simple
        process helps:
      </p>
      <ol>
        <li>
          Start with the plain name. Decide what you want to be called before styling it. Short names (4 to 12
          letters) look best in every style.
        </li>
        <li>
          Pick one font that matches your vibe. Bold and double-struck feel clean and confident. Script feels
          soft or elegant. Gothic feels dark or competitive. Small caps feels calm and aesthetic.
        </li>
        <li>
          Add at most one decoration. A single symbol on each side, like ✧ or ♡, frames the name without
          crowding it.
        </li>
        <li>
          Test it small. Your name usually appears at a small size in chat, so check it in the
          generator&apos;s preview and on your phone.
        </li>
        <li>
          Check the length. The generator&apos;s preview shows if you&apos;re over the 32-character limit.
        </li>
      </ol>

      <h2>Name ideas by style</h2>
      <div className="overflow-x-auto">
        <table className="min-w-[30rem]">
          <thead>
            <tr>
              <th scope="col">Vibe</th>
              <th scope="col">Formula</th>
              <th scope="col">Example</th>
            </tr>
          </thead>
          <tbody>
            {nameIdeaRows.map(([vibe, formula, example]) => (
              <tr key={vibe}>
                <td>{vibe}</td>
                <td>{formula}</td>
                <td className="fancy-text whitespace-nowrap">{example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>How to change your Discord display name</h2>
      <ol>
        <li>Copy your new name from the generator.</li>
        <li>Open Discord and go to User Settings (the gear icon next to your profile).</li>
        <li>Open the profile section.</li>
        <li>Paste into Display Name and save your changes.</li>
      </ol>
      <p>
        On mobile, tap your profile picture, then edit your profile and paste into Display Name. Discord moves
        menus around now and then, so labels may differ slightly in your version.
      </p>

      <h2>Want a different name in one server?</h2>
      <p>
        Use a server nickname. It replaces your display name inside that server only, which is handy for clan
        tags, roleplay names or matching a server&apos;s theme. Open the server menu, choose the option to
        edit your per-server profile, and paste your styled name into Nickname. If the option is greyed out,
        the server doesn&apos;t let members change nicknames, so ask a moderator.
      </p>

      <h2>Things to watch out for</h2>
      <ul>
        <li>
          Readability beats decoration. If friends can&apos;t type the first letters of your name, @mentioning
          you gets annoying.
        </li>
        <li>
          Some styles break on phones. Squared and dark bubble letters can show as boxes on older devices.
          Bold, script and gothic are the safest.
        </li>
        <li>
          Fancy names are harder to search. Discord&apos;s member search may not match styled letters to plain
          ones, so friends might struggle to find you in a big server.
        </li>
        <li>
          Don&apos;t impersonate. Names that copy moderators, bots or well-known users can get you warned or
          removed, and fancy fonts are a common way people try it.
        </li>
      </ul>
    </>
  );
}

export const discordNameRelated = [
  { href: "/fancy-text-generator", label: "Fancy Text Generator" },
  { href: "/", label: "Discord Fonts Generator" },
  { href: "/discord-font-generator/bold", label: "Bold font generator" },
  { href: "/discord-font-generator/cursive", label: "Cursive font generator" },
  { href: "/discord-font-generator/small-caps", label: "Small caps generator" },
] as const;
