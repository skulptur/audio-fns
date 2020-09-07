import { DeepWritable } from 'ts-essentials'

export type NumericalBuffer = ArrayLike<number> & {
  slice: (start: number, end?: number) => ArrayLike<number>
}

export type WritableNumericalBuffer = DeepWritable<NumericalBuffer>
