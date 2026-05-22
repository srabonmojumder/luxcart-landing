import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images are bundled locally under /public; serve them directly without the
  // optimizer so no extra runtime dependency (sharp) is required.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
