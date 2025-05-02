import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon
} from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'motion/react'

import { Button } from '~/components/ui/button'
import { useTheme } from '~/hooks/use-theme'
import { cn } from '~/lib/utils'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'

interface HeaderProps {
  scrollDirection: 'up' | 'down'
}

const socials = [
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
]

export default function Header({ scrollDirection }: HeaderProps) {
  return (
    <header
      className={cn(
        'border-muted/30 sticky top-0 z-10 h-16 w-full bg-transparent transition duration-150 ease-out',
        scrollDirection === 'down'
          ? 'border-b shadow-sm backdrop-blur-sm'
          : 'border-b-none shadow-none backdrop-blur-none'
      )}
    >
      <TooltipProvider>
        <nav className="mx-auto flex h-full w-full max-w-screen-sm items-center justify-between overflow-x-hidden px-6">
          <div className="inline-flex items-center justify-end gap-4">
            <ThemeSwitcherButton />
          </div>
          <div className="inline-flex items-center justify-end gap-2">
            {socials.map(social => (
              <Tooltip
                key={`social-media-${social.name.replaceAll(' ', '-').toLowerCase()}`}
              >
                <TooltipTrigger asChild>
                  <Button
                    key={`social-media-${social.name.replaceAll(' ', '-').toLowerCase()}`}
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <motion.a
                      href={social.url}
                      title={social.name}
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
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </nav>
      </TooltipProvider>
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
    <Tooltip>
      <TooltipTrigger asChild>
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
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
