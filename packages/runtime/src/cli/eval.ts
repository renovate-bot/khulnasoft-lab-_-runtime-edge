import { RuntimeEdge } from '../runtime-edge'

export const inlineEval = async (script: string) => {
  const runtime = new RuntimeEdge()
  const result = await runtime.evaluate(script)
  return result
}
