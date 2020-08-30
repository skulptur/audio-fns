import { TWO_PI } from '../constants'

export const hammingWindow = (length: number, index: number) => {
  return 0.54 - 0.46 * Math.cos((TWO_PI * index) / (length - 1))
}
