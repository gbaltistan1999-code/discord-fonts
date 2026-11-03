import Link from "next/link";
import type { ToolPageContent } from "@/content/i18n/types";
import { FaqList } from "./FaqList";

/** The part below a tool: guide article, FAQ and related links. */
export function ToolPageEnd({ content, children }: { content: ToolPageContent; children?: React.ReactNode }) {
  const Article = content.Article;
  return (
    <>
      <article className="prose-content cv-auto mt-12">
        <Article />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={content.faqs} heading={content.faqHeading} />
      </div>

      <section aria-labelledby="related-links" className="prose-content mt-12">
        <h2 id="related-links">{content.relatedHeading}</h2>
        <ul>
          {content.related.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        {children}
      </section>
    </>
  );
}
