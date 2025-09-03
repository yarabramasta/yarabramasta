'use client'

export default function GrainyBackground() {
  return (
    <div className="before:from-background/70 before:to-background/70 before:after-50% animate-static pointer-events-none fixed inset-0 -z-10 h-dvh w-full overflow-hidden rounded-none bg-[url('https://bucket.ybrmst.dev/img-grainy-texture.png')] [background-size:128px] bg-repeat opacity-10 invert before:absolute before:inset-0 before:bg-gradient-to-b before:via-transparent before:content-[''] dark:opacity-5" />
  )
}
