import { cubicSoftClip } from './cubicSoftClip'

describe('cubicSoftClip', () => {
  it('performs cubic soft clip distortion', () => {
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
    const result = drySignal.map(cubicSoftClip)

    expect(result).toEqual([
      0.6666666666666665,
      0.03645833333333326,
      -0.375,
      -0.5989583333333334,
      -0.6666666666666667,
      -0.609375,
      -0.4583333333333333,
      -0.24479166666666666,
      0,
      0.24479166666666666,
      0.4583333333333333,
      0.609375,
      0.6666666666666667,
      0.5989583333333334,
      0.375,
      -0.03645833333333326,
    ])
  })
})
