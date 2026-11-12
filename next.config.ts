import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  // The root layout lives in app/[locale], so unmatched URLs use app/global-not-found.tsx.
  experimental: { globalNotFound: true },
};

export default nextConfig;
