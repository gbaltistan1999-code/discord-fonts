/** Builds Discord welcome messages for the welcome message builder. */

/** Discord message limit without Nitro. */
export const WELCOME_LIMIT = 2000;

export interface WelcomeOptions {
  server: string;
  rules: string;
  roles: string;
  intro: string;
  chat: string;
  useRules: boolean;
  useRoles: boolean;
  useIntro: boolean;
  useChat: boolean;
}

interface Step {
  key: "rules" | "roles" | "intro" | "chat";
  channel: string;
}

interface Vibe {
  id: string;
  label: string;
  build: (server: string, steps: Step[]) => string;
}

const ch = (name: string) => `#${name.trim().replace(/^#/, "") || "channel"}`;

/** Text for each step, per vibe. */
type StepWords = Record<Step["key"], (c: string) => string>;

function lines(steps: Step[], words: StepWords, prefix: (i: number, last: boolean) => string): string {
  return steps.map((s, i) => `${prefix(i, i === steps.length - 1)}${words[s.key](ch(s.channel))}`).join("\n");
}

export const welcomeVibes: readonly Vibe[] = [
  {
    id: "simple",
    label: "Simple",
    build: (server, steps) =>
      [
        `# Welcome to ${server}! 👋`,
        "We're really glad you're here.",
        steps.length
          ? lines(
              steps,
              {
                rules: (c) => `Read the rules in ${c}`,
                roles: (c) => `Pick your roles in ${c}`,
                intro: (c) => `Introduce yourself in ${c}`,
                chat: (c) => `Say hi in ${c}`,
              },
              () => "• ",
            )
          : "",
        "Have fun and enjoy your stay!",
      ]
        .filter(Boolean)
        .join("\n\n"),
  },
  {
    id: "aesthetic",
    label: "Aesthetic",
    build: (server, steps) =>
      [
        `# ˚₊‧ welcome to ${server} ‧₊˚`,
        "₊˚ʚ we're so happy you found us ɞ˚₊",
        steps.length
          ? lines(
              steps,
              {
                rules: (c) => `🎀 read the rules in ${c}`,
                roles: (c) => `🌷 grab your roles in ${c}`,
                intro: (c) => `💌 introduce yourself in ${c}`,
                chat: (c) => `🍓 come say hi in ${c}`,
              },
              (i, last) => (steps.length === 1 ? "・" : i === 0 ? "╭・" : last ? "╰・" : "├・"),
            )
          : "",
        "-# ♡ enjoy your stay ♡",
      ]
        .filter(Boolean)
        .join("\n\n"),
  },
  {
    id: "gaming",
    label: "Gaming",
    build: (server, steps) =>
      [
        `# 🎮 Welcome to ${server}, player!`,
        "A new challenger has joined the lobby. ⚔️",
        steps.length
          ? lines(
              steps,
              {
                rules: (c) => `📜 Check the rules in ${c}`,
                roles: (c) => `🎯 Pick your games and rank in ${c}`,
                intro: (c) => `🪪 Drop your gamertag in ${c}`,
                chat: (c) => `💬 Find a squad in ${c}`,
              },
              () => "",
            )
          : "",
        "GG and have fun! 🏆",
      ]
        .filter(Boolean)
        .join("\n\n"),
  },
  {
    id: "cute",
    label: "Cute",
    build: (server, steps) =>
      [
        `# 🌸 hiii, welcome to ${server}! 🌸`,
        "we've been waiting for you (˶ᵔ ᵕ ᵔ˶)",
        steps.length
          ? lines(
              steps,
              {
                rules: (c) => `🍓 read the rules in ${c}`,
                roles: (c) => `🧸 pick cute roles in ${c}`,
                intro: (c) => `🐰 tell us about you in ${c}`,
                chat: (c) => `🍡 chat with us in ${c}`,
              },
              () => "",
            )
          : "",
        "-# we're so happy you're here ♡",
      ]
        .filter(Boolean)
        .join("\n\n"),
  },
  {
    id: "professional",
    label: "Professional",
    build: (server, steps) =>
      [
        `# Welcome to ${server}`,
        "Thanks for joining. Here's how to get started:",
        steps.length
          ? lines(
              steps,
              {
                rules: (c) => `**Read the rules** in ${c}`,
                roles: (c) => `**Choose your roles** in ${c}`,
                intro: (c) => `**Introduce yourself** in ${c}`,
                chat: (c) => `**Join the conversation** in ${c}`,
              },
              (i) => `${i + 1}. `,
            )
          : "",
        "If you need help, message any moderator.",
      ]
        .filter(Boolean)
        .join("\n\n"),
  },
];

export function buildWelcome(vibeId: string, o: WelcomeOptions): string {
  const vibe = welcomeVibes.find((v) => v.id === vibeId) ?? welcomeVibes[0]!;
  const steps: Step[] = [];
  if (o.useRules) steps.push({ key: "rules", channel: o.rules });
  if (o.useRoles) steps.push({ key: "roles", channel: o.roles });
  if (o.useIntro) steps.push({ key: "intro", channel: o.intro });
  if (o.useChat) steps.push({ key: "chat", channel: o.chat });
  return vibe.build(o.server.trim() || "our server", steps);
}
