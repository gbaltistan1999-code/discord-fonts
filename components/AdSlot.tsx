import { siteConfig } from "@/lib/site";

const variants = {
  /** 320×100 on phones, 728×90 from tablet up. */
  leaderboard: "h-[100px] w-full max-w-[728px] md:h-[90px]",
  /** 336×280 responsive rectangle. */
  inContent: "h-[280px] w-full max-w-[336px]",
  /** 300×600 half-page, desktop only. */
  sidebar: "hidden h-[600px] w-[300px] lg:flex",
} as const;

interface AdSlotProps {
  variant: keyof typeof variants;
  className?: string;
}

/**
 * Fixed-size ad placeholder. The box always reserves its final dimensions so
 * turning ads on later causes no layout shift. No ad code is loaded yet.
 */
export function AdSlot({ variant, className = "" }: AdSlotProps) {
  return (
    <div
      aria-hidden="true"
      data-ad-slot={variant}
      data-ads-enabled={siteConfig.ads.enabled}
      className={`mx-auto flex items-center justify-center rounded-xl border border-dashed border-border text-[0.65rem] font-medium tracking-[0.2em] text-muted uppercase ${variants[variant]} ${className}`}
    >
      Advertisement
    </div>
  );
}
