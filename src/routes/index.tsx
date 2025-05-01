import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  return (
    <div className="mx-auto w-full max-w-md overflow-x-hidden">
      Hello, World!
    </div>
  )
}
