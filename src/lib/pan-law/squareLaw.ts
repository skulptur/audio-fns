// 0.5 is centered
// mantains equal combined power, but not amplitude
export const squareLawPanLeft = (unit: number) => {
  return Math.sqrt(unit)
}

export const squareLawPanRight = (unit: number) => {
  return Math.sqrt(1 - unit)
}
