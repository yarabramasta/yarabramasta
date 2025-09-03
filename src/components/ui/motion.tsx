'use client'

import { motion } from 'motion/react'

export function MotionIcon({ children }: React.PropsWithChildren) {
  return (
    <motion.span
      animate={{ x: 0 }}
      className="block transform-gpu"
      exit={{ x: 20 }}
      initial={{ x: -20 }}
      transition={{
        delay: 0.15,
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1]
      }}
    >
      {children}
    </motion.span>
  )
}
