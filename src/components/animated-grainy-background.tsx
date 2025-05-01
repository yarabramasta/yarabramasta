import { cn } from '~/lib/utils'

interface AnimatedGrainyBackgroundProps {
  theme: 'dark' | 'light'
}

export default function AnimatedGrainyBackground({
  theme: _
}: AnimatedGrainyBackgroundProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 h-dvh w-full',
        'pointer-events-none rounded-none',
        "bg-[url('https://vrrqmn4i3e7yjolh.public.blob.vercel-storage.com/yarabramasta/img-grainy-texture-f2davFdpAFO00hHfTjUFftfLSVAM6c.png')]",
        'bg-repeat opacity-10 invert'
      )}
      style={{ backgroundSize: '128px' }}
    ></div>
  )
}
