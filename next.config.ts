import type { NextConfig } from "next"


// https://avatar.vercel.sh/shadcn1
const nextConfig: NextConfig = {
  
// https://images.unsplash.com/photo-1617463874381-85b513b3e991?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D
// https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2019%2F06%2F28%2F01%2F19%2Fphoto-studio-4303312_1280.jpg&f=1&nofb=1&ipt=50d8d5fc24fb1bbde9a7740c0e2e2da54ff2d0e899924c6d525bf3934b0bf2f0&ipo=images
// https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg
// https://pixabay.com/photos/mixer-dj-music-controller-buttons-4197733/

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/photo/2017/07/24/19/57/*',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'pixabay.com',
        port: '',
        pathname: '/*',
        search: '',
      },
    ],
  },
}

export default nextConfig
