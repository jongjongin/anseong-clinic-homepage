import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/renewal", destination: "/", permanent: true },
      { source: "/renewal/:path*", destination: "/:path*", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogfiles.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "postfiles.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "mblogthumb-phinf.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "phinf.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "ssl.pstatic.net",
      },
    ],
  },
};

export default nextConfig;
