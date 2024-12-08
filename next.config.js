/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add any other configurations you need/test

  images: {
    domains: ['images.pexels.com'], // Add this line to allow Pexels images
  },
}

module.exports = nextConfig