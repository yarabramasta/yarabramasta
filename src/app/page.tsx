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
      <section className="h-[calc(100dvh_-_56px)] px-6">
        <div className="grid h-full flex-1 grid-cols-4 grid-rows-12 gap-2 py-8 lg:gap-4">
          <div className="col-span-4 row-span-4 grid grid-cols-2 gap-2 lg:col-span-2 lg:row-span-8 lg:grid-cols-1 lg:grid-rows-8 lg:gap-4">
            <div className="border lg:row-span-4"></div>
            <div className="border lg:row-span-4"></div>
          </div>
          <div className="col-span-4 row-span-4 border lg:col-span-2 lg:row-span-8"></div>
          <div className="col-span-4 row-span-4 border"></div>
        </div>
      </section>
    </BaseLayout>
  )
}
