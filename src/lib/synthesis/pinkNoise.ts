import { whiteNoise } from './whiteNoise'

const initialPinkNoiseState = [0, 0, 0, 0, 0, 0, 0]

export const pinkNoise = (
  lengthInSamples: number,
  whiteNoiseGenerator = whiteNoise,
  state = initialPinkNoiseState
) => {
  const _state = state === initialPinkNoiseState ? state : { ...state }
  const buffer = new Float64Array(lengthInSamples)

  for (let i = 0; i < lengthInSamples; i++) {
    const white = whiteNoiseGenerator()
    state[0] = 0.99886 * state[0] + white * 0.0555179
    state[1] = 0.99332 * state[1] + white * 0.0750759
    state[2] = 0.969 * state[2] + white * 0.153852
    state[3] = 0.8665 * state[3] + white * 0.3104856
    state[4] = 0.55 * state[4] + white * 0.5329522
    state[5] = -0.7616 * state[5] - white * 0.016898
    const val =
      state[0] +
      state[1] +
      state[2] +
      state[3] +
      state[4] +
      state[5] +
      state[6] +
      white * 0.5362
    buffer[i] = val * 0.11
    state[6] = white * 0.115926
  }

  return {
    buffer,
    state: _state,
  }
}
