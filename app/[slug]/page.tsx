import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Page = { title: string; body: React.ReactNode };

const EMAIL = "eshfaqihmed@gmail.com";
const mail = (
  <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>
    {EMAIL}
  </a>
);

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-8 mb-2 text-base font-semibold text-neutral-900 dark:text-neutral-100">{children}</h2>
);

const pages: Record<string, Page> = {
  about: {
    title: "About us",
    body: (
      <>
        <p>
          DiscordFonts is a free tool that turns plain text into stylish text you can copy and paste into Discord.
          Type a name or message, pick a style, click it, and paste it into a display name, server nickname, About
          Me, channel topic or chat. The styles are made from Unicode symbols, so they work without installing
          anything.
        </p>
        <p>
          We built the site to be quick, free, and simple to use, with no sign-up and no limits. DiscordFonts is an
          independent project. It is not made by, affiliated with, or endorsed by Discord Inc.
        </p>
      </>
    ),
  },
  contact: {
    title: "Contact us",
    body: (
      <>
        <p>
          Found a bug, a symbol that shows as a box, or a style you’d like us to add? We’d like to hear from you.
        </p>
        <p>Email: {mail}</p>
        <p>
          Please include your device and browser, and the style that gave you trouble. We read every message, but
          we can’t promise a reply to each one.
        </p>
      </>
    ),
  },
  disclaimer: {
    title: "Disclaimer",
    body: (
      <>
        <p>
          DiscordFonts is an independent website. Discord is a trademark of Discord Inc. We are not affiliated with,
          sponsored by, or endorsed by Discord Inc.
        </p>
        <p>
          The text styles on this site are Unicode characters, not real fonts. How they look depends on the device,
          app and font of whoever views them. Some symbols may appear as empty boxes, and screen readers may read
          them poorly or not at all.
        </p>
        <p>
          The tool is provided as is, with no promise that it is error-free or that every style will work in every
          place. Discord may limit which characters are allowed in usernames or other fields. Please don’t use these
          styles to impersonate others or to get around rules or moderation.
        </p>
      </>
    ),
  },
  terms: {
    title: "Terms and conditions",
    body: (
      <>
        <p className="text-neutral-500">Last updated: October 2026.</p>
        <p>By using DiscordFonts you agree to these terms.</p>
        <H>Use of the site</H>
        <p>
          You may use the generator for personal and commercial purposes. You agree not to use it for unlawful,
          harassing, deceptive or abusive content, or to impersonate another person.
        </p>
        <H>Your text</H>
        <p>
          Text you type is converted in your browser. You are responsible for what you create and where you post it.
        </p>
        <H>Our content</H>
        <p>
          The design, layout and written content of this site belong to its owner. You may not copy the site as a
          whole without permission.
        </p>
        <H>No warranty and liability</H>
        <p>
          The site is provided as is. To the fullest extent allowed by law, we are not liable for any loss or damage
          from using it, including text that displays incorrectly.
        </p>
        <H>Changes</H>
        <p>
          We may update these terms from time to time. Continuing to use the site means you accept the updated
          terms.
        </p>
      </>
    ),
  },
  privacy: {
    title: "Privacy policy",
    body: (
      <>
        <p className="text-neutral-500">Last updated: October 2026.</p>
        <H>What we collect</H>
        <p>
          We don’t ask for accounts, names or emails. The text you type is converted in your browser and is not sent
          to or stored on our servers.
        </p>
        <H>Cookies and third parties</H>
        <p>
          We don’t set cookies ourselves. The site loads fonts from Google Fonts, which may receive your IP address
          and browser details under Google’s own privacy policy. If we add analytics or ads later, we will update
          this page.
        </p>
        <H>Contact</H>
        <p>For privacy questions, email {mail}.</p>
      </>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return page ? { title: `${page.title} – DiscordFonts` } : {};
}

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <article>
      <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100">
        ← Back to the generator
      </Link>
      <h1 className="mt-6 mb-4 text-3xl font-semibold tracking-tight">{page.title}</h1>
      <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">
        {page.body}
      </div>
    </article>
  );
}
