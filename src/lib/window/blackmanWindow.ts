import { TWO_PI } from '../constants'

export const blackmanWindow = (
  length: number,
  index: number,
  alpha: number
) => {
  const a0 = (1 - alpha) / 2
  const a1 = 0.5
  const a2 = alpha / 2

  return (
    a0 -
    a1 * Math.cos((TWO_PI * index) / (length - 1)) +
    a2 * Math.cos((4 * Math.PI * index) / (length - 1))
  )
}
