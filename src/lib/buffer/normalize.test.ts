import { normalize } from './normalize'

describe('normalize', () => {
  it('performs soft clip distortion', () => {
    const drySignal = [-0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75]
    const result = normalize(drySignal)

    expect(result).toEqual([
      -1,
      -0.6666666666666667,
      -0.33333333333333337,
      0,
      0.33333333333333326,
      0.6666666666666667,
      1,
    ])
  })
})
