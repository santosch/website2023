/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    loader: 'custom',
    loaderFile: './src/loader/image.ts',
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
