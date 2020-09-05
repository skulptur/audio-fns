import { cache3d } from './cache3d'

describe('cache3d', () => {
  it('creates an array of array of buffer with the given function and sizes', () => {
    const x = 8
    const y = 4
    const z = 4
    const buffer1d = new Float64Array([...Array(x)].map((_, i) => i))
    const buffer2d = [...Array(y)].map(() => buffer1d)
    const expected = [...Array(z)].map(() => buffer2d)
    const result = cache3d(x, y, z, index => index)
    expect(result).toEqual({
      dimensions: [x, y, z],
      data: expected,
    })
  })
})
