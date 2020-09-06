export const createTable2d = (
  xLength: number,
  yLength: number,
  fn: (xIndex: number, yIndex: number) => number
) => {
  const yList: Array<Float64Array> = []

  for (let yIndex = 0; yIndex < yLength; yIndex++) {
    const xBuffer = new Float64Array(xLength)

    for (let xIndex = 0; xIndex < xLength; xIndex++) {
      xBuffer[xIndex] = fn(xIndex, yIndex)
    }

    yList[yIndex] = xBuffer
  }

  return {
    dimensions: [xLength, yLength],
    data: yList,
  } as const
}
