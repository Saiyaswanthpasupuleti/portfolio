/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      // Disable Turbopack for both client and server
      if (isServer) {
        config.target = 'node14'; // for SSR compatibility
      }
      return config;
    },
  };
  