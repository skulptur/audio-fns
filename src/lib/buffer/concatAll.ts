import { concat } from './concat'

export const concatAll = (buffers: Array<Float64Array>) => {
  return buffers.reduce(concat)
}
