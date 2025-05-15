import { useSuspenseQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { AnimatePresence, motion } from 'motion/react'
import { match, P } from 'ts-pattern'

import type { DrawerItem } from '~/lib/drawer-items'

import { useIsMobile } from '~/hooks/use-mobile'
import { getDrawerItemsServerFn } from '~/lib/drawer-items'
import { cn } from '~/lib/utils'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from './ui/drawer'
import DynamicContainer from './ui/dynamic-container'
import { ScrollArea } from './ui/scroll-area'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'

interface ResponsiveDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

function ResponsiveDrawer({
  open,
  onOpenChange,
  children
}: ResponsiveDrawerProps) {
  const isMobile = useIsMobile()

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        {children}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Works</DialogTitle>
            <DialogDescription className="text-muted-foreground text-xs leading-loose">
              Below are some of my projects and repositories that I have worked
              on. You can also find my resume and links to my social media and
              contact. Feel free to reach out if you have any questions about my
              services or would like to connect!
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-72">
            <ResponsiveDrawerContent />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      {children}
      <DrawerContent
        onWheel={e => e.stopPropagation()}
        onTouchMove={e => e.stopPropagation()}
      >
        <DrawerHeader className="text-left">
          <DrawerTitle>Works</DrawerTitle>
          <DrawerDescription className="text-muted-foreground text-xs leading-loose">
            Below are some of my projects and repositories that I have worked
            on. You can also find my resume and links to my social media and
            contact. Feel free to reach out if you have any questions about my
            services or would like to connect!
          </DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-72 px-4 pb-6">
          <ResponsiveDrawerContent />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}

function ResponsiveDrawerTrigger(
  props:
    | React.ComponentProps<typeof DrawerTrigger>
    | React.ComponentProps<typeof DialogTrigger>
) {
  const isMobile = useIsMobile()

  if ('onOpenChange' in props && isMobile) {
    return <DrawerTrigger {...props} />
  }
  return <DialogTrigger {...props} />
}

function ResponsiveDrawerContent() {
  const getLinks = useServerFn(getDrawerItemsServerFn)
  const { data: links } = useSuspenseQuery({
    queryKey: ['drawer-items'] as const,
    queryFn: () => getLinks(),
    refetchOnWindowFocus: false
  })

  return (
    <TooltipProvider>
      <DynamicContainer>
        <motion.ul className="space-y-2">
          {links.map((link, index) => (
            <AnimatePresence
              mode="wait"
              key={`responsive-drawer-item-${link.type}-${link.title.toLowerCase().replace(/\s/g, '-')}`}
            >
              <NavItem link={link} index={index} />
            </AnimatePresence>
          ))}
        </motion.ul>
      </DynamicContainer>
    </TooltipProvider>
  )
}

function NavItem({ link, index }: { link: DrawerItem; index: number }) {
  const linkClassName = cn(
    'text-foreground hover:text-foreground/80 active:text-foreground/90 text-sm transition-colors duration-150 ease-out hover:underline'
  )

  return (
    <motion.li
      className={cn(
        link.type === 'label' && 'text-muted-foreground/60 text-xs font-medium',
        link.type === 'label' && index > 0 && 'mt-4'
      )}
      initial={{ opacity: 0, filter: 'blur(3px)', x: -10 }}
      animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
      exit={{ opacity: 0, x: -10, filter: 'blur(3px)' }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.05
      }}
    >
      {match(link)
        .with({ type: 'label' }, l => l.title)
        .with(
          { type: 'link', href: P.when(href => href.startsWith('/')) },
          l => (
            <Link to={l.href} preload={false} className={cn(linkClassName)}>
              {l.title}
            </Link>
          )
        )
        .with({ type: 'link' }, l => (
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(linkClassName)}
              >
                {l.title}
              </a>
            </TooltipTrigger>
            <TooltipContent>{l.href}</TooltipContent>
          </Tooltip>
        ))
        .exhaustive()}
    </motion.li>
  )
}

export { ResponsiveDrawer, ResponsiveDrawerTrigger }
