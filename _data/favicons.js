const path = '/icon'

module.exports = () => {
  return [
    {
      filename: 'favicon.ico',
      width: '64px',
      height: '64px',
    },
    {
      filename: 'favicon.png',
      width: '114px',
      height: '114px',
    },
  ].map(f => ({
    ...f,
    filepath: `${path}/${f.filename}`,
  }))
}
