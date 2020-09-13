import { NumericalBuffer, MutableNumericalBuffer } from '../../types'
import { mutableWrite } from './mutableWrite'
import { clone } from './clone'

export const concat = <B extends NumericalBuffer>(bufferA: B, bufferB: B) => {
  const aLength = bufferA.length
  const result = clone(
    bufferA,
    aLength + bufferB.length
  ) as MutableNumericalBuffer

  mutableWrite(bufferB, result, aLength)

  return result
}
