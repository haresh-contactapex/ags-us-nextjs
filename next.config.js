/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Blog media (featured images, inline post images) is served from
    // Vercel Blob storage.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
    // Required as of Next.js 16 — next/image only optimizes at qualities
    // explicitly allow-listed here.
    qualities: [75, 90],
  },
};

module.exports = nextConfig;
