const path = require('path')
const fs = require('fs')

var helpers = {
  getBundleName: () => {
    var { name, version } = require(path.join(process.cwd(), 'package.json'))

    return `${name}.${version}.zip`
  },

  getBundleFiles: () => {
    var files = fs.readdirSync(process.cwd())
    var result = []
    files.forEach(file => {
      if (file.indexOf('dist') > -1) {
        result = result.concat(helpers.getDirFiles('./dist'))
      }

      if (file.toLowerCase().indexOf('changelog') > -1) {
        result.push(file)
      }
    })

    return result
  },

  getDirFiles: dir => {
    var files = fs.readdirSync(dir)
    return files.map(file => `${dir}/${file}`)
  }
}
module.exports = helpers
