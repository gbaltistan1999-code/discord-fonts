import Link from "next/link";
import { nameIdeaExamples } from "@/content/discord-name";
import { fancyExamples } from "@/content/fancy-text";
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
