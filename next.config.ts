import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,
  exportPathMap: async function (defaultPathMap) {
    return {
      ...defaultPathMap,
      '/sw.js': { page: '/sw.js' },
    }
  },
};

export default nextConfig;
