/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
