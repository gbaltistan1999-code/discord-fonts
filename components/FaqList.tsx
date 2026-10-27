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
    <section aria-labelledby={id} className="prose-content">
      <h2 id={id}>{heading}</h2>
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </section>
  );
}
