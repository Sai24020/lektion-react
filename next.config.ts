import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com'
      },
    ],
  },
};

export default nextConfig;

  /* protocol: 'https',
        hostname: 'loremflickr.com',*///den gammla 11feb
