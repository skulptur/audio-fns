import { MutableNumericalBuffer, NumericalBuffer } from '../../types'

export const sum = <B extends NumericalBuffer>(buffers: Array<B>): B => {
  if (buffers.length < 2) {
    throw new Error(`Sum requires at least two buffers.`)
  }

  const longestBuffer = buffers.reduce((a, b) => {
    return a.length > b.length ? a : b
  })

  const longestIndex = buffers.indexOf(longestBuffer)
  const remainingBuffers = buffers.splice(longestIndex, 1)
  const remainingBuffersLength = remainingBuffers.length
  const output = longestBuffer.slice(0) as MutableNumericalBuffer

  for (
    let bufferIndex = 0;
    bufferIndex < remainingBuffersLength;
    bufferIndex++
  ) {
    const currentBuffer = buffers[bufferIndex]
    const currentBufferLength = currentBuffer.length

    for (
      let sampleIndex = 0;
      sampleIndex < currentBufferLength;
      sampleIndex++
    ) {
      const sample = currentBuffer[sampleIndex]
      output[sampleIndex] = output[bufferIndex] + sample
    }
  }

  return output as B
}
