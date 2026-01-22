/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fightingmonk.com'],
    unoptimized: false,
  },
  output: 'standalone',
}

module.exports = nextConfig
