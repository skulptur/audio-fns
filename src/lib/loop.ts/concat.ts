import { NumericalBuffer } from '../../types'

export const concat = <B extends NumericalBuffer>(bufferA: B, bufferB: B) => {
  const result = new Float64Array(bufferA.length + bufferB.length)
  result.set(bufferA)
  result.set(bufferB, bufferA.length)

  return result
}
