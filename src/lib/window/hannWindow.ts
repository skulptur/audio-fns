import { TWO_PI } from '../constants'

export const hannWindow = (length: number, index: number) => {
  return 0.5 * (1 - Math.cos((TWO_PI * index) / (length - 1)))
}
