// single sample processing
export { invert } from './lib/processing/invert'
export { hardClip } from './lib/processing/hardClip'
export { infiniteClip } from './lib/processing/infiniteClip'
export { cubicSoftClip } from './lib/processing/cubicSoftClip'
export { atanSoftClip } from './lib/processing/atanSoftClip'
export { bitReduction } from './lib/processing/bitReduction'

// conversion
export { hertzToMel } from './lib/conversion/hertzToMel'
export { hertzToOctaves } from './lib/conversion/hertzToOctaves' // TODO: octaves to hertz
export { melToHertz } from './lib/conversion/melToHertz'
export { midiToHertz } from './lib/conversion/midiToHertz'
export { hertzToMidi } from './lib/conversion/hertzToMidi'

// waves
export { sawWave } from './lib/synthesis/sawWave'
export { sineWave } from './lib/synthesis/sineWave'
export { squareWave } from './lib/synthesis/squareWave'
export { triangleWave } from './lib/synthesis/triangleWave'

// window
export { bartlettHannWindow } from './lib/window/bartlettHannWindow'
export { bartlettWindow } from './lib/window/bartlettWindow'
export { blackmanWindow } from './lib/window/blackmanWindow'
export { cosineWindow } from './lib/window/cosineWindow'
export { gaussWindow } from './lib/window/gaussWindow'
export { hammingWindow } from './lib/window/hammingWindow'
export { hannWindow } from './lib/window/hannWindow'
export { lanczosWindow } from './lib/window/lanczosWindow'
export { triangularWindow } from './lib/window/triangularWindow'
