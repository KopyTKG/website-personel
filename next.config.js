const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

/** @type {import('next').NextConfig} */
const nextConfig = {
 transpilePackages: ['lucide-react'], // add this
 headers: [
  {
   key: 'Content-Security-Policy',
   value: cspHeader.replace(/\n/g, ''),
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
   value: 'origin-when-cross-origin',
  },
  {
   key: 'Permissions-Policy',
   value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
 ],
}

module.exports = nextConfig
