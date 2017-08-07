const { expect } = require('code')
const { describe, before, it } = require('mocha')
const Helpers = require('../lib')
const { name, version } = require('../package.json')

describe('Create bundle', () => {
  it(`should return the correct package name`, done => {
    var bundleName = Helpers.getBundleName()
    expect(bundleName).to.equal(`${name}.${version}.zip`)
    done()
  })

  it(`should return a string of files to bundle`, done => {
    var files = Helpers.getBundleFiles()
    expect(files).to.be.string()
    done()
  })
})
