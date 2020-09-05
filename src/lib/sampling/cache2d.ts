export const cache2d = (
  xCount: number,
  yCount: number,
  fn: (xIndex: number, yIndex: number) => number
) => {
  const yList: Array<Float64Array> = []

  for (let yIndex = 0; yIndex < yCount; yIndex++) {
    const xBuffer = new Float64Array(xCount)

    for (let xIndex = 0; xIndex < xCount; xIndex++) {
      xBuffer[xIndex] = fn(xIndex, yIndex)
    }

    yList[yIndex] = xBuffer
  }

  return {
    dimensions: [xCount, yCount],
    data: yList,
  } as const
}
