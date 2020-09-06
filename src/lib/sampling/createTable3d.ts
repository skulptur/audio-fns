export const createTable3d = (
  xLength: number,
  yLength: number,
  zLength: number,
  fn: (xIndex: number, yIndex: number, zIndex: number) => number
) => {
  const zList: Array<Array<Float64Array>> = Array(zLength)

  for (let zIndex = 0; zIndex < zLength; zIndex++) {
    const yList: Array<Float64Array> = Array(zLength)

    for (let yIndex = 0; yIndex < yLength; yIndex++) {
      const xBuffer = new Float64Array(xLength)

      for (let xIndex = 0; xIndex < xLength; xIndex++) {
        xBuffer[xIndex] = fn(xIndex, yIndex, zIndex)
      }

      yList[yIndex] = xBuffer
    }

    zList[zIndex] = yList
  }

  return {
    dimensions: [xLength, yLength, zLength],
    data: zList,
  } as const
}
