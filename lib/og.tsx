import { ImageResponse } from "next/og";
import { siteConfig } from "./site";

export const ogSize = { width: 1200, height: 630 };

/**
 * Shared Open Graph card. Kept to ASCII text because the image renderer's
 * bundled font has no glyphs for the fancy Unicode alphabets.
 */
export function renderOgImage({
  title,
  subtitle,
  tags,
}: {
  title: string;
  subtitle: string;
  tags: string[];
}) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: "linear-gradient(135deg, #081517 0%, #0f2e2c 55%, #0c3b44 100%)",
        color: "#ececf4",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "18px",
            background: "linear-gradient(135deg, #0d9488, #0891b2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "34px",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Aa
        </div>
        <div style={{ fontSize: "30px", fontWeight: 600, color: "#5eead4" }}>{siteConfig.name}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ fontSize: "76px", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          {title}
        </div>
        <div style={{ fontSize: "34px", color: "#c9cbe0", lineHeight: 1.3 }}>{subtitle}</div>
      </div>
      <div style={{ display: "flex", gap: "14px" }}>
        {tags.map((tag) => (
          <div
            key={tag}
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: "999px",
              background: "rgba(20, 184, 166, 0.22)",
              border: "1px solid rgba(94, 234, 212, 0.5)",
              fontSize: "26px",
              color: "#ccfbf1",
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>,
    ogSize,
  );
}
