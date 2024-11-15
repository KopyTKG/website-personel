/** @type {import('next').NextConfig} */
const nextConfig = {
 transpilePackages: ['lucide-react'], // add this
 async headers() {
  return [
   {
    source: '/',
    headers: [
	    {
      key: 'Access-Control-Allow-Origin',
      value: '*', // Set your origin
     },
     {
      key: 'Access-Control-Allow-Methods',
      value: 'GET',
     },
     {
      key: 'Access-Control-Allow-Headers',
      value: 'Content-Type, Authorization',
     },
     {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN',
     },
     {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
     },
     {
      key: 'Referrer-Policy',
      value: 'no-referrer',
     },
     {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
     },
    ],
   },
  ]
 },
}

module.exports = nextConfig
