import { NumericalBuffer, MutableNumericalBuffer } from '../../types'

export const brownFilter = <B extends NumericalBuffer>(
  buffer: B,
  state = 0
) => {
  const length = buffer.length
  const _buffer = buffer.slice(0) as MutableNumericalBuffer

  for (let i = 0; i < length; i++) {
    const sample = buffer[i]
    _buffer[i] = (state + 0.02 * sample) / 1.02
    state = _buffer[i]
    _buffer[i] *= 3.5
  }

  return {
    buffer: _buffer,
    state,
  }
}
