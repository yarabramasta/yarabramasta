import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'

import type { Portfolio } from '~/components/portfolio-card'

import IcosphereScene from '~/components/icoshpere-scene'
import JobTitleBadge from '~/components/job-title-badge'
import PortfolioCard from '~/components/portfolio-card'
import { cn, styles } from '~/lib/utils'

export const Route = createFileRoute('/')({
  scripts: () => [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Yara Bramasta',
        jobTitle: 'Software Engineer',
        description:
          'Software engineer specialized in mobile app and website development.',
        knowsAbout: ['Flutter', 'Android', 'Jetpack Compose', 'React.js'],
        url: 'https://ybrmst.dev'
      })
    }
  ],
  loader: async () => ({
    intros: [
      "Hi, I'm Bram — a software engineer specialized at mobile app development based in Malang, Indonesia.",
      'I have over four years of experience in software engineering, with more than two spent professionally. My go-to tools to develop apps are Flutter for cross-platform (iOS & Android) and Jetpack Compose for native Android development.',
      "While mobile is my main focus, I'm currently doing internship as a frontend software engineer at Arkatama software house — starting with Laravel Blade, and now developing a web app using React.js. I'm also interested in Swift for iOS development and excited to expand into that ecosystem soon."
    ],
    portfolio: [
      {
        title: 'Sign Sync AI',
        link: '/portfolio/sign-sync-ai',
        picture: 'https://bucket.ybrmst.dev/portfolio/sign-sync-ai-logo.png',
        year: '2024',
        description:
          'Mobile app for student with hearing impairment to make learning more interactive.',
        externals: [
          {
            link: 'https://www.figma.com/design/bc7cRUFLdJhLDgaKqebi8R/SignSyncAI?m=auto&t=I34lavc5FaTrP167-1',
            title: 'Figma',
            icon: 'FigmaLogoIcon'
          },
          {
            link: 'https://jurnal.polgan.ac.id/index.php/remik/article/view/14096',
            title: 'Paper',
            icon: 'FileTextIcon'
          }
        ]
      },
      {
        title: 'Clinic AI',
        link: '/portfolio/clinic-ai',
        picture: 'https://bucket.ybrmst.dev/portfolio/clinic-ai-logo.png',
        year: '2024',
        description:
          'AI-powered mobile app for diagnosing and managing health conditions.',
        externals: [
          {
            link: 'https://www.figma.com/design/aslIMvcf0yiOvB9ulPyqfy/Clinic-AI?m=auto&t=I34lavc5FaTrP167-1',
            title: 'Figma',
            icon: 'FigmaLogoIcon'
          }
        ]
      }
    ] satisfies Portfolio[],
    experiences: {
      bangkit: {
        outputs: [
          {
            certificate: {
              title: 'Bangkit Academy - Certificate of Completion',
              link: 'https://bucket.ybrmst.dev/certificates/bangkit/certificate-of-achievement.pdf'
            }
          },
          {
            certificate: {
              title: 'Bangkit Academy - Certificate of Achievement',
              link: 'https://bucket.ybrmst.dev/certificates/bangkit/certificate-of-achievement.pdf'
            },
            repository: {
              title: 'Capstone Project',
              link: 'https://github.com/Capstone-GI2-Footwork'
            }
          },
          {
            certificate: {
              title: 'Bangkit Academy - Graduation Letter',
              link: 'https://bucket.ybrmst.dev/certificates/bangkit/graduation-letter.pdf'
            }
          },
          {
            certificate: {
              title:
                'Dicoding - Belajar Pengembangan Aplikasi Android Intermediate',
              link: 'https://www.dicoding.com/certificates/QLZ93D7W9Z5D'
            },
            repository: {
              title: 'Android Dicoding Stories',
              link: 'https://github.com/yarabramasta/android-dicoding-stories'
            }
          },
          {
            certificate: {
              title:
                'Dicoding - Belajar Penerapan Machine Learning untuk Android',
              link: 'https://www.dicoding.com/certificates/MRZMYWE0NZYQ'
            },
            repository: {
              title: 'Android Asclepius',
              link: 'https://github.com/yarabramasta/android-asclepius'
            }
          },
          {
            certificate: {
              title: 'Dicoding - Belajar Fundamental Aplikasi Android',
              link: 'https://www.dicoding.com/certificates/6RPNYR1Q5Z2M'
            },
            repository: {
              title: 'Android Dicoding Events',
              link: 'https://github.com/yarabramasta/android-dicoding-events'
            }
          },
          {
            certificate: {
              title: 'Dicoding - Belajar Membuat Aplikasi Android untuk Pemula',
              link: 'https://www.dicoding.com/certificates/53XEQ0K2VXRN'
            },
            repository: {
              title: 'Android Northgard Clans',
              link: 'https://github.com/yarabramasta/android-northgard-clans'
            }
          }
        ]
      }
    }
  }),
  component: RouteComponent
})

function RouteComponent() {
  const intros = Route.useLoaderData({ select: data => data.intros })
  const portfolio = Route.useLoaderData({ select: data => data.portfolio })

  return (
    <div className="w-full space-y-10">
      <section id="3d-scene" className="relative h-56">
        <IcosphereScene />
      </section>

      <section
        id="introduction"
        className="relative flex w-full flex-col space-y-2"
      >
        <div className="mb-4 flex flex-col space-y-2">
          <motion.h1
            className={cn(
              styles.text.gradient,
              'text-2xl leading-tight font-semibold'
            )}
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            Yara Bramasta
          </motion.h1>
          <JobTitleBadge />
        </div>
        {intros.map((text, index) => (
          <motion.p
            key={text.toLowerCase().replace(/\s+/g, '-')}
            className="text-foreground/80 text-sm leading-loose"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.15 * index + 0.6
            }}
          >
            {text}
          </motion.p>
        ))}
      </section>

      <section
        id="portfolio"
        className="relative flex w-full flex-col space-y-6"
      >
        <motion.h2
          className={cn(
            styles.text.gradient,
            'text-xl leading-tight font-semibold'
          )}
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          animate={{ opacity: 1, filter: 'blur(0)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          Portfolio
        </motion.h2>

        <div className="grid grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {portfolio.map((item, i) => (
              <PortfolioCard
                key={item.title.toLowerCase().replace(/\s+/g, '-')}
                index={i}
                portfolio={item}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
