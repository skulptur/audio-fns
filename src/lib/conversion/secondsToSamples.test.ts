import { secondsToSamples } from './secondsToSamples'

describe('secondsToSamples', () => {
  it('converts seconds to samples', () => {
    const seconds = [0.125, 0.25, 0.5, 1, 2, 4, 8, 16, 32, 64, 128]

    const result = seconds.map(second => secondsToSamples(44100, second))

    expect(result).toEqual([
      5512.5,
      11025,
      22050,
      44100,
      88200,
      176400,
      352800,
      705600,
      1411200,
      2822400,
      5644800,
    ])
  })
})
