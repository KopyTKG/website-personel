import TechKIGUI from '@/components/sections/techstack.kigui'
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
   <Line />
   <TechKIGUI />
   <Line />
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
   <Line />
   <Chapter>2. Installation</Chapter>
   <div className="flex flex-col gap-8 ml-5 mt-2">
    <div>
     <H>Creating project</H>
     <Code text="npx create-next-app@latest">
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
     <Code text="npm install --save ioredis geist">
      npm install --save <HL>ioredis geist</HL>
     </Code>
    </div>
    <div>
     <H>
      {' '}
      To use redis we need to add <code>.env</code> file to the root directory of our project with
      following code
     </H>
     <Code
      text={`
     NEXT_PUBLIC_BASE_URL="http://localhost:3000"
     REDIS_URL="redis://default:@localhost:6379"
     `}>
      NEXT_PUBLIC_BASE_URL=
      <HL>
       {`"`}http://localhost:3000{`"`}
      </HL>
      <br />
      REDIS_URL=
      <HL>
       {`"`}redis://default:@localhost:6379{`"`}
      </HL>
     </Code>
    </div>
    <div>
     <H>
      And for safty reason we need to add this ignore line into <code>.gitignore</code> file
     </H>
     <Code text=".env">.env</Code>
    </div>
    <div>
     <H>Now to start your project run this command</H>
     <Code text="npm run dev">npm run dev</Code>
     <H>
      After this node server will start on{' '}
      <a
       href="http://localhost:3000"
       className="text-blue-400 hover:text-blue-600"
       target="_blank"
       rel="noreferrer">
       http://localhost:3000{' '}
      </a>
     </H>
    </div>
   </div>
   <Line />

   <Chapter>3. Basic Configuration</Chapter>
   <div className="flex flex-col gap-8 ml-5 mt-2">
    <div>
     <H>
      As a first thing we will change the font. To change it we need to modifie{' '}
      <code>src/app/layout.tsx</code>
     </H>
     <H>by changing this line </H>
     <div className="ml-8 mb-5">
      <Code>
       <SyntaxHighlighter language="typescript" style={irBlack}>
        {`import {Inter} from 'next/font/google';`}
       </SyntaxHighlighter>
      </Code>
      to import GeistSans font
      <Code text="import {GeistSans} from 'geist/font/sans';">
       <SyntaxHighlighter language="typescript" style={irBlack}>
        {`import {GeistSans} from 'geist/font/sans';`}
       </SyntaxHighlighter>
      </Code>
     </div>
     <H>then removing this line</H>
     <div className="ml-8 mb-5">
      <Code>
       <SyntaxHighlighter language="typescript" style={irBlack}>
        {`const inter = Inter({subsets: ['latin']}); `}
       </SyntaxHighlighter>
      </Code>
     </div>
     <H>and at last changing body tag className from Inter </H>
     <div className="ml-8 mb-5">
      <Code>
       <SyntaxHighlighter language="typescript" style={irBlack}>
        {`<body className={Inter.className}>{children}</body>`}
       </SyntaxHighlighter>
      </Code>
      <H>to GeistSans to apply font to whole document</H>
      <Code text="<body className={GeistSans.className}>{children}</body>">
       <SyntaxHighlighter language="typescript" style={irBlack}>
        {`<body className={GeistSans.className}>{children}</body>`}
       </SyntaxHighlighter>
      </Code>
     </div>
     <H>
      So the <code>src/app/layout.tsx</code> should look like this
     </H>
     <Code
      text={`
      import type { Metadata } from "next";
      import { GeistSans } from "geist/font/sans";
      import "./globals.css";
      
      
      export const metadata: Metadata = {
        title: "Create Next App",
        description: "Generated by create next app",
      };
      
      export default function RootLayout({
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>) {
        return (
          <html lang="en">
          <body className={GeistSans.className}>{children}</body>
          </html>
          );
        }`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={GeistSans.className}>{children}</body>
    </html>
    );
  }`}
      </SyntaxHighlighter>
     </Code>
    </div>

    <div>
     <H>
      To use ioredis we need to configure it. To do so we&apos;re going to create{' '}
      <code>src/lib</code> folder in which we&apos;ll create <code>redis.ts</code> file.
     </H>
     <Code
      text={`
      import Redis from "ioredis";

      export default class RedisLib {
        private static instance: RedisLib;
        private redisClient: Redis;
      
        private constructor(redisUrl: string) {
          this.redisClient = new Redis(redisUrl);
        }
      
        public static getInstance(redisUrl: string): RedisLib {
          if (!this.instance) {
            if (!redisUrl) {
              throw new Error("REDIS_URL is not defined");
            }
            this.instance = new RedisLib(redisUrl);
          }
          return this.instance;
        }
      
        public getClient(): Redis {
          return this.redisClient;
        }
      }
     `}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`import Redis from "ioredis";

