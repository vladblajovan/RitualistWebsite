import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Ritualist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
