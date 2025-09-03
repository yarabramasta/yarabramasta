export default function Home() {
  const jsonLd = {
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
  }

  return (
    <>
      <main className="relative min-h-dvh w-full overflow-x-hidden">
        <section id="hero"></section>
      </main>
      <script
        // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
        type="application/ld+json"
      />
    </>
  )
}
