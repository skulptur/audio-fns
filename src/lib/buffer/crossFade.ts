import { NumericalBuffer } from '../../types'
import { fade } from './fade'
import { sum } from './sum'

export const crossFade = <B extends NumericalBuffer>(
  bufferA: B,
  bufferB: B,
  bOffset: number,
  interpolation?: (t: number) => number
): B => {
  const overlap = bufferA.length - bOffset
  // TODO: refactor, probably should have fadeIn and fadeOut, as mutable?
  const aFadedOut = fade(bufferA, 0, overlap, undefined, interpolation)
  const bFadeIn = fade(bufferB, overlap, 0, interpolation)

  return sum(aFadedOut, bFadeIn, bOffset)
}
