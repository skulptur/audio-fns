export const melToHertz = (mel: number) => {
  return 700 * (Math.exp(mel / 1125) - 1)
}
