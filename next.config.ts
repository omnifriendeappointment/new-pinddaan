import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
console.log('isProd:', isProd);
// const repo = '/new-pinddaan';
const repo = '';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? repo : '',
  assetPrefix: isProd ? `${repo}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
