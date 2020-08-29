export const bartlettWindow = (length: number, index: number) => {
  return (
    (2 / (length - 1)) * ((length - 1) / 2 - Math.abs(index - (length - 1) / 2))
  )
}
