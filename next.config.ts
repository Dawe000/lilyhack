import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_API_BASE: process.env.OPENAI_API_BASE,
  },
  experimental: {
    serverComponentsExternalPackages: ["sharp", "openai"],
  },
};

export default nextConfig;
