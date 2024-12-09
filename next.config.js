/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add any other configurations you need/test

  images: {
    domains: ['images.pexels.com'], // Add this line to allow Pexels images
  },
  eactStrictMode: true,
  // Disable caching during development
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 10 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 1,
  },
}

module.exports = nextConfig