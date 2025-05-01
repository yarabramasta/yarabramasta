interface AnimatedGrainyBackgroundProps {
  theme: 'dark' | 'light'
}

export default function AnimatedGrainyBackground({
  theme: _
}: AnimatedGrainyBackgroundProps) {
  return (
    <div className="pointer-events-none fixed inset-0 h-dvh w-full rounded-none bg-[url('https://vrrqmn4i3e7yjolh.public.blob.vercel-storage.com/yarabramasta/img-grainy-texture-f2davFdpAFO00hHfTjUFftfLSVAM6c.png')] [background-size:128px] bg-repeat opacity-10 invert"></div>
  )
}
