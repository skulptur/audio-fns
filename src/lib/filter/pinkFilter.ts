import { NumericalBuffer, WritableNumericalBuffer } from '../../types'

type PinkFilterState = [number, number, number, number, number, number, number]

export const pinkFilter = <B extends NumericalBuffer>(
  buffer: B,
  state: PinkFilterState = [0, 0, 0, 0, 0, 0, 0]
) => {
  const length = buffer.length
  const _state = { ...state }
  const _buffer = buffer.slice(0) as WritableNumericalBuffer

  for (let i = 0; i < length; i++) {
    const sample = buffer[i]
    state[0] = 0.99886 * state[0] + sample * 0.0555179
    state[1] = 0.99332 * state[1] + sample * 0.0750759
    state[2] = 0.969 * state[2] + sample * 0.153852
    state[3] = 0.8665 * state[3] + sample * 0.3104856
    state[4] = 0.55 * state[4] + sample * 0.5329522
    state[5] = -0.7616 * state[5] - sample * 0.016898
    const val =
      state[0] +
      state[1] +
      state[2] +
      state[3] +
      state[4] +
      state[5] +
      state[6] +
      sample * 0.5362

    _buffer[i] = val * 0.11
    state[6] = sample * 0.115926
  }

  return {
    buffer: _buffer as B,
    state: _state as PinkFilterState,
  }
}
