import { NumericalBuffer } from '../../types'

const typedArrayTypes = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  // BigInt64Array,
  // BigUint64Array,
]

export const getConstructor = <B extends NumericalBuffer>(buffer: B) => {
  return typedArrayTypes.find(c => buffer.constructor === c) || null
}
