import { invert } from './invert'

describe('invert', () => {
  it('inverts signal phase', () => {
    const drySignal = [
      -2,
      -1.75,
      -1.5,
      -1.25,
      -1,
      -0.75,
      -0.5,
      -0.25,
      0,
      0.25,
      0.5,
      0.75,
      1,
      1.25,
      1.5,
      1.75,
    ]
    const result = drySignal.map(invert)

    expect(result).toEqual([
      2,
      1.75,
      1.5,
      1.25,
      1,
      0.75,
      0.5,
      0.25,
      -0,
      -0.25,
      -0.5,
      -0.75,
      -1,
      -1.25,
      -1.5,
      -1.75,
    ])
  })
})
