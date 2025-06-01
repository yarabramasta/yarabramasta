import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'

import type { Experience } from '~/components/experience-card'
import type { Portfolio } from '~/components/portfolio-card'

import ExperienceCard from '~/components/experience-card'
import IcosphereScene from '~/components/icoshpere-scene'
import JobTitleBadge from '~/components/job-title-badge'
import PortfolioCard from '~/components/portfolio-card'
import { useScrollContainer } from '~/hooks/use-scroll-container'
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
    experiences: [
      {
        job: 'Frontend Software Engineer',
        company: 'PT. Arkatama Multi Solusindo',
        link: 'https://www.arkatama.id',
        img: 'https://bucket.ybrmst.dev/portfolio/arkatama-logo.png',
        period: {
          start: new Date(2025, 1, 15),
          end: new Date(2025, 7, 15),
          format: 'MMMM yyyy'
        },
        description:
          'Interned at PT. Arkatama Multi Solusindo, developing web apps from design implementation to API integration. Started with Laravel Blade, later transitioning to React.js for a more atomic frontend workflow.',
        skills: [
          'Web App Development',
          'Laravel Blade',
          'React.js',
          'Typescript'
        ],
        catalogs: [
          {
            type: 'Works',
            items: [
              {
                link: 'https://pintertani.id',
                title: 'Pinter Tani',
                img: 'https://bucket.ybrmst.dev/portfolio/pinter-tani-logo.svg'
              },
              {
                link: 'https://sertifikasi.pintertani.id',
                title: 'LSP Puslatan',
                img: 'https://bucket.ybrmst.dev/portfolio/lsp-puslatan-logo.png'
              },
              {
                link: 'https://presensi-bbk.arkatamalabs.net',
                title: 'Presensi BBK',
                img: 'https://bucket.ybrmst.dev/portfolio/presensi-bbk-logo.png'
              }
            ]
          }
        ]
      },
      {
        job: 'Android Development Cohort',
        company: 'Bangkit Academy',
        link: 'https://www.arkatama.id',
        img: 'https://bucket.ybrmst.dev/portfolio/bangkit-academy-logo.png',
        period: {
          start: new Date(2024, 8, 6),
          end: new Date(2024, 11, 31),
          format: 'MMMM yyyy'
        },
        description:
          'Participated in Kampus Merdeka Batch 7, a program by the Ministry of Education, focusing on the Android Development track. Gained hands-on experience with native Android development using Kotlin and explored real-world mobile app workflows.',
        skills: [
          'Mobile App Development',
          'Kotlin',
          'Android SDK',
          'Jetpack Compose',
          'Firebase ML Kit'
        ],
        catalogs: [
          {
            type: 'Certificates',
            items: [
              {
                title: 'Certificate of Completion',
                img: 'https://bucket.ybrmst.dev/portfolio/bangkit-logo-icon-sized.png',
                link: 'https://bucket.ybrmst.dev/certificates/bangkit/certificate-of-completion.pdf'
              },
              {
                title: 'Certificate of Achievement',
                img: 'https://bucket.ybrmst.dev/portfolio/bangkit-logo-icon-sized.png',
                link: 'https://bucket.ybrmst.dev/certificates/bangkit/certificate-of-achievement.pdf'
              },
              {
                title: 'Graduation Letter',
                img: 'https://bucket.ybrmst.dev/portfolio/bangkit-logo-icon-sized.png',
                link: 'https://bucket.ybrmst.dev/certificates/bangkit/graduation-letter.pdf'
              }
            ]
          },
          {
            type: 'Works',
            items: [
              {
                title: 'Footwork Apps',
                img: 'https://bucket.ybrmst.dev/portfolio/ecoroute-logo.png',
                link: 'https://github.com/Capstone-GI2-Footwork/Footwork-Mobile-Development'
              },
              {
                title: 'Android Intermediate',
                img: 'https://bucket.ybrmst.dev/portfolio/dicoding-logo.jpg',
                link: 'https://github.com/yarabramasta/android-dicoding-stories'
              },
              {
                title: 'Android Applied Machine Learning',
                img: 'https://bucket.ybrmst.dev/portfolio/dicoding-logo.jpg',
                link: 'https://github.com/yarabramasta/android-asclepius'
              },
              {
                title: 'Android Fundamental',
                img: 'https://bucket.ybrmst.dev/portfolio/dicoding-logo.jpg',
                link: 'https://github.com/yarabramasta/android-dicoding-events'
              },
              {
                title: 'Android Beginner',
                img: 'https://bucket.ybrmst.dev/portfolio/dicoding-logo.jpg',
                link: 'https://github.com/yarabramasta/android-northgard-clans'
              }
            ]
          }
        ]
      },
      {
        job: 'Frontend Software Engineer',
        company: 'Dusun Web',
        link: 'https://www.arkatama.id',
        img: 'https://bucket.ybrmst.dev/portfolio/dusun-web-logo.png',
        period: {
          start: new Date(2023, 10, 1),
          end: new Date(2024, 6, 1),
          format: 'MMMM yyyy'
        },
        description:
          "Did a short internship provided by Dusun Web at 3rd-4th college semester. I'm assigned role as lead frontend software engineer, responsible developing web apps using Next.js and mobile apps using Flutter.",
        skills: [
          'Mobile App Development',
          'Web App Development',
          'Flutter',
          'React.js',
          'Next.js',
          'Typescript'
        ],
        catalogs: [
          {
            type: 'Works',
            items: [
              {
                link: 'https://github.com/yarabramasta/akurat',
                title: 'Akurat News App',
                img: 'https://bucket.ybrmst.dev/portfolio/akurat-news-logo.png'
              }
            ]
          }
        ]
      },
      {
        job: 'Frontend Software Engineer',
        company: 'Universitas Merdeka Malang',
        link: 'https://bucket.ybrmst.dev/portfolio/sertifikat-hak-milik-djamoesoedirdjo.pdf',
        img: 'https://bucket.ybrmst.dev/portfolio/unmer-logo.png',
        period: {
          start: new Date(2023, 8, 1),
          end: new Date(2023, 11, 1),
          format: 'MMMM yyyy'
        },
        description:
          "Participating in my lecturers program, developing a website dedicated for traditional drinks & beverage business called Djamoe Soedirdjo. I'm responsible for developing the website using React.js and Vite.",
        skills: ['Web Development', 'React.js', 'Vite', 'Typescript'],
        catalogs: [
          {
            type: 'Works',
            items: [
              {
                link: 'https://djamoesoedirdjo.vercel.app',
                title: 'Djamoe Soedirdjo',
                img: 'https://bucket.ybrmst.dev/portfolio/djamoesoedirdjo-logo.png'
              }
            ]
          }
        ]
      }
    ] satisfies Experience[]
  }),
  component: RouteComponent
})

