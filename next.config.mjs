/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn4.cdn-telegram.org",
        port: "",
        pathname: "/file/**",
      },
    ],
  },
};

export default nextConfig;
