export const setAtIntervals = (
  intervals: Array<number>,
  sourceBuffer: Float64Array,
  targetBuffer: Float64Array
) => {
  const clone = targetBuffer.slice(0)
  const intervalsLength = intervals.length
  const targetLength = clone.length

  let i = 0
  let sample = 0
  let jump = 0
  while (sample < targetLength) {
    jump += intervals[i % intervalsLength]
    const source = sourceBuffer.slice(0, jump)
    clone.set(source)
    sample = jump
  }

  return clone
}
