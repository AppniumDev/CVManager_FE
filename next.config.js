/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cvmanager.fra1.digitaloceanspaces.com'],
  },
}

module.exports = nextConfig
