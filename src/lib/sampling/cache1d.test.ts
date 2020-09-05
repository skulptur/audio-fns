import { cache1d } from './cache1d'

describe('cache1d', () => {
  it('creates a buffer with the given function and size', () => {
    const x = 24
    const expected = new Float64Array([...Array(x)].map((_, i) => i))
    const result = cache1d(x, index => index)
    expect(result).toEqual({
      dimensions: [x],
      data: expected,
    })
  })
})
