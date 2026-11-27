import { BlogImage } from "@/components/BlogImage";
import Link from "next/link";
import { CopyBlock, CopyLineList } from "@/components/ServerLayouts";
import { WelcomeMessageBuilder } from "@/components/WelcomeMessageBuilder";
import type { BlogPost } from ".";

const groups = [
  {
    id: "short",
    name: "Short and simple welcome messages",
    note: "Quick lines that work in any server, from a tiny friend group to a huge community.",
    items: [
      "Welcome to the server, {user}! 👋",
      "Hey {user}, glad you're here! Make yourself at home.",
      "Welcome aboard, {user}! Check out #rules to get started.",
      "A wild {user} appeared! Welcome! 🎉",
      "Welcome, {user}! Grab a seat and say hi.",
      "Good to have you here, {user}. Enjoy your stay!",
      "Welcome in, {user}! We saved you a spot. 💙",
      "{user} just joined. Everyone say hi! 👋",
      "Welcome, {user}! The more the merrier. 🥳",
      "Hi {user}, welcome! Come hang out in #general.",
    ],
  },
  {
    id: "funny",
    name: "Funny welcome messages",
    note: "Break the ice with a joke. Great for meme, gaming and friend servers.",
    items: [
      "{user} just joined. Quick, everyone act normal! 😳",
      "Welcome, {user}! The snacks are imaginary, but the fun is real. 🍕",
      "{user} has entered the chat. Hide the cringe messages!",
      "Welcome {user}! Please keep your hands and feet inside the server at all times. 🎢",
      "Brace yourselves, {user} is here. 🛡️",
      "{user} joined the party. Who invited this legend? 😎",
      "Welcome, {user}! You're now legally required to share one meme. 📜",
      "Achievement unlocked: {user} found the best server. 🏆",
    ],
  },
  {
    id: "cute",
    name: "Cute and aesthetic welcome messages",
    note: "Soft words, symbols and emojis for aesthetic, art and cozy servers.",
    items: [
      "₊˚ʚ welcome, {user}! we're so happy you're here ɞ˚₊",
      "🌸 hiii {user}, welcome to our little corner of the internet 🌸",
      "˚₊‧꒰ა welcome home, {user} ໒꒱ ‧₊˚",
      "♡ welcome {user}! grab a cozy blanket and stay a while ☕",
      "🍓 a new friend has arrived! welcome, {user} ♡",
      "✧˖° welcome to the server, {user}! you're a star °˖✧",
      "🎀 welcome {user}! don't forget to pick your roles 🎀",
      "☁️ softly waving at {user} ~ welcome! ☁️",
    ],
  },
  {
    id: "gaming",
    name: "Gaming welcome messages",
    note: "For clans, squads and game communities.",
    items: [
      "A new challenger approaches! Welcome, {user}! ⚔️",
      "Player {user} has joined the lobby. 🎮",
      "Welcome to the squad, {user}! Drop in and find a team. 🪂",
      "{user} spawned in. GG and welcome! 🏆",
      "Welcome, {user}! Grab your roles and queue up. 🎯",
      "New party member unlocked: {user}! 🛡️",
      "Respawn complete. Welcome to the server, {user}! 🔁",
      "{user} joined the clan. Let's get that W! 🔥",
    ],
  },
  {
    id: "community",
    name: "Friendly and professional welcome messages",
    note: "Clear and welcoming, for study groups, creators, brands and large communities.",
    items: [
      "Welcome to the community, {user}! Start with #rules, then introduce yourself in #introductions.",
      "Hi {user}, thanks for joining! If you have questions, our moderators are happy to help.",
      "Welcome, {user}! Take a moment to read #rules and pick your roles in #roles.",
      "We're glad you're here, {user}. Check #announcements for the latest news.",
      "Welcome aboard, {user}! Tell us what brought you here in #introductions.",
      "Hello {user}, welcome! Everything you need to get started is in #start-here.",
      "Welcome to the team, {user}! Our FAQ in #faq answers the most common questions.",
      "Thanks for joining, {user}! Turn on notifications for #announcements so you never miss an update.",
    ],
  },
  {
    id: "dm",
    name: "Welcome DM messages",
    note: "Sent privately to new members by a bot. Keep them short and helpful.",
    items: [
      "Hey {user}! Thanks for joining. Please read #rules first, then come say hi in #general. 💬",
      "Welcome! 🎉 Need roles? Head to #roles. Have a question? Ask in #help.",
      "Hi {user}, welcome to the server! We're happy to have you. If you need anything, message a moderator.",
      "Welcome, {user}! Quick tip: pick your roles in #roles to unlock the channels you care about.",
      "Thanks for joining, {user}! 💙 The fastest way to make friends here is to post in #introductions.",
      "Welcome to the server! Before you start, take 30 seconds to read #rules. Have fun!",
      "Hi {user}! We host events every week. Check #events to see what's coming up. 🎉",
      "Welcome, {user}! Reply here if you get stuck, or ask in #help. We don't bite. 😄",
    ],
  },
] as const;

