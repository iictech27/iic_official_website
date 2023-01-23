/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/fonts/Inter-italic.var.woff2",
        headers: [
          {
            key: "Cache-control",
            value: "public, immutable, max-age=31536000",
          },
        ],
      },
      {
        source: "/fonts/Inter-roman.var.woff2",
        headers: [
          {
            key: "Cache-control",
            value: "public, immutable, max-age=31536000",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
