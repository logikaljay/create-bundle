#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { execSync, spawnSync } = require('child_process')
const Helpers = require('../lib')

if (!fs.existsSync(process.cwd(), 'package.json')) {
  console.log(`
  create-bundle

    Could not find a package.json file.
    
    Aborting
  `)
  return
}

if (spawnSync('which', ['zip']).status !== 0) {
  console.log(`
  create-bundle

   Could not find 'zip' in your $PATH.
  `)
  return
}

var name = Helpers.getBundleName()
var files = Helpers.getBundleFiles()

if (name.length === 0) {
  console.log(`
  create-bundle

   Could not get a bundle name from your package.json.
  `)
}

if (files.length === 0) {
  console.log(`
  create-bundle

  Could not find any files to add in to your bundle.
  Searched:
    * dist/*
    * changelog
    * readme
  `)
}

execSync(`zip ${name} ${files.join(' ')}`)
console.log(`
  create-bundle

  Added ${files.length} to bundle
   * ${files.join('\n   * ')}
  
  Folder: ${process.cwd()}
  Bundle: ${path.join(process.cwd(), name)}
`)
