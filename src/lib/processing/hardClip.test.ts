import { hardClip } from './hardClip'

describe('hardClip', () => {
  it('performs hard clip distortion', () => {
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
    const result = drySignal.map(signal => hardClip(1, signal))

    expect(result).toEqual([
      -1,
      -1,
      -1,
      -1,
      -1,
      -0.75,
      -0.5,
      -0.25,
      0,
      0.25,
      0.5,
      0.75,
      1,
      1,
      1,
      1,
    ])
  })
})
