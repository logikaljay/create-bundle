const path = require('path')
const fs = require('fs')

module.exports = {
  getBundleName: () => {
    var { name, version } = require(path.join(process.cwd(), 'package.json'))

    return `${name}.${version}.zip`
  },

  getBundleFiles: () => {
    var files = fs.readdirSync(process.cwd())
    var result = []
    files.forEach(file => {
      if (file.indexOf('dist') > -1) {
        result.push(`${file}/*`)
      }

      if (file.toLowerCase().indexOf('changelog') > -1) {
        result.push(file)
      }

      if (file.toLowerCase().indexOf('readme') > -1) {
        result.push(file)
      }
    })

    return files.join(' ')
  }
}
