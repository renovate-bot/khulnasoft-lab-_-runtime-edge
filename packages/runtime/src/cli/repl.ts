import { createFormat } from '@runtime-edge/format'
import createRepl from 'repl'
import { homedir } from 'os'
import { join } from 'path'

import { RuntimeEdge } from '../runtime-edge'

const format = createFormat()

const writer: createRepl.REPLWriter = (output) => {
  return typeof output === 'function' ? output.toString() : format(output)
}

const repl = createRepl.start({ prompt: 'ƒ => ', writer })
repl.setupHistory(join(homedir(), '.edge_runtime_repl_history'), () => {})

Object.getOwnPropertyNames(repl.context).forEach(
  (mod) => delete repl.context[mod],
)

const runtime = new RuntimeEdge()

Object.getOwnPropertyNames(runtime.context)
  .filter((key) => !key.startsWith('__'))
  .forEach((key) =>
    Object.assign(repl.context, { [key]: runtime.context[key] }),
  )

Object.defineProperty(repl.context, 'RuntimeEdge', {
  configurable: false,
  enumerable: false,
  writable: false,
  value: runtime.context.RuntimeEdge,
})

export { repl }
