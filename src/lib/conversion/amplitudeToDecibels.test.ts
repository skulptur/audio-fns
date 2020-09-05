import { amplitudeToDecibels } from './amplitudeToDecibels'

describe('amplitudeToDecibels', () => {
  it('converts 0..1 to decibels', () => {
    const amplitudes = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

    const result = amplitudes.map(amplitudeToDecibels)

    expect(result).toEqual([
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
    ])
  })
})
