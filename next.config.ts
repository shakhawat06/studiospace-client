import type { NextConfig } from "next"

// https://avatar.vercel.sh/shadcn1
const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
        port: '',
        pathname: '/*',
        search: '',
      },
    ],
  },
}

export default nextConfig
