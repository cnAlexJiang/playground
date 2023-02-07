export function hello () {
  return 'hello'
}
export function add (a, b) {
  return a + b
}
console.log('hello')
export default {
  name: 'roll-up-js',
  hello,
  add
}