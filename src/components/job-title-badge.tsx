import { motion } from 'motion/react'

import { cn } from '~/lib/utils'

import { badgeVariants } from './ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'

export default function JobTitleBadge() {
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
