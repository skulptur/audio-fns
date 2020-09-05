import { hertzToMidi } from './hertzToMidi'

describe('hertzToMidi', () => {
  it('converts note frequency in hertz to midi note number', () => {
    const frequencies = [220, 261.63, 440, 523.25, 880, 1046.5]

    const result = frequencies.map(hertzToMidi)

    expect(result).toEqual([57, 60, 69, 72, 81, 84])
  })
})
