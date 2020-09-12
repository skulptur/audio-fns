import { mutableWrite } from './mutableWrite'
import { NumericalBuffer, WritableNumericalBuffer } from '../../types'

export const loop = <B extends NumericalBuffer>(
  sourceBuffer: B,
  times: number
) => {
  const sourceLength = sourceBuffer.length
  const clone = sourceBuffer.slice(
    sourceLength * times
  ) as WritableNumericalBuffer

  for (let i = 0; i < times; i++) {
    mutableWrite(sourceBuffer, clone, i * sourceLength)
  }

  return clone
}
