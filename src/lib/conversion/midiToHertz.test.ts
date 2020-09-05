import { midiToHertz } from './midiToHertz'

describe('midiToHertz', () => {
  it('converts note frequency in hertz to midi note number', () => {
    const midiNotes = [...Array(109)].map((_, i) => i)

    const result = midiNotes.map(midiToHertz)

    expect(result).toEqual([
      0,
      0.01968626640460739,
      0.04171374544281358,
      0.06629126073623882,
      0.09364419230479257,
      0.12401570718501562,
      0.15766807786007148,
      0.1948840945931992,
      0.2359685781704234,
      0.28125,
      0.3310822169872797,
      0.38584632910634703,
      0.4459526681260204,
      0.5118429265197921,
      0.5839924361993901,
      0.6629126073623882,
      0.7491535384383405,
      0.8433068088581062,
      0.946008467160429,
      1.0579422277916528,
      1.179842890852117,
      1.3125,
      1.456761754744031,
      1.6135391944447235,
      1.7838106725040817,
      1.9686266404607398,
      2.1691147630263057,
      2.3864853865045976,
      2.6220373845341927,
      2.877164406692361,
      3.1533615572014297,
      3.4522325327938153,
      3.7754972507267737,
      4.125,
      4.502718151027005,
      4.910771461353506,
      5.351432017512245,
      5.82713485576379,
      6.340489307307662,
      6.894291116568838,
      7.491535384383408,
      8.135430391337021,
      8.829412360164003,
      9.577161220008648,
      10.382617439498627,
      11.25,
      12.183825585131896,
      13.188929067635133,
      14.270485380032653,
      15.434032861212197,
      16.685498177125428,
      18.031222920256962,
      19.47799199939686,
      21.033063938578646,
      22.704203211850295,
      24.49971474885933,
      26.42848075508742,
      28.5,
      30.724429736419562,
      33.112630425126504,
      35.67621345008163,
      38.42759202179363,
      41.380035479271065,
      44.54772721475249,
      47.94582646005381,
      51.59053418896649,
      55.49916340674516,
      59.69021411540273,
      64.18345326235516,
      69,
      74.16241660515067,
      79.69480542996548,
      85.62291228019592,
      91.97423664232575,
      98.77814920858255,
      106.06601717798213,
      113.8713378426278,
      122.22988100155135,
      131.17984077957948,
      140.76199746617363,
      151.01989002907095,
      162,
      173.75194747492444,
      186.32870001935592,
      199.78679532045714,
      214.18657848212845,
      229.5924549172459,
      246.0731598529185,
      263.70204553029595,
      282.5573872503395,
      302.72270949133724,
      324.2871334030835,
      347.3457470668632,
      372,
      398.358123479095,
      426.5355783575617,
      456.6555321610449,
      488.8493673592109,
      523.2572228346534,
      560.0285706997456,
      599.3228307506727,
      641.3100249951525,
      686.1714748470312,
      734.1005437476397,
      785.3034281511689,
      840,
      898.4247040166824,
      960.8275133528231,
      1027.474947362351,
    ])
  })
})
