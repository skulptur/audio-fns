// 0.5 is centered
// linear mantains equail combined amplitude, but not power
export const linearLawPanLeft = (unit: number) => {
  return unit
}

export const linearLawPanRight = (unit: number) => {
  return 1 - unit
}
