/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")();
const withVideos = require('next-videos')


module.exports = withNextIntl(withVideos({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "softlion.blog",
      },
      {
        protocol: "https",
        hostname: "wp.cl-brokers.com",
      },
    ],
  },
}));
