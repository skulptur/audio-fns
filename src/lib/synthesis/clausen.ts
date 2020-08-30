import { TWO_PI } from '../constants'

export const clausen = (t: number, iterations: number = 10) => {
  let result = 0
  for (let k = 1; k <= iterations; k++) {
    result += Math.sin(k * TWO_PI * t) / (k * k)
  }

  return result
}
