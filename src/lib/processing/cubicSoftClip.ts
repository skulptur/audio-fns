import { ONE_THIRD } from '../constants'

// https://www.hackaudio.com/digital-signal-processing/distortion-effects/soft-clipping/
export const cubicSoftClip = (signal: number) => {
  return signal - ONE_THIRD * Math.pow(signal, 3)
}
