import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  experimental: {
    turbotrace: {
      memoryLimit: 512,
    },
  },
};

export default nextConfig;
