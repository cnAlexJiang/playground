import { COLOR } from './theme'
import pkg from '../package.json'
const utils = { COLOR }

export default utils

export function add(a: number, b: number) {
  return a + b
}
export function version(){
  return pkg.version
}