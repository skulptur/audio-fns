export const triangularWindow = (length: number, index: number) => {
  return (2 / length) * (length / 2 - Math.abs(index - (length - 1) / 2))
}
