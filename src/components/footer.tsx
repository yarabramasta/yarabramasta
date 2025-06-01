export default function Footer() {
  return (
    <footer className="relative w-full font-mono">
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
        <div className="flex flex-col">
          <p className="text-muted-foreground/60 text-center text-xs leading-loose md:text-left">
            &copy; {new Date().getFullYear()} Yara Bramasta.
          </p>
        </div>
        <div className="flex flex-col space-y-10 md:space-y-24">
          <p className="text-muted-foreground/60 text-center text-xs leading-loose md:text-right">
            Feel free to reach out to me.
            <br />
            Let's get to work.
          </p>
          <ul className="flex w-full flex-col items-center space-y-2 md:items-end">
            <li className="text-muted-foreground/60 text-center text-xs md:text-right">
              Programmers social media{' '}
              <a
                href="https://github.com/yarabramasta"
                className="text-muted-foreground hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="text-muted-foreground/60 text-center text-xs md:text-right">
              Professional backgrounds{' '}
              <a
                href="https://www.linkedin.com/in/yara-bramasta"
                className="text-muted-foreground hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-muted-foreground/60 text-center text-xs md:text-right">
              Talk about services{' '}
              <a
                href="https://wa.me/628151811332"
                className="text-muted-foreground hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li className="text-muted-foreground/60 text-center text-xs md:text-right">
              Business only please{' '}
              <a
                href="mailto:me@ybrmst.dev"
                className="text-muted-foreground hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
