const fs = require('fs')
const path = require('path')

const buildDir = path.resolve(__dirname, './build')

fs.copyFile('README.md', buildDir + '/README.md', (err, c) => {
  if (err) throw err
  console.log('Copied README')
})

const { devDependencies, scripts, ...otherPackageData } = require('./package.json')

const package = {
  ...otherPackageData,
  main: 'index.js'
}

fs.writeFile(buildDir + '/package.json', JSON.stringify(package, null, 2), (err, c) => {
  if (err) throw err
  console.log('Copied package.json')
})