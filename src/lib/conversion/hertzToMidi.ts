import { L440, L2 } from '../constants'

export const hertzToMidi = (hertz: number) => {
  const v = (12 * (Math.log(hertz) - L440)) / L2 + 69
  return Math.round(v * 100) / 100
}
