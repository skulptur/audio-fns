import { getPeak } from './getPeak'
import { NumericalBuffer, WritableNumericalBuffer } from '../../types'

// TODO: inline
const mapRange = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  value: number
) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2

export const normalize = <B extends NumericalBuffer>(buffer: B): B => {
  const clone = buffer.slice(0) as WritableNumericalBuffer
  const length = clone.length
  const peak = getPeak(buffer)

  for (let i = 0; i < length; i++) {
    const sample = buffer[i]

    clone[i] = mapRange(-peak, peak, -1, 1, sample)
  }

  return clone as B
}
