import Image from "next/image";
import Link from "next/link";

const styleLink = (slug: string, label: string) => (
  <Link href={`/discord-font-generator/${slug}`}>{label}</Link>
);

/** Long-form homepage copy, rendered below the tools. */
export function HomeArticle() {
  return (
    <div className="prose-content">
      <h2 id="what-are-discord-fonts">What Are Discord Fonts and How Do They Work?</h2>
      <p>
        Discord fonts are not fonts in the usual sense. Discord does not let you choose a typeface for your
        name or messages, so a Discord font generator uses a clever workaround: it swaps each ordinary letter
        for a look-alike character from <strong>Unicode</strong>, the global standard that gives every
        character on every device a number. Unicode includes complete alphabets that were added for math,
        science and other scripts, such as 𝐛𝐨𝐥𝐝, 𝓈𝒸𝓇𝒾𝓅𝓉, 𝔤𝔬𝔱𝔥𝔦𝔠 and ᴛɪɴʏ ᴄᴀᴘꜱ letters.
      </p>
      <p>
        Because these are characters rather than a font file, the styling travels with the text. When you
        paste 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 into a nickname, everyone in the server sees the bold version without installing
        anything. The same trick works almost anywhere text is accepted, which is why these styles are also
        called fancy text or copy-and-paste fonts.
      </p>
      <figure>
        <Image
          src="/discord-fonts-examples.svg"
          alt="Discord Fonts examples: the words Discord Fonts in bold, script, gothic, small caps, bubble and decorated styles"
          width={640}
          height={390}
          unoptimized
          className="h-auto w-full max-w-xl rounded-xl"
        />
        <figcaption className="mt-2 text-sm text-muted">
          The same two words in six Discord font styles, all made from standard Unicode characters.
        </figcaption>
      </figure>

      <h2 id="how-to-use">How to Use the Discord Font Generator</h2>
      <ol>
        <li>
          <strong>Type your text</strong> in the box at the top of the page. Every style updates instantly as
          you type.
        </li>
        <li>
          <strong>Browse the styles</strong> or use the filter buttons (Bold, Cursive, Gothic, Decorative,
          Aesthetic and Glitch) to narrow the list. Tap <em>Load more fonts</em> to see every option.
        </li>
        <li>
          <strong>Check the live preview</strong> to see how the style looks as a display name and as a chat
          message on a dark background, plus whether it fits the 32-character name limit.
        </li>
        <li>
          <strong>Click Copy</strong> (or the styled text itself). A “Copied!” message confirms it is on your
          clipboard.
        </li>
        <li>
          <strong>Paste it into Discord</strong> with Ctrl+V, Cmd+V or a long press on mobile, then save.
        </li>
      </ol>

      <h2 id="change-discord-name-font">How to Change Your Discord Name Font, Nickname or Server Name</h2>
      <p>
        Discord menus move around from time to time, so the labels below may differ slightly in your version
        of the app, but the fields themselves stay the same.
      </p>
      <h3>Display name</h3>
      <p>
        Your display name is shown next to your messages in every server. Open <strong>User Settings</strong>,
        go to the profile section, paste your styled text into <strong>Display Name</strong> and save. Display
        names can be up to 32 characters.
      </p>
      <h3>Server nickname</h3>
      <p>
        To use a different Discord font in just one server, open that server’s menu, choose the option to edit
        your server profile, and paste into <strong>Nickname</strong>. Some servers stop members from changing
        nicknames, in which case you will need to ask a moderator.
      </p>
      <h3>Server and channel names</h3>
      <p>
        If you own or manage a server, paste styled text into the server name in{" "}
        <strong>Server Settings</strong>, or edit a channel and paste into its name. Fancy channel names such
        as “︱𝐠𝐞𝐧𝐞𝐫𝐚𝐥” are a popular way to make a server look organized. Keep important channels readable so
        new members can find their way around.
      </p>
      <h3>About Me and messages</h3>
      <p>
        Your About Me bio and normal messages accept everything on this page, including longer decorated
        styles and emoji wrappers, so they are the best place for experimental text.
      </p>

      <h2 id="best-discord-fonts">Best Discord Fonts for Usernames, Bios and Servers</h2>
      <p>The right Discord font depends on where people will see it:</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Where</th>
              <th scope="col">Good choices</th>
              <th scope="col">Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Display name and nickname</td>
              <td>
                {styleLink("bold", "Bold")}, {styleLink("cursive", "Bold Script")},{" "}
                {styleLink("small-caps", "Small Caps")}
              </td>
              <td>Readable at small sizes and supported on nearly every device.</td>
            </tr>
            <tr>
              <td>About Me bio</td>
              <td>{styleLink("aesthetic", "Aesthetic")}, Sparkles, Kawaii wrappers</td>
              <td>More room for decoration, and readability matters less than in a name.</td>
            </tr>
            <tr>
              <td>Server name</td>
              <td>{styleLink("gothic", "Gothic")}, Double-Struck, Royal Frame</td>
              <td>A strong title style gives a server a clear theme.</td>
            </tr>
            <tr>
              <td>Channel names</td>
              <td>Small Caps, Bold Sans, Monospace</td>
              <td>Compact styles that keep the channel list tidy.</td>
            </tr>
            <tr>
              <td>Messages and memes</td>
              <td>
                {styleLink("glitch", "Glitch")}, {styleLink("upside-down", "Upside Down")},{" "}
                {styleLink("bubble", "Bubble")}
              </td>
              <td>Eye-catching for jokes and announcements, but use them sparingly.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A good rule is that anything people need to read quickly, like a name they want to @mention, should
        use a clean style. Save heavy decoration for places where it is purely for fun.
      </p>

      <h2 id="discord-text-formatting">Discord Text Formatting (Markdown) Explained</h2>
      <p>
        Discord also has built-in formatting called markdown. Instead of special characters, you wrap text in
        symbols and Discord styles it for you: <code>**bold**</code>, <code>*italic*</code>,{" "}
        <code>__underline__</code>, <code>~~strikethrough~~</code> and <code>||spoiler||</code>. You can also
        start a line with <code>#</code> for a header, <code>-#</code> for small subtext or <code>&gt;</code>{" "}
        for a quote, and use code blocks for monospace or even colored text.
      </p>
      <p>
        Markdown only works in messages (and a few profile fields). It does nothing in names, which is exactly
        why Unicode Discord fonts exist. Try both with the formatting tool above, or read the full{" "}
        <Link href="/discord-text-formatting">Discord text formatting guide</Link>.
      </p>

      <h2 id="boxes-and-compatibility">Why Some Discord Font Styles Show as Boxes</h2>
      <p>
        If someone sees empty rectangles (sometimes called “tofu”) or question marks instead of your text,
        their device does not have a font that contains those characters. Nothing is wrong with the text
        itself; it is a display limitation on that particular screen. A few practical notes:
      </p>
      <ul>
        <li>
          <strong>Bold, italic, script, gothic and double-struck</strong> letters are supported by current
          versions of Windows, macOS, iOS and Android.
        </li>
        <li>
          <strong>Squared, dark bubble, hieroglyph and some upside-down letters</strong> are newer additions
          and are the most likely to break on older phones, smart TVs and game consoles.
        </li>
        <li>
          <strong>Combining-mark styles</strong> such as strikethrough, underline and zalgo depend on how each
          device stacks marks, so they can look misaligned.
        </li>
        <li>
          Styles with a <strong>Limited support</strong> badge in the generator are the riskiest. Hover over
          or tap the badge for details.
        </li>
      </ul>

      <h2 id="accessibility">Accessibility: Screen Readers and Fancy Unicode</h2>
      <p>
        Fancy text looks like letters, but to software it is a string of mathematical or decorative symbols.
        Many screen readers announce each character by its technical name (for example “mathematical bold
        capital D”) or skip it entirely, and search tools may not match it. That can make your name hard to
        find and hard to follow for people who rely on assistive technology.
      </p>
      <p>
        Use Discord fonts for decoration, not information. Keep rules, announcements and anything important in
        plain text, and consider a clean style for your display name so others can mention and read it easily.
      </p>
    </div>
  );
}
