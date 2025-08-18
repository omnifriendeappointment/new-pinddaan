import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
const repo = '/new-pinddaan';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? repo : '',
  assetPrefix: isProd ? `${repo}/` : '',
};

export default nextConfig;
