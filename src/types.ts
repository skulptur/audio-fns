import { DeepWritable } from 'ts-essentials'

export type NumericalBuffer = ArrayLike<number> & {
  slice: (n: number) => ArrayLike<number>
}

export type WritableNumericalBuffer = DeepWritable<NumericalBuffer>
