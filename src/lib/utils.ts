import type { ClassValue } from 'clsx'

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const styles = {
  text: {
    gradient: cn(
      'from-foreground via-foreground/50 inline-block bg-gradient-to-r to-transparent bg-clip-text text-transparent'
    )
  }
}

export { cn, styles }
