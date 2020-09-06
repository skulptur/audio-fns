import { oscillator } from './oscillator'
import { squareWave } from './squareWave'

describe('oscillator', () => {
  it('generates a repeating signal pattern with the given pitch and period function', () => {
    const sampleRate = 20
    const result = [...Array(sampleRate)].map((_, currentSample) =>
      oscillator(sampleRate, squareWave, 440, currentSample)
    )

    expect(result).toEqual([
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ])
  })
})
