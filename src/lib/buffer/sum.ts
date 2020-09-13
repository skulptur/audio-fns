import { MutableNumericalBuffer, NumericalBuffer } from '../../types'
import { clone } from './clone'

export const sum = <B extends NumericalBuffer>(
  bufferA: B,
  bufferB: B,
  bOffset: number = 0 // accepts negative
): B => {
  const bLength = bufferB.length
  const totalLength = Math.max(bufferA.length, bLength + bOffset)
  const output = clone(bufferA, totalLength) as MutableNumericalBuffer

  // TODO: would be more efficient to only add the interseccion, and mutably set the rest
  for (let i = bOffset; i < totalLength; i++) {
    output[i] += bufferB[i]
  }

  return output as B
}
