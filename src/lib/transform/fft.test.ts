import { fft } from './fft'

describe('fft', () => {
  it('calculates fft for a given signal buffer', () => {
    // 64 samples of white noise
    const samples = new Float64Array([
      0.6254101632552396,
      -0.0925064738424779,
      -0.2403626990332235,
      -0.5841862855809814,
      -0.17529052722023097,
      -0.25377511682352694,
      0.42608845291514363,
      0.22553335671704033,
      -0.331983685647002,
      -0.9258626102128864,
      -0.19511670248676527,
      0.9002102885901864,
      0.8332422958759702,
      -0.6673876763716278,
      -0.5186421892944191,
      0.43490925491362464,
      -0.09602714189124884,
      -0.6597831402245693,
      -0.8185192802785846,
      0.03130119360606054,
      -0.06440045965928798,
      0.21981392790146392,
      -0.3740971721762536,
      -0.6765821228221056,
      0.8427115852448588,
      -0.8481679392593526,
      0.5108295025434395,
      0.917081392775382,
      0.9278630640041783,
      -0.3858210321206923,
      -0.9403370022990836,
      -0.046501111988517696,
      -0.6913522834121952,
      0.040050708389737455,
      -0.1160471853630467,
      -0.9780790891562123,
      0.2394692723674492,
      -0.923562387352447,
      -0.44713453793393576,
      -0.06354278995039797,
      -0.16104975856706094,
      0.22608649759430222,
      0.637558495659051,
      0.042866177942050054,
      -0.3466038636199542,
      -0.6815922277778399,
      -0.23898646790188893,
      0.2636520639864104,
      -0.6435198956496824,
      -0.5874202914371058,
      -0.6559214094722496,
      0.31712542374512287,
      -0.3115690021317339,
      -0.24079046990416364,
      -0.6238498603091438,
      0.33291673248954057,
      0.0929274720763642,
      -0.3315121038718072,
      -0.9007921640051357,
      0.8466796181020113,
      -0.09283552603779333,
      0.47985986357628274,
      0.48246823687843365,
      0.8007313970732222,
    ])

    expect(fft(samples)).toEqual({
      imag: [
        0,
        -1.8577571775367074,
        1.6972993181051506,
        -0.3273404129117752,
        6.79974287493258,
        -0.35171979130926717,
        2.304448907931303,
        2.818740008148228,
        -0.09975262815289188,
        8.145350192629927,
        -1.3494742505556996,
        2.799918131596849,
        -0.9450110852786908,
        -4.543341274824572,
        -5.963547321844835,
        4.233862644843768,
        8.396485972179146,
        -0.6820350181403756,
        0.7334686175495753,
        -1.0236013686563483,
        -0.06362907063518763,
        1.466883430442773,
        -4.209401123789269,
        -0.351085663581002,
        0.8124855672163733,
        -3.3038127830917983,
        5.418745971694119,
        -1.0771407958442,
        1.1472981421112665,
        2.6945422948026128,
        2.9391591822136593,
        3.254641389512006,
        0,
        -3.2546413895120088,
        -2.9391591822136593,
        -2.6945422948026128,
        -1.147298142111266,
        1.0771407958442007,
        -5.418745971694118,
        3.3038127830917983,
        -0.8124855672163732,
        0.351085663581002,
        4.209401123789269,
        -1.4668834304427723,
        0.06362907063518675,
        1.0236013686563485,
        -0.7334686175495762,
        0.6820350181403754,
        -8.396485972179146,
        -4.23386264484377,
        5.9635473218448345,
        4.54334127482457,
        0.9450110852786922,
        -2.7999181315968498,
        1.3494742505556996,
        -8.145350192629927,
        0.09975262815289182,
        -2.818740008148229,
        -2.3044489079313033,
        0.3517197913092696,
        -6.79974287493258,
        0.32734041291177585,
        -1.6972993181051501,
        1.85775717753671,
      ],
      real: new Float64Array([
        -6.234125244864066,
        3.1737679549371425,
        3.2524154903398217,
        3.4582082502184304,
        -2.1950949452136053,
        4.545615186025596,
        1.9709338834283554,
        0.42057302763075677,
        -2.042913715935825,
        1.802202946482622,
        0.8162632912284338,
        2.3929413342584724,
        4.744480952596064,
        -2.620320713575237,
        0.06542835201308961,
        -1.4447629094435168,
        4.659853691545533,
        0.4343033455574222,
        -0.33338679587109477,
        -0.8887868920668047,
        -4.299341028406896,
        2.4827823375353604,
        -1.4023489346561022,
        1.9332831590456776,
        -0.7026038804028235,
        2.3838881909400906,
        -0.9207488944345763,
        4.093926425572666,
        -3.2424240621957505,
        2.278101403934654,
        1.9402829470238778,
        -3.377523900374379,
        -0.49761530227551853,
        -3.3775239003743787,
        1.9402829470238792,
        2.2781014039346545,
        -3.2424240621957496,
        4.093926425572667,
        -0.9207488944345762,
        2.3838881909400893,
        -0.7026038804028236,
        1.9332831590456783,
        -1.4023489346561042,
        2.4827823375353604,
        -4.2993410284068965,
        -0.8887868920668067,
        -0.33338679587109477,
        0.4343033455574231,
        4.659853691545535,
        -1.4447629094435146,
        0.06542835201308872,
        -2.6203207135752375,
        4.744480952596063,
        2.3929413342584733,
        0.816263291228433,
        1.8022029464826261,
        -2.042913715935825,
        0.4205730276307582,
        1.9709338834283554,
        4.545615186025597,
        -2.1950949452136035,
        3.4582082502184317,
        3.252415490339823,
        3.173767954937141,
      ]),
    })
  })
})
