import type { NextConfig } from "next"


// https://avatar.vercel.sh/shadcn1
const nextConfig: NextConfig = {
  
// https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
}

export default nextConfig
