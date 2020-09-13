import { NumericalBuffer } from '../../types'
import { concat } from './concat'

export const concatAll = <B extends NumericalBuffer>(buffers: Array<B>) => {
  // TODO: inefficient because it creates a new buffer for each buffer in the array
  // change to creating a buffer of the whole size and then placing each mutably
  return buffers.reduce(concat as (bufferA: B, bufferB: B) => B)
}
