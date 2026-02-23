import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/play',
        destination: 'https://play.playgridlockgame.xyz',
        permanent: false,
      },
      {
        source: '/play/:path*',
        destination: 'https://play.playgridlockgame.xyz/:path*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
