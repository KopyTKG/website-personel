import './globals.css'
import '../assets/sass/index.scss'
import type { Metadata } from 'next'
import React from 'react'
import { GeistSans } from 'geist/font/sans'
import { Providers } from './providers'
import { Button, Link } from '@nextui-org/react'

export const metadata: Metadata = {
 title: 'TheKrew.app',
 description: 'TheKrew private website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body className={GeistSans.className}>
    <Providers>
     {children}
     <footer className="fixed bottom-3 flex flex-col w-svw items-center gap-3">
      <div className="flex items-center gap-3 font-bold text-lime-500">
       <span>created by</span>
       <Link
        as={Button}
        href={'https://github.com/kopytkg/'}
        color="foreground"
        className="text-slate-950 bg-lime-400 hover:bg-lime-300 rounded-full font-bold">
        KopyTKG
       </Link>
      </div>
      <div className="text-lime-500">
       <span>©</span> &nbsp;
       {new Date(Date.now()).getFullYear()} thekrew.app
      </div>
     </footer>
    </Providers>
   </body>
  </html>
 )
}
