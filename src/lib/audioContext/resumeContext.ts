import { isContextSuspended } from './isContextSuspended'

export const resumeContext = (audioContext: AudioContext) => {
  return new Promise<void>((resolve, reject) => {
    isContextSuspended(audioContext)
      ? audioContext
          .resume()
          .then(resolve)
          .catch(error => {
            if (isContextSuspended(audioContext)) {
              reject(new Error("Couldn't resume audioContext."))
            }
            reject(error)
          })
      : resolve()
  })
}
