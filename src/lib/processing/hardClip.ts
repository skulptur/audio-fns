export const hardClip = (threshold: number, signal: number) => {
  return signal > threshold
    ? threshold
    : signal < -threshold
    ? -threshold
    : signal
}
