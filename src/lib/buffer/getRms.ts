export const getRms = (buffer: ArrayLike<number>) => {
  const length = buffer.length
  let sum = 0

  for (let i = 0; i < length; i++) {
    const sample = buffer[i]
    sum += sample * sample
  }

  return Math.sqrt(sum / length)
}
