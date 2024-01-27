import * as RuntimeEdge from '@runtime-edge/primitives'
import { buildToFetchEvent } from '../../src'

const toFetchEvent = buildToFetchEvent({
  Headers: RuntimeEdge.Headers,
  ReadableStream: RuntimeEdge.ReadableStream,
  Request: RuntimeEdge.Request,
  Uint8Array: Uint8Array,
  FetchEvent: RuntimeEdge.FetchEvent,
})

it('returns a fetch event with a request', () => {
  const request = new RuntimeEdge.Request('https://khulnasoft.com')
  const event = toFetchEvent(request)
  expect(event).toBeInstanceOf(RuntimeEdge.FetchEvent)
  expect(event.request).toBe(request)
})

it('throws when accessing waitUntil', () => {
  const request = new RuntimeEdge.Request('https://khulnasoft.com')
  const event = toFetchEvent(request)
  expect(() => event.waitUntil(Promise.resolve())).toThrow(
    'waitUntil is not supported yet.',
  )
})
