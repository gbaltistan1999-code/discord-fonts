import Link from "next/link";
import type { BlogPost } from ".";

const generator = <Link href="/">Discord Fonts generator</Link>;

export const changeFontOnDiscord: BlogPost = {
  slug: "how-to-change-font-on-discord",
  title: "How to Change Your Font on Discord? (Names, Bios and Messages)",
  description:
    "Discord has no font setting, but you can still use fancy fonts in your display name, About Me, messages and server names. Here's exactly how, plus fixes for fonts that show as boxes.",
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  readingMinutes: 8,
  faqs: [
    {
      question: "Can I change Discord's actual app font?",
      answer:
        "Not really. Discord doesn't offer a font picker. Under Settings > Appearance you can change the font size and chat spacing, but not the typeface. Third-party mods exist, but they break Discord's terms of service and could get your account banned, so I don't recommend them.",
    },
    {
      question: "Do I need Nitro for fancy fonts?",
      answer:
        "No. Unicode fonts are just text, so they work on free accounts. Nitro adds things like profile themes and display name styles, but you don't need it for any of the tricks in this guide.",
    },
    {
      question: "Can I use fancy fonts in my @username?",
      answer:
        "No. Usernames only allow lowercase letters, numbers, dots and underscores. Put styled text in your display name or server nickname instead.",
    },
    {
      question: "Will my styled name look the same to everyone?",
      answer:
        "On most up-to-date devices, yes. On older phones and computers some characters may show as boxes, so stick to common styles if you want everyone to see it properly.",
    },
    {
      question: "Is it safe to copy text from a font generator?",
      answer:
        "Yes. You're only copying normal Unicode text, nothing gets installed and no account is needed.",
    },
  ],
  body: (
    <>
      <p>
        Let&apos;s get the awkward part out of the way: Discord doesn&apos;t have a font setting. You
        can&apos;t open Settings, pick &ldquo;cursive&rdquo; from a menu, and have your whole profile change.
        I wish you could. A lot of people go looking for that menu and come away thinking fancy Discord names
        are some kind of Nitro perk or a hack.
      </p>
      <p>
        They&apos;re neither. Those names you see in member lists, like 𝓜𝓸𝓸𝓷 or 𝐒𝐡𝐚𝐝𝐨𝐰, are made with special
        characters that just happen to look like a different font. Anyone can use them, for free, in about
        thirty seconds.
      </p>
      <p>
        This guide walks through exactly how, for your display name, your About Me, your messages, and your
        server. I&apos;ll also cover the annoying stuff nobody mentions, like why some styles turn into little
        boxes on your friend&apos;s phone.
      </p>

      <h2>How does the trick actually work?</h2>
      <p>
        Every letter you type is stored as a code from a giant character list called Unicode. The normal
        &ldquo;A&rdquo; has one code. But Unicode also contains hundreds of letters that look like styled
        versions of the alphabet. They were added for things like maths formulas and old typesetting, so
        there&apos;s a bold &ldquo;𝐀&rdquo;, a script &ldquo;𝒜&rdquo;, a double-struck &ldquo;𝔸&rdquo;, a
        circled &ldquo;Ⓐ&rdquo; and many more.
      </p>
      <p>
        To your phone or PC, 𝐀 isn&apos;t a bold A. It&apos;s a completely separate character that happens to
        be drawn bold. That&apos;s why it survives being pasted into Discord, where normal bold formatting
        would be stripped out.
      </p>
      <p>
        So &ldquo;changing your font&rdquo; really means swapping each normal letter for its lookalike. Doing
        that by hand would take forever, which is exactly what a font generator is for. You type normally, it
        does the swapping, and you copy the result.
      </p>

      <h2>Popular styles to try</h2>
      <p>
        You&apos;ve probably seen gorgeous fonts on design sites, like gothic blackletter, flowing script or
        chunky bubble letters, and wished you could use them on Discord. You can&apos;t install those fonts
        there, but Unicode has close lookalikes for most of the popular looks. Here&apos;s what to pick
        depending on the vibe you&apos;re after:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>If you like this look</th>
              <th>Try this Unicode style</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gothic or blackletter</td>
              <td>Fraktur / bold Fraktur</td>
              <td className="fancy-text whitespace-nowrap">𝔇𝔦𝔰𝔠𝔬𝔯𝔡 · 𝕯𝖎𝖘𝖈𝖔𝖗𝖉</td>
            </tr>
            <tr>
              <td>Handwritten script</td>
              <td>Script / bold script</td>
              <td className="fancy-text whitespace-nowrap">𝒟𝒾𝓈𝒸𝑜𝓇𝒹 · 𝓓𝓲𝓼𝓬𝓸𝓻𝓭</td>
            </tr>
            <tr>
              <td>Bubble or playful</td>
              <td>Circled / filled circles</td>
              <td className="fancy-text whitespace-nowrap">Ⓓⓘⓢⓒⓞⓡⓓ · 🅓🅘🅢🅒🅞🅡🅓</td>
            </tr>
            <tr>
              <td>Bold display</td>
              <td>Bold serif / bold sans</td>
              <td className="fancy-text whitespace-nowrap">𝐃𝐢𝐬𝐜𝐨𝐫𝐝 · 𝗗𝗶𝘀𝗰𝗼𝗿𝗱</td>
            </tr>
            <tr>
              <td>Retro or wide</td>
              <td>Fullwidth</td>
              <td className="fancy-text whitespace-nowrap">Ｄｉｓｃｏｒｄ</td>
            </tr>
            <tr>
              <td>Tech or futuristic</td>
              <td>Monospace</td>
              <td className="fancy-text whitespace-nowrap">𝙳𝚒𝚜𝚌𝚘𝚛𝚍</td>
            </tr>
            <tr>
              <td>Cute or soft</td>
              <td>Small caps</td>
              <td className="fancy-text whitespace-nowrap">ᴅɪsᴄᴏʀᴅ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        All of these are one click away in the {generator}. Type your own name to see how each looks. Bold,
        script and small caps display on almost every device. Fraktur and the filled circles look the most
        dramatic, but they&apos;re also the most likely to show as boxes on older phones, so test them first.
      </p>

      <h2>Changing the font of your Discord display name</h2>
      <p>
        This is where most people want fancy text, and it&apos;s the easiest place to put it. One thing first:
        Discord has two names. Your <strong>username</strong> is the @handle and only accepts plain lowercase
        letters, numbers, dots and underscores. Your <strong>display name</strong> is what people actually see
        in chats and member lists, and it accepts almost any character. Fancy fonts go in the display name.
      </p>
      <h3>On desktop or browser</h3>
      <ol>
        <li>Open the {generator} and type the name you want.</li>
        <li>Scroll through the styles and click the one you like to copy it.</li>
        <li>In Discord, click the gear icon next to your name to open User Settings.</li>
        <li>
          Go to <strong>Profiles</strong>, click into <strong>Display Name</strong>, and paste.
        </li>
        <li>
          Check the preview on the right, then click <strong>Save Changes</strong>.
        </li>
      </ol>
      <h3>On mobile</h3>
      <ol>
        <li>Copy your styled name from the generator in your phone&apos;s browser.</li>
        <li>
          Open Discord, tap your profile picture in the bottom right, then tap <strong>Edit Profile</strong>.
        </li>
        <li>
          Paste into <strong>Display Name</strong> and tap <strong>Save</strong>.
        </li>
      </ol>
      <p>
        Want a different name in just one server? Use a server nickname instead. Right-click the server icon
        (or long-press on mobile), choose <strong>Edit Per-server Profile</strong> (on some versions it&apos;s{" "}
        <strong>Change Nickname</strong>), and paste it there. Your main display name stays the same
        everywhere else.
      </p>
      <p>
        A small heads-up: display names are capped at 32 characters, and some styled letters count as more
        than one. If Discord won&apos;t let you save, trim a word or two.
      </p>

      <h2>Styling your About Me bio</h2>
      <p>
        Your bio is where you have room to play. It&apos;s also the place people tend to overdo it, so
        here&apos;s my honest take: use fancy text for one line, not the whole thing. A styled headline with a
        normal-text line underneath is easy to read and still looks custom.
      </p>
      <ol>
        <li>Write your bio somewhere first, like your notes app, so you can see the length.</li>
        <li>Paste the line you want styled into the generator and copy your favourite style.</li>
        <li>
          In Discord, go to <strong>User Settings &gt; Profiles</strong> (or <strong>Edit Profile</strong> on
          mobile) and find <strong>About Me</strong>.
        </li>
        <li>Paste the styled line, add the rest of your bio in normal text, and save.</li>
      </ol>
      <p>
        The About Me box holds 190 characters, and styled letters can eat into that faster than you&apos;d
        expect. Frames and decorations, like hearts or symbols between letters, use up space quickly too. If
        your bio gets cut off, that&apos;s usually why.
      </p>
      <p>
        The About Me box also supports{" "}
        <Link href="/discord-text-formatting">Discord&apos;s normal formatting</Link>, so you can mix bold,
        italic and line breaks in with your styled text. More on that formatting next.
      </p>

      <h2>Changing the font in your messages</h2>
      <p>
        Messages are a little different, because Discord already has its own built-in formatting there. Before
        you reach for a generator, check whether plain Discord formatting does what you want. It&apos;s
        faster, and screen readers handle it better.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>What you type</th>
              <th>What you get</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["**text**", "Bold"],
              ["*text*", "Italic"],
              ["__text__", "Underline"],
              ["~~text~~", "Strikethrough"],
              ["||text||", "Spoiler (hidden until clicked)"],
              ["# text", "Big header at the start of a line (also ## and ### for smaller)"],
              ["-# text", "Small grey subtext at the start of a line"],
              ["`text`", "Code style"],
              ["> text", "Quote"],
            ].map(([syntax, result]) => (
              <tr key={syntax}>
                <td>
                  <code>{syntax}</code>
                </td>
                <td>{result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Where Unicode fonts win is style. Built-in formatting can make text bold or bigger, but it can&apos;t
        make it cursive, bubbly or wrapped in hearts. For that, copy from the generator and paste into the
        message box like any other text. It works the same on desktop and mobile.
      </p>
      <p>
        You can even combine the two. Paste a styled word, then wrap it in <code>**</code> or <code>#</code>{" "}
        to make it bolder or bigger. Just send a test message first, since some combinations look great and
        others look like a ransom note.
      </p>

      <h2>Fancy fonts for server and channel names</h2>
      <p>
        If you run a server, styled names are an easy way to give it personality. You&apos;ll need the{" "}
        <strong>Manage Server</strong> permission for the server name and <strong>Manage Channels</strong> for
        channels.
      </p>
      <p>
        <strong>Server name:</strong> right-click the server icon, open{" "}
        <strong>Server Settings &gt; Overview</strong>, paste your styled name into{" "}
        <strong>Server Name</strong> and save.
      </p>
      <p>
        <strong>Channel names:</strong> hover over a channel, click the gear icon, paste into{" "}
        <strong>Channel Name</strong> and save. Discord turns spaces into dashes in text channels, so plan
        around that. A lot of servers use a small symbol or emoji at the start, like 「𝐜𝐡𝐚𝐭」, to make
        categories easy to scan.
      </p>
      <p>
        One honest warning from experience: styled channel names look great but are harder to search. If
        members type &ldquo;#rules&rdquo; and your channel is called &ldquo;𝓻𝓾𝓵𝓮𝓼&rdquo;, Discord may not find
        it. Keep your most important channels, like rules and announcements, readable, and save the fancy
        stuff for the fun ones.
      </p>

      <h2>Why does your font show up as boxes, and how do you fix it?</h2>
      <p>
        You paste a gorgeous name, it looks perfect on your screen, and then a friend asks why your name is a
        row of empty squares. This is the most common problem with Discord fonts, and it&apos;s almost never
        your fault.
      </p>
      <p>
        Those boxes (people call them &ldquo;tofu&rdquo;) appear when a device doesn&apos;t have a font that
        can draw that particular character. Your phone knows the character, your friend&apos;s older laptop
        doesn&apos;t.
      </p>
      <ul>
        <li>
          <strong>Pick widely supported styles.</strong> Bold, italic, bold-italic, small caps and circled
          letters show up almost everywhere. Very rare symbols and stacked decoration marks are the usual
          troublemakers.
        </li>
        <li>
          <strong>Test before you commit.</strong> Send the text in a DM to a friend on a different device, or
          check it on both your phone and PC.
        </li>
        <li>
          <strong>Update everything.</strong> Newer versions of Windows, Android, iOS and Discord support more
          characters.
        </li>
        <li>
          <strong>Check where you pasted it.</strong> If Discord refuses the name entirely, you probably tried
          to put it in your @username, which only allows plain characters. Use your display name instead.
        </li>
      </ul>
      <p>
        If a style still breaks for some people, swap it for a simpler one. A name everyone can read beats a
        beautiful name half your server sees as squares.
      </p>

      <h2>A few tips before you go wild</h2>
      <p>Fancy text is fun, but a few small habits keep it from backfiring.</p>
      <ul>
        <li>
          <strong>Make it easy to mention you.</strong> People @mention by typing your name. If it&apos;s all
          styled letters, they&apos;ll struggle to find you. Your @username still works, so make sure friends
          know it.
        </li>
        <li>
          <strong>Think about screen readers.</strong> Assistive tools often read styled letters one by one as
          &ldquo;mathematical bold capital S&rdquo;, which is painful to listen to. Keep important info like
          rules and instructions in plain text.
        </li>
        <li>
          <strong>Less is more.</strong> One styled word or line stands out. A whole profile in bubble letters
          just looks busy.
        </li>
        <li>
          <strong>Respect server rules.</strong> Some servers ask for readable or &ldquo;pingable&rdquo;
          nicknames and moderators may reset yours. Check the rules channel first.
        </li>
      </ul>
    </>
  ),
  outro: (
    <>
      <h2>Ready to try it?</h2>
      <p>
        That&apos;s really all there is to it. Discord won&apos;t give you a font menu, but Unicode gives you
        something better: a whole collection of styles you can copy anywhere, for free.
      </p>
      <p>
        Head over to the {generator}, type your name, and try a few styles. Start with something simple like
        bold or small caps, check how it looks on another device, and once you&apos;re happy, paste it into
        your display name. If it doesn&apos;t feel right, you can always change it back in a few seconds.
      </p>
    </>
  ),
};
