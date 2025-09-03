'use client'

import { Moon, Sun } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'

import { buttonVariants } from './button'
import { MotionIcon } from './motion'

export { ThemeProvider } from 'next-themes'

export function ThemeSwitcher() {
  const { resolvedTheme: theme, setTheme } = useTheme()

  return (
    <motion.button
      animate={{ opacity: 1 }}
      className={cn(
        'relative cursor-pointer overflow-hidden',
        buttonVariants({ variant: 'default', size: 'icon' })
      )}
      initial={{ opacity: 0 }}
      onClick={e => {
        e.persist()
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      type="button"
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <MotionIcon key="theme-switcher-button-icon-dark">
            <Moon className="size-4" />
          </MotionIcon>
        ) : (
          <MotionIcon key="theme-switcher-button-icon-light">
            <Sun className="size-4" />
          </MotionIcon>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
