import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from ".";

const nameTypes = [
  ["Username", "Your unique @handle, used to add friends", "Only you, in User Settings > My Account"],
  ["Display name", "Your default name in every server and DM", "Only you, in User Settings > Profiles"],
  ["Server nickname", "One server only, replaces your display name there", "You (if allowed) or a moderator"],
] as const;

const rules = [
  ["Length", "1 to 32 characters"],
  ["Cost", "Free, no Nitro needed"],
  ["Scope", "One server at a time; each server can have a different nickname"],
  ["Fancy fonts and symbols", "Allowed (Unicode), unless the server's rules say otherwise"],
  ["Reset", "Clear the field or run /nick with no name"],
  ["Content", "Must follow Discord's Community Guidelines and the server's own rules"],
] as const;

const fixes = [
  [
    "No Edit Per-server Profile option or /nick fails",
    "Your role lacks Change Nickname; ask a moderator to enable it or rename you",
  ],
  [
    "A bot keeps resetting your name",
    "The server uses a moderation or verification bot; follow its naming rules or contact staff",
  ],
  ["Name won't save", "Keep it within 32 characters and remove blocked words or characters"],
  ["Fancy letters show as boxes", "That device's font doesn't support the characters; pick a simpler style"],
  ["Changed name but it still shows the old one", "Restart Discord or refresh the browser tab"],
  [
    "Changed it in the wrong place",
    "You edited your display name or username; use Edit Per-server Profile instead",
  ],
] as const;

const fancyExamples = [
  ["𝐆𝐚𝐦𝐞𝐫𝐁𝐨𝐲", "bold"],
  ["𝒢𝒶𝓂𝑒𝓇𝐵𝑜𝓎", "script"],
  ["ɢᴀᴍᴇʀʙᴏʏ", "small caps"],
  ["ⒼⓐⓜⓔⓡⒷⓞⓨ", "bubble"],
] as const;

