import { cn } from '~/lib/utils'

interface GrainyBackgroundProps {
  theme: 'dark' | 'light'
}

export default function GrainyBackground({ theme }: GrainyBackgroundProps) {
  return (
    <div
      className={cn(
        "before:from-background/70 before:to-background/70 before:after-50% pointer-events-none fixed inset-0 -z-10 h-dvh w-full overflow-hidden rounded-none bg-[url('https://vrrqmn4i3e7yjolh.public.blob.vercel-storage.com/yarabramasta/img-grainy-texture-f2davFdpAFO00hHfTjUFftfLSVAM6c.png')] [background-size:128px] bg-repeat before:absolute before:inset-0 before:bg-gradient-to-b before:via-transparent before:content-['']",
        theme === 'dark' ? 'opacity-5' : 'opacity-10 invert'
      )}
    />
  )
}
