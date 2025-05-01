import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'

import { Badge } from '~/components/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '~/components/ui/popover'
import { useIsMobile } from '~/hooks/use-mobile'

export const Route = createFileRoute('/')({
  loader: () => {
    return {
      content: {
        intros: [
          "Hi, I'm Bram — a software engineer specialized at mobile app development, based in Malang, Indonesia.",
          'I have over four years of experience in software engineering, with more than two spent professionally. My go-to tools to develop apps are Flutter for cross-platform (iOS & Android) and Jetpack Compose for native Android development.',
          "While mobile is my main focus, I'm currently doing internship as a frontend software engineer at Arkatama software house — starting with Laravel Blade, and now developing a web app using React.js. I'm also interested in Swift for iOS development and excited to expand into that ecosystem soon."
        ]
      }
    }
  },
  component: RouteComponent
})

function RouteComponent() {
  const { content } = Route.useLoaderData()

  return (
    <div className="relative mx-auto flex h-dvh w-full max-w-screen-sm flex-col overflow-x-hidden">
      <header className="sticky top-0 z-10 h-14 w-full">
        <nav></nav>
      </header>
      <main className="no-scrollbar relative w-full flex-1 overflow-y-auto p-6">
        <section className="mb-10 h-36"></section>
        <section
          id="introduction"
          className="[&>p]:text-foreground/90 relative flex w-full flex-col space-y-2 [&>p]:text-sm [&>p]:leading-loose"
        >
          <div className="mb-4 space-y-2">
            <motion.h1
              className="text-xl leading-tight font-semibold"
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              Yara Bramasta
            </motion.h1>
            <JobTitleBadge />
          </div>
          {content.intros.map((text, index) => (
            <motion.p
              key={`introduction-paragraph-key-${Math.random()}`}
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
      </main>
    </div>
  )
}

function JobTitleBadge() {
  const isMobile = useIsMobile()

  return (
    <Popover>
      <PopoverTrigger>
        <Badge
          role="button"
          className="relative w-fit cursor-pointer overflow-hidden rounded-sm"
          asChild
        >
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <motion.span
              className="block font-mono"
              initial={{ y: 14 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.05 + 0.3,
                ease: [0.33, 1, 0.68, 1],
                duration: 0.2
              }}
            >
              Software Engineer
            </motion.span>
          </motion.h2>
        </Badge>
      </PopoverTrigger>
      <PopoverContent
        side={isMobile ? 'top' : 'right'}
        sideOffset={8}
        align={isMobile ? 'start' : 'center'}
        className="h-fit w-fit p-2"
      >
        <motion.span
          className="text-muted-foreground block max-w-[24ch] text-xs leading-tight font-medium"
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0)' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Yeah you're right, a person who sits in front of a computer all day
          LOL 😝
        </motion.span>
      </PopoverContent>
    </Popover>
  )
}
