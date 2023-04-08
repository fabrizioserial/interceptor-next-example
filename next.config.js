/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ['cdn.discordapp.com']
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/artworks",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