/** Step illustration with a caption. Images are lazy-loaded below the fold. */
function Step({ src, alt, caption, height = 675 }: { src: string; alt: string; caption: string; height?: number }) {
  return (
    <figure>
      <Image src={src} alt={alt} width={1200} height={height} unoptimized className="h-auto w-full rounded-xl" />
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

export const changeNicknameOnDiscord: BlogPost = {
  slug: "how-to-change-nickname-on-discord",
  title: "How to Change Your Nickname on Discord (PC & Mobile, 2026)",
  description:
    "Change your Discord nickname on PC, Android and iPhone in seconds. Use /nick, set fancy font nicknames, and fix the Change Nickname permission error.",
  tagline: "Desktop, mobile, /nick & fancy fonts",
  icon: "type",
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  readingMinutes: 6,
  faqs: [
    {
      question: "Does changing my nickname change it in every server?",
      answer:
        "No. A nickname applies to one server only. To change your name everywhere, edit your display name in User Settings > Profiles.",
    },
    {
      question: "Can other people see my old nickname?",
      answer:
        "There is no public nickname history, but server staff may see changes in the server's Audit Log.",
    },
    {
      question: "Do I need Nitro to change my nickname?",
      answer: "No. Server nicknames are free. Nitro only adds extras like a per-server avatar and bio.",
    },
    {
      question: "How long can a Discord nickname be?",
      answer: "Up to 32 characters, including spaces, symbols and fancy-font letters.",
    },
    {
      question: "How do I remove my nickname?",
      answer: "Open Edit Per-server Profile, clear the Nickname box and save, or run /nick with no name.",
    },
    {
      question: "Can I use emojis in my nickname?",
      answer:
        "You can paste standard Unicode emojis and symbols, but custom server emojis do not work in names. For custom emojis in chat, see our guide on how to add emojis to a Discord server.",
      answerContent: (
        <>
          You can paste standard Unicode emojis and symbols, but custom server emojis do not work in names. For
          custom emojis in chat, see our guide on{" "}
          <Link href="/blog/how-to-add-emojis-to-discord-server">how to add emojis to a Discord server</Link>.
        </>
      ),
    },
  ],
  body: (
    <>
      <figure>
        <Image
          src="/blog/how-to-change-nickname-on-discord.webp"
          alt="How to change your nickname on Discord on PC and mobile: open the server menu, edit the Nickname field and save"
          width={1200}
          height={675}
          priority
          unoptimized
          className="h-auto w-full rounded-xl"
        />
      </figure>

      <h2>Quick answer</h2>
      <p>
        <strong>To change your nickname on Discord:</strong> click the server name, choose{" "}
        <strong>Edit Per-server Profile</strong>, type your new name in <strong>Nickname</strong>, and click{" "}
        <strong>Save Changes</strong>. Or type <code>/nick</code> followed by your new name in any channel of that
        server. It&apos;s free and only changes your name in that one server.
      </p>

      <h2>Nickname vs username vs display name</h2>
      <p>
        A Discord nickname is the name you show in one server only. Changing it does not touch your account name
        or how you appear in other servers.
      </p>
      <p>Discord has three different names, and mixing them up is the most common reason people get stuck:</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Where it shows</th>
              <th scope="col">Who can change it</th>
            </tr>
          </thead>
          <tbody>
            {nameTypes.map(([name, where, who]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{where}</td>
                <td>{who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        This guide covers the server nickname. If you want a new @handle instead, try our{" "}
        <Link href="/discord-username-generator">Discord username generator</Link> for ideas.
      </p>

      <h2>How to change your nickname on Discord (PC, Mac &amp; browser)</h2>
      <p>On desktop, you change your nickname from the server menu in under 30 seconds:</p>
      <ol>
        <li>Open Discord and select the server where you want the new nickname.</li>
        <li>Click the server name at the top left to open the server menu.</li>
        <li>
          Click <strong>Edit Per-server Profile</strong> (called <strong>Edit Server Profile</strong> in some
          versions).
        </li>
        <li>
          Type your new name in the <strong>Nickname</strong> box.
        </li>
        <li>
          Click <strong>Save Changes</strong>.
        </li>
      </ol>
      <Step
        src="/blog/discord-nickname-desktop-menu.webp"
        alt="Edit Per-server Profile option in Discord server menu on PC"
        caption="Illustration: open the server menu and choose Edit Per-server Profile."
      />
      <Step
        src="/blog/discord-nickname-desktop-field.webp"
        alt="Server Nickname field in Discord desktop"
        caption="Illustration: type your new name in the Nickname field and click Save Changes."
      />
      <p>
        Quick shortcut: right-click your own name in the member list and choose{" "}
        <strong>Edit Per-server Profile</strong>. The steps are the same in the desktop app and in the browser at
        discord.com.
      </p>

      <h2>How to change your nickname on Discord mobile (Android &amp; iPhone)</h2>
      <p>The Discord app works the same way on Android and iOS:</p>
      <ol>
        <li>Open the Discord app and tap the server icon on the left.</li>
        <li>Tap the server name at the top of the channel list.</li>
        <li>
          Tap <strong>Edit Per-server Profile</strong> (you may need to scroll down the menu).
        </li>
        <li>
          Tap the <strong>Nickname</strong> field and type your new name.
        </li>
        <li>
          Tap <strong>Save</strong>.
        </li>
      </ol>
      <Step
        src="/blog/discord-nickname-mobile.webp"
        alt="Change nickname on Discord mobile app"
        caption="Illustration: on mobile, tap Edit Per-server Profile, change the Nickname and tap Save."
      />
      <p>Your new nickname shows to everyone in that server right away. Other servers keep your normal display name.</p>

      <h2>Change your nickname with the /nick command</h2>
      <p>The fastest way is the built-in /nick slash command, which works on PC and mobile:</p>
      <ol>
        <li>Go to any text channel in the server where you can send messages.</li>
        <li>
          Type <code>/nick</code> and pick the command from the popup.
        </li>
        <li>Enter your new nickname and press Enter.</li>
      </ol>
      <Step
        src="/blog/discord-nickname-nick-command.webp"
        alt="Using the /nick command in Discord"
        caption="Illustration: type /nick, pick the command and add your new name."
      />
      <p>
        To remove your nickname and go back to your display name, run <code>/nick</code> and leave the name empty.
        The command uses the same permission as the menu, so if one fails, the other will too.
      </p>

      <h2>How to change someone else&apos;s nickname (admins &amp; mods)</h2>
      <p>
        Server owners and anyone with the <strong>Manage Nicknames</strong> permission can rename other members:
      </p>
      <ol>
        <li>
          Right-click the member&apos;s name in the member list or chat (on mobile, tap their name, then tap{" "}
          <strong>Manage</strong>).
        </li>
        <li>
          Choose <strong>Change Nickname</strong> (on mobile, edit the <strong>Nickname</strong> field).
        </li>
        <li>Type the new nickname, or clear it to reset, and save.</li>
      </ol>
      <p>
        Role order matters. You can only rename members whose highest role sits below yours, and nobody can change
        the server owner&apos;s nickname except the owner.
      </p>
      <p>
        To let members rename themselves, go to <strong>Server Settings &gt; Roles</strong>, pick a role (or
        @everyone), and turn on <strong>Change Nickname</strong>.
      </p>
      <Step
        src="/blog/discord-nickname-role-permissions.webp"
        alt="Change Nickname permission in Discord role settings"
        caption="Illustration: Change Nickname lets members rename themselves; Manage Nicknames lets them rename others."
        height={676}
      />

      <h2>How to get a fancy font nickname on Discord</h2>
      <p>
        Discord has no font picker for names, but Unicode characters let you paste stylish letters into the
        nickname box:
      </p>
      <ol>
        <li>
          Open the <Link href="/">Discord Font Generator</Link> and type your nickname.
        </li>
        <li>Copy a style you like, such as bold, script, small caps or bubble letters.</li>
        <li>
          Paste it into the Nickname field or after <code>/nick</code>, then save.
        </li>
      </ol>
      <Step
        src="/blog/discord-nickname-fancy-font.webp"
        alt="Fancy font nickname on Discord made with discordfont.app"
        caption="Illustration: copy a style from the font generator and it shows in the member list."
        height={676}
      />
      <p>
        You can also add <Link href="/discord-symbols">Discord symbols</Link> like stars or hearts around your
        name. Keep it readable, because some servers ban names that are hard to mention or search, and a few styles
        show as boxes on older phones.
      </p>
      <p>Example styles:</p>
      <ul>
        {fancyExamples.map(([example, style]) => (
          <li key={style}>
            <span className="fancy-text">{example}</span> ({style})
          </li>
        ))}
      </ul>

      <h2>Discord nickname rules and limits</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Rule</th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
            {rules.map(([rule, detail]) => (
              <tr key={rule}>
                <td>{rule}</td>
                <td>{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Nitro adds per-server avatars, banners and bios, but the nickname itself is free for everyone.</p>

      <h2>Why can&apos;t I change my nickname on Discord?</h2>
      <p>
        In most cases the server has turned off the <strong>Change Nickname</strong> permission for your role.
        Check these fixes in order:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Problem</th>
              <th scope="col">Fix</th>
            </tr>
          </thead>
          <tbody>
            {fixes.map(([problem, fix]) => (
              <tr key={problem}>
                <td>{problem}</td>
                <td>{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ),
};
