export const hertzToMel = (hertz: number) => {
  return 1125 * Math.log(1 + hertz / 700)
}
