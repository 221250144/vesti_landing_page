/** @type {import('next').NextConfig} */
const githubPagesBasePath = process.env.GITHUB_ACTIONS === "true" ? "/vesti_landing_page" : ""
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? githubPagesBasePath

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
