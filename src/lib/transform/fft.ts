// @ts-ignore
import { fft as _fft, ifft as _ifft } from 'fftjs'

export const fft = (buffer: Float64Array) => {
  return _fft(buffer)
}
