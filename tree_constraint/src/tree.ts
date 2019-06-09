import { Constraint_tree } from './constraint'
import _ = require('lodash')

export class Tree {
  static find(node: Constraint_tree, condition: (it) => boolean): Constraint_tree {
    let exist

    self.walk(node, it => {
      if (condition(it)) {
        exist = it
      }
    }, {
      key_name: 'name',
      stop_condition: condition,
    })

    return exist
  }

  static walk(node: Constraint_tree,
              callback$: Function[] | Function | any = [],
              opt?: { stop_condition?, child_name?, key_name? }) {

    const def = { stop_condition: null, child_name: 'child$', key_name: '$_key' }

    opt = { ...def, ...opt }
    const { stop_condition, child_name, key_name } = opt

    if (_.isFunction(callback$)) {
      callback$ = [callback$]
    }

    callback$.forEach(fn => fn(node))

    if (stop_condition && stop_condition(node)) {
      return
    }

    const child$ = node[child_name]

    if (child$) {
      if (_.isArray(child$)) {
        child$.forEach(child => self.walk(child, callback$, { child_name, stop_condition, key_name }))
      } else {
        for (let key in child$) {
          const child = child$[key]
          child[key_name] = key
          self.walk(child, callback$, { child_name, stop_condition, key_name })
        }
      }
    }
  }
}

const self = Tree
