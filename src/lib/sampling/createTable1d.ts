export const createTable1d = (
  xLength: number,
  fn: (xIndex: number) => number
) => {
  const xBuffer = new Float64Array(xLength)

  for (let xIndex = 0; xIndex < xLength; xIndex++) {
    xBuffer[xIndex] = fn(xIndex)
  }

  return {
    dimensions: [xLength],
    data: xBuffer,
  } as const
}
