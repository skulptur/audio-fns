import { DeepWritable } from 'ts-essentials'

export type TypedArrayConstructor =
  | Int8ArrayConstructor
  | Uint8ArrayConstructor
  | Uint8ClampedArrayConstructor
  | Int16ArrayConstructor
  | Uint16ArrayConstructor
  | Int32ArrayConstructor
  | Uint32ArrayConstructor
  | Float32ArrayConstructor
  | Float64ArrayConstructor

export type Sliceable = {
  slice: (start: number, end?: number) => ArrayLike<number>
}

// type Settable = {
//   set: (array: ArrayLike<number>, offset?: number) => void
// }

export type NumericalBuffer = ArrayLike<number>

export type MutableNumericalBuffer = DeepWritable<NumericalBuffer>
