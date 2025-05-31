/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Explicitly map environment variables with fallbacks
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
    OPENAI_API_BASE: process.env.OPENAI_API_BASE || 'https://api.venice.ai/api/v1',
  },
  experimental: {
    serverComponentsExternalPackages: ["sharp", "openai"],
  },
  // Cloudflare Pages specific settings
  reactStrictMode: true,
  swcMinify: true, 
  images: {
    unoptimized: true, // Required for Cloudflare Pages
  },
};

module.exports = nextConfig;
