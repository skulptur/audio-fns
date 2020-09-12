export const setEvery = (
  sourceBuffer: Float64Array,
  targetBuffer: Float64Array,
  every?: number
) => {
  const _every = every || sourceBuffer.length
  const clone = targetBuffer.slice(0)
  const source = sourceBuffer.slice(0, every)
  const total = Math.ceil(targetBuffer.length / _every)

  for (let i = 0; i < total; i++) {
    clone.set(source, _every * i)
  }

  return clone
}
