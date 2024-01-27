// Reference required types from the default lib

/// <reference lib="ES2019" />

import * as Edge from '@runtime-edge/primitives'

declare global {
  function addEventListener(
    type: 'fetch',
    listener: (event: Edge.FetchEvent) => void,
  ): void
  const RuntimeEdge: Record<never, never>
  const globalThis: typeof Edge
  const FetchEvent: typeof Edge.FetchEvent
  const URLPattern: typeof Edge.URLPattern
}

export {}
