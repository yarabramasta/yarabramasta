import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  return (
    <div className="relative mx-auto flex h-dvh w-full max-w-screen-sm flex-col overflow-x-hidden">
      <header className="sticky top-0 z-10 h-14 w-full">
        <nav></nav>
      </header>
      <main className="no-scrollbar relative w-full flex-1 overflow-y-auto p-6">
        <section className="mb-10"></section>
        <section
          id="about-me"
          className="relative flex w-full flex-col space-y-2 [&>p]:text-sm [&>p]:leading-loose"
        >
          <div className="mb-4 space-y-2">
            <h1 className="text-2xl leading-tight font-semibold">
              Yara Bramasta
            </h1>
            <h2 className="font-mono text-sm font-medium">Software Engineer</h2>
          </div>
          <p>
            Hi, I&apos;m Bram — a software engineer specialized at mobile app
            development based in Malang, Indonesia.
          </p>
          <p>
            I have over four years of experience in software engineering, with
            more than two spent professionally. My go-to tools to develop apps
            are Flutter for cross-platform (iOS &amp; Android) and Jetpack
            Compose for native Android development.
          </p>
          <p>
            While mobile is my main focus, I'm currently doing internship as a
            frontend software engineer at{' '}
            <a
              href="https://arkatama.id/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline"
            >
              Arkatama
            </a>{' '}
            software house — starting with Laravel Blade, and now developing a
            web app using React.js. I'm also interested in Swift for iOS
            development and excited to expand into that ecosystem soon.
          </p>
        </section>
      </main>
    </div>
  )
}
