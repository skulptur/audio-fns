import { TypedArrayConstructor } from '../../types'

export const createBuffer = (
  TypedArrayConstructor: TypedArrayConstructor,
  length: number
) => {
  return new TypedArrayConstructor(length)
}
