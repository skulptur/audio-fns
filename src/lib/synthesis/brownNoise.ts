import { whiteNoise } from './whiteNoise'

export const brownNoise = (
  lengthInSamples: number,
  whiteNoiseGenerator = whiteNoise,
  state = 0
) => {
  const buffer = new Float64Array(lengthInSamples)

  for (let i = 0; i < lengthInSamples; i++) {
    const white = whiteNoiseGenerator()
    buffer[i] = (state + 0.02 * white) / 1.02
    state = buffer[i]
    buffer[i] *= 3.5
  }

  return {
    buffer,
    state,
  }
}
