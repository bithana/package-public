import { Constraint_tree } from './constraint'
import _ = require('lodash')

export type Walk_option = {
  stop_condition?: Function
  child_name?: string
  key_name?: string
  collect_ancestor?: boolean
}

export class Tree {
  static find(node: Constraint_tree, condition: (it) => boolean, opt?: Walk_option): Constraint_tree {
    let exist

    self.walk(node, it => {
      if (condition(it)) {
        exist = it
      }
    }, {
      stop_condition: condition,
      ...opt,
    })

    return exist
  }

  static walk(node: Constraint_tree,
              callback$: Function[] | Function | any = [],
              opt?: Walk_option) {

    const def = { stop_condition: null, child_name: 'child$', key_name: '$_key' }

    opt = { ...def, ...opt }
    const { stop_condition, child_name, key_name, collect_ancestor } = opt

    if (_.isFunction(callback$)) {
      callback$ = [callback$]
    }

    callback$.forEach(fn => fn(node))

    if (stop_condition && stop_condition(node)) {
      return
    }

    if (collect_ancestor) {
      node.ancestor$ = node.ancestor$ || []
    }

    const child$ = node[child_name]

    if (child$) {
      if (_.isArray(child$)) {
        child$.forEach(child => single_walk(child))
      } else {
        for (let key in child$) {
          const child = child$[key]
          child[key_name] = key
          single_walk(child)
        }
      }
    }

    function single_walk(child) {
      if (collect_ancestor) {
        child.ancestor$ = child.ancestor$ || [...node.ancestor$]
        child.ancestor$.push(node)
      }
      self.walk(child, callback$, { child_name, stop_condition, key_name })
    }
  }
}

const self = Tree
