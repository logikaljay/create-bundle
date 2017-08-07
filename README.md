# create-bundle

Automatically use package.json for name and version to create a zip bundle of the dist folder.

## Requirements:
* zip installed in your path
* transpiled project files generated in ./dist
* Linux/OSX - [could potentially work in Windows 10 if you have installed the Linux Subsystem](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

## Usage:

```bash
$ npx create-bundle # or npm i -g create-bundle & create-bundle

  create-bundle

  Added 3 to bundle
   * CHANGELOG.md
   * ./dist/test.js

  Folder: /Users/dev/create-bundle
  Bundle: /Users/dev/create-bundle/create-bundle.1.0.0.zip

```
