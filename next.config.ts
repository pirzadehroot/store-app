import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dkstatics-public.digikala.com',
      },
      {
        protocol: 'https',
        hostname: 'pre-websites.ir',
      },
    ],
  },
};

export default nextConfig;
