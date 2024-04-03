'use client'
import Image from 'next/image'

const content = [
 {
  title: 'MovieDB',
  description:
   'OSS project created as task for semestral project. It is a movie database that allows you to search for movies that i have on my plex server. Whole app is written in NextJS with MongoDB and Reddis as storage provided by Railway. For styling i have used Tailwindcss and NextUI.',
  content: (
   <a href="https://movies.thekrew.app" target="_blank" rel="noreferrer">
    <Image
     src="/projects/moviedb.png"
     width={1920}
     height={1080}
     className="object-contain w-full border-1 border-white border"
     alt="splash art for moviedb"
    />
   </a>
  ),
 },
 {
  title: 'Docs',
  description: 'Documentation endpoint for my projects. Including uni project for KI/GUI.',
  content: (
   <a href="/docs">
    <Image
     src="/projects/docs.png"
     width={1920}
     height={1080}
     className="object-contain w-full border-1 border-white border"
     alt="splash art for docs"
    />
   </a>
  ),
 },
]
export default function ProjectSection() {
 return (
  <div className="w-svw min-h-screen flex flex-col px-[15%] py-24 gap-48">
   <h1 className="text-6xl font-bold text-white self-center">Projects</h1>
   {content.map((item, index) => (
    <div
     className="grid w-full grid-cols-1 lg:grid-cols-3 items-center justify-center h-max gap-12 justify-items-center"
     key={index}>
     {index % 2 === 0 ? (
      <>
       <div className="text-white">
        <h2 className="text-3xl font-bold">{item.title}</h2>
        <h2 className="text-lg">{item.description}</h2>
       </div>
       <div className="lg:col-start-2 lg:col-span-2 lg:w-8/12 w-full">{item.content}</div>
      </>
     ) : (
      <>
       <div className="lg:col-span-2 lg:w-8/12 row-start-2 lg:row-start-1 w-full">
        {item.content}
       </div>
       <div className="text-white">
        <h2 className="text-3xl font-bold">{item.title}</h2>
        <h2 className="text-lg">{item.description}</h2>
       </div>
      </>
     )}
    </div>
   ))}
  </div>
 )
}
