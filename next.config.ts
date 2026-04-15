import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  // Required for GitHub Pages project site (orphiclab.github.io/mov-ement-pepperdine)
  basePath: isGithubPages ? '/mov-ement-pepperdine' : '',
  assetPrefix: isGithubPages ? '/mov-ement-pepperdine/' : '',
  trailingSlash: true,
  allowedDevOrigins: [
    '*.trycloudflare.com',
    '*.loca.lt',
    '*.ngrok.io',
    '*.ngrok-free.app',
  ],
  images: {
    // Static export requires unoptimized images (no Next.js image server)
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'ui-avatars.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
};

export default nextConfig;
