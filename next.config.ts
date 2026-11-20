import type { NextConfig } from "next";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const nextConfig: NextConfig = { output: "export", typedRoutes: true, trailingSlash: true, basePath, assetPrefix: basePath ? `${basePath}/` : undefined };
export default nextConfig;
