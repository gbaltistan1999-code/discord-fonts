import Image from "next/image";
import Link from "next/link";
import { nameIdeaExamples } from "@/content/discord-name";
import { fancyExamples } from "@/content/fancy-text";
import { markdownSyntaxes } from "@/content/formatting";
import { timestampStyles, type TimestampStyleCode } from "@/lib/discord-timestamp";
import { hrefFor, type Locale } from "@/lib/i18n";

/** Link to a page in the reader's language when it's translated, otherwise to the English page. */
export function LocalLink({
  locale,
  path,
  children,
}: {
  locale: Locale;
  path: string;
  children: React.ReactNode;
}) {
  return <Link href={hrefFor(locale, path)}>{children}</Link>;
}

/**
 * The fancy-text style table with translated labels. Each row is
 * [style, readability, device support, best for]; the Unicode samples are shared.
 */
export function FancyStyleTable({
  headers,
  rows,
}: {
  headers: readonly [string, string, string, string, string];
  rows: readonly (readonly [string, string, string, string])[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[38rem]">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([style, readability, support, bestFor], i) => (
            <tr key={style}>
              <td>{style}</td>
              <td className="fancy-text whitespace-nowrap">{fancyExamples[i]}</td>
              <td>{readability}</td>
              <td>{support}</td>
              <td>{bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Links to the focused style generators (English pages), joined like a sentence list. */
export function StyleGeneratorLinks({
  labels,
  separator = ", ",
  lastSeparator,
}: {
  /** Label per style slug, in display order. */
  labels: readonly (readonly [slug: string, label: string])[];
  separator?: string;
  /** Before the last item, e.g. " and " or "、". */
  lastSeparator: string;
}) {
  return (
    <>
      {labels.map(([slug, label], i) => (
        <span key={slug}>
          {i > 0 && (i === labels.length - 1 ? lastSeparator : separator)}
          <Link href={`/discord-font-generator/${slug}`}>{label}</Link>
        </span>
      ))}
    </>
  );
}

/** Display name vs @username comparison. Rows are [label, display name, @username]. */
export function NameTypeTable({
  headers,
  rows,
}: {
  headers: readonly [string, string];
  rows: readonly (readonly [string, string, string])[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[34rem]">
        <thead>
          <tr>
            <td />
            <th scope="col">{headers[0]}</th>
            <th scope="col">{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, displayName, username]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{displayName}</td>
              <td>{username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Name ideas by vibe. Rows are [vibe, formula]; the Unicode examples are shared. */
export function NameIdeasTable({
  headers,
  rows,
}: {
  headers: readonly [string, string, string];
  rows: readonly (readonly [string, string])[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[30rem]">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([vibe, formula], i) => (
            <tr key={vibe}>
              <td>{vibe}</td>
              <td>{formula}</td>
              <td className="fancy-text whitespace-nowrap">{nameIdeaExamples[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const timestampImages = {
  example: { src: "/discord-timestamp-example.svg", width: 640, height: 380 },
  steps: { src: "/discord-timestamp-generator-steps.svg", width: 640, height: 260 },
  formats: { src: "/discord-timestamp-formats.svg", width: 640, height: 600 },
  zones: { src: "/discord-timestamp-time-zones.svg", width: 640, height: 400 },
} as const;

/** One of the Timestamp page illustrations with translated alt text and caption. */
export function TimestampFigure({
  image,
  alt,
  caption,
}: {
  image: keyof typeof timestampImages;
  alt: string;
  caption: string;
}) {
  const { src, width, height } = timestampImages[image];
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        className="h-auto w-full max-w-xl rounded-xl"
      />
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

/** The timestamp style table with translated names and uses; examples come from Discord's docs. */
export function TimestampStyleTable({
  headers,
  styles,
}: {
  headers: readonly [string, string, string, string];
  styles: Record<TimestampStyleCode, { name: string; use: string }>;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[36rem]">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timestampStyles.map((style) => (
            <tr key={style.code}>
              <td>{styles[style.code].name}</td>
              <td className="whitespace-nowrap">
                <code>&lt;t:…:{style.code}&gt;</code>
              </td>
              <td>{style.docsExample}</td>
              <td>{styles[style.code].use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The Discord markdown cheat sheet with translated labels. Rows are [style, good for], in the English order. */
export function MarkdownCheatSheet({
  headers,
  rows,
}: {
  headers: readonly [string, string, string];
  rows: readonly (readonly [string, string])[];
}) {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([style, use], i) => (
            <tr key={style}>
              <td>{style}</td>
              <td>
                <code>{markdownSyntaxes[i]}</code>
              </td>
              <td>{use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The ansi colour block example used in every formatting guide. */
export function AnsiExample({ text }: { text: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-border bg-surface-2 p-3 font-mono text-sm">
      {`\`\`\`ansi\n[ESC][0;34m${text}[ESC][0m\n\`\`\``}
    </pre>
  );
}
