const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const buble = require('rollup-plugin-buble')
const commonjs = require('rollup-plugin-commonjs')
const scss = require('rollup-plugin-scss')

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'iife'
    },
    plugins: [
      buble(
        {
          exclude: '**.scss'
        }
        
      ),
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
