'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import Image from 'next/image'

export default function TechKIGUI() {
 const imgSize = 50

 return (
  <div className="flex gap-5 fill-white">
   <TooltipProvider>
    <Tooltip>
     <TooltipTrigger asChild>
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
       <Image
        src="/svg/nextjs.svg"
        alt="nextlogo"
        width={imgSize}
        height={imgSize}
        className="hover:bg-white/65 rounded-full"
       />
      </a>
     </TooltipTrigger>
     <TooltipContent className="bg-zinc-700 px-3 py-1 rounded-lg text- font-bold">
      Next.js
     </TooltipContent>
    </Tooltip>
    <Tooltip>
     <TooltipTrigger asChild>
      <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
       <Image
        src="/svg/tailwindcss.svg"
        alt="nextlogo"
        width={imgSize}
        height={imgSize}
        className="hover:bg-white/65 rounded-full"
       />
      </a>
     </TooltipTrigger>
     <TooltipContent className="bg-zinc-700 px-3 py-1 rounded-lg text- font-bold">
      TailwindCSS
     </TooltipContent>
    </Tooltip>
    <Tooltip>
     <TooltipTrigger asChild>
      <a href="https://redis.io/" target="_blank" rel="noreferrer">
       <Image
        src="/svg/redis.svg"
        alt="nextlogo"
        width={imgSize}
        height={imgSize}
        className="hover:bg-white/65 rounded-full"
       />
      </a>
     </TooltipTrigger>
     <TooltipContent className="bg-zinc-700 px-3 py-1 rounded-lg text- font-bold">
      Redis
     </TooltipContent>
    </Tooltip>
   </TooltipProvider>
  </div>
 )
}
