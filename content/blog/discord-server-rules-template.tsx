import { BlogImage } from "@/components/BlogImage";
import Link from "next/link";
import { CopyBlock, CopyChipRow } from "@/components/ServerLayouts";
import type { BlogPost } from ".";

const ruleSets = [
  {
    id: "general",
    name: "General community server",
    note: "A solid all-round set for most public servers.",
    text: `📜 SERVER RULES

1. Be respectful. No harassment, hate speech, slurs or personal attacks.
2. No spam. This includes repeated messages, walls of emojis and mass pings.
3. Keep it safe for work. No NSFW, gore or shocking content.
4. Use the right channels. Check channel topics before posting.
5. No self-promotion or ads without staff permission, including in DMs.
6. Don't share personal info, yours or anyone else's.
7. English only in public channels so staff can moderate.
8. Follow Discord's Terms of Service and Community Guidelines.
9. Listen to staff. If you disagree, message a moderator privately.

Breaking the rules can lead to a warning, mute, kick or ban.`,
  },
  {
    id: "gaming",
    name: "Gaming server",
    note: "Covers cheating, toxicity and voice chat on top of the basics.",
    text: `🎮 SERVER RULES

1. Be a good teammate. No toxicity, rage or flaming other players.
2. No cheats, hacks, exploits or account selling.
3. No spam, mass pings or soundboard spam in voice.
4. Keep voice chat friendly. No ear-rape, screaming or music bots in the wrong channels.
5. Use the right channels for LFG, clips and memes.
6. No NSFW names, avatars or content.
7. No advertising other servers or streams without permission.
8. Spoiler-tag new game story content with ||spoilers||.
9. Follow Discord's Terms of Service and the game's rules.

Staff decisions are final. Breaking rules = warning, mute, kick or ban.`,
  },
  {
    id: "friends",
    name: "Small friends server",
    note: "Short and relaxed, for a private group.",
    text: `🌸 HOUSE RULES

1. Be kind. Joking is fine, being mean is not.
2. What's said here stays here. No screenshots without asking.
3. Ask before inviting someone new.
4. Keep the chaos in the right channels.
5. Respect "no" and people's boundaries.

Have fun! 💕`,
  },
  {
    id: "art",
    name: "Art and creative server",
    note: "Protects artists' work and keeps feedback kind.",
    text: `🎨 SERVER RULES

1. Be supportive. Give kind, helpful feedback, never mean comments.
2. Only post your own work, or credit the artist clearly.
3. No art theft, tracing or reposting without permission.
4. Say if your work uses AI, and post it only in channels that allow it.
5. Keep it SFW. Use spoiler tags and content warnings when needed.
6. Commissions and promotion go in their own channels only.
7. No unsolicited DMs asking for free art.
8. Follow Discord's Terms of Service and Community Guidelines.

Breaking the rules can lead to a warning, mute or ban.`,
  },
  {
    id: "study",
    name: "Study and school server",
    note: "Keeps the focus on learning and stops cheating.",
    text: `📚 SERVER RULES

1. Be respectful and patient. Everyone learns at their own pace.
2. No cheating. Don't share live exam answers or do others' graded work.
3. Ask clear questions and share what you've tried.
4. Keep study channels on topic. Off-topic chat goes in #lounge.
5. Mute your mic in study voice channels unless you're talking.
6. No spam, ads or NSFW content.
7. Follow Discord's Terms of Service and Community Guidelines.

Questions? Ask a moderator.`,
  },
] as const;

const formattedRules = `# 📜 Server Rules
Welcome! Please read these before chatting.

## 1. Be respectful
No harassment, hate speech or personal attacks.
## 2. No spam
No repeated messages, mass pings or emoji walls.
## 3. Keep it SFW
No NSFW, gore or shocking content.
## 4. Use the right channels
Check each channel's topic before posting.
## 5. Follow Discord's rules
> Read the Terms of Service and Community Guidelines.

-# Breaking the rules can lead to a warning, mute, kick or ban.`;

