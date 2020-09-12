import { NumericalBuffer } from '../../types'
import { fade } from './fade'
import { createBuffer } from './createBuffer'

export const crossFade = <B extends NumericalBuffer>(
  bStart: number,
  bufferA: B,
  bufferB: B
) => {
  const overlap = bufferA.length - bStart
  const result = createBuffer(bufferA.length + bufferB.length - overlap)

  // TODO: pass different interpolation fn
  result.set(fade(bufferA, 0, overlap))
  result.set(fade(bufferB, overlap, 0), bStart)

  return result
}
