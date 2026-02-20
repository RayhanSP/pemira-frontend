import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'djaeger.s3.ap-southeast-1.amazonaws.com', // Bawaan asli kamu
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Untuk placeholder (jika masih ada)
      },
      {
        protocol: 'https',
        hostname: 'github.com', // Untuk link direct awal dari GitHub Issues
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com', // Untuk menangkap file redirect/CDN dari GitHub
      }
    ],
  },
}

export default nextConfig