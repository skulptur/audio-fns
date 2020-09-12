import { NumericalBuffer } from '../../types'

// TODO, LOGIC IS NOT RIGHT
export const setAt = <B extends NumericalBuffer>(
  sampleList: B,
  sourceBuffer: Float64Array,
  targetBuffer: Float64Array
) => {
  const clone = targetBuffer.slice(0)
  const sampleListLength = sampleList.length
  // const targetLength = clone.length

  for (let i = 0; i < sampleListLength; i++) {
    clone.set(sourceBuffer)
  }

  return clone
}
