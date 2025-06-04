"use client"

import { cn } from '@/lib/utils'

interface GridBackgroundProps {
  className?: string
  children?: React.ReactNode
}

export function GridBackground({ className, children }: GridBackgroundProps) {
  return (
    <div
      className={cn(
        'h-[50rem] w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center',
        className
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  )
}