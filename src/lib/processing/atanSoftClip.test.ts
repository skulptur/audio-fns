import { atanSoftClip } from './atanSoftClip'

describe('atanSoftClip', () => {
  it('performs soft clip distortion', () => {
    // going outside -1..1 on purpose to test response
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
    const result = drySignal.map(atanSoftClip)

    expect(result).toEqual([
      -0,
      -0.6695013189228642,
      -0.7951672353008666,
      -0.8340953646873607,
      -0.8440417392452615,
      -0.8340953646873607,
      -0.7951672353008666,
      -0.6695013189228642,
      0,
      0.733750122504687,
      0.8743340836219977,
      0.9232085875663925,
      0.9470706478808203,
      0.9608727402564197,
      0.9697076556232638,
      0.9757595399605393,
    ])
  })
})
