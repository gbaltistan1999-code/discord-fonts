# DiscordFonts (Next.js + Tailwind)

Minimal Discord font generator. Next.js 15 (App Router), React 19, Tailwind CSS v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

- `lib/styles.ts` – all Unicode style converters (add a style by adding to `maps` or `fns`)
- `components/Generator.tsx` – input + copyable style list (client component)
- `app/page.tsx` – home page; `app/[slug]/page.tsx` – about, contact, disclaimer, terms, privacy
- Dark mode follows the system setting.
"# discord-fonts" 
