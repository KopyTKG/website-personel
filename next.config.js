/** @type {import('next').NextConfig} */
const nextConfig = {
 transpilePackages: ['lucide-react'],
 eslint: {
  ignoreDuringBuilds: true,
 },
 async headers() {
  return [
   {
    source: '/:path*',
    headers: [
     {
      key: 'Access-Control-Allow-Origin',
      value: process.env.DOMAIN || 'null',
     },
     {
      key: 'Access-Control-Allow-Methods',
      value: 'GET, OPTIONS',
     },
     {
      key: 'Access-Control-Allow-Headers',
      value: 'Content-Type, Authorization',
     },
     {
      key: 'X-Frame-Options',
      value: 'DENY',
     },
     {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
     },
     {
      key: 'Referrer-Policy',
      value: 'strict-origin-when-cross-origin',
     },
     {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
     },
     {
      key: 'Cache-Control',
      value: 'public, max-age=0, must-revalidate',
     },
     {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload',
     },
     {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
     },
    ],
   },
  ]
 },
}

export default nextConfig