const extraRules = [
  "No begging for roles or Nitro.",
  "No impersonating staff or other members.",
  "No political or religious debates.",
  "No ghost pinging.",
  "Keep usernames readable and mentionable.",
  "No backseat moderating.",
  "Don't DM members without asking first.",
  "No links to scams or IP grabbers.",
  "Speak English in public channels.",
  "No drama from other servers.",
];

export const discordServerRulesTemplate: BlogPost = {
  slug: "discord-server-rules-template",
  title: "Discord Server Rules Template (Copy and Paste)",
  metaTitle: "Discord Server Rules Template: Copy & Paste Rules (2026)",
  description:
    "Copy-paste Discord server rules for gaming, community, friends, art and study servers, plus a formatted template and how to set up a #rules channel.",
  tagline: "Rule sets to copy, format & set up",
  icon: "chat",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  readingMinutes: 6,
  faqs: [
    {
      question: "What rules should a Discord server have?",
      answer:
        "Most servers need rules about respect, spam, NSFW content, self-promotion, personal info, using the right channels and following Discord's Terms of Service. Add rules for your topic, like no cheating in a gaming server or crediting artists in an art server.",
    },
    {
      question: "How many rules should a Discord server have?",
      answer:
        "Around 5 to 10. Fewer, clearer rules are easier to read and easier to enforce than a long list nobody finishes.",
    },
    {
      question: "How do I make a rules channel that people can't type in?",
      answer:
        "Open the channel's settings, go to Permissions, select @everyone and turn off Send Messages. Leave it on for your staff role so you can still post and edit the rules.",
    },
    {
      question: "How do I make members accept the rules before chatting?",
      answer:
        "Turn on Community for your server, then set up Rules Screening (Discord has kept it under Safety Setup or Onboarding in Server Settings). New members must agree to your rules before they can send messages.",
    },
    {
      question: "Can I format rules with headers and colors?",
      answer:
        "Yes. Use # for big headers, ** for bold and > for quotes. For colored text, put the rules in an ANSI code block. Our formatted template above is ready to paste.",
    },
    {
      question: "Is there a character limit for a rules message?",
      answer:
        "A normal Discord message can be up to 2,000 characters (4,000 with Nitro). Every template on this page fits in one message. For longer rules, split them across two or three messages.",
    },
  ],
  body: (
    <>
      <BlogImage
        src="/blog/discord-server-rules-template.webp"
        alt="Discord rules channel with a numbered Server Rules list (be respectful, no spam, keep it SFW, use the right channels, follow Discord's rules) and a Rules Screening pop-up asking members to agree before they chat"
        href="/discord-big-text"
        label="Discord Big Text Generator"
        priority
      />

      <p>
        Good rules keep a Discord server friendly and save moderators a lot of arguments. But writing them
        from scratch is boring, and it&apos;s easy to forget something important.
      </p>
      <p>
        This page gives you ready-made Discord server rules for different kinds of servers. Pick one, tap{" "}
        <strong>Copy</strong>, edit it to fit your community, and paste it into your rules channel. Below the
        templates you&apos;ll find a formatted version with headers, extra rule ideas and the steps to set up
        a proper #rules channel.
      </p>

      <h2>Copy-and-Paste Discord Server Rules</h2>
      <p>Every template fits in one Discord message (under 2,000 characters).</p>
      {ruleSets.map((set) => (
        <div key={set.id}>
          <h3>{set.name}</h3>
          <p>{set.note}</p>
          <CopyBlock text={set.text} label={`${set.name} rules`} />
        </div>
      ))}

      <h2>Formatted Rules Template (Headers and Subtext)</h2>
      <p>
        Discord supports Markdown, so your rules can have big headers, quotes and small gray text. Copy this
        version and it will look like a proper rules page once you post it:
      </p>
      <CopyBlock text={formattedRules} label="Formatted rules" />
      <p>
        <code>#</code> and <code>##</code> make headers, <code>&gt;</code> makes a quote and <code>-#</code>{" "}
        makes small subtext. See all the options in our{" "}
        <Link href="/discord-text-formatting">Discord text formatting</Link> guide, make bigger titles with
        the <Link href="/discord-big-text">Discord big text generator</Link>, or give your rules colors with{" "}
        <Link href="/blog/discord-colored-text">Discord colored text</Link>.
      </p>

      <h2>More Rule Ideas to Add</h2>
      <p>Need something more specific? Tap any rule to copy it:</p>
      <CopyChipRow items={extraRules} />

      <h2>How to Set Up a Rules Channel</h2>
      <ol>
        <li>
          Click the <strong>+</strong> next to a category and create a text channel named <code>rules</code>.
          You can decorate it, like <code>📜・rules</code>.
        </li>
        <li>
          Open the channel settings (the gear icon), go to <strong>Permissions</strong>, select{" "}
          <code>@everyone</code> and turn off <strong>Send Messages</strong> and{" "}
          <strong>Add Reactions</strong>.
        </li>
        <li>
          Make sure your staff role can still <strong>Send Messages</strong>, so you can post and edit the
          rules.
        </li>
        <li>Paste your rules and send them.</li>
        <li>
          Drag the channel to the top of your channel list, so it&apos;s the first thing new members see.
        </li>
      </ol>

      <h2>Make Members Agree to the Rules (Rules Screening)</h2>
      <p>
        Community servers can make new members accept the rules before they can chat. Discord calls this{" "}
        <strong>Rules Screening</strong>.
      </p>
      <ol>
        <li>
          Open <strong>Server Settings</strong> and turn on <strong>Enable Community</strong> if it isn&apos;t
          on already. Choose your rules channel when asked.
        </li>
        <li>
          Find <strong>Rules Screening</strong>. Discord has kept it under <strong>Safety Setup</strong> or{" "}
          <strong>Onboarding</strong>, depending on your app version.
        </li>
        <li>Add your rules (up to 16) and save.</li>
      </ol>
      <p>
        New members will now see your rules in a pop-up and must tick &ldquo;I have read and agree&rdquo;
        before they can send messages.
      </p>

      <h2>Tips for Writing Good Discord Rules</h2>
      <ul>
        <li>
          <strong>Keep them short.</strong> One line per rule. People skip long paragraphs.
        </li>
        <li>
          <strong>Number them.</strong> Moderators can then say &ldquo;please read rule 3&rdquo;.
        </li>
        <li>
          <strong>Be specific.</strong> &ldquo;No mass pings&rdquo; is clearer than &ldquo;don&apos;t be
          annoying&rdquo;.
        </li>
        <li>
          <strong>Say what happens.</strong> List the consequences, like warning, mute, kick and ban.
        </li>
        <li>
          <strong>Point to Discord&apos;s own rules.</strong> Link the{" "}
          <a href="https://discord.com/guidelines" rel="noopener noreferrer" target="_blank">
            Community Guidelines
          </a>{" "}
          so you don&apos;t have to repeat everything.
        </li>
        <li>
          <strong>Update them.</strong> When the same problem keeps coming up, add a rule for it and announce
          the change.
        </li>
      </ul>
      <p>
        Want your rules channel to match the rest of your server? Find dividers and icons on our{" "}
        <Link href="/discord-symbols">Discord Symbols</Link> page.
      </p>
    </>
  ),
  outro: (
    <>
      <h2>Keep Building Your Server</h2>
      <ul>
        <li>
          <Link href="/blog/aesthetic-discord-server-layout-ideas">
            Aesthetic Discord server layout ideas
          </Link>
          : channels and categories to copy
        </li>
        <li>
          <Link href="/blog/discord-welcome-message-ideas">Discord welcome message ideas</Link>: messages and
          templates for your #welcome channel
        </li>
        <li>
          <Link href="/blog/how-to-make-roles-in-discord">How to make roles in Discord</Link>: create, color
          and order your staff roles
        </li>
        <li>
          <Link href="/discord-server-names">Discord server names</Link>: cool, cute and aesthetic ideas
        </li>
        <li>
          <Link href="/discord-big-text">Discord big text generator</Link>: big headers for your rules and
          announcements
        </li>
      </ul>
    </>
  ),
};
