import { motion } from 'motion/react'

import { useScrollContainer } from '~/hooks/use-scroll-container'

const socials = [
  {
    title: 'GitHub',
    link: 'https://github.com/yarabramasta',
    description: 'Programmers social media'
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yara-bramasta',
    description: 'Professional backgrounds'
  },
  {
    title: 'WhatsApp',
    link: 'https://wa.me/628151811332',
    description: 'Talk about services'
  },
  {
    title: 'Email',
    link: 'mailto:me@ybrmst.dev',
    description: 'Business only please'
  }
]

export default function Footer() {
  const { ref: scrollContainer } = useScrollContainer()

  return (
    <footer className="relative w-full font-mono">
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
        <div className="flex flex-col">
          <motion.p
            className="text-muted-foreground/60 text-center text-xs leading-loose md:text-left"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            viewport={{ root: scrollContainer, once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            &copy; {new Date().getFullYear()} Yara Bramasta.
          </motion.p>
        </div>
        <div className="flex flex-col space-y-10 md:space-y-24">
          <motion.p
            className="text-muted-foreground/60 text-center text-xs leading-loose md:text-right"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            viewport={{ root: scrollContainer, once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            Feel free to reach out to me.
            <br />
            Let's get to work.
          </motion.p>
          <ul className="flex w-full flex-col items-center space-y-2 md:items-end">
            {socials.map((social, index) => (
              <motion.li
                key={`footer-social-media-link-${social.title.toLowerCase()}`}
                className="text-muted-foreground/60 text-center text-xs md:text-right"
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                viewport={{ root: scrollContainer, once: true }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.15 + index * 0.1
                }}
              >
                {social.description}{' '}
                <a
                  href={social.link}
                  className="text-muted-foreground hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
