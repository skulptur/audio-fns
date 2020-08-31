export const concat = (bufferA: Float64Array, bufferB: Float64Array) => {
  const result = new Float64Array(bufferA.length + bufferB.length)
  result.set(bufferA)
  result.set(bufferB, bufferA.length)

  return result
}
