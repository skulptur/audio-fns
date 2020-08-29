// single sample processing
export { invert } from './lib/invert'

// conversion
export { hertzToMel } from './lib/hertzToMel'
export { hertzToOctaves } from './lib/hertzToOctaves' // TODO: octaves to hertz
export { melToHertz } from './lib/melToHertz'
export { midiToHertz } from './lib/midiToHertz'
export { hertzToMidi } from './lib/hertzToMidi'

// waves
export { sawWave } from './lib/sawWave'
export { sineWave } from './lib/sineWave'
export { squareWave } from './lib/squareWave'
export { triangleWave } from './lib/triangleWave'

// window
export { bartlettHannWindow } from './lib/bartlettHannWindow'
export { bartlettWindow } from './lib/bartlettWindow'
export { blackmanWindow } from './lib/blackmanWindow'
export { cosineWindow } from './lib/cosineWindow'
export { gaussWindow } from './lib/gaussWindow'
export { hammingWindow } from './lib/hammingWindow'
export { hannWindow } from './lib/hannWindow'
export { lanczosWindow } from './lib/lanczosWindow'
export { triangularWindow } from './lib/triangularWindow'
