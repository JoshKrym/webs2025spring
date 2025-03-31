/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.resolve.fallback = {
        fs:false,
    }
    // Important: return the modified config
    return config;
  },
};

export default nextConfig;

