// app/providers.tsx
'use client'
import React from 'react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export function Providers({ children }: { children: React.ReactNode }) {
 return (
  <>
   {children}
   <Analytics />
   <SpeedInsights />
  </>
 )
}
