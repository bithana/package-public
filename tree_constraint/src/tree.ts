import { Constraint_tree } from './constraint'
import _ = require('lodash')

export type Walk_option = {
  stop_condition?: Function
  child_name?: string
  parent_name?: string
  key_name?: string
  flat_ancestor?: boolean
  debug?: boolean
  set_parent?: boolean
}

export class Tree {

  static readonly WALK_OPTION = {
    stop_condition: null,
    child_name: 'child$',
    parent_name: 'parent',
    key_name: '$_key',
    debug: false,
  }

  static find(node: Constraint_tree, condition: (it) => boolean, opt?: Walk_option): Constraint_tree {
    let exist

    self.down(node, it => {
      if (condition(it)) {
        exist = it
      }
    }, {
      stop_condition: condition,
      ...opt,
    })

    return exist
  }

  /**
   * Walk up
   */
  static up(node: Constraint_tree,
            callback$: Function[] | Function | any = [],
            opt?: Walk_option,
            debug_info?) {
    opt = { ...this.WALK_OPTION, ...opt }

    const parent_name = opt.parent_name

    if (_.isFunction(callback$)) {
      callback$ = [ callback$ ]
    }

    callback$.forEach(fn => fn && fn(node))

    if (opt.stop_condition && opt.stop_condition(node)) {
      return
    }

    const parent = node[parent_name]

    if (parent) {
      this.up(parent, callback$, opt)
    }
  }

  static set_parent(node: Constraint_tree, opt?: Walk_option) {
    opt = { set_parent: true, ...opt }
    self.down(node, null, opt)
  }

  /**
   * Walk down
   * @param node
   * @param callback$
   * @param opt
   * @param debug_info
   */
  static down(node: Constraint_tree,
              callback$: Function[] | Function | any = [],
              opt?: Walk_option,
              debug_info?) {

    if (!node) {
      return
    }

    opt = { ...this.WALK_OPTION, ...opt }

    const { stop_condition, child_name, parent_name, key_name, flat_ancestor, set_parent } = opt

    if (_.isFunction(callback$)) {
      callback$ = [ callback$ ]
    }

    if (callback$) {
      callback$.forEach(fn => fn && fn(node))
    }

    if (stop_condition && stop_condition(node)) {
      return
    }

    if (flat_ancestor) {
      node.ancestor$ = node.ancestor$ || []
    }

    const child$ = node[child_name]

    if (child$) {
      if (_.isArray(child$)) {
        child$.forEach(child => child && single_walk(child))
      } else {
        for (let key in child$) {
          const child = child$[key]
          if (child) {
            child[key_name] = key
            single_walk(child)
          }
        }
      }
    }

    function single_walk(child) {
      if (flat_ancestor) {
        child.ancestor$ = child.ancestor$ || [ ...node.ancestor$ ]
        child.ancestor$.push(node)
      }

      if (set_parent) {
        child[parent_name] = node
      }

      self.down(child, callback$, opt, debug_info)
    }
  }
}

const self = Tree
