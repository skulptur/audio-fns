export const cache3d = (
  xCount: number,
  yCount: number,
  zCount: number,
  fn: (xIndex: number, yIndex: number, zIndex: number) => number
) => {
  const zList: Array<Array<Float64Array>> = Array(zCount)

  for (let zIndex = 0; zIndex < zCount; zIndex++) {
    const yList: Array<Float64Array> = Array(zCount)

    for (let yIndex = 0; yIndex < yCount; yIndex++) {
      const xBuffer = new Float64Array(xCount)

      for (let xIndex = 0; xIndex < xCount; xIndex++) {
        xBuffer[xIndex] = fn(xIndex, yIndex, zIndex)
      }

      yList[yIndex] = xBuffer
    }

    zList[zIndex] = yList
  }

  return {
    dimensions: [xCount, yCount, zCount],
    data: zList,
  } as const
}
