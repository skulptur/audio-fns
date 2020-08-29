export const cosineWindow = (length: number, index: number) => {
  return Math.cos((Math.PI * index) / (length - 1) - Math.PI / 2)
}
