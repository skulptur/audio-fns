export const getPeak = (buffer: ArrayLike<number>) => {
  const length = buffer.length
  let max = 0

  for (let i = 0; i < length; i++) {
    max = Math.max(Math.abs(buffer[i]), max)
  }

  return max
}
