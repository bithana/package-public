import * as util from 'util'

export const print = dump

export function dump(...arg$) {
  arg$.forEach(it => {
    console.log(util.inspect(it, { depth: null }))
  })
}
