'use client'

import { useEffect, useRef } from 'react'

interface Point {
 x: number
 y: number
 baseX: number
 baseY: number
}

export default function InteractiveHashGrid({
 size = 20,
 range = 50,
 elasticity = 0.1,
 color,
}: {
 size: number
 range: number
 elasticity: number
 color: string
}) {
 const canvasRef = useRef<HTMLCanvasElement>(null)

 const mouseRef = useRef({ x: 0, y: 0 })
 const pointsRef = useRef<Point[]>([])

 useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let animationFrameId: number
  // Initialize the grid points
  const initGrid = () => {
   canvas.width = window.innerWidth
   canvas.height = window.innerHeight

   const columns = Math.ceil(canvas.width / size)
   const rows = Math.ceil(canvas.height / size)

   pointsRef.current = []

   for (let y = 0; y <= rows; y++) {
    for (let x = 0; x <= columns; x++) {
     const baseX = x * size
     const baseY = y * size

     pointsRef.current.push({
      x: baseX,
      y: baseY,
      baseX,
      baseY,
     })
    }
   }
  }

  // Draw the grid
  const drawGrid = () => {
   if (!ctx || !canvas) return

   ctx.clearRect(0, 0, canvas.width, canvas.height)

   // Set line style
   ctx.strokeStyle = color ? color : 'rgba(255, 0, 0, 0.3)'
   ctx.lineWidth = 1

   const points = pointsRef.current
   const columns = Math.ceil(canvas.width / size)

   // Draw vertical lines
   for (let x = 0; x <= columns; x++) {
    ctx.beginPath()
    for (let y = 0; y < points.length / (columns + 1); y++) {
     const point = points[x + y * (columns + 1)]
     if (!point) continue

     if (y === 0) {
      ctx.moveTo(point.x, point.y)
     } else {
      ctx.lineTo(point.x, point.y)
     }
    }
    ctx.stroke()
   }

   // Draw horizontal lines
   for (let y = 0; y < points.length / (columns + 1); y++) {
    ctx.beginPath()
    for (let x = 0; x <= columns; x++) {
     const point = points[x + y * (columns + 1)]
     if (!point) continue

     if (x === 0) {
      ctx.moveTo(point.x, point.y)
     } else {
      ctx.lineTo(point.x, point.y)
     }
    }
    ctx.stroke()
   }
  }

  // Update point positions based on mouse position
  const updatePoints = () => {
   const points = pointsRef.current
   const mouse = mouseRef.current

   points.forEach((point) => {
    const dx = mouse.x - point.baseX
    const dy = mouse.y - point.baseY
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < range) {
     const force = (range - distance) / range
     point.x = point.baseX + dx * force * 0.5
     point.y = point.baseY + dy * force * 0.5
    } else {
     // Return points to their base position
     point.x += (point.baseX - point.x) * elasticity
     point.y += (point.baseY - point.y) * elasticity
    }
   })
  }

  // Animation loop
  const animate = () => {
   updatePoints()
   drawGrid()
   animationFrameId = requestAnimationFrame(animate)
  }

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
   mouseRef.current = {
    x: event.clientX,
    y: event.clientY + window.scrollY,
   }
  }

  // Handle touch movement
  const handleTouchMove = (event: TouchEvent) => {
   event.preventDefault()
   mouseRef.current = {
    x: event.touches[0].clientX,
    y: event.touches[0].clientY,
   }
  }

  // Initialize and start animation
  initGrid()
  animate()

  // Event listeners
  window.addEventListener('resize', initGrid)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('touchmove', handleTouchMove, { passive: false })

  // Cleanup
  return () => {
   window.removeEventListener('resize', initGrid)
   window.removeEventListener('mousemove', handleMouseMove)
   window.removeEventListener('touchmove', handleTouchMove)
   cancelAnimationFrame(animationFrameId)
  }
 }, [])

 return <canvas ref={canvasRef} className="bg-black touch-none" />
}
