import { BlogImage } from "@/components/BlogImage";
import Link from "next/link";
import { ColorSwatches, CopyChipRow } from "@/components/ServerLayouts";
import { convert } from "@/lib/fonts";
import type { BlogPost } from ".";

const palettes = [
  {
    name: "Staff hierarchy",
    note: "Strong, easy-to-tell-apart colors for the people who run the server.",
    colors: [
      { hex: "#E74C3C", name: "Owner red" },
      { hex: "#F1C40F", name: "Admin gold" },
      { hex: "#3498DB", name: "Moderator blue" },
      { hex: "#2ECC71", name: "Helper green" },
      { hex: "#9B59B6", name: "Booster purple" },
    ],
  },
  {
    name: "Soft pastel",
    note: "Gentle colors for aesthetic, art and friend servers.",
    colors: [
      { hex: "#F7C6D9", name: "pink" },
      { hex: "#C9E4FF", name: "baby blue" },
      { hex: "#D9C8F5", name: "lavender" },
      { hex: "#FFE5B4", name: "peach" },
      { hex: "#C8F0D8", name: "mint" },
    ],
  },
  {
    name: "Neon gaming",
    note: "Bright colors that pop on Discord's dark theme.",
    colors: [
      { hex: "#FF4655", name: "red" },
      { hex: "#00E5FF", name: "cyan" },
      { hex: "#FFD700", name: "gold" },
      { hex: "#7CFC00", name: "neon green" },
      { hex: "#9146FF", name: "purple" },
    ],
  },
] as const;

const symbolRoles = [
  "꒰👑꒱ Owner",
  "『🛡️』Admin",
  "⚔️ Moderator",
  "✦ Helper",
  "🌸 Blossom",
  "☾ Night Owl",
  "🎮 Gamer",
  "✧ Member",
];

const fontRoles = [
  ["Bold", convert("bold-serif", "Moderator")],
  ["Cursive", convert("bold-script", "Moderator")],
  ["Small caps", convert("small-caps", "Moderator")],
  ["Double-struck", convert("double-struck", "Moderator")],
] as const;

