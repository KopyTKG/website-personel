import './globals.css'
import '../assets/sass/index.scss'
import type { Metadata } from 'next'
import React from 'react'
import { GeistSans } from 'geist/font/sans'
import { Providers } from './providers'
import Footer from '@/components/footer'

export const metadata: Metadata = {
 title: 'TheKrew.app',
 description: 'TheKrew private website',
 creator: 'KopyTKG',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <head>
    <meta charSet="UTF-8" />
   </head>
   <body className={GeistSans.className}>
    <Providers>
     {children}
     <Footer />
    </Providers>
   </body>
  </html>
 )
}
