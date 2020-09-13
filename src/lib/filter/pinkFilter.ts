import { NumericalBuffer, MutableNumericalBuffer } from '../../types'
import { clone } from '../buffer/clone'

type PinkFilterState = [number, number, number, number, number, number, number]

export const pinkFilter = <B extends NumericalBuffer>(
  buffer: B,
  state: PinkFilterState = [0, 0, 0, 0, 0, 0, 0]
) => {
  const length = buffer.length
  const _state = [...state]
  const _buffer = clone(buffer) as MutableNumericalBuffer

  for (let i = 0; i < length; i++) {
    const sample = buffer[i]
    _state[0] = 0.99886 * _state[0] + sample * 0.0555179
    _state[1] = 0.99332 * _state[1] + sample * 0.0750759
    _state[2] = 0.969 * _state[2] + sample * 0.153852
    _state[3] = 0.8665 * _state[3] + sample * 0.3104856
    _state[4] = 0.55 * _state[4] + sample * 0.5329522
    _state[5] = -0.7616 * _state[5] - sample * 0.016898
    const val =
      _state[0] +
      _state[1] +
      _state[2] +
      _state[3] +
      _state[4] +
      _state[5] +
      _state[6] +
      sample * 0.5362

    _buffer[i] = val * 0.11
    _state[6] = sample * 0.115926
  }

  return {
    buffer: _buffer as B,
    state: _state as PinkFilterState,
  }
}
