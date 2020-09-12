import { getPeak } from './getPeak'

describe('getPeak', () => {
  it('gets the max amplitude', () => {
    const equilibrium = [0, 0, 0, 0, 0, 0, 0]
    expect(getPeak(equilibrium)).toEqual(0)

    const drySignal = [-0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75]
    expect(getPeak(drySignal)).toEqual(0.75)

    const maxEnergy = [1, -1, 1, -1, 1, -1, 1]
    expect(getPeak(maxEnergy)).toEqual(1)
  })
})
