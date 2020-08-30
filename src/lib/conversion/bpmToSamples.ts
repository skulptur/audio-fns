// Assumes note duration of 1 (4/4)
export const bpmToSamples = (sampleRate: number, bpm: number) => {
  const beatsPerSecond = bpm / 60
  const secondsPerBeat = 1 / beatsPerSecond
  return secondsPerBeat * sampleRate
}
