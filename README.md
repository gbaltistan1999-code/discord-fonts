# DiscordFonts – Discord Font Generator

A fast, SEO-focused Discord fonts generator built with **Next.js 16 (App Router)**, **React 19**, **TypeScript (strict)** and **Tailwind CSS v4**. Users type once and get 65+ Unicode text styles to copy and paste into Discord names, nicknames, server and channel names, bios and messages, plus a Discord markdown formatting helper.

Every page is statically generated. The only client-side JavaScript is the interactive tools, the theme toggle and the copy toast.

## Requirements

- Node.js **20.9+** (developed on Node 24)
- npm 10+

## Getting started

```bash
npm install
cp .env.example .env.local   # then set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

## Scripts

| Command                | What it does                                     |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Start the dev server                             |
| `npm run build`        | Production build (static generation)             |
| `npm start`            | Serve the production build                       |
| `npm run lint`         | ESLint (Next core-web-vitals + TypeScript)       |
| `npm run typecheck`    | `tsc --noEmit`                                   |
| `npm test`             | Vitest unit tests for the font and markdown libs |
| `npm run format`       | Prettier (write)                                 |
| `npm run format:check` | Prettier (check only, good for CI)               |

## Configuration

Everything site-wide lives in **`lib/site.ts`**: site name, base URL, default title and description, contact email, footer disclaimer and the "last updated" date used in the sitemap and legal pages.

The base URL is resolved in this order:

1. `NEXT_PUBLIC_SITE_URL` (set this in production, e.g. `https://www.yourdomain.com`, no trailing slash)
2. `VERCEL_PROJECT_PRODUCTION_URL` (set automatically by Vercel)
3. `http://localhost:3000`

It drives canonical URLs, Open Graph tags, JSON-LD, `sitemap.xml` and `robots.txt`.

## Project structure

```
app/
  layout.tsx                       Root layout: fonts, theme script, header, footer
  page.tsx                         Homepage: generator, formatting helper, style links, article, FAQ
  discord-font-generator/[style]/  8 statically generated style pages (+ per-page OG image)
  discord-text-formatting/         Markdown guide and tool
  about/ contact/ privacy-policy/ terms/
  not-found.tsx                    Custom 404
  sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.svg
components/
  FontGenerator.tsx  (client)      Input, category filters, load more, zalgo slider, copy, preview
  DiscordPreview.tsx               Generic dark chat preview (no Discord branding)
  FormattingTool.tsx (client)      Discord markdown + ANSI color helper
  ToastProvider.tsx  (client)      Copy action + aria-live "Copied!" toast
  ThemeToggle.tsx    (client)      Light/dark toggle that follows the OS until changed
  Header, Footer, Breadcrumbs, JsonLd, FaqList, StyleLinks, SimplePage, Logo
lib/
  fonts.ts                         Unicode engine: one CharMap per style + pure transform functions
  formatting.ts                    Discord markdown / ANSI builders
  seo.ts                           Metadata builder + JSON-LD helpers
  site.ts                          Site config (edit here)
  og.tsx clipboard.ts theme.ts
  *.test.ts                        Vitest unit tests
content/                           Page copy (TSX): home article, FAQ, style pages, formatting guide, legal
public/                            Static assets
```

### Adding a font style

1. If it is a 1:1 letter swap, add a `CharMap` to `charMaps` in `lib/fonts.ts` (`rangeMap`, `alphabetMap` and `zipMap` cover most cases).
2. Add an entry to `fontStyles` with an `id`, `name`, `categories` and `transform`.
3. Run `npm test`. It checks map coverage, unique ids and that every style transforms text.

### Adding a style landing page

Add an entry to `stylePages` in `content/style-pages.tsx` (slug, H1, title, description, intro, featured styles and body copy). The page, sitemap entry, OG image, footer link and internal links are generated automatically.

## Deploying to Vercel

1. Push the repository to GitHub, GitLab or Bitbucket.
2. In Vercel, choose **Add New → Project** and import the repository. The framework is detected as Next.js automatically; the default build command (`next build`) and output settings need no changes.
3. Under **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` with your production domain (e.g. `https://www.yourdomain.com`).
4. Deploy, then add your custom domain under **Settings → Domains**.
5. Redeploy after changing the domain so canonical URLs and the sitemap pick it up.
6. Submit `https://yourdomain.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

To test locally first: `npm run build && npm start`.

## Notes

- Unicode styles are characters, not fonts, so how they look depends on the viewer's device. Styles that may show as boxes are flagged in the UI with a "Limited support" badge.
- Discord's unique @username only accepts `a–z`, `0–9`, `_` and `.`, so fancy text is meant for display names, nicknames (32 characters max), bios and messages. The UI explains this.
- This site is not affiliated with or endorsed by Discord Inc.
