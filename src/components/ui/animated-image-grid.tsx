"use client"

import { motion } from "framer-motion"

const images = [
  "/background1.jpg",
  "/background2.jpg",
  "/background3.jpg"
]

const columnConfigs: [number, number][][] = [
  [[4, 150], [6, 274], [3, 350]],
  [[4, 150], [9, 274], [3, 350]],
  [[6, 280], [5, 95], [3, 350]]
]

export default function AnimatedImageGrid() {
  return (
    <div className="flex flex-row w-full max-w-sm gap-2">
      {columnConfigs.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-2 w-full">
          {column.map(([height, delay], itemIndex) => (
            <motion.div
              key={`${colIndex}-${itemIndex}`}
              className="w-full rounded-lg bg-cover bg-center relative overflow-hidden"
              style={{
                height: `${height}rem`,
                backgroundImage: `url(${images[0]})`,
              }}
              animate={{
                backgroundImage: [
                  `url(${images[0]})`,
                  `url(${images[0]})`,
                  `url(${images[1]})`,
                  `url(${images[1]})`,
                  `url(${images[2]})`,
                  `url(${images[2]})`,
                  `url(${images[0]})`,
                ],
              }}
              transition={{
                duration: 5,
                delay: delay / 1000,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.33, 0.63, 0.66, 0.96, 1],
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  )
}
