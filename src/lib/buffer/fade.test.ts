import { fade } from './fade'

describe('fade', () => {
  it('fades the signals in a buffer in and out', () => {
    const drySignal = [1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]

    const result = fade(drySignal, 5, 5)

    expect(result).toEqual([
      0,
      -0.2,
      0.4,
      -0.6,
      0.8,
      -1,
      1,
      -1,
      1,
      -1,
      1,
      -0.8,
      0.6,
      -0.4,
      0.19999999999999996,
      -0,
    ])
  })
})
