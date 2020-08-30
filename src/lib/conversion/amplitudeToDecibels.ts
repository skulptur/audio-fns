export const amplitudeToDecibels = (value: number) => {
  return 20 * (0.43429 * Math.log(value))
}
