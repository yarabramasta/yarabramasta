import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import GrainyBackground from '~/components/grainy-background'
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
        { property: 'og:url', content: 'https://yarabramasta.vercel.app' },
        {
          property: 'og:image:alt',
          content: 'Yara Bramasta - Software Engineer'
        },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:creator', content: '@yarabram' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { rel: 'canonical', href: 'https://yarabramasta.vercel.app' },
        { name: 'theme-color', content: '#000000' },
        { name: 'color-scheme', content: 'dark light' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
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
        { rel: 'manifest', href: '/manifest.json' }
      ]
    }
  },
  component: () => (
    <RootDocument>
      <Outlet />
      <TanStackRouterDevtools />
    </RootDocument>
  )
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <GrainyBackground theme="dark" />
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
              url: 'https://yarabramasta.vercel.app'
            })
          }}
        />
      </body>
    </html>
  )
}
