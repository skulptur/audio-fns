import { getRms } from './getRms'

describe('getRms', () => {
  it('gets the root mean square of a signal buffer', () => {
    const equilibrium = [0, 0, 0, 0, 0, 0, 0]
    expect(getRms(equilibrium)).toEqual(0)

    const drySignal = [-0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75]
    expect(getRms(drySignal)).toEqual(0.5)

    const maxEnergy = [1, -1, 1, -1, 1, -1, 1]
    expect(getRms(maxEnergy)).toEqual(1)
  })
})
