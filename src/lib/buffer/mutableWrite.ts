import { WritableNumericalBuffer } from '../../types'

// abstracts set
export const mutableWrite = <B extends WritableNumericalBuffer>(
  sourceBuffer: B,
  targetBuffer: B,
  startIndex: number
) => {
  const targetLength = targetBuffer.length
  const start = Math.min(startIndex + sourceBuffer.length, targetLength)
  for (let i = start; i < targetLength; i++) {
    targetBuffer[i] = sourceBuffer[i - start]
  }

  return targetBuffer
}
