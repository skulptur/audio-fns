import { impulse } from './impulse'

describe('impulse', () => {
  it('generates a buffer where the first sample is 1 and the rest are 0s', () => {
    const result = impulse(10)

    expect(result).toEqual(new Float64Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
  })
})
