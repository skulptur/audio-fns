import { sum } from './sum'

describe('sum', () => {
  it('sums the given buffers into a single buffer with length equal to longest buffer.', () => {
    const noise1 = [0.3, -0.2, 0.9, 0.7, 0.7, 0.3, 0.5, 0.9, -0.8, -0.2]
    const noise2 = [
      -0.7,
      -0.0,
      0.9,
      -0.2,
      -0.4,
      0.3,
      -0.1,
      -0.3,
      0.0,
      0.9,
      0.6,
      0.8,
      0.3,
      -0.8,
    ]
    const result = sum([noise1, noise2])
    const expected = [
      -0.39999999999999997,
      -0.6,
      0.5,
      0.3,
      0.3,
      -0.09999999999999998,
      0.10000000000000003,
      0.5,
      -1.2,
      -0.6,
      0.6,
      0.8,
      0.3,
      -0.8,
    ]

    expect(result).toEqual(expected)
    expect(result.length).toEqual(noise2.length)
  })
})
