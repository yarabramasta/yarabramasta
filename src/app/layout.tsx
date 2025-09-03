import type { Metadata, Viewport } from 'next'

import { Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google'

import { ThemeProvider } from '@/components/ui/theme'
import { cn } from '@/lib/utils'

import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  preload: true,
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  preload: true,
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Yara Bramasta | Software Engineer',
  description:
    'Who is Yara Bramasta? — Software engineer specialized at mobile app development based in Malang, Indonesia.',
  keywords: [
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
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Yara Bramasta | Software Engineer',
    description:
      'Who is Yara Bramasta? — Software engineer specialized at mobile app development based in Malang, Indonesia.',
    images: 'https://bucket.ybrmst.dev/icon-512-maskable.png',
    url: 'https://ybrmst.dev',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yara Bramasta | Software Engineer',
    description:
      'Who is Yara Bramasta? — Software engineer specialized at mobile app development based in Malang, Indonesia.',
    images: 'https://bucket.ybrmst.dev/icon-512-maskable.png'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent'
  }
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#cfceca',
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <body className={cn(plusJakartaSans.variable, geistMono.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