const templates = [
  {
    id: "community",
    name: "Community hub",
    text: `# 👋 Welcome to [Server Name]!
We're a friendly community for [topic]. Here's how to get started:

📜 Read the rules in #rules
🎭 Pick your roles in #roles
👋 Introduce yourself in #introductions
💬 Chat with everyone in #general

Questions? Ping a moderator anytime.
-# Thanks for joining. We're glad you're here!`,
  },
  {
    id: "gaming",
    name: "Gaming clan",
    text: `# 🎮 Welcome to [Server Name], player!
A new challenger has joined the lobby. ⚔️

## Get started
📜 Rules: #rules
🎯 Game and rank roles: #roles
🔊 Find a squad: #looking-for-group
🏆 Show off clips: #clips

GG and have fun!
-# Be a good teammate. Toxicity gets you benched.`,
  },
  {
    id: "aesthetic",
    name: "Cute and aesthetic",
    text: `# ˚₊‧ welcome to [Server Name] ‧₊˚
₊˚ʚ we're so happy you found us ɞ˚₊

╭・🎀 read the rules in #rules
├・🌷 grab your roles in #roles
├・💌 introduce yourself in #introductions
╰・🍓 come say hi in #general

-# ♡ enjoy your stay, cutie ♡`,
  },
  {
    id: "art",
    name: "Art and creative",
    text: `# 🎨 Welcome to [Server Name]!
A cozy place to share art, get feedback and make friends.

🖌️ Read the rules in #rules (please credit artists!)
🎭 Pick your mediums in #roles
🖼️ Share your work in #showcase
💬 Ask for feedback in #critique

-# Every artist was once a beginner. Post freely!`,
  },
  {
    id: "study",
    name: "Study group",
    text: `# 📚 Welcome to [Server Name]!
Thanks for joining. Let's learn together.

1. **Read the rules** in #rules
2. **Choose your subjects** in #roles
3. **Ask questions** in #help
4. **Join a study session** in the Study Room voice channel

-# Stay focused, stay kind, and good luck!`,
  },
] as const;