export default class RedisLib {
  private static instance: RedisLib;
  private redisClient: Redis;

  private constructor(redisUrl: string) {
    this.redisClient = new Redis(redisUrl);
  }

  public static getInstance(redisUrl: string): RedisLib {
    if (!this.instance) {
      if (!redisUrl) {
        throw new Error("REDIS_URL is not defined");
      }
      this.instance = new RedisLib(redisUrl);
    }
    return this.instance;
  }

  public getClient(): Redis {
    return this.redisClient;
  }
}
`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      As last thing for basic configuration we&apos;re going to create Error path that is specific
      to Next.js. To create it we need to add file called <code>src/app/error.tsx</code> in which
      we&apos;ll create Error component
     </H>
     <Code
      text={`'use client'
import { useEffect } from 'react'

export default function Error({
 error,
}: {
 error: Error & { digest?: string }
 reset: () => void
}) {
 useEffect(() => {
  console.error(error)
 }, [error])

 return (
  <div className="w-full h-[90vh] flex flex-col justify-center items-center gap-10">
   <h2 className="text-3xl font-bold">Something went wrong!</h2>
   <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-500" onClick={() => window.location.reload()}>
    Try again
   </button>
   <button className="text-xl bg-red-400 rounded-xl px-4 py-2 text-black hover:bg-red-500" onClick={() => window.history.back()}>
    Go Back
   </button>
   <div className="flex flex-col justify-center items-center gap-1">
    <code>Name: {error.name}</code>
    <code>Message: {error.message}</code>
   </div>
  </div>
 )
}
     `}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`'use client'
import { useEffect } from 'react'

