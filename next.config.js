/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://blog-self-six-88.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://blog-self-six-88.vercel.app/blog/:path*",
      },
    ];
  },
}

module.exports = nextConfig
