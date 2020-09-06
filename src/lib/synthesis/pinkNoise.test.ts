import { pinkNoise } from './pinkNoise'

describe('pinkNoise', () => {
  it('generates pink noise', () => {
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

    // TODO: consider sending index from pinkNoise
    let index = 0
    const result = pinkNoise(sampledNoise.length, () => {
      const sample = sampledNoise[index]
      index++
      return sample
    })

    expect(result).toEqual({
      state: [
        0.12081722929991819,
        0.12221507999737584,
        0.07401746282467503,
        0.07420221212945173,
        -0.12716779006315637,
        0.020273555009675124,
        -0.029211042175224498,
      ],
      buffer: new Float64Array([
        0.05748485603123403,
        -0.011389891160541888,
        0.16205173445890375,
        0.22686697013129395,
        0.27714265501172863,
        0.24525157295897143,
        0.28073392832271854,
        0.38783278850026254,
        0.12444684435413444,
        0.09088972305312072,
        -0.021714802231075116,
        0.01955981131923562,
        0.22304963920743143,
        0.11322448506157612,
        0.027448595464893578,
        0.1122972466155785,
        0.06339805717963855,
        -0.003438941933423818,
        0.03994153498130331,
        0.21240569081492477,
        0.2584579795695803,
        0.33322177946921294,
        0.296924986801489,
        0.06996382494891407,
        -0.04234136849693446,
        0.0717633621482598,
        0.16858533570120063,
        -0.002324871236186108,
        -0.09990282542726905,
        0.03382323315531545,
        -0.09094592475432135,
        0.005171049485064267,
        0.046007546384481124,
        -0.08624313170707089,
        -0.21202395418275213,
        -0.16123199918077083,
        -0.08021816338979955,
        -0.11191789934094208,
        -0.06973575405447383,
        -0.026707983101844197,
        -0.06769446785196752,
        0.00036307600111732037,
        0.03606777221234339,
        0.12563623427985451,
        0.1683064751426054,
        0.08381028960383669,
        0.23935906423532896,
        0.026400020430512185,
        0.056690712307594544,
        0.017377055900552597,
      ]),
    })
  })
})
