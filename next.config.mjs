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
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://www.gstatic.com https://fonts.googleapis.com;
              img-src 'self' data: https://www.google-analytics.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net;
              connect-src 'self' https://www.google-analytics.com https://pagead2.googlesyndication.com;
              frame-src https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net;
              style-src 'self' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin ",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self)",
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
