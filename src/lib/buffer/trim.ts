import { NumericalBuffer, Sliceable } from '../../types'

export const trim = <B extends NumericalBuffer & Sliceable>(
  buffer: B,
  startThreshold: number | null = null,
  endThreshold: number | null = null
): B => {
  let trimStart = 0
  let trimEnd = buffer.length - 1

  if (startThreshold !== null) {
    while (
      trimStart < trimEnd &&
      startThreshold >= Math.abs(buffer[trimStart])
    ) {
      trimStart++
    }
  }

  if (endThreshold !== null) {
    while (trimEnd > trimStart && endThreshold >= Math.abs(buffer[trimEnd])) {
      trimEnd--
    }
  }

  return buffer.slice(trimStart, trimEnd + 1) as B
}
