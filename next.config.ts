/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "storage.googleapis.com"],
    unoptimized: true,
  },
  // Keep any other existing configuration options
};

module.exports = nextConfig;
