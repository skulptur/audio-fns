import { brownFilter } from './brownFilter'

describe('brownFilter', () => {
  it('applies brown filter, passing noise generates brown noise.', () => {
    const sampledNoise = [
      0.31726212291070643,
      -0.2497046178249871,
      0.9146035290485823,
      0.7040656348929066,
      0.7424096912444709,
      0.30798259605374056,
      0.5516211380855758,
      0.9735003983801929,
      -0.850014648216399,
      -0.25526578633403796,
      -0.750759762220814,
      -0.07382411675405454,
      0.9664255556129611,
      -0.23692895791029134,
      -0.4116664367563163,
      0.3098651294546926,
      -0.18795906464342327,
      -0.3916791551590517,
      0.06119076718659233,
      0.9131153215748653,
      0.6228975621590673,
      0.8349999950540794,
      0.31073940043281256,
      -0.8852741089341323,
      -0.8220420482753314,
      0.22656143139463936,
      0.49172740129889014,
      -0.7326900956969058,
      -0.7555080619200822,
      0.32187261088876884,
      -0.7128513877048861,
      0.23882247823230562,
      0.16795329673854997,
      -0.6620187455109785,
      -0.9669440444305839,
      -0.24016396865937306,
      0.11994788994756211,
      -0.258546425961967,
      0.06427987807448377,
      0.1677365933053081,
      -0.19784391305000426,
      0.2881177283856453,
      0.25981864617590933,
      0.6285829151377587,
      0.5336674949933902,
      -0.11675253025859256,
      0.9492927312503738,
      -0.7442931310270873,
      0.07528252920148937,
      -0.25198007500668096,
    ]

    const result = brownFilter(sampledNoise)

    expect(result).toEqual({
      state: 0.016298796097251354,
      buffer: [
        0.021772890787989656,
        0.004209379941412313,
        0.06689375193609125,
        0.11390033958685757,
        0.1626166842882064,
        0.1805641823646747,
        0.21488006081437747,
        0.2774755771578342,
        0.21370054096341795,
        0.1919920940392503,
        0.13670481439587578,
        0.1289579668853843,
        0.1927527017434231,
        0.17271340655853207,
        0.14107525096626464,
        0.15957432355695403,
        0.1435462637567788,
        0.11385168911337762,
        0.11581866942788144,
        0.17621249209619805,
        0.21550521710522821,
        0.26858354584217037,
        0.2846424547769287,
        0.218307124658372,
        0.157611942430489,
        0.17006984571383701,
        0.20048114098505815,
        0.146267484594387,
        0.09155090221566789,
        0.11184508331164875,
        0.060730868796379144,
        0.07592984536533387,
        0.08596723150689448,
        0.038848940510907815,
        -0.028271708430620657,
        -0.044199202192918396,
        -0.03510083323195005,
        -0.052155963773811514,
        -0.04672193363588005,
        -0.03429448245540047,
        -0.04719956506754977,
        -0.02650129811819078,
        -0.008150973417526595,
        0.03514689278638873,
        0.07108197787835886,
        0.061675785059075866,
        0.12561399632019804,
        0.07207203641990385,
        0.075825307317655,
        0.05704578634037974,
      ],
    })
  })
})
