const colors = [
  {
    name: 'Primary Red',
    hsl: {
      h: 352.7,
      s: 100,
      l: 44.9,
    },
    hex: {
      r: 'e5',
      g: '00',
      b: '1c',
    },
    rgb: {
      r: 229,
      g: 0,
      b: 28,
    },
  },
  {
    name: 'White',
    hsl: {
      h: 0,
      s: 0,
      l: 100,
    },
    hex: {
      r: 'ff',
      g: 'ff',
      b: 'ff',
    },
    rgb: {
      r: 255,
      g: 255,
      b: 255,
    },
  },
  {
    name: 'Light Grey',
    hsl: {
      h: 228,
      s: 3.9,
      l: 74.7,
    },
    hex: {
      r: 'bc',
      g: 'bd',
      b: 'c1',
    },
    rgb: {
      r: 188,
      g: 189,
      b: 193,
    },
  },
  {
    name: 'Dark Grey',
    hsl: {
      h: 240,
      s: 1.1,
      l: 34.9,
    },
    hex: {
      r: '58',
      g: '58',
      b: '5a',
    },
    rgb: {
      r: 88,
      g: 88,
      b: 90,
    },
  },
  {
    name: 'Black',
    hsl: {
      h: 345,
      s: 6.1,
      l: 12.9,
    },
    hex: {
      r: '23',
      g: '1f',
      b: '20',
    },
    rgb: {
      r: 35,
      g: 31,
      b: 32,
    },
  },
  {
    name: 'Blue',
    hsl: {
      h: 201,
      s: 79,
      l: 46,
    },
    hex: {
      r: '19',
      g: '91',
      b: 'd2',
    },
    rgb: {
      r: 25,
      g: 145,
      b: 210,
    },
  },
]

module.exports = colors.map(color => {
  return {
    ...color,
    codes: {
      hex: `#${color.hex.r}${color.hex.g}${color.hex.b}`,
      hsl: `hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`,
      rgb: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
    },
  }
})
