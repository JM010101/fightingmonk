/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fightingmonk.com'],
    unoptimized: false,
  },
  output: 'standalone',
  // Enable serverless optimization
  experimental: {
    outputFileTracingIncludes: {
      '/': ['./public/**/*'],
    },
  },
}

module.exports = nextConfig
