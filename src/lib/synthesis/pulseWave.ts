export const pulse = (t: number, ratio: number = 0.5) => {
  return t >= ratio ? -1 : 1
}
