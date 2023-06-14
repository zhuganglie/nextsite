/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  
})