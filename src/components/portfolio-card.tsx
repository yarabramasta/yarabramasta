import * as RadixIcons from '@radix-ui/react-icons'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'

import { useScrollContainer } from '~/hooks/use-scroll-container'
import { cn } from '~/lib/utils'

import { badgeVariants } from './ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'

type IconType = keyof typeof RadixIcons

interface Portfolio {
  title: string
  picture: string
  link: string
  year: string
  description: string
  externals: {
    link: string
    title: string
    icon: IconType
  }[]
}

interface PortfolioCardProps {
  index: number
  portfolio: Portfolio
}

function PortfolioCard({ portfolio, index: cardIndex }: PortfolioCardProps) {
  const { ref: scrollContainer } = useScrollContainer()

  return (
    <motion.div
      className="bg-card/20 border-muted space-y-4 rounded-lg border py-2.5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ root: scrollContainer, once: true }}
      transition={{
        duration: 0.15,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.15 + cardIndex * 0.05
      }}
    >
      <div className="space-y-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.img
              src={portfolio.picture}
              alt={portfolio.title}
              className="mr-2 aspect-square size-6 overflow-hidden rounded-sm object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ root: scrollContainer, once: true }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5 + cardIndex * 0.05
              }}
            />
            <Link
              to={portfolio.link}
              className="active:text-foreground/90 hover:text-foreground/80 hover:underline"
            >
              <motion.h3
                className="font-semibold"
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0)' }}
                exit={{ opacity: 0, filter: 'blur(4px)' }}
                viewport={{ root: scrollContainer, once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5 + cardIndex * 0.05
                }}
              >
                {portfolio.title}
              </motion.h3>
            </Link>
          </div>
          <div className="relative h-4 overflow-hidden">
            <motion.p
              className="text-muted-foreground text-right text-xs font-medium"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              viewport={{ root: scrollContainer, once: true }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.65 + cardIndex * 0.05
              }}
            >
              {portfolio.year}
            </motion.p>
          </div>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          <TooltipProvider>
            {portfolio.externals.map((external, index) => {
              const Icon = RadixIcons[external.icon]

              return (
                <Tooltip key={external.link}>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={external.link}
                      className={cn(
                        badgeVariants({ variant: 'brand' }),
                        'w-fit cursor-pointer overflow-hidden rounded-sm select-none'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      viewport={{ root: scrollContainer, once: true }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 1 + cardIndex * 0.05 + index * 0.05
                      }}
                    >
                      <Icon className="inline-block size-4" />
                      {external.title}
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{`${external.title} - ${portfolio.title}`}</p>
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </TooltipProvider>
        </div>
      </div>
      <div className="px-4">
        <motion.p
          className="text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          viewport={{ root: scrollContainer, once: true }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 1.15 + cardIndex * 0.05
          }}
        >
          {portfolio.description}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default PortfolioCard
export type { Portfolio }
