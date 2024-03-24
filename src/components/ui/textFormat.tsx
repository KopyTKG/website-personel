import React from 'react'

function H({ children }: { children: React.ReactNode }) {
 return <h4 className="text-lg">{children}</h4>
}

function Chapter({ children }: { children: React.ReactNode }) {
 return <h4 className="text-3xl font-bold">{children}</h4>
}

function HL({ children }: { children: React.ReactNode }) {
 return <span className="text-green-400 font-bold">{children}</span>
}

export { H, Chapter, HL }
