import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a static export so Cloudflare Pages can host the built assets.
  output: "export",
  images: {
    // Disable Next image optimization for static export.
    unoptimized: true,
  },
};

export default nextConfig;
