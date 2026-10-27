/** Site mark: an original "Aa" sparkle glyph (deliberately unlike Discord's logo). */
export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c6dff" />
          <stop offset="1" stopColor="#c45cd6" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#logo-grad)" />
      <path
        d="M6.5 23 11.2 9h2.6l4.7 14h-2.6l-1.1-3.4H10.2L9.1 23H6.5Zm4.4-5.5h3.3L12.5 12l-1.6 5.5Z"
        fill="#fff"
      />
      <path
        d="M22.6 14.6c1.8 0 2.9 1 2.9 2.8V23h-2.2v-.9c-.5.7-1.3 1.1-2.3 1.1-1.5 0-2.5-.9-2.5-2.2 0-1.4 1.1-2.2 3.1-2.2h1.6v-.3c0-.8-.5-1.2-1.4-1.2-.7 0-1.3.2-1.8.7l-.9-1.5c.8-.6 2-1 3.5-1Zm-1 6.6c.8 0 1.4-.4 1.7-1.1v-.7H22c-.9 0-1.3.3-1.3.9 0 .5.4.9.9.9Z"
        fill="#fff"
      />
      <path d="m24.5 5.5.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1Z" fill="#fff" />
    </svg>
  );
}
