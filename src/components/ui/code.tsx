import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const codeVariants = cva(
 'block w-full px-4 py-2 font-mono text-lg  rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ',
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
 asChild?: boolean
}

const Code = React.forwardRef<HTMLButtonElement, ButtonProps>(
 ({ className, theme, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'code'
  return <Comp className={cn(codeVariants({ theme, className }))} ref={ref} {...props} />
 },
)
Code.displayName = 'Code'

export { Code, codeVariants }
