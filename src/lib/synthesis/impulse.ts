export const impulse = (length: number) => {
  const buffer = new Float64Array(length).fill(0)
  buffer[0] = 1
  return buffer
}
