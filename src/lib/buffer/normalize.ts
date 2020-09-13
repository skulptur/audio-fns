import { getPeak } from './getPeak'
import { NumericalBuffer, MutableNumericalBuffer } from '../../types'
import { clone } from './clone'

// TODO: inline
const mapRange = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  value: number
) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2

export const normalize = <B extends NumericalBuffer>(
  buffer: B,
  limit: number = 1
): B => {
  const targetBuffer = clone(buffer) as MutableNumericalBuffer
  const length = targetBuffer.length
  const peak = getPeak(buffer)

  for (let i = 0; i < length; i++) {
    const sample = buffer[i]

    targetBuffer[i] = mapRange(-peak, peak, -limit, limit, sample)
  }

  return targetBuffer as B
}
