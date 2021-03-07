// @ts-ignore
const path = require('path')

module.exports = {
  // @ts-ignore
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))}`
  },
}
