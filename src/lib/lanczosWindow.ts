export const lanczosWindow = (length: number, index: number) => {
  const x = (2 * index) / (length - 1) - 1
  return Math.sin(Math.PI * x) / (Math.PI * x)
}
