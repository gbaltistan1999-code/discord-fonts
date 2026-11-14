import { convert } from "@/lib/fonts";
import { fill } from "@/lib/i18n";

/** Faint "Fonts" words behind the heading, written in the generator's own styles. */
const WATERMARK_STYLES = [
  "bold-script",
  "bold-fraktur",
  "double-struck",
  "vaporwave-spaced",
  "bold-sans",
  "script",
];
const watermark = WATERMARK_STYLES.map((id) => convert(id, "Fonts"));

const tile =
  "absolute grid place-items-center rounded-2xl border border-violet-200 bg-white text-violet-700 shadow-[0_12px_30px_-8px_rgba(109,40,217,0.35)] dark:border-violet-400/30 dark:bg-[#1c1640] dark:text-violet-200";

function Sparkle({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`absolute fill-violet-500 dark:fill-violet-300 ${className}`}
    >
      <path d="M12 0c.9 6.4 5.6 11.1 12 12-6.4.9-11.1 5.6-12 12-.9-6.4-5.6-11.1-12-12C6.4 11.1 11.1 6.4 12 0Z" />
    </svg>
  );
}

/** Decorative illustration: a chat window with a styled name and floating letter tiles. Desktop only. */
function HeroArt({ sample }: { sample: string }) {
  return (
    <div aria-hidden="true" className="relative mx-auto hidden h-72 w-full max-w-sm select-none lg:block">
      {/* Window */}
      <div className="hero-float absolute inset-x-6 top-10 rotate-[-3deg] rounded-2xl border border-violet-200 bg-white p-4 shadow-[0_24px_50px_-12px_rgba(76,29,149,0.35)] dark:border-violet-400/25 dark:bg-[#151133]">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-rose-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="relative mt-4 rounded-xl border-2 border-dashed border-violet-400/70 px-3 py-4 text-center">
          {[
            "-top-1.5 -left-1.5",
            "-top-1.5 -right-1.5",
            "-bottom-1.5 -left-1.5",
            "-bottom-1.5 -right-1.5",
          ].map((pos) => (
            <span key={pos} className={`absolute size-2.5 rounded-sm bg-violet-500 ${pos}`} />
          ))}
          <span className="fancy-text bg-linear-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-5xl leading-tight text-transparent dark:from-violet-300 dark:to-fuchsia-300">
            {sample}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="size-8 shrink-0 rounded-full bg-linear-to-br from-violet-400 to-fuchsia-400" />
          <span className="h-2.5 flex-1 rounded-full bg-violet-100 dark:bg-violet-400/20" />
          <span className="rounded-full bg-violet-600 px-2.5 py-1 text-xs font-bold text-white">Copy</span>
        </div>
        <svg
          viewBox="0 0 24 24"
          className="absolute -right-2 bottom-12 size-7 fill-white stroke-slate-900 stroke-[1.5] dark:fill-slate-900 dark:stroke-white"
        >
          <path d="M4 2l15 9-6.5 1.5L9 19z" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Floating tiles */}
      <span
        className={`${tile} hero-float-slow top-0 left-0 size-16 rotate-[-8deg] font-serif text-3xl font-bold`}
      >
        Aa
      </span>
      <span className={`${tile} hero-float -bottom-2 left-2 size-14 rotate-[6deg] fancy-text text-2xl`}>
        {convert("bold-script", "Aa")}
      </span>
      <span className={`${tile} hero-float-slow top-24 -right-3 size-16 rotate-[8deg] fancy-text text-3xl`}>
        {convert("bold-fraktur", "Aa")}
      </span>
      <span className="hero-float-slow absolute -top-1 right-16 text-4xl drop-shadow-[0_8px_16px_rgba(236,72,153,0.45)]">
        💖
      </span>

      <Sparkle className="top-20 -left-4 size-6" />
      <Sparkle className="right-2 bottom-6 size-7" />
      <Sparkle className="top-2 right-6 size-4" />
    </div>
  );
}

/** Homepage hero: heading, intro and feature badges on the left, illustration on the right. */
export function HomeHero({
  h1,
  tagline,
  intro,
  badges,
  count,
}: {
  h1: string;
  tagline?: string;
  intro: string;
  /** Badge labels; {count} is replaced with the number of styles. */
  badges: readonly [string, string, string];
  count: number;
}) {
  const icons = [
    // Lightning
    <path key="a" d="M13 2 4 14h7l-1 8 9-12h-7z" />,
    // Copy
    <path key="b" d="M9 9h10v12H9zM5 15V3h10" />,
    // Shield check
    <path key="c" d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6zM9 12l2 2 4-4" />,
  ];

  return (
    <div className="relative mb-7">
      {/* Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-1 z-0 flex flex-nowrap justify-center gap-10 overflow-hidden text-4xl font-bold whitespace-nowrap text-violet-500/[0.09] select-none sm:text-5xl dark:text-violet-300/[0.08]"
      >
        {watermark.map((w) => (
          <span key={w} className="fancy-text">
            {w}
          </span>
        ))}
      </div>

      <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <h1 className="leading-[1.05] font-extrabold tracking-tight text-balance">
            {tagline ? (
              <>
                <span className="block text-4xl text-slate-900 sm:text-6xl dark:text-white">{h1}</span>
                <span className="relative mt-3 inline-block bg-linear-to-r from-violet-700 via-purple-600 to-fuchsia-600 bg-clip-text pb-3 text-2xl text-transparent sm:text-4xl dark:from-violet-300 dark:via-purple-300 dark:to-fuchsia-300">
                  {tagline}
                  <svg
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2.5 w-full stroke-violet-600 dark:stroke-violet-300"
                  >
                    <path d="M3 9C80 3 200 2 297 6" fill="none" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
              </>
            ) : (
              <span className="block bg-linear-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-3xl text-transparent sm:text-5xl dark:from-violet-300 dark:to-fuchsia-300">
                {h1}
              </span>
            )}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-pretty text-muted sm:text-lg lg:mx-0">{intro}</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {badges.map((badge, i) => (
              <li
                key={badge}
                className="flex items-center gap-2 rounded-full border border-violet-200 bg-white/85 py-1.5 pr-4 pl-1.5 text-sm font-semibold text-slate-800 shadow-sm dark:border-violet-400/25 dark:bg-white/5 dark:text-violet-50"
              >
                <span className="grid size-7 place-items-center rounded-full bg-violet-100 dark:bg-violet-400/20">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-4 fill-none stroke-violet-700 stroke-2 dark:stroke-violet-200"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icons[i]}
                  </svg>
                </span>
                {fill(badge, { count })}
              </li>
            ))}
          </ul>
        </div>
        <HeroArt sample={convert("bold-script", "Fonts")} />
      </div>
    </div>
  );
}
