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

const themes = [
  ["Light", "White background, dark gray text. Optional Dark Sidebar.", "Bright rooms, daytime use"],
  [
    "Ash",
    "Mid-gray background, white text. This is the classic Discord dark theme.",
    "People who find Dark too heavy",
  ],
  ["Dark", "Dark gray background, white text", "Everyday use, most people"],
  ["Onyx", "Near-black and gray, a true AMOLED-style dark mode", "OLED screens, night use, saving battery"],
  [
    "Sync with computer",
    "Follows your system's light or dark mode (called Automatic on some mobile versions)",
    "People who switch modes during the day",
  ],
] as const;

export const changeDiscordTheme: BlogPost = {
  slug: "how-to-change-discord-theme",
  title: "How to Change Your Discord Theme (Dark, Light & Custom Colors)",
  metaTitle: "How to Change Your Discord Theme (Dark, Light & Custom) 2026",
  description:
    "Change your Discord theme on PC, Android and iPhone. Switch between Light, Ash, Dark and Onyx, sync with your device, and set custom color themes with Nitro.",
  tagline: "Light, Ash, Dark, Onyx & Nitro colors",
  icon: "palette",
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  readingMinutes: 6,
  faqs: [
    {
      question: "What is the default Discord theme?",
      answer:
        "Most people see a dark theme by default. You can switch to Light, Ash, Dark or Onyx at any time in User Settings > Appearance.",
    },
    {
      question: "What's the darkest Discord theme?",
      answer: "Onyx. It's a near-black, AMOLED-style theme and it's free for everyone.",
    },
    {
      question: "Is Discord dark mode free?",
      answer:
        "Yes. Light, Ash, Dark and Onyx are all free. Only the colorful gradient and custom color themes need Nitro.",
    },
    {
      question: "Can I change my Discord theme without Nitro?",
      answer: "Yes, between the four default themes and Sync with computer. Custom colors need Nitro.",
    },
    {
      question: "Do other people see my Discord theme?",
      answer:
        "No. Your app theme is only visible to you. Others only see your profile theme (Nitro) and your name, avatar and bio.",
    },
    {
      question: "How do I get Discord light mode on mobile?",
      answer: "Tap your profile picture > Settings > Appearance > Light.",
    },
  ],
  body: (
    <>
      <figure>
        <Image
          src="/blog/how-to-change-discord-theme.webp"
          alt="Change your Discord theme: dark, light and custom, with a chat window split between light and dark mode"
          width={1200}
          height={675}
          priority
          unoptimized
          className="h-auto w-full rounded-xl"
        />
      </figure>

      <p>
        Discord looks the same for everyone until you change it. You might want a darker screen for late-night
        gaming, a brighter one for daytime, or something more colorful. Whatever the reason, you can change
        your Discord theme in a few seconds on any device.
      </p>
      <p>
        This guide covers every theme Discord offers, how to switch on desktop and mobile, how to make Discord
        follow your device&apos;s dark mode, and how custom color themes work with Nitro.
      </p>

      <h2>Quick answer</h2>
      <p>
        To change your Discord theme on PC, open <strong>User Settings</strong> (the gear icon next to your
        name), go to <strong>Appearance</strong>, and pick Light, Ash, Dark, Onyx or Sync with computer. On
        mobile, tap your profile picture, open <strong>Settings</strong>, then <strong>Appearance</strong>,
        and choose your theme.
      </p>

      <h2>All Discord Themes Explained</h2>
      <p>
        Every Discord user gets four themes for free. Nitro subscribers get extra colorful themes on top of
        these.
      </p>
      <Figure
        src="/blog/discord-themes-light-ash-dark-onyx.webp"
        alt="The four free Discord themes side by side: Light, Ash, Dark and Onyx"
        caption="Discord's four free themes, from brightest to darkest: Light, Ash, Dark and Onyx."
      />
      <div className="overflow-x-auto">
        <table className="min-w-[36rem]">
          <thead>
            <tr>
              <th scope="col">Theme</th>
              <th scope="col">What it looks like</th>
              <th scope="col">Best for</th>
            </tr>
          </thead>
          <tbody>
            {themes.map(([theme, looks, bestFor]) => (
              <tr key={theme}>
                <td>
                  <strong>{theme}</strong>
                </td>
                <td>{looks}</td>
                <td>{bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        <strong>Which one should you pick?</strong> If you&apos;re not sure, start with Dark. It&apos;s easy
        on the eyes and it&apos;s what most people picture when they think of Discord. If you have an OLED
        monitor or phone, try Onyx. True black pixels on OLED screens use almost no power, so the deeper
        blacks can save battery.
      </p>

      <h2>How to Change Your Discord Theme on PC (Windows, Mac &amp; Browser)</h2>
      <p>The steps are the same in the desktop app and in the browser version at discord.com.</p>
      <ol>
        <li>
          <strong>Open User Settings.</strong> Click the gear icon at the bottom-left, next to your username
          and avatar.
        </li>
        <li>
          <strong>Go to Appearance.</strong> In the left menu, scroll down to the App Settings section and
          click Appearance.
        </li>
        <li>
          <strong>Choose a theme.</strong> At the top of the page, click Light, Ash, Dark, Onyx or Sync with
          computer.
        </li>
        <li>
          <strong>Close settings.</strong> Press Esc or click the X. The new theme is applied straight away,
          with no restart needed.
        </li>
      </ol>
      <p>
        <strong>Tip:</strong> If you choose Light, a <strong>Dark Sidebar</strong> toggle appears. Turn it on
        to keep the server and channel list dark while the chat area stays light.
      </p>

      <h2>How to Change Your Discord Theme on Mobile (Android &amp; iPhone)</h2>
      <ol>
        <li>
          Open the Discord app and tap your profile picture (the <strong>You</strong> tab) in the bottom-right
          corner.
        </li>
        <li>Tap the gear icon to open Settings.</li>
        <li>
          Scroll down and tap <strong>Appearance</strong>.
        </li>
        <li>Pick Light, Ash, Dark, Onyx or the automatic option. The change is instant.</li>
      </ol>
      <p>
        <strong>Shortcut:</strong> On recent versions you can double-tap the You tab icon to jump straight to
        Settings.
      </p>
      <p>
        <strong>Don&apos;t see Ash or Onyx?</strong> Discord added all four desktop themes to mobile in its
        mobile visual refresh. If your app still shows only Light, Dark, Midnight and Automatic, update
        Discord from the Play Store or App Store. On older versions, Midnight is the mobile equivalent of
        Onyx.
      </p>

      <h2>How to Make Discord Follow Your Device&apos;s Dark Mode</h2>
      <p>
        If your phone or computer switches between light and dark mode on a schedule, Discord can switch with
        it.
      </p>
      <ul>
        <li>
          <strong>On PC:</strong> In Appearance, choose <strong>Sync with computer</strong>. When Windows or
          macOS is in dark mode, Discord goes dark too.
        </li>
        <li>
          <strong>Choose which Light and which Dark theme Discord uses:</strong> Turn on{" "}
          <strong>Same as Device Theme</strong> in Appearance. You can then decide, for example, that Discord
          uses Onyx when your device is dark and Light when it&apos;s light, instead of the default pair. This
          setting works on mobile and desktop and takes priority over syncing across devices.
        </li>
      </ul>

      <h2>Sync Your Theme Across All Devices (or Don&apos;t)</h2>
      <p>
        By default, Discord can sync your theme across desktop, mobile and browser, so changing it in one
        place changes it everywhere. Want Onyx on your phone and Light on your laptop? Turn off the sync
        across clients option in Appearance on each device, then set each one separately.
      </p>

      <h2>How to Use Custom Color Themes (Nitro)</h2>
      <p>
        This is where the custom colors part of this guide comes in. Discord Nitro subscribers can use
        colorful gradient themes across all platforms, on top of the four free ones.
      </p>
      <Figure
        src="/blog/discord-nitro-custom-theme-colors.webp"
        alt="Discord chat window with a pink-to-blue gradient theme next to a color picker, hex code field and Gradient Direction and Color Intensity sliders"
        caption="Nitro custom themes: pick your colors, then adjust the gradient direction and intensity."
      />
      <h3>To use a preset color theme</h3>
      <ol>
        <li>
          Go to <strong>User Settings &gt; Appearance</strong>.
        </li>
        <li>Scroll to the color themes under the default themes.</li>
        <li>Click any color theme to apply it.</li>
      </ol>
      <h3>To build your own custom theme</h3>
      <ol>
        <li>In Appearance, choose the custom theme option.</li>
        <li>
          Pick your colors with the color picker, or type an exact hex code (for example #5865F2 for Discord
          blurple).
        </li>
        <li>
          Click <strong>Add Color</strong> to add more colors to the gradient.
        </li>
        <li>
          Use the <strong>Gradient Direction</strong> slider to change how the colors flow across the app.
        </li>
        <li>
          Use the <strong>Color Intensity</strong> slider to make the colors brighter or more subtle.
        </li>
      </ol>
      <p>
        <strong>Not on Nitro?</strong> You can still personalize how your profile looks to others without
        paying, for example with a stylish name. Try our <Link href="/">Discord Font Generator</Link> to give
        your username, nickname and bio a unique look.
      </p>

      <h2>Extra Appearance Settings Worth Changing</h2>
      <p>The theme is only one part of how Discord looks. While you&apos;re in settings, check these too:</p>
      <ul>
        <li>
          <strong>Contrast and saturation:</strong> In Accessibility settings you can fine-tune contrast and
          color saturation. This helps if text is hard to read on your theme.
        </li>
        <li>
          <strong>UI Density:</strong> In Appearance, choose how compact or spacious the interface feels.
        </li>
        <li>
          <strong>Message Display:</strong> Switch between Cozy (avatars and names shown) and Compact (more
          messages on screen).
        </li>
        <li>
          <strong>Chat font scaling and zoom:</strong> Make text bigger or smaller without changing your
          theme.
        </li>
      </ul>

      <h2>Profile Theme vs App Theme: What&apos;s the Difference?</h2>
      <p>People often mix these up:</p>
      <ul>
        <li>
          <strong>App theme</strong> changes how Discord looks to you. It&apos;s everything in this guide.
        </li>
        <li>
          <strong>Profile theme</strong> (Nitro only) changes the colors of your profile pop-up, the card
          other people see when they click your name. You set a Primary color for the background gradient and
          an Accent color for the border, in your Profile settings.
        </li>
      </ul>
      <p>Changing one doesn&apos;t change the other.</p>

      <h2>Can You Use BetterDiscord or Custom CSS Themes?</h2>
      <p>
        You&apos;ll find lots of tutorials for BetterDiscord, Vencord and other client mods that add fully
        custom backgrounds and CSS themes. They work, but modifying the Discord client goes against
        Discord&apos;s Terms of Service, so using them puts your account at risk. If you want custom colors,
        Nitro themes are the official and safe way to get them.
      </p>

      <h2>Discord Theme Not Changing? Quick Fixes</h2>
      <ul>
        <li>
          <strong>Theme switched back by itself:</strong> Discord sometimes resets appearance settings after
          big updates. Go back to Appearance and pick your theme again.
        </li>
        <li>
          <strong>Theme is different on your phone:</strong> Not every option has the same name on every
          platform. On older app versions, for example, Ash shows as Dark and Onyx shows as Midnight. Update
          the app, or turn off theme syncing and set each device yourself.
        </li>
        <li>
          <strong>One server looks different:</strong> Some servers can apply their own color theme through
          Discord&apos;s Server Themes feature, which can change how that server looks for you.
        </li>
        <li>
          <strong>Sync with computer isn&apos;t working:</strong> Check that your operating system&apos;s dark
          mode setting is actually on, then restart Discord.
        </li>
        <li>
          <strong>Nitro themes missing:</strong> Make sure your Nitro subscription is active and your app is
          up to date.
        </li>
      </ul>
    </>
  ),
  outro: (
    <>
      <h2>Final Thoughts</h2>
      <p>
        Changing your Discord theme takes about ten seconds. Free users get four solid options, from bright
        Light to near-black Onyx, and the device-sync setting can switch between them for you automatically.
        If you want Discord to look completely different, Nitro&apos;s custom gradient themes let you pick any
        colors you like.
      </p>
      <p>
        Want to go further than the theme? Learn{" "}
        <Link href="/blog/how-to-change-font-on-discord">how to change your font on Discord</Link> or{" "}
        <Link href="/blog/discord-colored-text">how to write colored text in Discord</Link> so your messages
        stand out as much as your setup.
      </p>
    </>
  ),
};
