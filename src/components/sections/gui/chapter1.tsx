import { Chapter, H, HL } from '@/app/docs/gui/page'
import { Code } from '@/components/ui/code'

export default function Chapter1() {
 return (
  <>
   <Chapter>1. Prequisites</Chapter>
   <div className="flex flex-col gap-2 ml-5 mt-2">
    <H>
     {' '}
     To use KI/GUI you need to install{' '}
     <a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">
      <HL>NodeJS</HL>
     </a>
     ,{' '}
     <a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noreferrer">
      <HL>Docker</HL>
     </a>
     ,{' '}
     <a href="https://git-scm.com/download" target="_blank" rel="noreferrer">
      <HL>Git</HL>
     </a>{' '}
     and text editor of your choice (we recommend using{' '}
     <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
      <HL>VSCode</HL>
     </a>
     )
    </H>
    <H>
     As for data storage we are gonna use redis container. So run the following command in terminal
    </H>
    <Code text="docker run --name redis -d -p 6379:6379 redis">
     docker&nbsp;<HL>run --name redis -d -p 6379:6379 redis</HL>
    </Code>
   </div>
  </>
 )
}
