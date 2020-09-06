// @ts-ignore
import { fft as _fft } from 'fftjs'

export const fft = (buffer: Float64Array) => {
  return _fft(buffer)
}
