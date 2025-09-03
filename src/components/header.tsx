import { ThemeSwitcher } from './ui/theme'

export default function Header() {
  return (
    <header className="border-muted/30 fixed top-0 z-10 h-16 w-full bg-transparent">
      <nav className="mx-auto flex h-full w-full max-w-screen-sm items-center justify-between overflow-x-hidden px-6">
        <div className="inline-flex items-center justify-start gap-4">
          <ThemeSwitcher />
        </div>
        <div className="inline-flex items-center justify-end gap-2"></div>
      </nav>
    </header>
  )
}
