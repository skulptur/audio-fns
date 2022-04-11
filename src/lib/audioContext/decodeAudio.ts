export type DecodedAudio = {
  buffer: AudioBuffer
  createNode: () => AudioBufferSourceNode
}

export const decodeAudio = (
  requestResponse: ArrayBuffer,
  context: AudioContext
) => {
  return new Promise<DecodedAudio>(resolve => {
    context.decodeAudioData(requestResponse, buffer => {
      resolve({
        buffer,
        createNode: () => {
          const node = context.createBufferSource()
          node.buffer = buffer

          return node
        },
      })
    })
  })
}
