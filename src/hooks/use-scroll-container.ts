import { use } from 'react'

import { ScrollContainerContext } from '~/components/scroll-container-provider'

export function useScrollContainer() {
  const context = use(ScrollContainerContext)

  if (!context) {
    throw new Error(
      'useScrollContainer must be used within a ScrollContainerProvider'
    )
  }

  return context
}
