export const hertzToOctaves = (A440: number, hertz: number) => {
  return Math.log2((16 * hertz) / A440)
}
