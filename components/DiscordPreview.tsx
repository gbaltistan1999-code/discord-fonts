import { DISCORD_NAME_LIMIT, visibleLength } from "@/lib/fonts";

interface DiscordPreviewProps {
  styleName: string;
  text: string;
}

/** Generic dark chat mock-up (deliberately not a copy of Discord's UI) showing a name and a message. */
export function DiscordPreview({ styleName, text }: DiscordPreviewProps) {
  const length = visibleLength(text);
  const tooLong = length > DISCORD_NAME_LIMIT;

  return (
    <figure
      aria-label={`Preview of the ${styleName} style as a name and a chat message`}
      className="overflow-hidden rounded-xl border border-[#2b2d3a] bg-[#16171f] text-[#e6e7ee]"
    >
      <figcaption className="flex items-center justify-between gap-2 border-b border-[#2b2d3a] px-4 py-2.5 text-xs">
        <span className="font-semibold tracking-wide text-[#b9bccc] uppercase">Live preview</span>
        <span className="truncate text-[#9a9db0]">{styleName}</span>
      </figcaption>

      <div className="space-y-4 p-4">
        <div>
          <p className="mb-1.5 text-[0.7rem] font-semibold tracking-wider text-[#9a9db0] uppercase">
            Display name
          </p>
          <div className="flex items-center gap-3 rounded-lg bg-[#1e2029] px-2.5 py-2">
            <Avatar online />
            <span className="fancy-text min-w-0 truncate font-semibold text-[#f1f1f6]">{text}</span>
          </div>
        </div>

        <div>
          <p className="mb-1.5 text-[0.7rem] font-semibold tracking-wider text-[#9a9db0] uppercase">
            Message
          </p>
          <div className="flex gap-3">
            <Avatar />
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-baseline gap-x-2">
                <span className="fancy-text max-w-full truncate font-semibold text-[#a9a4ff]">{text}</span>
                <span className="text-xs text-[#8e91a4]">Today at 9:41 PM</span>
              </p>
              <p className="fancy-text mt-0.5 leading-relaxed break-words text-[#dcdde6]">
                {text} <span className="text-[#c4c6d3]">is my new look ✨</span>
              </p>
            </div>
          </div>
        </div>

        <p className={`text-xs ${tooLong ? "text-[#fbbf24]" : "text-[#9a9db0]"}`}>
          {length}/{DISCORD_NAME_LIMIT} characters
          {tooLong ? " – too long for a display name or nickname" : " – fits a display name or nickname"}
        </p>
      </div>
    </figure>
  );
}

function Avatar({ online = false }: { online?: boolean }) {
  return (
    <span className="relative inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7b6dff] to-[#d65cb8]">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 text-white/90" fill="currentColor">
        <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" />
      </svg>
      {online && (
        <span className="absolute -right-0.5 -bottom-0.5 size-3.5 rounded-full border-[3px] border-[#1e2029] bg-[#3ba55d]" />
      )}
    </span>
  );
}
