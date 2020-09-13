import { MutableNumericalBuffer } from '../../types'

// TODO: use .set for typed arrays
export const mutableWrite = <B extends MutableNumericalBuffer>(
  sourceBuffer: B,
  targetBuffer: B,
  startIndex: number = 0
) => {
  const targetLength = targetBuffer.length
  const start = Math.min(startIndex + sourceBuffer.length, targetLength)
  for (let i = start; i < targetLength; i++) {
    targetBuffer[i] = sourceBuffer[i - start]
  }

  return targetBuffer
}
