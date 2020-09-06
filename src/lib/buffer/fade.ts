import { NumericalBuffer, WritableNumericalBuffer } from '../../types'

const lerp = (v0: number, v1: number, t: number) => {
  return v0 * (1 - t) + v1 * t
}

export const fade = <B extends NumericalBuffer>(
  buffer: B,
  fadeInDuration: number,
  fadeOutDuration: number,
  fadeInInterpolation = lerp,
  fadeOutInterpolation = lerp
): B => {
  const length = buffer.length
  const _buffer = buffer.slice(0) as WritableNumericalBuffer
  const _fadeInDuration = Math.min(fadeInDuration, length)
  const _fadeOutDuration = Math.min(fadeOutDuration, length)

  // fade in
  for (let i = 0; i < _fadeInDuration; i++) {
    const sample = buffer[i]
    const envelope = fadeInInterpolation(0, 1, i / _fadeInDuration)
    _buffer[i] = sample * envelope
  }

  // fade out
  const fadeOutStart = length - _fadeOutDuration - 1
  for (let i = fadeOutStart; i < length; i++) {
    const sample = buffer[i]
    const envelope = fadeOutInterpolation(
      1,
      0,
      (i - fadeOutStart) / _fadeOutDuration
    )
    _buffer[i] = sample * envelope
  }

  return _buffer as B
}
