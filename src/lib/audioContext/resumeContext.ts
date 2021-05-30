import { isContextSuspended } from './isContextSuspended'

export const resumeContext = (audioContext: AudioContext) => {
  return new Promise<AudioContext>((resolve, reject) => {
    isContextSuspended(audioContext)
      ? audioContext
          .resume()
          .then(() => resolve(audioContext))
          .catch(error => {
            if (isContextSuspended(audioContext)) {
              reject(new Error("Couldn't resume audioContext."))
            }
            reject(error)
          })
      : resolve(audioContext)
  })
}
