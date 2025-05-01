import type { PropsWithChildren } from 'react'
import { createContext } from 'react'

import { useRouter } from '@tanstack/react-router'

import type { Theme } from '~/lib/theme'

import { setThemeServerFn } from '~/lib/theme'

interface ThemeContextVal {
  theme: Theme
  setTheme: (val: Theme) => void
}
type Props = PropsWithChildren<{ theme: Theme }>

const ThemeContext = createContext<ThemeContextVal | null>(null)

function ThemeProvider({ children, theme }: Props) {
  const router = useRouter()

  function setTheme(val: Theme) {
    setThemeServerFn({ data: val })
    router.invalidate()
  }

  // eslint-disable-next-line react/no-unstable-context-value
  const contextValue = { theme, setTheme }

  return <ThemeContext value={contextValue}>{children}</ThemeContext>
}

export { ThemeContext, ThemeProvider }
export type { ThemeContextVal }
