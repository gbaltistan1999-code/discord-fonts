import Image from "next/image";

/** Site logo (public/logo.png, 320×192). The site name sits next to it, so the image itself is decorative. */
export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return <Image src="/logo.png" alt="" width={320} height={192} priority className={className} />;
}
