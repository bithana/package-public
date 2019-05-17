import * as util from 'util'

export const print = dump

export function dump(...arg$) {
  arg$.forEach(it => {
    console.log(deepify(it))
  })
}

export function deepify(obj, opt = { depth: null }) {
  return util.inspect(obj, opt)
}

