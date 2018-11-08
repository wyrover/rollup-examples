const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const nodent = require('rollup-plugin-nodent')
const buble = require('rollup-plugin-buble')
const commonjs = require('rollup-plugin-commonjs')
const scss = require('rollup-plugin-scss')

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = [
  {
    //input: resolveFile('src/index.js'),
    // output: {
    //   file: resolveFile('dist/index.js'),
    //   format: 'iife'
    // },
    entry: resolveFile('src/index.js'),
    targets: [
      {
        dest: resolveFile('dist/index.cjs.js'),
        format: 'cjs',
        sourceMap: true
      },
      {
        dest: resolveFile('dist/index.es.js'),
        format: 'es',
        sourceMap: true
      },
      {
        dest: resolveFile('dist/index.js'),
        format: 'iife',
        sourceMap: true
      }
    ],

    plugins: [
      nodent({
        noRuntime: true,
        promises: true,
        transformations: {
          forOf: false
        }
      }),
      buble({
        objectAssign: 'Object.assign',
        exclude: '**.scss'
      }),
      scss({
        output: 'dist/style.css'
      }),
      resolve(),
      commonjs({
        include: 'node_modules/**'
      })
    ]
  }
]
