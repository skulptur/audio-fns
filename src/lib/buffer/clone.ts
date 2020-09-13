import { MutableNumericalBuffer, NumericalBuffer } from '../../types'
import { createBuffer } from './createBuffer'
import { getConstructor } from './getConstructor'
import { mutableWrite } from './mutableWrite'

export const clone = <B extends NumericalBuffer>(
  buffer: B,
  newLength?: number
): B => {
  const constructor = getConstructor(buffer)!
  const copy = createBuffer(
    constructor,
    newLength || buffer.length
  ) as MutableNumericalBuffer

  return mutableWrite(buffer, copy, 0) as B
}
