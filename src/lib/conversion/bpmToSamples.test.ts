import { bpmToSamples } from './bpmToSamples'

describe('bpmToSamples', () => {
  it('converts BPM to samples', () => {
    const bpms = [30, 60, 120, 240]

    const result = bpms.map(bpm => bpmToSamples(44100, bpm))

    expect(result).toEqual([88200, 44100, 22050, 11025])
  })
})
