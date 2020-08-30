import { TWO_PI } from '../constants'

export const bartlettHannWindow = (length: number, index: number) => {
  return (
    0.62 -
    0.48 * Math.abs(index / (length - 1) - 0.5) -
    0.38 * Math.cos((TWO_PI * index) / (length - 1))
  )
}
