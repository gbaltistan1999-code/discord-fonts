import Link from "next/link";
import { breadcrumbJsonLd, type Crumb } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. */
export function Breadcrumbs({ items }: { items: readonly Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          {trail.map((crumb, i) =>
            i === trail.length - 1 ? (
              <li key={crumb.path}>
                <span aria-current="page" className="text-text">
                  {crumb.name}
                </span>
              </li>
            ) : (
              <li key={crumb.path} className="flex items-center gap-1.5">
                <Link href={crumb.path} className="hover:text-accent hover:underline">
                  {crumb.name}
                </Link>
                <span aria-hidden="true">/</span>
              </li>
            ),
          )}
        </ol>
      </nav>
    </>
  );
}
