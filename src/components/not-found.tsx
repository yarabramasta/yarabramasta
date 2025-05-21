import { motion } from 'motion/react'

import IcosphereScene from './icoshpere-scene'
import { Button } from './ui/button'

export default function NotFoundComponent() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <section className="mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)', scale: 0.9 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)', scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15
          }}
          className="text-muted text-center text-8xl font-bold"
        >
          404
        </motion.h1>
      </section>
      <section id="3d-scene" className="relative mb-4 h-56">
        <IcosphereScene />
      </section>
      <section className="flex flex-col items-center justify-center space-y-2">
        <motion.p
          className="text-muted-foreground text-center text-sm"
          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15
          }}
        >
          Seems like you are lost fellas. The page you are looking for does not
          exist.
        </motion.p>
        <Button variant="ghost" asChild>
          <motion.a
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0)' }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15
            }}
            href="/"
          >
            Go back to home
          </motion.a>
        </Button>
      </section>
    </div>
  )
}
