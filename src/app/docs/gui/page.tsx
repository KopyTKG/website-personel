import { Code } from '@/components/ui/code'
import { Github } from 'lucide-react'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs'
export default function KI_GUI() {
 return (
  <>
   <div className="flex justify-between">
    <h1 className="text-5xl font-bold">Next.JS</h1>{' '}
    <a
     href="https://github.com/kopytkg/shorturl"
     target="_blank"
     rel="noreferrer"
     className="flex items-center text-lg font-bold hover:bg-white/50 ease-in-out duration-200 rounded-lg p-[.25rem]">
     Repo
     <Github width={30} className="w-10 h-10  fill-white " />
    </a>
   </div>
   <div className="sm:flex sm:justify-between grid grid-cols-2">
    <h3 className="text-2xl font-bold text-zinc-300 max-w-[12.1rem] sm:max-w-max">
     Martin Kopecký, Adam Legner
    </h3>
    <h3 className="text-2xl font-bold text-zinc-400 justify-self-end">KI/GUI</h3>
   </div>
   <div className="border-b border-slate-500/35 my-2" />
   <div className="flex flex-col gap-8 mt-5">
    <div>
     <H>Creating project</H>
     <Code>
      npx&nbsp;<HL>create-next-app@latest</HL>
     </Code>
    </div>
    <div>
     <H>
      For first use of npx commad there could be this prompt. Just type &apos;Y&apos; and press
      enter
     </H>
     <Code>
      Need to install the following packages: <br />
      create-next-app@14.1.4 <br />
      Ok to proceed? (y) <HL>Y</HL>
     </Code>
    </div>
    <div>
     <H>Now we need to configure next for this project</H>
     <Code>
      What is your project named? <HL>Project-name</HL>
      <br />
      Would you like to use TypeScript? No / <HL>Yes</HL>
      <br />
      Would you like to use ESLint? <HL>No</HL> / Yes
      <br />
      Would you like to use Tailwind CSS? No / <HL>Yes</HL>
      <br />
      Would you like to use `src/` directory? No /<HL>Yes</HL> <br />
      Would you like to use App Router? (recommended) No /<HL>Yes</HL> <br />
      Would you like to customize the default import alias (@/*)?
      <HL>No</HL> / Yes <br />
     </Code>
    </div>

    <div>
     <H>Now we need to install 2 dependencies for this project</H>
     <Code>
      npm install --save <HL>ioredis geist</HL>
     </Code>
    </div>
    <div>
     <H>
      For backend use we need to configure ioredis. To do so we need to create lib file in{' '}
      <code>src/lib/</code> directory with following code
     </H>
     <Code>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`import { Redis } from "ioredis";

export default class RedisLib {
  public static instance: Redis;
  static getInstance() {
    if (!RedisLib.instance) {
      RedisLib.instance = new RedisLib();
    }
    return RedisLib.instance;
  }
  private constructor() {
    if (process.env.REDIS_URL) {
        RedisLib.instance = new Redis(process.env.REDIS_URL);
    } else {
      throw new Error("REDIS_URL is not defined");
    }
  }
}
`}
      </SyntaxHighlighter>
     </Code>
    </div>
   </div>
  </>
 )
}

function H({ children }: { children: React.ReactNode }) {
 return <h4 className="text-lg">{children}</h4>
}

function HL({ children }: { children: React.ReactNode }) {
 return <span className="text-green-400 font-bold">{children}</span>
}
