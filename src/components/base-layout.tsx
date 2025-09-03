import Footer from './footer'
import GrainyBackground from './grainy-background'
import Header from './header'

export default function BaseLayout({
  children,
  schema: jsonLd
}: React.PropsWithChildren<{
  schema?: Record<string, unknown>
}>) {
  return (
    <>
      <Header />
      <main className="relative min-h-[calc(100dvh_-_56px)] w-full overflow-x-hidden">
        <div className="mx-auto max-w-screen-sm overflow-x-hidden pt-16">
          {children}
        </div>
      </main>
      <Footer />
      <GrainyBackground />
      {jsonLd && (
        <script
          // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
          }}
          type="application/ld+json"
        />
      )}
    </>
  )
}
