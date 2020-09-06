import { samplesToSeconds } from './samplesToSeconds'

describe('samplesToSeconds', () => {
  it('converts samples to seconds', () => {
    const samples = [
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
    ]

    const result = samples.map(sample => samplesToSeconds(44100, sample))

    expect(result).toEqual([0.125, 0.25, 0.5, 1, 2, 4, 8, 16, 32, 64, 128])
  })
})
