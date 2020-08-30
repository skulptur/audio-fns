export const decibelsToAmplitude = (value: number) => {
  return Math.exp(value / 8.6858)
}
