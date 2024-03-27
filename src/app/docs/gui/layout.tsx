'use client'
import React from 'react'

export default function GuiLayout({ children }: { children: React.ReactNode }) {
 function ScrollIntoView(id: string) {
  const element = document.getElementById(id)
  if (element) {
   element.scrollIntoView({
    behavior: 'smooth', // Smooth scroll
    block: 'center', // Vertically align to the center
    inline: 'nearest', // Horizontally align to the nearest edge
   })
  }
 }

 const links = [
  {
   name: 'Chapter 1',
   desc: 'Prequisites',
   id: 'chapter1',
  },
  {
   name: 'Chapter 2',
   desc: 'Installation',
   id: 'chapter2',
  },
  {
   name: 'Chapter 3',
   desc: 'Basic Configuration',
   id: 'chapter3',
  },
  {
   name: 'Chapter 4',
   desc: 'Index page (Main)',
   id: 'chapter4',
  },
  {
   name: 'Chapter 5',
   desc: 'Generating ID for url',
   id: 'chapter5',
  },
  {
   name: 'Chapter 6',
   desc: 'Dynamic path for lookup and lookup API',
   id: 'chapter6',
  },
 ]

 return (
  <div className="min-h-screen">
   <div className="grid grid-cols-1 lg:grid-cols-[75%_25%] 2xl:grid-cols-[25%_50%_25%] absolute h-svh w-svw top-14 left-0">
    <div className="hidden 2xl:block" />
    <div className="text-white max-w-full mx-auto px-10 text-justify pt-5 pb-5">{children}</div>
    <div className="hidden lg:block"></div>
   </div>
   <div className="grid grid-cols-1 lg:grid-cols-[75%_25%] 2xl:grid-cols-[25%_50%_25%] fixed  h-svh w-svw top-14 left-0">
    <div className="hidden lg:block h-full w-full border-l-2 border-stone-400/15 col-start-2 2xl:col-start-3">
     <div className="text-white flex flex-col gap-5 p-5 h-full">
      <h1 className="text-4xl font-bold border-b-2 border-stone-400/15">Chapters</h1>
      {links.map((link, index) => (
       <div
        key={index}
        className="hover:cursor-pointer hover:text-blue-500 border-l-2 pl-2 border-stone-600/55 hover:border-stone-400/55"
        onClick={() => ScrollIntoView(link.id)}>
        <p className="text-lg font-bold">{link.name}</p>
        <p className="text-lg">{link.desc}</p>
       </div>
      ))}
     </div>
    </div>
   </div>
  </div>
 )
}
