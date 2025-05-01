import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="relative mx-auto flex h-dvh w-full max-w-screen-sm flex-col overflow-x-hidden">
      <header className="sticky top-0 z-10 h-14 w-full">
        <nav></nav>
      </header>
      <main className="no-scrollbar relative w-full flex-1 overflow-y-auto p-6">
        <section className="mb-10 h-36"></section>
        <section
          id="about-me"
          className="[&>p]:text-foreground/90 relative flex w-full flex-col space-y-2 [&>p]:text-sm [&>p]:leading-loose"
        >
          <div className="mb-4 space-y-2">
            <h1 className="text-xl leading-tight font-semibold">
              Yara Bramasta
            </h1>
            <JobTitleBadge />
          </div>
          <p>
            Hi, I&apos;m Bram — a software engineer specialized at mobile app
            development, based in Malang, Indonesia.
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

function JobTitleBadge() {
  return (
    <motion.h2
      role="button"
      className="from-secondary/90 to-secondary/70 border-muted active:from-secondary/70 hover:to-secondary/90 relative w-fit cursor-pointer rounded-sm border bg-gradient-to-b to-60% px-1 py-px backdrop-blur-sm transition duration-150 selection:bg-transparent selection:text-current hover:shadow-sm"
    >
      <span className="text-muted-foreground text-shadow-secondary/80 block font-mono text-xs leading-normal font-medium text-shadow-xs">
        Software Engineer
      </span>
    </motion.h2>
  )
}
