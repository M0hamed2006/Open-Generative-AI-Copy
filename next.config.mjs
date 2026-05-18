/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['studio', 'ai-agent', 'workflow-builder', 'design-agent'],
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};
export default nextConfig;
