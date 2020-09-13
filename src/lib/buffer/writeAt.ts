import { NumericalBuffer } from '../../types'
import { clone } from './clone'
import { mutableWrite } from './mutableWrite'

export const writeAt = <B extends NumericalBuffer>(
  sourceBuffer: B,
  targetBuffer: B,
  startIndex: number = 0
): B => {
  return mutableWrite(sourceBuffer, clone(targetBuffer), startIndex)
}
