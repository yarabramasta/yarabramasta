import * as React from 'react'

import { motion } from 'motion/react'

import { cn } from '~/lib/utils'

interface DynamicContainerProps
  extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode
  className?: string
}

export default function DynamicContainer({
  className,
  children,
  ...props
}: DynamicContainerProps) {
  const [height, setHeight] = React.useState<number | 'auto'>('auto')
  const resizeObserverRef = React.useRef<ResizeObserver | null>(null)

  const containerRef = React.useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      resizeObserverRef.current = new ResizeObserver(entries => {
        // We only have one entry, so we can use entries[0].
        const observedHeight = entries?.[0]?.contentRect?.height
        setHeight(observedHeight ?? 'auto')
      })
      resizeObserverRef.current.observe(node)
    } else if (resizeObserverRef.current) {
      // Disconnect the observer when the node is unmounted to prevent memory leaks
      resizeObserverRef.current.disconnect()
    }
  }, [])

  return (
    <motion.div
      style={{ height }}
      animate={{ height }}
      transition={{ duration: 0.15 }}
      className={cn('overflow-hidden', className)}
      {...props}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  )
}
