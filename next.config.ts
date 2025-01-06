import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint checks during build
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript type checking during build
  },
};

export default nextConfig;
