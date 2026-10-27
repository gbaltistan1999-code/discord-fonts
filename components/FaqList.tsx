import type { Faq } from "@/content/faqs";

export function FaqList({
  faqs,
  heading,
  id = "faq",
}: {
  faqs: readonly Faq[];
  heading: string;
  id?: string;
}) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-2xl font-semibold tracking-tight">
        {heading}
      </h2>
      <div className="mt-6 divide-y divide-border border-y border-border">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-5">
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="mt-1.5 leading-relaxed text-muted">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
