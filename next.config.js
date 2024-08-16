/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.iictmsl.com",'photos.google.com','i.ibb.co'],
  },
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
