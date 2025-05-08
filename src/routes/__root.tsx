import { useRef, useState } from 'react'

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useMotionValueEvent, useScroll } from 'motion/react'

import GrainyBackground from '~/components/grainy-background'
import Header from '~/components/header'
import { ThemeProvider } from '~/components/theme-provider'
import { useTheme } from '~/hooks/use-theme'
import { getThemeServerFn } from '~/lib/theme'
import appCss from '~/styles/app.css?url'

export const Route = createRootRoute({
  head: () => {
    const title = 'Yara Bramasta | Software Engineer'
    const description =
      'Who is Yara Bramasta? — He is a software engineer specialized at mobile app development based in Malang, Indonesia.'
    const keywords = [
      'software engineer',
      'mobile app developer',
      'flutter development',
      'android development',
      'jetpack compose',
      'react.js',
      'frontend engineer',
      'cross-platform development',
      'Malang Indonesia',
      'iOS development',
      'Swift',
      'Laravel',
      'mobile application developer Indonesia',
      'Flutter developer portfolio',
      'React frontend engineer',
      'cross-platform mobile solutions',
      'UI/UX mobile development'
    ]

    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title },
        { name: 'description', content: description },
        { name: 'keywords', content: keywords.join(', ') },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ybrmst.dev' },
        {
          property: 'og:image:alt',
          content: 'Yara Bramasta - Software Engineer'
        },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:creator', content: '@yarabram' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { rel: 'canonical', href: 'https://ybrmst.dev' },
        { name: 'theme-color', content: '#cfceca' },
        { name: 'color-scheme', content: 'dark light' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' }
      ],
      links: [
        { rel: 'stylesheet', href: appCss },
        { rel: 'icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        { rel: 'manifest', href: '/manifest.json' }
      ]
    }
  },
  loader: () => getThemeServerFn(),
  component: RootComponent
})

function RootComponent() {
  const theme = Route.useLoaderData()

  return (
    <ThemeProvider theme={theme}>
      <RootDocument>
        <Outlet />
        <TanStackRouterDevtools />
      </RootDocument>
    </ThemeProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  const mainContainer = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll({ container: mainContainer })
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')

  useMotionValueEvent(scrollY, 'change', current => {
    const diff = current - (scrollY.getPrevious() || 0)
    setScrollDirection(diff > 0 ? 'down' : 'up')
  })

  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="transition duration-300 ease-in-out">
        <div className="relative flex h-dvh w-full flex-col overflow-x-hidden">
          <Header scrollDirection={scrollDirection} />
          <main
            ref={mainContainer}
            className="no-scrollbar mx-auto w-full max-w-screen-sm flex-1 overflow-x-hidden overflow-y-auto px-6 pb-6"
          >
            {children}
          </main>
        </div>
        <GrainyBackground theme={theme} />
        <Scripts />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Yara Bramasta',
              jobTitle: 'Software Engineer',
              description:
                'Software engineer specialized in mobile app development',
              knowsAbout: ['Flutter', 'Android', 'Jetpack Compose', 'React.js'],
              url: 'https://ybrmst.dev'
            })
          }}
        />
      </body>
    </html>
  )
}
