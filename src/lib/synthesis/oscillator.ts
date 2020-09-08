//  const oscillator = (
//   sampleRate: number,
//   periodicFn: (t: number) => number,
//   pitch: number,
//   currentSample: number
// ) => {
//   const t = ((currentSample + 2 * pitch) % sampleRate) / sampleRate
//   return periodicFn(t)
// }

const pitchRate = (
  sampleRate: number,
  currentSample: number,
  pitch: number
) => {
  return ((currentSample % sampleRate) / sampleRate) * pitch
}

export const oscillator = (
  generatorFn: (t: number) => number,
  sampleRate: number,
  currentSample: number,
  pitch: number
) => {
  return generatorFn(pitchRate(sampleRate, currentSample, pitch))
}
