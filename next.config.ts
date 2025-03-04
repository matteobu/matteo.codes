import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true, // This ensures the redirection is permanent (status code 301)
      },
    ];
  },
};

export default nextConfig;
