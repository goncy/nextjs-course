/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: false,
    reactCompiler: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
