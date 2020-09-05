export const cache1d = (xCount: number, fn: (xIndex: number) => number) => {
  const xBuffer = new Float64Array(xCount)

  for (let xIndex = 0; xIndex < xCount; xIndex++) {
    xBuffer[xIndex] = fn(xIndex)
  }

  return {
    dimensions: [xCount],
    data: xBuffer,
  } as const
}
