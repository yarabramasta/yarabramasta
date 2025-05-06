import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'

import IcosphereScene from '~/components/icoshpere-scene'
import { badgeVariants } from '~/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '~/components/ui/tooltip'
import { cn } from '~/lib/utils'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

const intros = [
  "Hi, I'm Bram — a software engineer specialized at mobile app development, based in Malang, Indonesia.",
  'I have over four years of experience in software engineering, with more than two spent professionally. My go-to tools to develop apps are Flutter for cross-platform (iOS & Android) and Jetpack Compose for native Android development.',
  "While mobile is my main focus, I'm currently doing internship as a frontend software engineer at Arkatama software house — starting with Laravel Blade, and now developing a web app using React.js. I'm also interested in Swift for iOS development and excited to expand into that ecosystem soon."
]

function RouteComponent() {
  return (
    <div className="w-full space-y-6">
      <section className="relative h-56">
        <IcosphereScene />
      </section>
      <section
        id="introduction"
        className="relative flex w-full flex-col space-y-2"
      >
        <div className="mb-4 flex flex-col space-y-2">
          <motion.h1
            className="from-foreground via-foreground/50 inline-block bg-gradient-to-r to-transparent bg-clip-text text-2xl leading-tight font-semibold text-transparent"
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            Yara Bramasta
          </motion.h1>
          <JobTitleBadge />
        </div>
        {intros.map((text, index) => (
          <motion.p
            // eslint-disable-next-line react/no-array-index-key
            key={`introduction-paragraph-key-${index}`}
            className="text-foreground/80 transform-gpu text-sm leading-loose"
            initial={{ opacity: 0, filter: 'blur(4px)', y: 8 }}
            animate={{ opacity: 1, filter: 'blur(0)', y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.075 * index + 0.6
            }}
          >
            {text}
          </motion.p>
        ))}
      </section>
    </div>
  )
}

function JobTitleBadge() {
  return (
    <TooltipProvider>
      <Tooltip useTouch>
        <TooltipTrigger asChild>
          <motion.h2
            role="button"
            className={cn(
              badgeVariants({ variant: 'brand' }),
              'w-fit cursor-pointer overflow-hidden rounded-sm select-none'
            )}
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0)' }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3
            }}
          >
            <motion.span
              className="block transform-gpu font-mono"
              initial={{ y: 14 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.075 + 0.3,
                ease: [0.33, 1, 0.68, 1],
                duration: 0.2
              }}
            >
              Software Engineer
            </motion.span>
          </motion.h2>
        </TooltipTrigger>
        <TooltipContent className="ml-2">
          <p className="w-full max-w-[28ch] md:max-w-full">
            Yeah you're right, a person who sits in front of a computer all day
            long... 😝
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