export const discordWelcomeMessageIdeas: BlogPost = {
  slug: "discord-welcome-message-ideas",
  title: "Discord Welcome Message Ideas (Copy and Paste)",
  metaTitle: "50+ Discord Welcome Message Ideas to Copy and Paste (2026)",
  description:
    "50+ Discord welcome messages to copy: funny, cute, aesthetic and gaming ideas, full welcome channel templates, a free builder and how to set them up.",
  tagline: "Messages, templates, builder & setup",
  icon: "chat",
  datePublished: "2026-11-27",
  dateModified: "2026-11-27",
  readingMinutes: 8,
  hideGeneratorCta: true,
  faqs: [
    {
      question: "What should a Discord welcome message say?",
      answer:
        "Greet the new member, tell them what the server is about, and point them to two or three channels, usually the rules, roles and a chat or introductions channel. Keep it short enough to read in a few seconds.",
    },
    {
      question: "How do I turn on welcome messages in Discord?",
      answer:
        "Open Server Settings and find the System Messages settings (under Engagement in newer versions of Discord, or Overview in older ones). Choose a System Messages Channel and turn on “Send a random welcome message when someone joins this server”.",
    },
    {
      question: "Can I change Discord's default welcome message?",
      answer:
        "No. Discord picks its built-in join messages at random and you can't edit them. To use your own text, post a pinned message in a #welcome channel or set up a welcome bot like MEE6, Carl-bot or Dyno.",
    },
    {
      question: "How do I mention the new member in a welcome message?",
      answer:
        "Use a welcome bot. Bots replace a placeholder such as {user} with a mention of whoever just joined. The exact placeholder name depends on the bot, so check its welcome settings. In the messages on this page, {user} marks where the name goes.",
    },
    {
      question: "Why don't the #channel names in my welcome message turn into links?",
      answer:
        "Channel links only work when the channel exists and you pick it from the list that pops up as you type #. After pasting a template, delete each #channel name and type it again, choosing the channel from the list.",
    },
    {
      question: "How long can a Discord welcome message be?",
      answer:
        "A normal message can be up to 2,000 characters (4,000 with Nitro). Every template on this page fits easily, and shorter is better: most new members only skim the welcome message.",
    },
  ],
  body: (
    <>
      <BlogImage
        src="/blog/discord-welcome-message-ideas.webp"
        alt="Discord welcome channel with a Welcome to the Server message listing read the rules, pick your roles and say hi, plus a new member join message with a wave sticker"
        href="#builder"
        label="Welcome Message Builder"
        priority
      />

      <p>
        The welcome message is the first thing new members read in your server. A good one makes people feel
        at home and shows them where to go next. A missing or confusing one makes them leave before they say a
        word.
      </p>
      <p>
        Below you&apos;ll find a free <strong>welcome message builder</strong>, 50+ Discord welcome message
        ideas sorted by style, full welcome channel templates, and step-by-step setup for Discord&apos;s
        built-in welcome messages and welcome bots. Tap anything to copy it.
      </p>

      <h2 id="builder">Discord Welcome Message Builder</h2>
      <p>
        Type your server name, pick a vibe and choose which channels to mention. The preview shows roughly how
        it will look in Discord.
      </p>
      <WelcomeMessageBuilder />
      <p>
        After pasting, retype each <code>#channel</code> name and choose it from the list so it becomes a
        clickable link.
      </p>

      <h2 id="ideas">Discord Welcome Message Ideas</h2>
      <p>
        These are made for welcome bots: <code>{"{user}"}</code> marks the spot where the bot puts the new
        member&apos;s name. Posting by hand? Swap <code>{"{user}"}</code> for their @name, or remove it.
      </p>
      {groups.map((group) => (
        <div key={group.id}>
          <h3>{group.name}</h3>
          <p>{group.note}</p>
          <CopyLineList items={group.items} />
        </div>
      ))}

      <h2 id="templates">Welcome Channel Templates</h2>
      <p>
        Want a full message for your #welcome channel? Copy one of these, replace the text in [brackets], and
        rename the channels to match your server.
      </p>
      {templates.map((template) => (
        <div key={template.id}>
          <h3>{template.name}</h3>
          <CopyBlock text={template.text} label={`${template.name} welcome template`} />
        </div>
      ))}
      <p>
        These templates use Discord Markdown: <code>#</code> and <code>##</code> make headers,{" "}
        <code>**text**</code> makes bold and <code>-#</code> makes small gray subtext. See every option in our{" "}
        <Link href="/discord-text-formatting">Discord text formatting</Link> guide, or make a bigger title
        with the <Link href="/discord-big-text">Discord big text generator</Link>.
      </p>

      <h2 id="what-to-include">What to Put in a Welcome Message</h2>
      <ul>
        <li>
          <strong>A friendly greeting</strong> with the server&apos;s name, so people know they&apos;re in the
          right place.
        </li>
        <li>
          <strong>One line about the server,</strong> like &ldquo;a cozy place for artists&rdquo; or
          &ldquo;the home of the [game] community&rdquo;.
        </li>
        <li>
          <strong>Two to four next steps:</strong> usually read the rules, pick roles, introduce yourself and
          start chatting.
        </li>
        <li>
          <strong>Where to get help,</strong> such as a #help channel or &ldquo;ping a moderator&rdquo;.
        </li>
        <li>
          <strong>A matching style.</strong> Use the same emojis, symbols and tone as the rest of your server.
        </li>
      </ul>

      <h2 id="setup">How to Set Up Welcome Messages in Discord</h2>
      <p>There are three ways to welcome people, and many servers use all of them together.</p>

      <h3>1. A #welcome channel with a pinned message</h3>
      <ol>
        <li>
          Create a text channel called <code>welcome</code> (or decorate it, like <code>👋・welcome</code>)
          and drag it to the top of your channel list.
        </li>
        <li>
          In the channel settings, open <strong>Permissions</strong>, select <code>@everyone</code> and turn
          off <strong>Send Messages</strong>, so the channel stays clean.
        </li>
        <li>Paste your welcome template, retype the #channel links and send it.</li>
      </ol>

      <h3>2. Discord&apos;s built-in welcome messages</h3>
      <p>
        Discord can post a random greeting, like &ldquo;Everyone welcome [name]!&rdquo;, whenever someone
        joins.
      </p>
      <ol>
        <li>
          Open <strong>Server Settings</strong> and find the <strong>System Messages</strong> settings. In
          newer versions of Discord they&apos;re under <strong>Engagement</strong>; in older ones, under{" "}
          <strong>Overview</strong>.
        </li>
        <li>
          Pick a <strong>System Messages Channel</strong>, such as #welcome or #general.
        </li>
        <li>
          Turn on <strong>Send a random welcome message when someone joins this server</strong>. You can also
          turn on the option that lets members reply with a wave sticker.
        </li>
      </ol>
      <p>You can&apos;t edit these messages. For your own wording, use a pinned message or a bot.</p>

      <h3>3. A welcome bot for custom messages</h3>
      <p>
        Bots like <strong>MEE6</strong>, <strong>Carl-bot</strong> and <strong>Dyno</strong> can post your own
        welcome message in a channel, send a welcome DM and even give new members a role automatically.
      </p>
      <ol>
        <li>Add the bot to your server from its official website.</li>
        <li>Open the bot&apos;s dashboard and turn on its welcome feature.</li>
        <li>Choose the channel, paste one of the messages above and save.</li>
        <li>
          Replace <code>{"{user}"}</code> with your bot&apos;s own placeholder for the new member, if it uses
          a different one.
        </li>
      </ol>

      <h3>Bonus: Welcome Screen and Server Guide</h3>
      <p>
        If your server has Community turned on, Discord can also show new members a welcome screen or server
        guide with a short description and recommended channels. Look for it under <strong>Onboarding</strong>{" "}
        in Server Settings.
      </p>

      <h2 id="tips">Tips for a Better Welcome</h2>
      <ul>
        <li>
          <strong>Keep it short.</strong> Most people skim. Five to eight lines is plenty.
        </li>
        <li>
          <strong>Don&apos;t ping @everyone</strong> for each new member. It annoys the people already there.
        </li>
        <li>
          <strong>Greet people yourself.</strong> A quick &ldquo;welcome!&rdquo; from a real person makes new
          members far more likely to stay and talk.
        </li>
        <li>
          <strong>Update it.</strong> When you add or rename channels, fix the welcome message too.
        </li>
        <li>
          <strong>Make it match your server.</strong> Find dividers and icons on our{" "}
          <Link href="/discord-symbols">Discord Symbols</Link> page, or style the server name with our{" "}
          <Link href="/">Discord font generator</Link>.
        </li>
      </ul>
    </>
  ),
  outro: (
    <>
      <h2>Keep Building Your Server</h2>
      <ul>
        <li>
          <Link href="/blog/discord-server-rules-template">Discord server rules template</Link>: rules to copy
          for your #rules channel
        </li>
        <li>
          <Link href="/blog/aesthetic-discord-server-layout-ideas">
            Aesthetic Discord server layout ideas
          </Link>
          : channels and categories to copy
        </li>
        <li>
          <Link href="/blog/how-to-make-roles-in-discord">How to make roles in Discord</Link>: create, color
          and order roles
        </li>
        <li>
          <Link href="/discord-server-names">Discord server names</Link>: cool, cute and aesthetic ideas
        </li>
      </ul>
    </>
  ),
};
