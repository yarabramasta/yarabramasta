export default function Footer() {
  return (
    <footer className="relative h-14 w-full overflow-x-hidden">
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-muted-foreground py-4 text-center text-xs">
          &copy; {new Date().getFullYear()} Yara Bramasta. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
