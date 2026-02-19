import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [{ hostname: 'djaeger.s3.ap-southeast-1.amazonaws.com' }],
  },
}

export default nextConfig
