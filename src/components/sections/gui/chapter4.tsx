import { Chapter, H, HL } from '@/app/docs/gui/page'
import { Code } from '@/components/ui/code'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Chapter4() {
 return (
  <>
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
  </>
 )
}
