module.exports = config => {
  config.addPassthroughCopy('icon')
  config.addPassthroughCopy('logo')

  return config
}
