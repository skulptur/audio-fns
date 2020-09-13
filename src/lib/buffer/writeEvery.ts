import { mutableWrite } from './mutableWrite'
import { clone } from './clone'
import { NumericalBuffer, MutableNumericalBuffer, Sliceable } from '../../types'

export const writeEvery = <B extends NumericalBuffer & Sliceable>(
  sourceBuffer: B,
  targetBuffer: B,
  every?: number
): B => {
  const _every = every || sourceBuffer.length
  const target = clone(targetBuffer)
  const source = sourceBuffer.slice(0, every) as MutableNumericalBuffer
  const total = Math.ceil(targetBuffer.length / _every)

  for (let i = 0; i < total; i++) {
    mutableWrite(source, target, _every * i)
  }

  return target
}
