export const secondsToBeats = (time: number, bpm: number): number => {
  return (time / 60) * bpm
}
