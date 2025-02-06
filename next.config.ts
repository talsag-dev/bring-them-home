import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // This enables static export
  basePath: '/bring-them-home', // Replace with your GitHub repo nam
  images: {
    unoptimized: true, // Required for Next.js static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/**', // Allow all images from this domain
        search: '',
      },
    ],
  },
};

export default nextConfig;
