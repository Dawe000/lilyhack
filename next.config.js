/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_API_BASE: process.env.OPENAI_API_BASE,
  },
  experimental: {
    serverComponentsExternalPackages: ["sharp", "openai"],
  },
};

module.exports = nextConfig;
