import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iPhone home-screen icon and the logo in Organization structured data (iOS rounds the corners itself). */
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "linear-gradient(135deg, #0d9488, #0891b2)",
      }}
    >
      <svg viewBox="0 0 32 32" width="180" height="180">
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
    </div>,
    size,
  );
}
