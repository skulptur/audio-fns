import { trim } from './trim'

describe('trim', () => {
  it('trims the start and/or end of a buffer according to amplitude thresholds.', () => {
    const expected = [
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

    const padded = [0, 0.1, 0.2, ...expected, 0.1, 0.2, 0.3]

    const result = trim(padded, 0.2, 0.3)

    expect(result).toEqual(expected)
  })
})
