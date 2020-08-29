export const midiToHertz = (A440: number, midi: number) => {
  return Math.pow(2, (midi - 69) / 12) * A440
}
