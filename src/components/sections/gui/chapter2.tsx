import { Chapter, H, HL } from '@/components/ui/textFormat'
import { Code } from '@/components/ui/code'

export default function Chapter2() {
 return (
  <>
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
  </>
 )
}
