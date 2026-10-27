import Link from "next/link";
import { siteConfig } from "@/lib/site";

const email = <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>;

export function AboutContent() {
  return (
    <>
      <p>
        {siteConfig.name} is a free Discord font generator. Type a name or message once and instantly see it
        in dozens of styles, from bold and cursive to gothic, bubble and glitch text, ready to copy and paste
        into Discord display names, nicknames, server names, channels, bios and chats.
      </p>
      <h2>Why we built it</h2>
      <p>
        Discord doesn’t let you pick a font, but Unicode includes hundreds of stylish letter forms. Most tools
        that expose them are slow, cluttered or hard to use on a phone. We wanted a fast, clean generator that
        works well on any device, explains which styles are safe to use in names, and helps people understand
        Discord’s own markdown formatting too.
      </p>
      <h2>How it works</h2>
      <p>
        Every style is a mapping from ordinary letters to look-alike Unicode characters, written and
        maintained by us. The conversion runs entirely in your browser, so what you type never leaves your
        device. You can read more about the technique on our <Link href="/">Discord Fonts generator</Link>{" "}
        page and in the <Link href="/discord-text-formatting">Discord text formatting guide</Link>.
      </p>
      <h2>Independent project</h2>
      <p>
        {siteConfig.name} is an independent site. {siteConfig.disclaimer} “Discord” is a trademark of Discord
        Inc., used here only to describe what the tool is for.
      </p>
      <h2>Get in touch</h2>
      <p>
        Have a style request, found a bug, or want to suggest an improvement? Visit our{" "}
        <Link href="/contact">contact page</Link>. We read every message.
      </p>
    </>
  );
}

export function ContactContent() {
  return (
    <>
      <p>
        We’d love to hear from you. Whether you have a question, a font style request, a bug report or a
        business enquiry, email us at {email}.
      </p>
      <h2>What to include</h2>
      <ul>
        <li>For bug reports: your device, browser, and the style or text that caused the problem.</li>
        <li>For style requests: an example of the look you want, pasted as text or described in words.</li>
        <li>For copyright or legal matters: the page URL and the details of your request.</li>
      </ul>
      <p>We usually reply within a few business days.</p>
      <h2>Please note</h2>
      <p>
        We are not Discord and cannot help with Discord accounts, bans, billing or server issues. For those,
        please contact Discord’s official support. {siteConfig.disclaimer}
      </p>
    </>
  );
}

export function PrivacyContent() {
  return (
    <>
      <p>
        This Privacy Policy explains what information {siteConfig.name} (“we”, “us”) handles when you use this
        website. The short version: we don’t ask for, collect or store the text you type.
      </p>
      <h2>Text you enter</h2>
      <p>
        All font conversion and formatting happens locally in your web browser. The text you type into our
        tools is not sent to our servers, stored, or shared with anyone. When you click Copy, the text is
        placed on your device’s clipboard only.
      </p>
      <h2>Information stored on your device</h2>
      <p>
        If you switch between light and dark mode, we save that preference in your browser’s local storage so
        the site remembers it. It never leaves your device and you can clear it at any time through your
        browser settings. We do not set tracking cookies.
      </p>
      <h2>Server logs</h2>
      <p>
        Like most websites, our hosting provider may automatically record basic technical information when
        pages are requested, such as IP address, browser type, the page requested and the time of the request.
        These logs are used for security and to keep the site running, and are retained only as long as the
        provider requires.
      </p>
      <h2>Advertising and analytics</h2>
      <p>
        We do not currently run advertising or third-party analytics. If we add them in the future, they may
        use cookies or similar technologies, and we will update this policy and, where required by law (for
        example in the UK), ask for your consent before any non-essential cookies are set.
      </p>
      <h2>Children’s privacy</h2>
      <p>
        The site is a general-audience tool and does not knowingly collect personal information from anyone,
        including children under 13.
      </p>
      <h2>Your rights</h2>
      <p>
        Depending on where you live (for example under the UK GDPR, Canada’s PIPEDA, Australia’s Privacy Act
        or US state laws), you may have rights to access or delete personal information. Because we don’t
        collect personal information through the tools, there is usually nothing to access, but you can
        contact us with any request at {email}.
      </p>
      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. The “Last updated” date at the top shows when it last
        changed.
      </p>
    </>
  );
}

export function TermsContent() {
  return (
    <>
      <p>
        By using {siteConfig.name} (the “site”), you agree to these Terms of Use. If you don’t agree, please
        don’t use the site.
      </p>
      <h2>Use of the tools</h2>
      <p>
        The site provides free tools that convert text into Unicode characters and Discord markdown. You may
        use the text you generate for any lawful purpose, personal or commercial. You are responsible for what
        you create and where you paste it.
      </p>
      <h2>Acceptable use</h2>
      <ul>
        <li>Don’t use generated text to impersonate others, harass people, spam or evade moderation.</li>
        <li>
          Follow Discord’s Terms of Service and Community Guidelines and the rules of each server you use.
        </li>
        <li>Don’t attempt to disrupt, overload or reverse-engineer the site’s infrastructure.</li>
      </ul>
      <h2>No affiliation</h2>
      <p>
        {siteConfig.disclaimer} All trademarks belong to their respective owners and are used only to describe
        compatibility.
      </p>
      <h2>No warranty</h2>
      <p>
        The site is provided “as is” and “as available”. Unicode characters display differently across
        devices, apps and fonts, and platforms like Discord may change which characters they accept at any
        time. We don’t guarantee that any style will display or be accepted everywhere.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for any indirect, incidental or
        consequential damages arising from your use of the site, including any action taken against your
        account by a third party because of text you created here.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The site’s design, code and written content belong to {siteConfig.name}. Unicode characters themselves
        are not owned by anyone and you are free to use them.
      </p>
      <h2>Changes</h2>
      <p>
        We may update these terms at any time. Continued use of the site after changes means you accept the
        updated terms. Questions? See our <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
