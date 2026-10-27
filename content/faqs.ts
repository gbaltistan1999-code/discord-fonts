export interface Faq {
  question: string;
  answer: string;
}

/** Homepage FAQ. Plain text so the same copy feeds the page and the FAQPage JSON-LD. */
export const homeFaqs: readonly Faq[] = [
  {
    question: "What is a Discord font?",
    answer:
      "A Discord font is text made from special Unicode characters that look like bold, cursive, gothic or other lettering. Discord has no font picker, so you generate the styled characters here and paste them into Discord like any other text.",
  },
  {
    question: "Can you change the font in Discord?",
    answer:
      "Not directly. Discord lets you change the app's text size and use markdown for bold, italic, headers and similar formatting in messages, but you cannot pick a different typeface. Unicode Discord fonts are the workaround: they are characters, not a font setting, so everyone sees them.",
  },
  {
    question: "How do I use Discord fonts copy and paste?",
    answer:
      "Type your text in the box at the top of this page, find a style you like, and tap Copy (or tap the styled text itself). Then open Discord and paste it into your display name, server nickname, About Me, server name, channel name or a message.",
  },
  {
    question: "Can I use a fancy Discord font in my username?",
    answer:
      "Not in your unique @username, which only accepts lowercase letters, numbers, underscores and periods. Fancy fonts work in your display name and per-server nicknames instead, and those are the names most people see in chat.",
  },
  {
    question: "Why do some Discord fonts show as boxes or question marks?",
    answer:
      "A box means the device viewing the text has no font that contains that character. It usually happens with rare symbols on older phones and computers. Styles with a Limited support badge are the most likely to do this, so stick to bold, italic or script for names.",
  },
  {
    question: "Do Discord fonts work on mobile?",
    answer:
      "Yes. You can copy and paste from this site on iPhone and Android, and most styles display correctly in the Discord mobile app. Colored ANSI text is the main exception: it currently only shows color on desktop and web.",
  },
  {
    question: "What is the best Discord font for a name?",
    answer:
      "Bold, Bold Script, Small Caps and Double-Struck are the most popular because they stay readable and render on almost every device. Keep names under 32 characters, and avoid zalgo or heavy symbols so people can still mention you.",
  },
  {
    question: "Is it against Discord's rules to use fancy fonts?",
    answer:
      "Using Unicode characters is not against the rules on its own. Problems start when a name is used to impersonate someone, evade moderation or be unreadable. Individual servers can also set their own nickname rules, so follow the moderators if they ask for a plain name.",
  },
  {
    question: "Is this Discord font generator free and private?",
    answer:
      "Yes. The generator is free with no sign-up, and conversion happens entirely in your browser. The text you type is not sent to or stored on our server.",
  },
];
