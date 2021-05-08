export const fetchBuffer = (audioUrl: string) => {
  return new Promise(resolve => {
    const request = new XMLHttpRequest()
    request.open('GET', audioUrl, true)
    request.responseType = 'arraybuffer'
    request.onload = function() {
      resolve(request.response)
    }
    request.send()
  })
}
