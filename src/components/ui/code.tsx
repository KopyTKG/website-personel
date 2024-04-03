'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { ClipboardIcon } from '@heroicons/react/24/solid'
import { useToast } from '@/components/ui/use-toast'

const codeVariants = cva(
 'grid grid-rows-[max auto] max-w-6xl px-4 py-2 font-mono text-lg overflow-x-auto rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ',
 {
  variants: {
   theme: {
    dark: 'bg-black text-white',
    light: 'bg-white text-black',
   },
  },
  defaultVariants: {
   theme: 'dark',
  },
 },
)

export interface ButtonProps
 extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof codeVariants> {
 text?: string
}

const Code = React.forwardRef<HTMLButtonElement, ButtonProps>(
 ({ className, theme, text, ...props }, ref) => {
  const { toast } = useToast()
  return (
   <code className={cn(codeVariants({ theme, className }))} ref={ref} {...props}>
    <div>{props.children}</div>
    {text && (
     <div className="float-right hover:cursor-pointer group row-start-1 justify-self-end absolute">
      <CopyToClipboard
       text={text as string}
       onCopy={() => {
        toast({
         title: 'Copied to clipboard',
         description: 'You can now paste it in your code editor.',
        })
       }}>
       <span>
        <ClipboardIcon
         width={20}
         className="stroke-stone-300 -z-1 font-bold bg-transparent fill-transparent stroke-2 group-hover:stroke-stone-700"
        />
       </span>
      </CopyToClipboard>
     </div>
    )}
   </code>
  )
 },
)
Code.displayName = 'Code'

export { Code, codeVariants }
