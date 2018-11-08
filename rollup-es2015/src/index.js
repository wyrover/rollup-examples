import demo from './lib/demo'
import jquery from 'jquery'

window.$ = jquery

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
console.log([...arr1, ...arr2])

console.log('test1')
demo.init()

console.log($)

$('body').append('test 456789')
