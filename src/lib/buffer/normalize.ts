import { getPeak } from './getPeak'

export const normalize = <
  Buffer extends ArrayLike<number> & { slice: (n: number) => ArrayLike<number> }
>(
  buffer: Buffer
): Buffer => {
  const clone = buffer.slice(0)
  const length = clone.length
  const peak = getPeak(buffer)
  const gain = 2 - peak

  for (let i = 0; i < length; i++) {
    const sample = buffer[i]
    // @ts-ignore
    clone[i] = sample * (1 + gain)
  }

  return clone as Buffer
}
