import { whiteNoise } from './whiteNoise'

const initialPinkNoiseState = {
  b0: 0,
  b1: 0,
  b2: 0,
  b3: 0,
  b4: 0,
  b5: 0,
  b6: 0,
}

export const pinkNoise = (
  lengthInSamples: number,
  whiteNoiseGenerator = whiteNoise,
  state = initialPinkNoiseState
) => {
  const _state = state === initialPinkNoiseState ? state : { ...state }
  const buffer = new Float32Array(lengthInSamples)

  for (let i = 0; i < lengthInSamples; i++) {
    const white = whiteNoiseGenerator()
    state.b0 = 0.99886 * state.b0 + white * 0.0555179
    state.b1 = 0.99332 * state.b1 + white * 0.0750759
    state.b2 = 0.969 * state.b2 + white * 0.153852
    state.b3 = 0.8665 * state.b3 + white * 0.3104856
    state.b4 = 0.55 * state.b4 + white * 0.5329522
    state.b5 = -0.7616 * state.b5 - white * 0.016898
    const val =
      state.b0 +
      state.b1 +
      state.b2 +
      state.b3 +
      state.b4 +
      state.b5 +
      state.b6 +
      white * 0.5362
    buffer[i] = val * 0.11
    state.b6 = white * 0.115926
  }

  return {
    buffer,
    state: _state,
  }
}
