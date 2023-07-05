/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ekstat.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
