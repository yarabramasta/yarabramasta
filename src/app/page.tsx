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
      <section
        className="grid h-full min-h-[calc(100dvh_-_56px)] grid-cols-4 grid-rows-12 gap-2 px-6 py-8 md:gap-4"
        id="bento"
      >
        <div className="col-span-4 row-span-3 border md:col-span-2 md:row-span-8">
          3d scene
        </div>
        <div className="col-span-4 row-span-6 grid grid-cols-2 gap-2 md:col-span-2 md:row-span-8 md:grid-cols-1 md:grid-rows-8 md:gap-4">
          <div className="col-span-2 border md:col-span-1 md:row-span-4">
            about me
          </div>
          <div className="col-span-2 border md:col-span-1 md:row-span-4">
            portfolio carousel
          </div>
        </div>
        <div className="col-span-4 row-span-3 border md:row-span-4">
          marketing, socials, & recent activities
        </div>
      </section>
    </BaseLayout>
  )
}
