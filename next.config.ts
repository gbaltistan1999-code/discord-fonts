import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    // Inline the (small) stylesheet so it does not block first render.
    inlineCss: true,
    // One 404 for URLs matching no route; needed with separate English and translated root layouts.
    globalNotFound: true,
  },
  // Pin the workspace root so stray lockfiles in parent folders are ignored.
  turbopack: { root: dirname(fileURLToPath(import.meta.url)) },
  async redirects() {
    // The small text guide started as a blog post and moved to a tool page.
    return [{ source: "/blog/small-text-discord", destination: "/small-text-discord", permanent: true }];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
