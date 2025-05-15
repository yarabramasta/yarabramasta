import { createServerFn } from '@tanstack/react-start'

type DrawerItem =
  | { title: string; href: string; type: 'link' }
  | { title: string; type: 'label' }

const getDrawerItemsServerFn = createServerFn().handler(async () => {
  const links: DrawerItem[] = [
    { title: 'Portfolio', type: 'label' },
    {
      title: 'Sign Sync AI',
      href: '/portfolio/sign-sync-ai',
      type: 'link'
    },
    {
      title: 'Clinic AI',
      href: '/portfolio/clinic-ai',
      type: 'link'
    },

    { title: 'About me', type: 'label' },
    {
      title: 'Email address (Business)',
      href: 'mailto:me@ybrmst.dev',
      type: 'link'
    },
    {
      title: 'GitHub account',
      href: 'https://github.com/yarabramasta',
      type: 'link'
    },
    {
      title: 'LinkedIn account',
      href: 'https://www.linkedin.com/in/yara-bramasta',
      type: 'link'
    },
    { title: 'Software engineer resume', href: '/resume.pdf', type: 'link' },

    { title: 'Repositories', type: 'label' },
    {
      title: 'Bangkit Academy Journey (Dicoding Android Intermediate)',
      href: 'https://github.com/yarabramasta/android-dicoding-stories',
      type: 'link'
    },
    {
      title: 'Bangkit Academy Journey (Dicoding Android Fundamental)',
      href: 'https://github.com/yarabramasta/android-dicoding-events',
      type: 'link'
    },
    {
      title: 'Bangkit Academy Journey (Dicoding Android Applied ML)',
      href: 'https://github.com/yarabramasta/android-asclepius',
      type: 'link'
    },
    {
      title: 'Bangkit Academy Journey (Dicoding Android Beginner)',
      href: 'https://github.com/yarabramasta/android-northgard-clans',
      type: 'link'
    },
    {
      title: 'Bangkit Academy Journey (Capstone Project)',
      href: 'https://github.com/Capstone-GI2-Footwork/Footwork-Mobile-Development',
      type: 'link'
    }
  ]

  return links
})

export { getDrawerItemsServerFn }
export type { DrawerItem }
