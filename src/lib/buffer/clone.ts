import { NumericalBuffer } from '../../types'
import { createBuffer } from './createBuffer'
import { getConstructor } from './getConstructor'

export const clone = <B extends NumericalBuffer>(
  buffer: B,
  newLength?: number
): B => {
  const constructor = getConstructor(buffer)!
  // TODO: figure out why the unknown is needed
  return (createBuffer(constructor, newLength || buffer.length) as unknown) as B
}
