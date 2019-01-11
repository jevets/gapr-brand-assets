const basename =  'apple-touch-icon'
const path = '/icon/'
const sizes = [
  57, 72, 76, 114, 120, 144, 152, 180,
]

const defaultImage =   {
  filename: `${basename}.png`,
  filepath: `${path}/${basename}.png`,
  width: `57px`,
  height: `57px`,
}

const sizedImages = sizes.map(d => {
  const filename = `${basename}-${d}x${d}.png`
  return {
    filename,
    filepath: `${path}/${filename}`,
    width: `${d}px`,
    height: `${d}px`,
  }
})

module.exports = [
  defaultImage,
  ...sizedImages,
]
