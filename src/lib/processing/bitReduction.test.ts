import { bitReduction } from './bitReduction'

describe('bitReduction', () => {
  it('performs soft clip distortion', () => {
    // TODO: use larger sample
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
    const result = drySignal.map(signal => bitReduction(2, signal))

    expect(result).toEqual([
      -2,
      -1.5,
      -1.5,
      -1,
      -1,
      -0.5,
      -0.5,
      -0,
      0,
      0.5,
      0.5,
      1,
      1,
      1.5,
      1.5,
      2,
    ])
  })
})
