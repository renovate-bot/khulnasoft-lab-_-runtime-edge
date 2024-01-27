import { EdgeRuntime } from '../runtime-edge'

export const inlineEval = async (script: string) => {
  const runtime = new EdgeRuntime()
  const result = await runtime.evaluate(script)
  return result
}
