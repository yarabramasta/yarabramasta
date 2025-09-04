import Footer from './footer'
import GrainyBackground from './grainy-background'

export default function BaseLayout({
  children,
  schema: jsonLd
}: React.PropsWithChildren<{
  schema?: Record<string, unknown>
}>) {
  return (
    <>
      <main className="relative mx-auto min-h-[calc(100dvh_-_56px)] w-full max-w-screen-sm overflow-x-hidden">
        {children}
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
