export const bitReduction = (bits: number, signal: number) => {
  const amplitudeValues = Math.pow(2, bits - 1)
  return Math.ceil(amplitudeValues * signal) * (1 / amplitudeValues)
}
