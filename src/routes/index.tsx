import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="w-full max-w-md mx-auto overflow-x-hidden">
      Hello, World!
    </div>
  )
}
