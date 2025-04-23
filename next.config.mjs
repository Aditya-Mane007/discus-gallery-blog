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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://www.gstatic.com;
              img-src 'self' data: https://www.google-analytics.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net;
              connect-src 'self' https://www.google-analytics.com https://pagead2.googlesyndication.com;
              frame-src https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net;
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
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