function RouteComponent() {
  const intros = Route.useLoaderData({ select: data => data.intros })
  const portfolio = Route.useLoaderData({ select: data => data.portfolio })
  const experiences = Route.useLoaderData({ select: data => data.experiences })

  const { ref: scrollContainer } = useScrollContainer()

  return (
    <div className="w-full space-y-10">
      <section id="3d-scene" className="relative h-56">
        <motion.div
          className="absolute top-0 left-0 h-full w-full"
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0)' }}
          exit={{ opacity: 0 }}
          viewport={{ root: scrollContainer, once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <IcosphereScene />
        </motion.div>
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
            whileInView={{ opacity: 1, filter: 'blur(0)' }}
            exit={{ opacity: 0 }}
            viewport={{ root: scrollContainer, once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            viewport={{ root: scrollContainer, once: true }}
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
        className="relative flex w-full flex-col space-y-4"
      >
        <motion.h2
          className={cn(
            styles.text.gradient,
            'text-xl leading-tight font-semibold'
          )}
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0)' }}
          exit={{ opacity: 0 }}
          viewport={{ root: scrollContainer, once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolio.map((item, i) => (
            <PortfolioCard
              key={item.title.toLowerCase().replace(/\s+/g, '-')}
              index={i}
              portfolio={item}
            />
          ))}
        </div>
      </section>

      <section
        id="experiences"
        className="relative flex w-full flex-col space-y-4"
      >
        <motion.h2
          className={cn(
            styles.text.gradient,
            'text-xl leading-tight font-semibold'
          )}
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0)' }}
          exit={{ opacity: 0 }}
          viewport={{ root: scrollContainer, once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          Experiences
        </motion.h2>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.job.toLowerCase().replace(/\s+/g, '-')}
              index={index}
              experience={exp}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
