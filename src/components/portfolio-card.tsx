import * as RadixIcons from '@radix-ui/react-icons'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'

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

function PortfolioCard({ portfolio, index: _ }: PortfolioCardProps) {
  return (
    <motion.div className="bg-card/20 border-muted space-y-4 rounded-lg border py-2.5">
      <div className="space-y-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={portfolio.picture}
              alt={portfolio.title}
              className="mr-2 aspect-square size-6 overflow-hidden rounded-sm object-cover"
            />
            <Link
              to={portfolio.link}
              className="active:text-foreground/90 hover:text-foreground/80 hover:underline"
            >
              <h3 className="font-semibold">{portfolio.title}</h3>
            </Link>
          </div>
          <p className="text-muted-foreground text-right text-xs font-medium">
            {portfolio.year}
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          <TooltipProvider>
            {portfolio.externals.map(external => {
              const Icon = RadixIcons[external.icon]

              return (
                <Tooltip key={external.link}>
                  <TooltipTrigger asChild>
                    <a
                      href={external.link}
                      className={cn(
                        badgeVariants({ variant: 'brand' }),
                        'w-fit cursor-pointer overflow-hidden rounded-sm select-none'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="inline-block size-4" />
                      {external.title}
                    </a>
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
        <p className="text-muted-foreground text-sm">{portfolio.description}</p>
      </div>
    </motion.div>
  )
}

export default PortfolioCard
export type { Portfolio }
