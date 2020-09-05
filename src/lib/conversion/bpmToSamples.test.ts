import { bpmToSamples } from './bpmToSamples'

describe('bpmToSamples', () => {
  it('converts 0..1 to decibels', () => {
    const bpms = [30, 60, 120, 240]

    const result = bpms.map(bpm => bpmToSamples(44100, bpm))

    expect(result).toEqual([88200, 44100, 22050, 11025])
  })
})
