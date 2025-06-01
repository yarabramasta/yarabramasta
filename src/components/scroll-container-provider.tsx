import { createContext, useMemo, useRef, useState } from 'react'
import type { RefObject } from 'react'

import { useMotionValueEvent, useScroll } from 'motion/react'

interface ScrollContainerContextValue {
  ref: RefObject<HTMLDivElement | null>
  scrollDirection: 'up' | 'down'
  scrollPosition: number
}

const ScrollContainerContext =
  createContext<ScrollContainerContextValue | null>(null)

function ScrollContainerProvider({
  children
}: {
  children: (container: RefObject<HTMLDivElement | null>) => React.ReactNode
}) {
  const container = useRef<HTMLDivElement | null>(null)
  const { scrollY } = useScroll({ container })
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [scrollPosition, setScrollPosition] = useState(0)

  useMotionValueEvent(scrollY, 'change', current => {
    const diff = current - (scrollY.getPrevious() || 0)
    setScrollDirection(diff > 0 ? 'down' : 'up')
    setScrollPosition(current)
  })

  const value: ScrollContainerContextValue = useMemo(
    () => ({
      ref: container,
      scrollDirection,
      scrollPosition
    }),
    [scrollDirection, scrollPosition]
  )

  return (
    <ScrollContainerContext value={value}>
      {children(container)}
    </ScrollContainerContext>
  )
}

export { ScrollContainerContext, ScrollContainerProvider }
export type { ScrollContainerContextValue }
