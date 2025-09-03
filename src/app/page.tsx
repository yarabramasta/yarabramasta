import BaseLayout from '@/components/base-layout'

export default function Home() {
  return (
    <BaseLayout
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Yara Bramasta',
        jobTitle: 'Software Engineer',
        description:
          'Software engineer specialized in mobile app and website development.',
        knowsAbout: [
          'Flutter',
          'Android',
          'Jetpack Compose',
          'React.js',
          'Next.js',
          'TypeScript'
        ],
        url: 'https://ybrmst.dev'
      }}
    >
      <section id="hero"></section>
    </BaseLayout>
  )
}
