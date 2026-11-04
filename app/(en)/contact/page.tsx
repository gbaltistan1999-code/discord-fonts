import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Contact ${siteConfig.name} – Questions, Bugs & Style Requests`,
  description: `Contact the ${siteConfig.name} team with questions, bug reports or Discord font style requests. We typically reply within 24 hours.`,
  path: "/contact",
});

const iconProps = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "size-5",
} as const;

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
const ClockIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);
const CalendarIcon = () => (
  <svg {...iconProps}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);
const ChatIcon = () => (
  <svg {...iconProps}>
    <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4V6a2 2 0 0 1 1-2Z" />
  </svg>
);

function IconBox({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <span
      className={`grid shrink-0 place-items-center bg-accent-soft text-accent ${large ? "size-16 rounded-2xl [&>svg]:size-8" : "size-11 rounded-xl"}`}
    >
      {children}
    </span>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border bg-surface shadow-sm">
      <header className="flex items-center gap-3 border-b border-border px-6 py-5">
        <IconBox>{icon}</IconBox>
        <h2 className="text-lg font-bold">{title}</h2>
      </header>
      <div className="px-6 py-5">{children}</div>
    </section>
  );
}

const facts = [
  // The address lives only in the sidebar, so it appears once on the page for scrapers to find.
  { icon: <ChatIcon />, label: "Contact form", value: <a href="#message">Send us a message</a> },
  { icon: <ClockIcon />, label: "Response time", value: "Within 24 hours" },
  { icon: <CalendarIcon />, label: "Business hours", value: "Mon – Fri, 9 AM – 6 PM EST" },
];

const responseTimes = [
  { topic: "General inquiries", time: "Within 24 hours", fast: true },
  { topic: "Technical issues", time: "Within 24 hours", fast: true },
  { topic: "Partnership / press", time: "2–3 business days", fast: false },
];

const topics = [
  { title: "Font style requests", tip: "Paste an example of the look you want, or describe it in words." },
  {
    title: "Bug reports",
    tip: "Tell us your device, browser, and the style or text that caused the problem.",
  },
  { title: "Copyright or legal", tip: "Include the page URL and the details of your request." },
  { title: "Partnerships and press", tip: "Tell us who you are and what you have in mind." },
];

export default function Page() {
  return (
    <div className="pt-6">
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <IconBox large>
          <MailIcon />
        </IconBox>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-bold tracking-widest text-accent uppercase">
              Support
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Typically replies within 24 hours
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            Have a question, found a bug, or want to request a font style? Fill in the form and we’ll get back
            to you promptly.
          </p>
        </div>
      </div>

      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {facts.map((fact) => (
          <li
            key={fact.label}
            className="flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 shadow-sm"
          >
            <IconBox>{fact.icon}</IconBox>
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-wider text-muted uppercase">{fact.label}</p>
              <p className="truncate font-semibold text-text [&_a]:hover:text-accent">{fact.value}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <section id="message" className="scroll-mt-6 rounded-3xl border border-border bg-surface shadow-sm">
          <header className="flex items-center gap-3 border-b border-border px-6 py-5 sm:px-8">
            <IconBox>
              <ChatIcon />
            </IconBox>
            <h2 className="text-xl font-bold">Send us a message</h2>
          </header>
          <div className="px-6 py-6 sm:px-8">
            <ContactForm />
          </div>
        </section>

        <div className="grid content-start gap-6">
          <Card icon={<MailIcon />} title="Email Us Directly">
            <p className="text-xs font-semibold tracking-wider text-muted uppercase">General inquiries</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-1 block font-medium break-all text-accent hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </Card>

          <Card icon={<ClockIcon />} title="Response Times">
            <dl className="grid gap-3">
              {responseTimes.map((row) => (
                <div key={row.topic} className="flex items-center justify-between gap-3">
                  <dt className="text-text">{row.topic}</dt>
                  <dd className="inline-flex shrink-0 items-center gap-2 text-sm text-muted">
                    <span
                      className={`size-2 rounded-full ${row.fast ? "bg-emerald-500" : "bg-amber-500"}`}
                      aria-hidden="true"
                    />
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>

          <Card icon={<ChatIcon />} title="Common Topics">
            <ul className="grid gap-4">
              {topics.map((topic) => (
                <li key={topic.title}>
                  <p className="font-semibold text-text">{topic.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{topic.tip}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <p className="mt-10 rounded-2xl border border-border bg-surface-2 px-5 py-4 text-sm text-muted">
        <strong className="text-text">Please note:</strong> we are not Discord and can’t help with Discord
        accounts, bans, billing or server issues. For those, please contact Discord’s official support.{" "}
        {siteConfig.disclaimer} Looking for answers about the tool itself? See the{" "}
        <Link href="/about" className="text-text underline underline-offset-4 hover:text-accent">
          About page
        </Link>
        .
      </p>
    </div>
  );
}
