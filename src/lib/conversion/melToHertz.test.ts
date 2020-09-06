import { melToHertz } from './melToHertz'

describe('melToHertz', () => {
  it('converts mel to hertz', () => {
    const frequencies = [
      307.4550018746415,
      357.243104535996,
      548.6661071382786,
      627.9594695165567,
      915.8622648498088,
      1028.5748203539172,
    ]

    const result = frequencies.map(melToHertz)

    expect(result).toEqual([
      220,
      261.63000000000005,
      440,
      523.25,
      880,
      1046.4999999999998,
    ])
  })
})
