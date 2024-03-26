/* eslint-disable */

import { Chapter, H, HL } from '@/components/ui/textFormat'
import { Code } from '@/components/ui/code'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Chapter6() {
 return (
  <>
   <Chapter>6. Dynamic path for lookup and lookup API </Chapter>
   <div className="flex flex-col gap-8 ml-5 mt-2">
    <div>
     <H>
      Now that we can generate id and store it into redis.We need a way to look it up. Best way to
      do so is by using Next.js dynamic routes. There are two types <code>{`[id]`}</code> and{' '}
      <code>{`[slug]`}</code>, where id is for number and slug is for string. For this case we are
      going to use <code>{`[slug]`}</code>, because we have a hex number.
     </H>
     <H>
      Creating <code>{`[slug]`}</code> route is very simple, we just need to add it to{' '}
      <code>{`src/app/[slug]`}</code> folder. In it we need to create <code>{`page.tsx`}</code> file
      with basic code just like this:{' '}
     </H>
     <Code
      text={`export default function Page({ params }: { params: { slug: string } }) {
    return <h1>Dynamic page : {params.slug}</h1>;
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`export default function Page({ params }: { params: { slug: string } }) {
    return <h1>Dynamic page : {params.slug}</h1>;
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      We are going to be fetching data from API. It&apos;s a good idea to handle errors with{' '}
      <code>{`src/app/[slug]/error.tsx`}</code>. For that we can reuse code from{' '}
      <code>src/app/error.tsx</code>
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
    <div>
     <H>
      Now we can start fetching data. To do that let&apos;s use <code>{`useEffect`}</code> hook and
      create a simple callback function. Firstly to use any React hooks we need to switch into
      client component and then import <code>{`useEffect`}</code> hook.
     </H>
     <Code
      text={`'use client'
import { useEffect } from 'react';

export default function Page({ params }: { params: { slug: string } }) {
    useEffect(() => {},[])
    return <h1>Dynamic page : {params.slug}</h1>;
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`'use client'
import { useEffect } from 'react';

export default function Page({ params }: { params: { slug: string } }) {
    useEffect(() => {},[])
    return <h1>Dynamic page : {params.slug}</h1>;
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      We will use URL parameters and <HL>GET</HL> method on <code>api/url</code> path, so we
      don&apos;t have to create a separate api route. The first step is to create headers for our
      request, then assemble an url with parametr id and fetch it.Then we need to check if we got
      any errors. If we did not, we will redirect the user to the url.
     </H>
     <Code
      text={`'use client'
import { useEffect } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  async function GetUrl() {
    const headers = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/url?id=" + params.slug,
      headers
    );

    if (!response.ok) {
      window.location.replace(process.env.NEXT_PUBLIC_BASE_URL)
 || ''    }

    const data = await response.json();
    window.location.replace(data.url);
    return;
  }
  useEffect(() => {}, []);

  return <h1>Dynamic page :{params.slug}</h1>;
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`'use client'
import { useEffect } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  async function GetUrl() {
    const headers = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/url?id=" + params.slug,
      headers
    );

    if (!response.ok) {
        window.location.replace(process.env.NEXT_PUBLIC_BASE_URL || '')
    }

    const data = await response.json();
    window.location.replace(data.url);
    return;
  }
  useEffect(() => {}, []);

  return <h1>Dynamic page :{params.slug}</h1>;
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      Now the only thing left here is to call the function in useEffect hook and add it into
      dependencies array.
     </H>
     <Code
      text={`'use client'
import { useEffect } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  async function GetUrl() {
    const headers = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/url?id=" + params.slug,
      headers
    );

    if (!response.ok) {
        window.location.replace(process.env.NEXT_PUBLIC_BASE_URL || '')
    }

    const data = await response.json();
    window.location.replace(data.url);
    return;
  }
  useEffect(() => {GetUrl()}, [GetUrl]);

  return <h1>Dynamic page :{params.slug}</h1>;
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`'use client'
import { useEffect } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  async function GetUrl() {
    const headers = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/url?id=" + params.slug,
      headers
    );

    if (!response.ok) {
        window.location.replace(process.env.NEXT_PUBLIC_BASE_URL || '')
    }

    const data = await response.json();
    window.location.replace(data.url);
    return;
  }
  useEffect(() => {GetUrl()}, [GetUrl]);

  return <h1>Dynamic page :{params.slug}</h1>;
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      {' '}
      Moving to API we will be modifying <HL>GET</HL> function in <code>src/api/url/route.ts</code>{' '}
      by firtly parsing the url to get the id paramater.
     </H>
     <Code
      text={`import RedisLib from '@/lib/redis'

function generateId(): number {
  const min = 1;
  const max = 1099511627775
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET(req: Request) {
    try {
        const path = new URL(req.url)
        const id = path.searchParams.get('id')
        if (!id) throw new Error('No id provided')

        return new Response(JSON.stringify({id: id}), { status: 200 })

    } catch (error) {
        return new Response('Error', { status: 500 })
    }
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
    try {
        const path = new URL(req.url)
        const id = path.searchParams.get('id')
        if (!id) throw new Error('No id provided')

        return new Response(JSON.stringify({id: id}), { status: 200 })

    } catch (error) {
        return new Response('Error', { status: 500 })
    }
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
    <div>
     <H>
      Next we will get instance of our <code>RedisLib</code> and check if we have <code>id</code> in
      cache. Based on that we will return the url or throw 404 error code
     </H>
     <Code text={`import RedisLib from '@/lib/redis'

function getRandomNumber(): number {
    const min = 1;
    const max = 1099511627775
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET(req: Request){
    try {
        const path = new URL(req.url)
        const id = path.searchParams.get('id')
        if (!id) throw new Error('No id provided')

        const redis = RedisLib.getInstance().getClient();
        
        let url = await redis.get(id);

        if (id) {
            return new Response(JSON.stringify({url: url}), { status: 200 })
        } else {
            return new Response(JSON.stringify({message: 'No url found'}), { status: 404 })
        }

    } catch (error) {
        return new Response('Error', { status: 500 })
    }
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
   
            let id = getRandomNumber().toString(16)
            
            await redis.set(id, url, 'EX', 60 * 60 * 4)
            await redis.set(url, id, 'EX', 60 * 60 * 4)
            
            return new Response(JSON.stringify({id: id}), { status: 200 })
        }
    } catch (error) {
        return new Response('Error', { status: 500 })
    }
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`import RedisLib from '@/lib/redis'

function getRandomNumber(): number {
    const min = 1;
    const max = 1099511627775
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET(req: Request){
    try {
        const path = new URL(req.url)
        const id = path.searchParams.get('id')
        if (!id) throw new Error('No id provided')

        const redis = RedisLib.getInstance().getClient();
        
        let url = await redis.get(id);

        if (id) {
            return new Response(JSON.stringify({url: url}), { status: 200 })
        } else {
            return new Response(JSON.stringify({message: 'No url found'}), { status: 404 })
        }

    } catch (error) {
        return new Response('Error', { status: 500 })
    }
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
   
            let id = getRandomNumber().toString(16)
            
            await redis.set(id, url, 'EX', 60 * 60 * 4)
            await redis.set(url, id, 'EX', 60 * 60 * 4)
            
            return new Response(JSON.stringify({id: id}), { status: 200 })
        }
    } catch (error) {
        return new Response('Error', { status: 500 })
    }
}`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>
      But because we use dynamic route that calls the api. We can run into caching proble. To solve
      that we will turn caching off with this constant.
     </H>
     <Code text={`export const dynamic = 'force-dynamic'`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`export const dynamic = 'force-dynamic'`}
      </SyntaxHighlighter>
     </Code>
    </div>
    <div>
     <H>We need to set it at the begining of our code just like this</H>
     <Code
      text={`import RedisLib from '@/lib/redis'
export const dynamic = 'force-dynamic'

function getRandomNumber(): number {
    const min = 1;
    const max = 1099511627775
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET(req: Request){
    try {
        const path = new URL(req.url)
        const id = path.searchParams.get('id')
        if (!id) throw new Error('No id provided')

        const redis = RedisLib.getInstance().getClient();
        
        let url = await redis.get(id);

        if (id) {
            return new Response(JSON.stringify({url: url}), { status: 200 })
        } else {
            return new Response(JSON.stringify({message: 'No url found'}), { status: 404 })
        }

    } catch (error) {
        return new Response('Error', { status: 500 })
    }
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
   
            let id = getRandomNumber().toString(16)
            
            await redis.set(id, url, 'EX', 60 * 60 * 4)
            await redis.set(url, id, 'EX', 60 * 60 * 4)
            
            return new Response(JSON.stringify({id: id}), { status: 200 })
        }
    } catch (error) {
        return new Response('Error', { status: 500 })
    }
}`}>
      <SyntaxHighlighter language="typescript" style={irBlack}>
       {`import RedisLib from '@/lib/redis'
export const dynamic = 'force-dynamic'

function getRandomNumber(): number {
    const min = 1;
    const max = 1099511627775
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET(req: Request){
    try {
        const path = new URL(req.url)
        const id = path.searchParams.get('id')
        if (!id) throw new Error('No id provided')

        const redis = RedisLib.getInstance().getClient();
        
        let url = await redis.get(id);

        if (id) {
            return new Response(JSON.stringify({url: url}), { status: 200 })
        } else {
            return new Response(JSON.stringify({message: 'No url found'}), { status: 404 })
        }

    } catch (error) {
        return new Response('Error', { status: 500 })
    }
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
   
            let id = getRandomNumber().toString(16)
            
            await redis.set(id, url, 'EX', 60 * 60 * 4)
            await redis.set(url, id, 'EX', 60 * 60 * 4)
            
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
