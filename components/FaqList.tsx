import type { Faq } from "@/content/faqs";

/**
 * FAQ cards that open on click. Built on <details>, so answers stay in the HTML for search engines and
 * work without JavaScript. The last word of the heading gets the teal-cyan gradient.
 */
export function FaqList({
  faqs,
  heading,
  id = "faq",
  twoColumns = true,
}: {
  faqs: readonly Faq[];
  heading: string;
  id?: string;
  /** Two columns from md up; turn off in narrow containers such as blog posts. */
  twoColumns?: boolean;
}) {
  const split = heading.lastIndexOf(" ");
  const lead = split === -1 ? "" : heading.slice(0, split + 1);
  const accent = split === -1 ? heading : heading.slice(split + 1);

  return (
    <section
      aria-labelledby={id}
      className="-mx-4 bg-linear-to-b from-transparent via-accent-soft/60 to-transparent px-4 py-10 sm:mx-0 sm:rounded-3xl sm:px-8 sm:py-12"
    >
      <h2
        id={id}
        className="text-center text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl"
      >
        {lead}
        <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent dark:from-teal-300 dark:to-cyan-300">
          {accent}
        </span>
      </h2>
      <div className={`mt-8 grid items-start gap-4 ${twoColumns ? "md:grid-cols-2" : ""}`}>
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-border bg-surface shadow-sm transition-colors open:border-accent/40 hover:border-accent/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
              <h3 className="font-semibold text-text">{faq.question}</h3>
              <span
                aria-hidden="true"
                className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent transition-transform duration-200 group-open:rotate-45"
              >
                <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-3">
              {faq.answerContent ?? faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
