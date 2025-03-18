import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'seatable.io' },
      { protocol: 'https', hostname: 'cloud.seatable.io' },
    ],
  },

  webpack(config, { isServer }) {
    if (isServer) {
      import('next-sitemap');
    }
    return config;
  },
};

export default nextConfig;
