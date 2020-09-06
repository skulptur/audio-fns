export const oscillator = (
  sampleRate: number,
  periodicFn: (t: number) => number,
  pitch: number,
  currentSample: number
) => {
  const t = ((currentSample + 2 * pitch) % sampleRate) / sampleRate
  return periodicFn(t)
}
