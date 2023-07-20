/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        SHOWCASE_BACKEND_BASE_URL: process.env.SHOWCASE_BACKEND_BASE_URL,
    }
  }
