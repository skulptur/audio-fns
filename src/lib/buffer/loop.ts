import { mutableWrite } from './mutableWrite'
import { NumericalBuffer, MutableNumericalBuffer } from '../../types'
import { clone } from './clone'

export const loop = <B extends NumericalBuffer>(
  sourceBuffer: B,
  times: number
): B => {
  const sourceLength = sourceBuffer.length
  const output = clone(
    sourceBuffer,
    sourceLength * times
  ) as MutableNumericalBuffer

  for (let i = 0; i < times; i++) {
    mutableWrite(sourceBuffer, output, i * sourceLength)
  }

  return output as B
}
