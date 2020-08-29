export const triangleWave = (t: number) => {
  return 1 - 4 * Math.abs(Math.round(t) - t)
}
