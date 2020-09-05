import { cache2d } from './cache2d'

describe('cache2d', () => {
  it('creates an array of buffer with the given function and sizes', () => {
    const x = 8
    const y = 4
    const buffer1d = new Float64Array([...Array(x)].map((_, i) => i))
    const expected = [...Array(y)].map(() => buffer1d)
    const result = cache2d(x, y, index => index)
    expect(result).toEqual({
      dimensions: [x, y],
      data: expected,
    })
  })
})
