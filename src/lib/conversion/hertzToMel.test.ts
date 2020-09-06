import { hertzToMel } from './hertzToMel'

describe('hertzToMel', () => {
  it('converts hertz to mel', () => {
    const frequencies = [220, 261.63, 440, 523.25, 880, 1046.5]

    const result = frequencies.map(hertzToMel)

    expect(result).toEqual([
      307.4550018746415,
      357.243104535996,
      548.6661071382786,
      627.9594695165567,
      915.8622648498088,
      1028.5748203539172,
    ])
  })
})
