/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "discusgallery.wordpress.com",
      },
      {
        protocol: "https",
        hostname: "wordpress.com",
      },
      {
        protocol: "http",
        hostname: "discusgallery.files.wordpress.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