export const makeRolesInDiscord: BlogPost = {
  slug: "how-to-make-roles-in-discord",
  title: "How to Make Roles in Discord (and Give Them Colors)",
  metaTitle: "How to Make Roles in Discord and Give Them Colors (2026)",
  description:
    "Create roles in Discord on PC and mobile, give them colors with hex codes, assign them to members and fix name colors that don't show. Plus palettes to copy.",
  tagline: "Create, color, assign & order roles",
  icon: "palette",
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  readingMinutes: 7,
  hideGeneratorCta: true,
  faqs: [
    {
      question: "Do I need Nitro to make colored roles in Discord?",
      answer:
        "No. Anyone with the Manage Roles permission can create roles and pick any color for free. Only extras like role icons need a boosted server.",
    },
    {
      question: "Why isn't my role color showing on my name?",
      answer:
        "Your name takes the color of your highest role that has a color. If a role above it has its own color, that color wins. Move the colored role higher in Server Settings → Roles, or remove the color from the role above it.",
    },
    {
      question: "How many roles can a Discord server have?",
      answer:
        "A server can have up to 250 roles. Most servers only need 5 to 15 main roles, plus optional self-roles for things like pronouns or games.",
    },
    {
      question: "Can I use fancy fonts and emojis in role names?",
      answer:
        "Yes. Role names accept Unicode, so you can paste fancy fonts, symbols and emojis. Keep the main word readable so people know what the role means.",
    },
    {
      question: "Why can't I edit or give a certain role?",
      answer:
        "You can only manage roles that are below your own highest role, and you need the Manage Roles permission. Ask someone with a higher role, or move your role above the one you want to edit.",
    },
    {
      question: "How do I let members pick their own roles?",
      answer:
        "Use Discord's built-in onboarding questions (in Community servers) or a reaction-role bot. Members then choose roles like pronouns, games or colors themselves.",
    },
  ],
  body: (
    <>
      <BlogImage
        src="/blog/how-to-make-roles-in-discord.webp"
        alt="Discord Roles settings screen: Owner, Admin, Moderator, Helper and Booster roles, a role color picker with hex code #9B59B6, and members whose names show their role colors"
        href="/"
        label="Discord Font Generator"
        priority
      />

      <p>
        Roles are how Discord servers stay organized. They give people colored names, control who can see
        which channels, and show at a glance who the moderators are. Making them only takes a minute once you
        know where everything is.
      </p>
      <p>
        This guide shows you how to create roles on desktop and mobile, give them colors, assign them to
        members, and fix the most common problem: a role color that won&apos;t show up on someone&apos;s name.
        You&apos;ll also get color palettes and styled role names you can copy.
      </p>

      <h2>What Discord Roles Do</h2>
      <ul>
        <li>
          <strong>Color names.</strong> Members show up in the chat and member list in their role&apos;s
          color.
        </li>
        <li>
          <strong>Control permissions.</strong> Roles decide who can manage messages, kick members, see
          private channels and more.
        </li>
        <li>
          <strong>Group the member list.</strong> A role can be shown as its own section in the member list,
          like &ldquo;Moderators&rdquo; above everyone else.
        </li>
        <li>
          <strong>Make mentions easy.</strong> You can ping everyone with a role at once, like{" "}
          <code>@Event Squad</code>.
        </li>
      </ul>
      <p>
        To create or edit roles, you need to be the server owner or have the <strong>Manage Roles</strong>{" "}
        permission.
      </p>

      <h2>How to Make a Role in Discord (Desktop and Browser)</h2>
      <ol>
        <li>
          Click your server name at the top left and choose <strong>Server Settings</strong>.
        </li>
        <li>
          Open <strong>Roles</strong> and click <strong>Create Role</strong>.
        </li>
        <li>
          On the <strong>Display</strong> tab, type a <strong>Role Name</strong>.
        </li>
        <li>
          Pick a <strong>Role Color</strong>: click one of the preset colors, or click the custom color box
          and paste a hex code like <code>#9B59B6</code>.
        </li>
        <li>
          Optional: turn on <strong>Display role members separately from online members</strong> so the role
          gets its own section in the member list.
        </li>
        <li>
          Open the <strong>Permissions</strong> tab and switch on only what this role needs.
        </li>
        <li>
          Click <strong>Save Changes</strong>.
        </li>
      </ol>

      <h2>How to Make a Role on Discord Mobile (iPhone and Android)</h2>
      <ol>
        <li>Open the server and tap the server name at the top.</li>
        <li>
          Tap <strong>Settings</strong>, then <strong>Roles</strong>.
        </li>
        <li>
          Tap <strong>Create Role</strong> (or the <strong>+</strong> button).
        </li>
        <li>Type a name, pick a color and choose the permissions.</li>
        <li>
          Tap <strong>Save</strong>.
        </li>
      </ol>

      <h2>How to Give a Role a Color</h2>
      <p>
        Every role can have one color. Discord offers a row of preset colors, but the custom color picker lets
        you use any hex code, so your roles can match your server&apos;s theme exactly. Tap a color below to
        copy its hex code, then paste it into the custom color box.
      </p>
      {palettes.map((palette) => (
        <div key={palette.name}>
          <h3>{palette.name}</h3>
          <p>{palette.note}</p>
          <ColorSwatches colors={palette.colors} />
        </div>
      ))}
      <p>
        <strong>Tip:</strong> Check your colors in both dark and light mode. Very dark colors are hard to read
        on Discord&apos;s dark theme, and very pale ones disappear on the light theme. Want more palettes?
        Each theme in our{" "}
        <Link href="/blog/aesthetic-discord-server-layout-ideas">aesthetic server layout ideas</Link> comes
        with five matching role colors.
      </p>

      <h2>How to Assign a Role to Someone</h2>
      <h3>On desktop</h3>
      <ol>
        <li>Right-click the member&apos;s name in the chat or member list.</li>
        <li>
          Hover over <strong>Roles</strong> and tick the role you want to give them.
        </li>
      </ol>
      <p>
        To add many people at once, go to <strong>Server Settings → Roles</strong>, open the role, choose the{" "}
        <strong>Manage Members</strong> tab and click <strong>Add Members</strong>.
      </p>
      <h3>On mobile</h3>
      <ol>
        <li>Tap the member&apos;s name to open their profile.</li>
        <li>
          Tap <strong>Manage</strong> (or the three dots), then <strong>Roles</strong>.
        </li>
        <li>Tick the role and save.</li>
      </ol>

      <h2>Role Order: Why Your Name Color Isn&apos;t Showing</h2>
      <p>
        Roles are stacked in a list in <strong>Server Settings → Roles</strong>, and the order matters:
      </p>
      <ul>
        <li>
          <strong>Your name shows the color of your highest colored role.</strong> If someone has both
          &ldquo;Member&rdquo; (green) and &ldquo;Moderator&rdquo; (blue), and Moderator is higher, their name
          is blue.
        </li>
        <li>
          <strong>Roles without a color don&apos;t count.</strong> A role left on the default color won&apos;t
          change anyone&apos;s name, so a colored role below it still shows.
        </li>
        <li>
          <strong>You can only manage roles below your own.</strong> Even with Manage Roles, you can&apos;t
          edit or hand out a role that sits above your highest role.
        </li>
      </ul>
      <p>
        To change the order, drag roles up or down in the list. Put staff roles at the top, then special roles
        like Boosters or VIPs, then normal member roles at the bottom.
      </p>

      <h2>Make Role Names Stand Out With Symbols and Fonts</h2>
      <p>
        Role names accept emojis, symbols and Unicode fonts, so they can match your server&apos;s style. Tap a
        name to copy it:
      </p>
      <CopyChipRow items={symbolRoles} />
      <p>Or turn a role name into a fancy font:</p>
      <ul>
        {fontRoles.map(([style, text]) => (
          <li key={style}>
            <strong>{style}:</strong> {text}
          </li>
        ))}
      </ul>
      <p>
        Make your own with our <Link href="/">Discord font generator</Link>, and find more decorations on our{" "}
        <Link href="/discord-symbols">Discord Symbols</Link> page. Keep the main word readable, so new members
        can tell what each role means.
      </p>

      <h2>Extra Role Features</h2>
      <ul>
        <li>
          <strong>Role icons.</strong> Boosted servers can add a small image or emoji next to a role, which
          shows beside members&apos; names in chat.
        </li>
        <li>
          <strong>Mentionable roles.</strong> Turn on <strong>Allow anyone to @mention this role</strong> if
          you want members to ping the whole group, for example an &ldquo;@Event Squad&rdquo; role.
        </li>
        <li>
          <strong>Self-roles.</strong> Let members pick their own pronoun, game or color roles with
          Discord&apos;s onboarding questions or a reaction-role bot.
        </li>
        <li>
          <strong>View Server As Role.</strong> In a role&apos;s settings, use this to see the server exactly
          as members with that role see it.
        </li>
      </ul>

      <h2>Role Problems and Fixes</h2>
      <ul>
        <li>
          <strong>The role color doesn&apos;t show:</strong> another colored role is higher in the list. Move
          this role up, or remove the color from the role above it.
        </li>
        <li>
          <strong>I can&apos;t give someone a role:</strong> the role is above your highest role, or
          you&apos;re missing the Manage Roles permission.
        </li>
        <li>
          <strong>Members can see channels they shouldn&apos;t:</strong> check the <code>@everyone</code> role
          and each channel&apos;s permission settings. Channel permissions override role permissions.
        </li>
        <li>
          <strong>The role section doesn&apos;t appear in the member list:</strong> turn on{" "}
          <strong>Display role members separately from online members</strong> for that role.
        </li>
      </ul>
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
          : channels, categories and roles to copy
        </li>
        <li>
          <Link href="/blog/discord-server-rules-template">Discord server rules template</Link>: rules to copy
          for your #rules channel
        </li>
        <li>
          <Link href="/discord-server-names">Discord server names</Link>: cool, cute and aesthetic ideas
        </li>
        <li>
          <Link href="/discord-symbols">Discord symbols</Link>: dividers, hearts and stars for role names
        </li>
        <li>
          <Link href="/">Discord font generator</Link>: fancy fonts for role, channel and display names
        </li>
      </ul>
    </>
  ),
};
