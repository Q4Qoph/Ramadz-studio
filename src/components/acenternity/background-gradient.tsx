"use client"

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BackgroundGradientProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#D1A73C,transparent),radial-gradient(circle_farthest-side_at_100%_0,#EFDCA3,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#D1A73C,transparent),radial-gradient(circle_farthest-side_at_0_0,#EFDCA3,#D1A73C)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#D1A73C,transparent),radial-gradient(circle_farthest-side_at_100%_0,#EFDCA3,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#D1A73C,transparent),radial-gradient(circle_farthest-side_at_0_0,#EFDCA3,#D1A73C)]"
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
