import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Używamy remotePatterns zamiast domains, co jest nowszą i lepszą metodą
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        // Opcjonalnie: możesz dodać pathname, jeśli wiesz, że Twoje obrazy mają stały prefiks
        // pathname: '/pizza4real/**',
      },
    ],
  },
};

export default nextConfig;
