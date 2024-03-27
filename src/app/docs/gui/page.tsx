import Chapter1 from '@/components/sections/gui/chapter1'
import Chapter2 from '@/components/sections/gui/chapter2'
import Chapter3 from '@/components/sections/gui/chapter3'
import Chapter4 from '@/components/sections/gui/chapter4'
import Chapter5 from '@/components/sections/gui/chapter5'
import Chapter6 from '@/components/sections/gui/chapter6'
import TechKIGUI from '@/components/sections/techstack.kigui'
import { Github } from 'lucide-react'

export default function KI_GUI() {
 return (
  <>
   <div className="flex justify-between">
    <h1 className="text-5xl font-bold">Next.js</h1>{' '}
    <a
     href="https://github.com/KopyTKG/short-url_demo"
     target="_blank"
     rel="noreferrer"
     className="flex items-center text-lg font-bold hover:bg-white/50 ease-in-out duration-200 rounded-lg p-[.25rem]">
     Repo
     <Github width={30} className="w-10 h-10  fill-white " />
    </a>
   </div>
   <div className="sm:flex sm:justify-between grid grid-cols-2">
    <h3 className="text-2xl font-bold text-zinc-300 max-w-[12.1rem] sm:max-w-max">
     Adam Legner, Martin Kopecký
    </h3>
    <h3 className="text-2xl font-bold text-zinc-400 justify-self-end">KI/GUI</h3>
   </div>
   <Line />
   <TechKIGUI />
   <Line />
   <Chapter1 id="chapter1" />
   <Line />
   <Chapter2 id="chapter2" />
   <Line />
   <Chapter3 id="chapter3" />
   <Line />
   <Chapter4 id="chapter4" />
   <Line />
   <Chapter5 id="chapter5" />
   <Line />
   <Chapter6 id="chapter6" />
  </>
 )
}

function Line() {
 return <div className="border-b border-slate-500/35 my-2" />
}
