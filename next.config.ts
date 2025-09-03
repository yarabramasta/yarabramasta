import type { NextConfig } from 'next'

import withBundleAnalyzer from '@next/bundle-analyzer'

const baseConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    authInterrupts: true
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  }
}

let config = baseConfig

// Conditionally enable bundle analysis
if (process.env.ANALYZE === 'true') {
  config = withBundleAnalyzer()(config)
}

const nextConfig = config

export default nextConfig
