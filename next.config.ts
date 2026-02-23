import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/play/:path*',
        destination: 'https://play.playgridlockgame.xyz/:path*',
      },
    ];
  },
};

export default nextConfig;
