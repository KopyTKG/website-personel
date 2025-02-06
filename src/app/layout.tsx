import './globals.css'
import '../assets/sass/index.scss'
import type { Metadata } from 'next'
import React from 'react'
import { GeistSans } from 'geist/font/sans'
import { headers } from 'next/headers'
import { Providers } from './providers'

export const metadata: Metadata = {
 title: 'TheKrew.app',
 description: 'TheKrew private website',
 creator: 'KopyTKG',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
 const nonce = (await headers()).get('x-nonce')

 if (!nonce) {
  return <b>Loading ....</b>
 }

 return (
  <html lang="en">
   <head>
    <meta charSet="UTF-8" />
   </head>
   <body className={GeistSans.className}>
    <Providers>{children}</Providers>
   </body>
  </html>
 )
}
