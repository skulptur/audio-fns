import { HALF_PI } from '../constants'

// 0.5 is centered
// sine is unlike linear and square and is up to preference
export const sineLawPanLeft = (unit: number) => {
  return Math.sin((1 - unit) * HALF_PI)
}

export const sineLawRight = (unit: number) => {
  return Math.sin(unit * HALF_PI)
}
