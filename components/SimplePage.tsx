import { Breadcrumbs } from "./Breadcrumbs";

interface SimplePageProps {
  title: string;
  path: string;
  /** Breadcrumb label, defaults to the title. */
  crumb?: string;
  updated?: string;
  children: React.ReactNode;
}

/** Layout for text-only pages (about, legal, contact). */
export function SimplePage({ title, path, crumb, updated, children }: SimplePageProps) {
  return (
    <div className="pt-6">
      <Breadcrumbs items={[{ name: crumb ?? title, path }]} />
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
      {updated && <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>}
      <div className="prose-content mt-6">{children}</div>
    </div>
  );
}
