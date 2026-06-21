/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allows next/image to load remote screenshots/avatars if you add them later.
  // Add the hostnames you use (e.g. your own domain, raw.githubusercontent.com) here.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
