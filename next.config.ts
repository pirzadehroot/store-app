import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "exo.ir",
      },
      {
        protocol: "https",
        hostname: "pre-websites.ir",
      },
    ],
  },
};

export default nextConfig;
