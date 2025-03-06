import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ['seatable.io', 'cloud.seatable.io', 'seatable.io'],
  },
};

export default nextConfig;
