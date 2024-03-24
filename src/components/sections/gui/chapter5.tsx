import { Chapter, H, HL } from '@/app/docs/gui/page'
import { Code } from '@/components/ui/code'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Chapter5() {
 return (
  <>
   {' '}
   <Chapter>5. Generating ID for url</Chapter>
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
    <div>
     <H>
      In <HL>POST</HL> request we will be creating id associated with url and returning it. To do so
      we need basic a function to generate HEX number. Like this:
     </H>
     <Code
      text={`function generateId() {
const min = 1;
const max = 1099511637775;
return Math.floor(Math.random() * (max - min + 1)) + min;           
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`function generateId() {
const min = 1;
const max = 1099511637775;
return Math.floor(Math.random() * (max - min + 1)) + min;           
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      Now let&apos;s create a simple algorithm to get request body, create an id (hex number) and
      return that id back to frontend.
     </H>
     <Code
      text={`function generateId() {
const min = 1;
const max = 1099511637775;
return Math.floor(Math.random() * (max - min + 1)) + min;           
}

export async function GET(req: Request) {
return new Response("Hello, Next.js! GET");
}

export async function POST(req: Request) {
try {
  const data = await req.json()
  const { url } = data
  let id = generateId().toString(16)  
  return new Response(JSON.stringify({id: id}), { status: 200 })
} catch (error) {
  return new Response('Error', { status: 500 })
}
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`function generateId() {
const min = 1;
const max = 1099511637775;
return Math.floor(Math.random() * (max - min + 1)) + min;           
}

export async function GET(req: Request) {
return new Response("Hello, Next.js! GET");
}

export async function POST(req: Request) {
try {
  const data = await req.json()
  const { url } = data
  let id = generateId().toString(16)  
  return new Response(JSON.stringify({id: id}), { status: 200 })
} catch (error) {
  return new Response('Error', { status: 500 })
}
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      Now that we have a way to create an id, we need to save it. To do so we will use our{' '}
      <code>RedisLib</code> that we&apos;ve created in the begining. To use it we need to import it
      and then get Redis instance.
     </H>
     <Code
      text={`import RedisLib from '@/lib/redis'

function generateId() {
const min = 1;
const max = 1099511637775;
return Math.floor(Math.random() * (max - min + 1)) + min;           
}

export async function GET(req: Request) {
return new Response("Hello, Next.js! GET");
}
export async function POST(req: Request) {
try {
  const data = await req.json()
  const { url } = data

  const redis = RedisLib.getInstance().getClient();

  let id = generateId().toString(16)  
  return new Response(JSON.stringify({id: id}), { status: 200 })
} catch (error) {
  return new Response('Error', { status: 500 })
}
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`import RedisLib from '@/lib/redis'

function generateId() {
const min = 1;
const max = 1099511637775;
return Math.floor(Math.random() * (max - min + 1)) + min;           
}

export async function GET(req: Request) {
return new Response("Hello, Next.js! GET");
}
export async function POST(req: Request) {
try {
  const data = await req.json()
  const { url } = data

  const redis = RedisLib.getInstance().getClient();

  let id = generateId().toString(16)  
  return new Response(JSON.stringify({id: id}), { status: 200 })
} catch (error) {
  return new Response('Error', { status: 500 })
}
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      To tie it all together first we need to check if the url already exists in redis cache. If it
      does we need to return it, else we need to create an id for it and save it into redis for 4h.
      After that we are going to return that id. Implementation for this part is bellow:
     </H>
     <Code
      text={`import RedisLib from '@/lib/redis'

function generateId(): number {
  const min = 1;
  const max = 1099511627775
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET(req: Request) {
return new Response("Hello, Next.js! GET");
}

export async function POST(req: Request) {
try {
  const data = await req.json()
  const { url } = data
  
  const redis = RedisLib.getInstance().getClient();
  let id = await redis.get(url);
  if (id) {
      return new Response(JSON.stringify({id: id}), { status: 200 })
  } else {

    let id = generateId().toString(16)
  
    const time = 60*60*4;
    await redis.set(id, url, 'EX', time)
    await redis.set(url, id, 'EX', time)
    
    return new Response(JSON.stringify({id: id}), { status: 200 })
  }
} catch (error) {
    return new Response('Error', { status: 500 })
}
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`import RedisLib from '@/lib/redis'

function generateId(): number {
  const min = 1;
  const max = 1099511627775
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET(req: Request) {
return new Response("Hello, Next.js! GET");
}

export async function POST(req: Request) {
try {
  const data = await req.json()
  const { url } = data
  
  const redis = RedisLib.getInstance().getClient();
  let id = await redis.get(url);
  if (id) {
      return new Response(JSON.stringify({id: id}), { status: 200 })
  } else {

    let id = generateId().toString(16)
  
    const time = 60*60*4;
    await redis.set(id, url, 'EX', time)
    await redis.set(url, id, 'EX', time)
    
    return new Response(JSON.stringify({id: id}), { status: 200 })
  }
} catch (error) {
    return new Response('Error', { status: 500 })
}
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
   </div>
  </>
 )
}
