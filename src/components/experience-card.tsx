import { differenceInMonths, format } from 'date-fns'
import { motion } from 'motion/react'

import { useScrollContainer } from '~/hooks/use-scroll-container'
import { cn } from '~/lib/utils'

import { badgeVariants } from './ui/badge'

interface Experience {
  job: string
  company: string
  link?: string
  img: string
  period: {
    start: Date
    end?: Date
    format: string
  }
  skills: string[]
  catalogs: {
    type: string
    items: {
      img: string
      link: string
      title: string
    }[]
  }[]
}

interface ExperienceCardProps {
  experience: Experience
  index: number
}

function ExperienceCard({
  experience: exp,
  index: expIndex
}: ExperienceCardProps) {
  const { ref: scrollContainer } = useScrollContainer()

  const period = `${format(exp.period.start, 'MMMM yyyy')} - ${exp.period.end ? format(exp.period.end, 'MMMM yyyy') : 'Present'}`
  const months = differenceInMonths(
    exp.period.end || new Date(),
    exp.period.start
  )

  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <motion.img
          src={exp.img}
          alt={exp.company}
          className="mr-2 aspect-square size-6 overflow-hidden rounded-sm object-cover"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          viewport={{ root: scrollContainer, once: true }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5 + expIndex * 0.05
          }}
        />
        <a
          href={exp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <motion.h3
            className="leading-relaxed font-semibold"
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0)' }}
            exit={{ opacity: 0, filter: 'blur(4px)' }}
            viewport={{ root: scrollContainer, once: true }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5 + expIndex * 0.05
            }}
          >
            {exp.company}
          </motion.h3>
        </a>
      </div>
      <motion.p
        className="text-muted-foreground/60 text-xs"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        viewport={{ root: scrollContainer, once: true }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.65 + expIndex * 0.05
        }}
      >
        {exp.job}
      </motion.p>
      <motion.p
        className="text-muted-foreground text-sm"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        viewport={{ root: scrollContainer, once: true }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.65 + expIndex * 0.05
        }}
      >
        {period} ({months} month{months !== 1 ? 's' : ''})
      </motion.p>
      <motion.p
        className="text-muted-foreground/60 text-xs"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        viewport={{ root: scrollContainer, once: true }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.65 + expIndex * 0.05
        }}
      >
        Skills: {exp.skills.join(', ')}.
      </motion.p>
      {exp.catalogs.map((catalog, catalogIndex) => (
        <div
          className="space-y-2"
          key={`exp-catalog-${catalog.type.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <motion.h4
            className="text-muted-foreground text-xs font-medium"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            viewport={{ root: scrollContainer, once: true }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 1 + expIndex * 0.05 + catalogIndex * 0.05
            }}
          >
            {catalog.type}
          </motion.h4>
          <ul className="flex flex-wrap items-center gap-2">
            {catalog.items.map((item, itemIndex) => (
              <motion.li
                key={`exp-catalog-item-${item.title
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`}
                className={cn(
                  badgeVariants({ variant: 'brand' }),
                  'py-1 font-mono shadow-none!'
                )}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                viewport={{ root: scrollContainer, once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay:
                    1 + expIndex * 0.05 + itemIndex * 0.05 + catalogIndex * 0.05
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="aspect-square size-4 overflow-hidden rounded-sm object-cover"
                />
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ExperienceCard
export type { Experience, ExperienceCardProps }
