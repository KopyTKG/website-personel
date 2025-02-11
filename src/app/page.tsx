'use client'

import { useLayoutEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Mail, Menu, X, Globe } from 'lucide-react'
import Image from 'next/image'
import InteractiveHashGrid from '@/components/ui/grid'

interface project {
 id: number
 title: string
 description: string
 link: string
 page?: string
}

const skills = ['React', 'Next.js', 'TypeScript', 'Golang', 'Prisma', 'Tailwind CSS']

export default function Portfolio() {
 const [isMenuOpen, setIsMenuOpen] = useState(false)
 const [isHovered, setIsHovered] = useState(false)
 const [projects, setProject] = useState<project[]>([])

 useLayoutEffect(() => {
  const getData = async () => {
   const url = process.env.NEXT_PUBLIC_DOMAIN || ''
   console.log(url)
   if (!url) {
    throw new Error('Failed: missing env NEXT_PUBLIC_DOMAIN variable')
   }

   const res = await fetch(`${url}/gist`, {
    method: 'GET',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    next: { revalidate: 3600 },
   })

   if (!res.ok) {
    console.error(res)
    throw new Error('Failed: Connection to gist cannot be established')
   }

   const text: project[] = await res.json()

   setProject(text.sort((a, b) => a.id - b.id))
  }
  getData()
 }, [])

 return (
  <div className="min-h-screen bg-black text-white">
   <header className="fixed w-full z-10 bg-black/80 backdrop-blur-sm">
    <nav className="container mx-auto px-6 py-3">
     <div className="flex justify-between items-center">
      <motion.div
       initial={{ opacity: 0, x: -20 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5 }}
      >
       <a href="#" className="text-2xl font-bold text-red-500">
        <Image
         src={'/images/profile.png'}
         alt="presonal logo"
         width={50}
         height={50}
         className="max-w-[3rem] w-full"
        />
       </a>
      </motion.div>
      <div className="hidden md:flex space-x-4">
       {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
        <motion.a
         key={item}
         href={`#${item.toLowerCase()}`}
         className="text-red-500 hover:text-red-400 transition-colors"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.95 }}
        >
         {item}
        </motion.a>
       ))}
      </div>
      <div className="md:hidden">
       <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="text-red-500" /> : <Menu className="text-red-500" />}
       </button>
      </div>
     </div>
    </nav>
    {isMenuOpen && (
     <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:hidden bg-black/95 py-2"
     >
      {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
       <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="block py-2 px-4 text-center text-red-500 hover:text-red-400 transition-colors"
        onClick={() => setIsMenuOpen(false)}
       >
        {item}
       </a>
      ))}
     </motion.div>
    )}
   </header>

   <main>
    <section
     id="home"
     className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
     <div className="absolute inset-0 z-0">
      <InteractiveHashGrid size={50} elasticity={0.4} range={80} color={'rgba(255, 0, 0, 0.5)'} />
     </div>
     <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 text-center"
     >
      <h1
       className="text-5xl md:text-7xl font-bold mb-4 relative"
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}
      >
       <span className="relative z-10 inline-flex items-center">
        Martin&nbsp;
        <AnimatePresence>
         {isHovered && (
          <motion.span
           initial={{ width: 0, opacity: 0 }}
           animate={{ width: 'auto', opacity: 1 }}
           exit={{ width: 0, opacity: 0 }}
           transition={{ duration: 0.3 }}
           className="overflow-hidden whitespace-nowrap"
          >
           <motion.span
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            exit={{ x: -20 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
           >
            <span className="text-red-500">Kopy</span>&nbsp;
           </motion.span>
          </motion.span>
         )}
        </AnimatePresence>
        Kopecký
       </span>
      </h1>
      <p className="text-xl md:text-2xl text-red-500 mb-8">Full Stack Web Developer</p>
      <a
       href="#contact"
       className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors"
      >
       Get in touch
      </a>
     </motion.div>
    </section>

    <section id="about" className="py-20 bg-red-900/20">
     <div className="container mx-auto px-6">
      <motion.h2
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       viewport={{ once: true }}
       className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
       About Me
      </motion.h2>
      <motion.p
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
       viewport={{ once: true }}
       className="text-lg max-w-3xl mx-auto text-center"
      >
       I&apos;m Martin Kopecký, but i go by Kopy. I am {new Date().getFullYear() - 2001} year old
       weirdo from Czech republic, interested in Front-end development. I&apos;m a nerd that likes
       to play video games and build websites. I&apos;m interested in UI/UX development and creating
       smart user interface with awesome and rich experience for the user.
      </motion.p>
     </div>
    </section>

    <section id="skills" className="py-20">
     <div className="container mx-auto px-6">
      <motion.h2
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       viewport={{ once: true }}
       className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
       Skills
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
       {skills.map((skill, index) => (
        <motion.div
         key={skill}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: index * 0.1 }}
         viewport={{ once: true }}
         className="bg-red-900/20 p-4 rounded-lg text-center"
        >
         {skill}
        </motion.div>
       ))}
      </div>
     </div>
    </section>

    <section id="projects" className="py-20 bg-red-900/20">
     <div className="container mx-auto px-6">
      <motion.h2
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       viewport={{ once: true }}
       className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
       Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       {projects.map((project, index) => (
        <motion.div
         key={project.id}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: index * 0.1 }}
         viewport={{ once: true }}
         className="bg-black p-6 rounded-lg shadow-lg border border-red-500/20 relative flex flex-col h-full"
        >
         <h3 className="text-xl font-semibold mb-2 text-red-500">{project.title}</h3>
         <p className="text-gray-300">{project.description}</p>
         <div className="mt-auto self-end">
          <div className="flex flex-row gap-1">
           {project.page ? (
            <motion.a
             href={project.page}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
             className="text-red-500 hover:text-red-400 transition-colors inline-block"
             target="_blank"
             rel="noopener noreferrer"
            >
             <Globe size={24} />
             <span className="sr-only">GitHub repository for {project.title}</span>
            </motion.a>
           ) : null}
           <motion.a
            href={project.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-red-500 hover:text-red-400 transition-colors inline-block"
            target="_blank"
            rel="noopener noreferrer"
           >
            <Github size={24} />
            <span className="sr-only">GitHub repository for {project.title}</span>
           </motion.a>
          </div>
         </div>
        </motion.div>
       ))}
      </div>
     </div>
    </section>

    <section id="contact" className="py-20">
     <div className="container mx-auto px-6">
      <motion.h2
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       viewport={{ once: true }}
       className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
       Get in Touch
      </motion.h2>
      <div className="flex justify-center space-x-6">
       <motion.a
        href="https://github.com/KopyTKG"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-red-500 hover:text-red-400 transition-colors"
       >
        <Github size={24} />
        <span className="sr-only">GitHub</span>
       </motion.a>
       <motion.a
        href="https://www.linkedin.com/in/martin-kopeck%C3%BD-a72b69299/"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-red-500 hover:text-red-400 transition-colors"
       >
        <Linkedin size={24} />
        <span className="sr-only">LinkedIn</span>
       </motion.a>
       <motion.a
        href="mailto:contact@thekrew.app"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-red-500 hover:text-red-400 transition-colors"
       >
        <Mail size={24} />
        <span className="sr-only">Email</span>
       </motion.a>
      </div>
     </div>
    </section>
   </main>

   <footer className="bg-black py-6 bg-red-900/20">
    <div className="container mx-auto px-6 text-center">
     <p>&copy; {new Date().getFullYear()} thekrew.app All rights reserved.</p>
     <span className="text-stone-400/20">build: 0.2.4</span>
    </div>
   </footer>
  </div>
 )
}
