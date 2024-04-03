import React from 'react'
import { Github } from 'lucide-react'
import { Toaster } from '@/components/ui/toaster'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
 return (
  <div className="min-h-screen">
   <nav className="fixed top-0 h-14 bg-zinc-900/95 min-w-full z-50">
    <div className="flex justify-between h-full text-white max-w-6xl mx-auto items-center px-10 xl:px-0 ">
     <div className="flex gap-5">
      <a
       className="text-slate-500 hover:text-white duration-75 ease-in-out flex items-center gap-2"
       href="/">
       Home
      </a>
      <a className="text-slate-500 hover:text-white duration-75 ease-in-out" href="/docs">
       Docs
      </a>
     </div>
     <div>
      <a href="https://github.com/kopytkg" target="_blank" rel="noreferrer">
       <Github
        width={30}
        className="hover:bg-white/50 rounded-lg p-[.25rem] w-7 h-7  fill-white ease-in-out duration-200"
       />
      </a>
     </div>
    </div>
   </nav>
   <div className="text-white max-w-6xl mx-auto px-10 text-justify pt-5 pb-5 ">{children}</div>
   <Toaster />
  </div>
 )
}