export default function Error({
 error,
}: {
 error: Error & { digest?: string }
 reset: () => void
}) {
 useEffect(() => {
  console.error(error)
 }, [error])

 return (
  <div className="w-full h-[90vh] flex flex-col justify-center items-center gap-10">
   <h2 className="text-3xl font-bold">Something went wrong!</h2>
   <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-500" onClick={() => window.location.reload()}>
    Try again
   </button>
   <button className="text-xl bg-red-400 rounded-xl px-4 py-2 text-black hover:bg-red-500" onClick={() => window.history.back()}>
    Go Back
   </button>
   <div className="flex flex-col justify-center items-center gap-1">
    <code>Name: {error.name}</code>
    <code>Message: {error.message}</code>
   </div>
  </div>
 )
}
        `}
      </SyntaxHighlighter>
     </Code>
    </div>
   </div>
   <Line />
   <Chapter>4. Index page (Main)</Chapter>
   <div className="flex flex-col gap-8 ml-5 mt-2">
    <div>
     <H>
      Now we&apos;re going to delete everything from <code>/app/page.tsx</code> and paste in
      following code
     </H>
     <Code
      text={`export default function Home() {
  return(<h1>Hello World</h1>)
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`export default function Home() {
  return(<h1>Hello World</h1>)
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      This should turn the next template into a <code>Hello World</code> message ....{' '}
      <HL>Good job, you&apos;re smart cookie</HL>
     </H>
    </div>
    <div>
     <H>
      Ok, let&apos;s actually start making the real app. To do so we&apos;re gonna delete{' '}
      <code>{`<h1>Hello World</h1>`}</code> and create simple div with header, input field and
      button. Code should be something like this.
     </H>
     <Code
      text={`<main className="w-full h-[95vh] flex justify-center items-center">
  <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
    <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
    <input placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
    <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300">
      Create URL
    </button>
  </div>
</main>`}>
      <SyntaxHighlighter language="htmlbars" style={irBlack}>
       {`<main className="w-full h-[95vh] flex justify-center items-center">
  <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
    <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
    <input placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
    <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300">
      Create URL
    </button>
  </div>
</main>`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      Styling is done, now we need logic to make it do things. Let&apos;s code that. Add async
      function named{' '}
      <code>
       <HL>Submit</HL>
      </code>{' '}
      into <code>{`Home`}</code> page component. Just like this.
     </H>
     <Code
      text={`export default function Home() {
  async function Submit() {}
  return (
    <main className="w-full h-[95vh] flex justify-center items-center">
      <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
        <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
        <input placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
        <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300">
          Create URL
        </button>
      </div>
    </main>
  );
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`export default function Home() {
  async function Submit() {}
  return (
    <main className="w-full h-[95vh] flex justify-center items-center">
      <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
        <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
        <input placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
        <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300">
          Create URL
        </button>
      </div>
    </main>
  );
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      And we need to link it to buttons <code>onClick</code> event, but by doing so we need to
      switch into client side rendering by adding <code>{`'use client'`}</code> flag and the start
      and now we can link the <code>onClick</code>
     </H>
     <Code
      text={`'use client'
export default function Home() {
  async function Submit() {}
  return (
    <main className="w-full h-[95vh] flex justify-center items-center">
      <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
        <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
        <input placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
        <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300" onClick={() => Submit()}>
          Create URL
        </button>
      </div>
    </main>
  );
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`'use client'
export default function Home() {
  async function Submit() {}
  return (
    <main className="w-full h-[95vh] flex justify-center items-center">
      <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
        <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
        <input placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
        <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300" onClick={() => Submit()}>
          Create URL
        </button>
      </div>
    </main>
  );
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      Accessing data of input field can be tricky. To make it easier for us we&apos;re gonna use{' '}
      <code>useRef</code> hook, but first we need to import it from <code>react</code>. Then create
      instance and link it to the input field. Code should be like this
     </H>
     <Code
      text={`'use client'
import {useRef} from 'react';
export default function Home() {
  const inputRef = useRef(null);
  async function Submit() {}
  return (
    <main className="w-full h-[95vh] flex justify-center items-center">
      <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
        <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
        <input ref={inputRef} placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
        <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300" onClick={() => Submit()}>
          Create URL
        </button>
      </div>
    </main>
  );
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`'use client'
import {useRef} from 'react';
export default function Home() {
  const inputRef = useRef(null);
  async function Submit() {}
  return (
    <main className="w-full h-[95vh] flex justify-center items-center">
      <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
        <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
        <input ref={inputRef} placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
        <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300" onClick={() => Submit()}>
          Create URL
        </button>
      </div>
    </main>
  );
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      For testing we are going to turn <code>Submit()</code> into simple alert function with use of
      regex to check if the url is valid. By doing this:
     </H>
     <Code
      text={`'use client'
      import {useRef} from 'react';
      export default function Home() {
        const inputRef = useRef<HTMLInputElement>(null);
        async function Submit() {
          //regex pattern
          const _pattern = "^(https?:\\\\/\\\\/)[\\\\da-z\\\\.-]+\\\\.[a-z]{2,}([\\\\/\\\\w .-]*)(:[\\\\w]+)?(\\\\?[\\\\w=&]+)?(#\\\\w+)?\\\\/?$";
          //initializing regex
          const _regex = new RegExp(_pattern);
      
          // get value of input field
          const url = inputRef.current?.value || null
          if (!url) return;
      
          if (!_regex.test(url)) {
            alert("Invalid URL");
            return;
          } else {
            alert("Valid URL");
            return;
          }
        }
        return (
          <main className="w-full h-[95vh] flex justify-center items-center">
            <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
              <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
              <input ref={inputRef} placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
              <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300" onClick={() => Submit()}>
                Create URL
              </button>
            </div>
          </main>
        );
      }`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`'use client'
import {useRef} from 'react';
export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  async function Submit() {
    //regex pattern
    const _pattern = "^(https?:\\\\/\\\\/)[\\\\da-z\\\\.-]+\\\\.[a-z]{2,}([\\\\/\\\\w .-]*)(:[\\\\w]+)?(\\\\?[\\\\w=&]+)?(#\\\\w+)?\\\\/?$";
    //initializing regex
    const _regex = new RegExp(_pattern);

    // get value of input field
    const url = inputRef.current?.value || null
    if (!url) return;

    if (!_regex.test(url)) {
      alert("Invalid URL");
      return;
    } else {
      alert("Valid URL");
      return;
    }
  }
  return (
    <main className="w-full h-[95vh] flex justify-center items-center">
      <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
        <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
        <input ref={inputRef} placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
        <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300" onClick={() => Submit()}>
          Create URL
        </button>
      </div>
    </main>
  );
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
   </div>
   <Line />
   <Chapter>5. API</Chapter>
   <div className="flex flex-col gap-8 ml-5 mt-2">
    <div>
     <H>
      To create API routes we need to create folder <code>src/api</code> in which we create a folder
      with the name of the api route that we want. For this example we are going to create a folder
      named <code>src/api/url</code>. In this folder we need to create a file <code>route.ts</code>{' '}
      with basic <HL>GET, POST</HL> methods. Such as this:
     </H>
     <Code
      text={`export async function GET(req: Request) {
  return new Response("Hello, Next.js! GET");
}
export async function POST(req: Request) {
  return new Response("Hello, Next.js! POST");
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`export async function GET(req: Request) {
  return new Response("Hello, Next.js! GET");
}
export async function POST(req: Request) {
  return new Response("Hello, Next.js! POST");
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      Now we have backend and frontend, but they don&apos;t know about each other. To make them
      communicate we need to edit index page <code>src/app/page.tsx</code> by replacing{' '}
      <code>{`alert("Valid URL");`}</code> with this:
     </H>
     <Code
      text={`// post request header
const headers = {
  method: 'POST',
  headers: {
   accept: 'application/json',
  },
  body: JSON.stringify(url),
}
// Fetch call with headers
const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+'/api/url', headers)
// Check if response code isn't 200
if (!response.ok) {
  alert('Failed to fetch data')
  return
 }
// json data from api
const data = await response.json()
alert(process.env.NEXT_PUBLIC_BASE_URL + "/" + data.id)`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`// post request header
const headers = {
  method: 'POST',
  headers: {
   accept: 'application/json',
  },
  body: JSON.stringify(url),
}
// Fetch call with headers
const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+'/api/url', headers)
// Check if response code isn't 200
if (!response.ok) {
  alert('Failed to fetch data')
  return
 }
// json data from api
const data = await response.json()
alert(process.env.NEXT_PUBLIC_BASE_URL + "/" + data.id)`}
      </SyntaxHighlighter>
     </Code>
     <H>
      So the whole file <code>src/app/page.tsx</code> should look like this:
     </H>
     <Code
      text={`'use client'
import {useRef} from 'react';
export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  async function Submit() {
    //regex pattern
    const _pattern = "^(https?:\\\\/\\\\/)[\\\\da-z\\\\.-]+\\\\.[a-z]{2,}([\\\\/\\\\w .-]*)(:[\\\\w]+)?(\\\\?[\\\\w=&]+)?(#\\\\w+)?\\\\/?$";
    //initializing regex
    const _regex = new RegExp(_pattern);

    // get value of input field
    const url = inputRef.current?.value || null
    if (!url) return;

    if (!_regex.test(url)) {
      alert("Invalid URL");
      return;
    } else {
      // post request header
      const headers = {
        method: 'POST',
        headers: {
         accept: 'application/json',
        },
        body: JSON.stringify(url),
      }
      // Fetch call with headers
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+'/api/url', headers)
      // Check if response code isn't 200
      if (!response.ok) {
        alert('Failed to fetch data')
        return
       }
      // json data from api
      const data = await response.json()
      alert(process.env.NEXT_PUBLIC_BASE_URL + "/" + data.id)
      return;
    }
  }
  return (
    <main className="w-full h-[95vh] flex justify-center items-center">
      <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
        <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
        <input ref={inputRef} placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
        <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300" onClick={() => Submit()}>
          Create URL
        </button>
      </div>
    </main>
  );
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`'use client'
import {useRef} from 'react';
export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  async function Submit() {
    //regex pattern
    const _pattern = "^(https?:\\\\/\\\\/)[\\\\da-z\\\\.-]+\\\\.[a-z]{2,}([\\\\/\\\\w .-]*)(:[\\\\w]+)?(\\\\?[\\\\w=&]+)?(#\\\\w+)?\\\\/?$";
    //initializing regex
    const _regex = new RegExp(_pattern);

    // get value of input field
    const url = inputRef.current?.value || null
    if (!url) return;

    if (!_regex.test(url)) {
      alert("Invalid URL");
      return;
    } else {
      // post request header
      const headers = {
        method: 'POST',
        headers: {
         accept: 'application/json',
        },
        body: JSON.stringify(url),
      }
      // Fetch call with headers
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+'/api/url', headers)
      // Check if response code isn't 200
      if (!response.ok) {
        alert('Failed to fetch data')
        return
       }
      // json data from api
      const data = await response.json()
      alert(process.env.NEXT_PUBLIC_BASE_URL + "/" + data.id)
      return;
    }
  }
  return (
    <main className="w-full h-[95vh] flex justify-center items-center">
      <div className=" flex flex-col items-center w-1/4 h-fit outline-1 outline outline-gray-500 bg-gray-900 rounded-lg gap-10 py-5 px-3">
        <h1 className="text-3xl text-white font-bold" > ShortURL </h1>
        <input ref={inputRef} placeholder="Enter URL to shorten" className="w-full h-10 px-3 rounded-lg bg-slate-600 text-white" />
        <button className="text-xl bg-blue-400 rounded-xl px-4 py-2 text-black hover:bg-blue-700 hover:text-white ease-in-out duration-300" onClick={() => Submit()}>
          Create URL
        </button>
      </div>
    </main>
  );
}`}
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

function Chapter({ children }: { children: React.ReactNode }) {
 return <h4 className="text-3xl font-bold">{children}</h4>
}

function HL({ children }: { children: React.ReactNode }) {
 return <span className="text-green-400 font-bold">{children}</span>
}

function Line() {
 return <div className="border-b border-slate-500/35 my-2" />
}
