import { useRef, useState } from 'react'

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon
} from '@radix-ui/react-icons'
import { createFileRoute } from '@tanstack/react-router'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'motion/react'

import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '~/components/ui/popover'
import { useIsMobile } from '~/hooks/use-mobile'
import { useTheme } from '~/hooks/use-theme'
import { cn } from '~/lib/utils'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

const content = {
  socials: [
    {
      name: 'GitHub - yarabramasta',
      url: 'https://github.com/yarabramasta',
      icon: GitHubLogoIcon
    },
    {
      name: 'LinkedIn - Yara Bramasta',
      url: 'https://www.linkedin.com/in/yara-bramasta',
      icon: LinkedInLogoIcon
    }
  ],
  intros: [
    "Hi, I'm Bram — a software engineer specialized at mobile app development, based in Malang, Indonesia.",
    'I have over four years of experience in software engineering, with more than two spent professionally. My go-to tools to develop apps are Flutter for cross-platform (iOS & Android) and Jetpack Compose for native Android development.',
    "While mobile is my main focus, I'm currently doing internship as a frontend software engineer at Arkatama software house — starting with Laravel Blade, and now developing a web app using React.js. I'm also interested in Swift for iOS development and excited to expand into that ecosystem soon."
  ]
}

function RouteComponent() {
  const mainContainerRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll({ container: mainContainerRef })
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')

  useMotionValueEvent(scrollY, 'change', current => {
    const diff = current - (scrollY.getPrevious() || 0)
    setScrollDirection(diff > 0 ? 'down' : 'up')
  })

  return (
    <div className="relative flex h-dvh w-full flex-col">
      <Header scrollDirection={scrollDirection} />
      <main
        ref={mainContainerRef}
        className="no-scrollbar relative mx-auto w-full max-w-screen-sm flex-1 overflow-x-hidden overflow-y-auto p-6"
      >
        <section className="mb-10 h-36"></section>
        <section
          id="introduction"
          className="relative flex w-full flex-col space-y-2"
        >
          <div className="mb-4 space-y-2">
            <motion.h1
              className="text-xl leading-tight font-semibold will-change-auto"
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
              // eslint-disable-next-line react/no-array-index-key
              key={`introduction-paragraph-key-${index}`}
              className="text-foreground/80 transform-gpu text-sm leading-loose will-change-auto"
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

interface HeaderProps {
  scrollDirection: 'up' | 'down'
}

function Header({ scrollDirection }: HeaderProps) {
  return (
    <header
      className={cn(
        'border-muted/30 sticky top-0 z-10 h-16 w-full bg-transparent transition duration-150 ease-out',
        scrollDirection === 'down'
          ? 'border-b shadow-sm backdrop-blur-sm'
          : 'border-b-none shadow-none backdrop-blur-none'
      )}
    >
      <nav className="mx-auto flex h-full w-full max-w-screen-sm items-center justify-between overflow-x-hidden px-6">
        <div className="inline-flex items-center justify-end gap-4">
          <ThemeSwitcherButton />
        </div>
        <div className="inline-flex items-center justify-end gap-2">
          {content.socials.map(social => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <motion.a
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0)' }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.15
                }}
                className="will-change-auto"
              >
                <social.icon className="size-4" />
              </motion.a>
            </Button>
          ))}
        </div>
      </nav>
    </header>
  )
}

function MotionIcon({ children }: React.PropsWithChildren) {
  return (
    <motion.div
      className="transform-gpu will-change-auto"
      initial={{ x: -20 }}
      animate={{ x: 0 }}
      exit={{ x: 20 }}
      transition={{
        delay: 0.15,
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

function ThemeSwitcherButton() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      size="icon"
      className="cursor-pointer overflow-hidden"
      variant="brand"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
      asChild
    >
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <MotionIcon key="theme-switcher-button-icon-dark">
              <MoonIcon className="size-4" />
            </MotionIcon>
          ) : (
            <MotionIcon key="theme-switcher-button-icon-light">
              <SunIcon className="size-4" />
            </MotionIcon>
          )}
        </AnimatePresence>
      </motion.button>
    </Button>
  )
}

function JobTitleBadge() {
  const isMobile = useIsMobile()

  return (
    <Popover>
      <PopoverTrigger>
        <Badge
          role="button"
          className="relative w-fit cursor-pointer overflow-hidden rounded-sm will-change-auto"
          asChild
        >
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <motion.span
              className="block transform-gpu font-mono will-change-auto"
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
        </Badge>
      </PopoverTrigger>
      <PopoverContent
        side={isMobile ? 'top' : 'right'}
        sideOffset={8}
        align={isMobile ? 'start' : 'center'}
        className="h-fit w-fit p-2"
      >
        <motion.span
          className="text-muted-foreground block max-w-[24ch] text-xs leading-tight font-medium will-change-auto"
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
