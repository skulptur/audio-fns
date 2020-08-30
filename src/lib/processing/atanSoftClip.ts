import { TWO_BY_PI } from '../constants'

// https://www.hackaudio.com/digital-signal-processing/distortion-effects/soft-clipping/
// alpha > 10 starts to approach infinite clipping distortion
export const atanSoftClip = (alpha: number, signal: number) => {
  return TWO_BY_PI * Math.atan(signal * alpha)
}
