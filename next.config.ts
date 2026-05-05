import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/subscribe',
        destination: '/',
        permanent: true,
      },
      {
        source: '/billing',
        destination: '/',
        permanent: true,
      },
      {
        source: '/checkout',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

