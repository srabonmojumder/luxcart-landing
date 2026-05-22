import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in `out/` for Firebase Hosting.
  output: "export",
  // Required for static export — serve images directly without the optimizer.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
