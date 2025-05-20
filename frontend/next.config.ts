import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   appDir: true, // Enables the App Router
  // },
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'], // Add image domains here
  },
  eslint: {
    ignoreDuringBuilds: true, // Optional: Ignore ESLint errors during build
  },
};

export default nextConfig;
