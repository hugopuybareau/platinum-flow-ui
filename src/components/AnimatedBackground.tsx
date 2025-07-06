import { useEffect, useState } from 'react'

export function AnimatedBackground() {
  const [shapes, setShapes] = useState<Array<{
    id: number
    size: number
    initialX: number
    initialY: number
    rotation: number
    animationDelay: number
  }>>([])

  useEffect(() => {
    // Generate random shapes for the background
    const newShapes = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      rotation: Math.random() * 360,
      animationDelay: Math.random() * 10,
    }))
    setShapes(newShapes)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-depth opacity-60" />
      
      {/* Animated Shapes */}
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute opacity-20 dark:opacity-30"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.initialX}%`,
            top: `${shape.initialY}%`,
            transform: `rotate(${shape.rotation}deg)`,
            animationDelay: `${shape.animationDelay}s`,
          }}
        >
          {/* Sharp-edged shapes inspired by Raycast */}
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/20 animate-float"
               style={{ 
                 clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
               }} />
        </div>
      ))}
      
      {/* Floating geometric elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 animate-slide-diagonal"
           style={{ clipPath: 'polygon(0 0, 100% 25%, 75% 100%, 0 75%)' }} />
      
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-secondary/15 animate-float"
           style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      
      <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-accent/20 animate-slide-diagonal"
           style={{ 
             clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
             animationDelay: '5s'
           }} />
    </div>
  )
}