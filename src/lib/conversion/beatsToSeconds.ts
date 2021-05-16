export const beatsToSeconds = (beats: number, bpm: number): number => {
  return (beats * 60) / bpm
}
