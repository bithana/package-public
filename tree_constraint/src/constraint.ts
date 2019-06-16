import { Invalid_argument } from '@bithana/general-exception/build/internal/caller_fault/invalid_argument'
import { Tree, Walk_option } from './tree'
import _ = require('lodash')

export interface Constraint_tree {
  child$: { [key: string]: Constraint_tree } | null
  /**
   * Statuses or types could be conflicted
   *
   * For example, you have 2 possible status in status tree
   * - (root)
   *   - ok
   *   - banned
   * Apparently, 'ok' and 'banned' should not exist
   * at the same time in a single user, since any user (or model)
   * can have multiple statuses (and types), and that means,
   * conflicts could greater than 2, for example
   * - (root)
   *   - ok
   *   - partially_disabled
   *   - banned
   * When a user is 'ok' and he is neither 'partially_disabled'
   * nor 'banned'.
   * We need a general and consistent way to check any row's type conflicts.
   * We start solving this problem on config phase, and all you
   * need to do is set `conflict$` to the current node's opposite
   * node name, for example, current node is 'ok' then `conflict$`
   * should be `['partially_disabled', 'banned']`, and let downstream
   * logic do the checking job.
   */
  conflict$?: string[]

  [key: string]: any
}

export type Constraint_list = string[]

type Collect_opt = {
  collector?: (collected_prop: any[], it: any) => void,
  rename_map?: { [origin: string]: string } | null
}

export class Constraint {
  tree: Constraint_tree

  static readonly WALK_OPTION: Walk_option = {
    stop_condition: null,
    child_name: 'child$',
    parent_name: 'parent',
    key_name: 'name',
    flat_ancestor: true,
    debug: true,
  }

  constructor(tree?: Constraint_tree) {
    tree && this.load_tree(tree)
    Tree.set_parent(this.tree, self.WALK_OPTION)
  }

  load_tree(tree: Constraint_tree) {
    this.tree = tree
  }

  set(target: Constraint_list, key: string) {
    this.validate(target, key)
    this.uniquify(target, key)
  }

  is(target: Constraint_list, key: string): boolean {
    const node = this.find(key)
    let result = false

    Tree.down(node, it => {
      if (target.includes(it.name)) {
        result = true
      }
    }, { stop_condition: it => target.includes(it.name) })

    return result
  }

  /**
   * Collect certain keys from leaves (a set of nodes and their ancestors)
   *
   * @example
   * - grandpa
   *     - a: 1
   *     - b: 2
   *     - father
   *         - a: 3
   *         - b: 4
   *         - kid
   *             - a: 5
   *             - b: 6
   *
   * Collect all node's property `a` from `kid` node
   * ```
   * up_collect(['kid'], ['a'])
   * // { a: [5, 3, 1] }
   * ```
   *
   * Collect `a` from `father` node
   * ```
   * up_collect(['father'], ['a'])
   * // { a: [3, 1] }
   * ```
   * @example Collect from multiple leaves
   *
   * - grandpa
   *     - a: 1
   *     - b: 2
   *     - father
   *         - a: 3
   *         - b: 4
   *         - kid
   *             - a: 5
   *             - b: 6
   * - grandpa2
   *     - a: 11
   *     - b: 12
   *     - father2
   *         - a: 13
   *         - b: 14
   *         - kid2
   *             - a: 15
   *             - b: 16
   *
   * Collect all node's property `a` from `father` and `father2` node
   * ```
   * up_collect(['father', 'father2'], ['a'])
   * // { a: [3, 1, 13, 11] }
   * ```
   *
   * Collect all node's property `a`, `b` from `father` and `father2` node
   * ```
   * up_collect(['father', 'father2'], ['a', 'b'])
   * // {
   * //   a: [3, 1, 13, 11],
   * //   b: [4, 2, 14, 12]
   * // }
   * ```
   *
   * @param from_node$
   * @param pick$
   * @param fn Custom action for each collect
   */
  up_collect(
    from_node$: Constraint_list,
    pick$: string[],
    opt?: Collect_opt) {

    const def = {
      collector: (collected_prop: any[], it: any) => {collected_prop.push(it)},
      rename_map: null,
    }
    opt = { ...def, ...opt }

    const result: { [key: string]: any[] } = {}
    const fn = opt.collector
    const rename = opt.rename_map

    from_node$.forEach(key => {
      this.walk_tree_up(key, it => {
        pick$.forEach(pick => {
          let name = pick
          if (rename && rename[pick]) {
            name = rename[pick]
          }

          const exist = _.get(it, pick)
          if (exist) {
            const arr = result[name] = result[name] || []
            if (!arr.includes(exist)) {
              fn(arr, exist)
            }
          }
        })
      })
    })

    return result
  }

  uniquify(target: Constraint_list, key: string) {
    this.walk_tree_up(key, it => {
      if (target.includes(it.name)) {
        target.splice(target.indexOf(it.name), 1)
      }
    })
    target.push(key)
  }

  find_many(key$: string[]): Constraint_tree[] {
    const result: Constraint_tree[] = []
    this.walk_tree_down(node => {
      if (key$.includes(node.name)) {
        result.push(node)
      }
    }, { stop_condition() { result.length === key$.length } })

    return result
  }

  walk_tree_up(from: string, fn: Function, opt?: Walk_option) {
    const node = this.find(from)
    Tree.up(node, it => {
      fn(it)
    }, opt)
  }

  walk_tree_down(fn, opt?: Walk_option) {
    opt = { ...self.WALK_OPTION, ...opt }
    Tree.down(this.tree, fn, opt)
  }

  exist(key: string): boolean {
    return !!this.find(key)
  }

  find(key): any {
    return Tree.find(this.tree, node => node.name === key, { key_name: 'name' })
  }

  validate(target: Constraint_list, key: string): boolean | any {
    if (!this.exist(key)) {
      throw new Invalid_argument(`<key> not exists.`, `There is no node called: "${key}"`)
    }

    return true
  }
}

const self = Constraint
