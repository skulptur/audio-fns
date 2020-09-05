import { decibelsToAmplitude } from './decibelsToAmplitude'

describe('decibelsToAmplitude', () => {
  it('converts 0..1 to decibels', () => {
    const decibels = [
      -Infinity,
      -19.99979360072768,
      -13.979255819820109,
      -10.457466983814216,
      -7.958718038912536,
      -6.020537780907573,
      -4.436929202906642,
      -3.098007228063042,
      -1.9381802580049627,
      -0.9151403669007475,
      0,
    ]

    const result = decibels.map(decibelsToAmplitude)

    expect(result).toEqual([
      0,
      0.10000000000000002,
      0.2,
      0.29999999999999993,
      0.4,
      0.5,
      0.6000000000000001,
      0.7,
      0.8,
      0.9,
      1,
    ])
  })
})
