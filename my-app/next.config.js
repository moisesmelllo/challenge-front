/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://randomuser.me/api/',
        port: '',
        pathname: 'https://randomuser.me/api/**'
      }
    ],
    domains: ['randomuser.me'],
  }
}

module.exports = nextConfig
