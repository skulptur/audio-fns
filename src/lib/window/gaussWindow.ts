export const gaussWindow = (length: number, index: number, alpha: number) => {
  return Math.pow(
    Math.E,
    -0.5 *
      Math.pow((index - (length - 1) / 2) / ((alpha * (length - 1)) / 2), 2)
  )
}
