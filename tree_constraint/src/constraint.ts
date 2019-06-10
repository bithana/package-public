import { Invalid_argument } from '../../general-exception/build/internal/caller_fault/invalid_argument'
import { Tree, Walk_option } from './tree'

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

    // this.remove_conflict$(target, key)
  }

  uniquify(target: Constraint_tree, key) {
    const node = this.find(key)
    Tree.up(node, it => {
      if (target.includes(it.name)) {
        target.splice(target.indexOf(it.name), 1)
      }
    })
    target.push(key)
  }

  // remove_conflict$(target: Constraint_list, key: string) {
  //   const node = this.find(key)
  //   const conflict$ = node.conflict$
  //   const conflict_node$ = this.find_many(conflict$)
  //
  //   conflict_node$.forEach(node => {
  //     Tree.down(node, child => {
  //       const name = child.name
  //       if (target.includes(name)) {
  //         target.splice(target.indexOf(name), 1)
  //       }
  //     }, self.WALK_OPTION)
  //   })
  // }

  find_many(key$: string[]): Constraint_tree[] {
    const result: Constraint_tree[] = []
    this.walk_tree_down(node => {
      if (key$.includes(node.name)) {
        result.push(node)
      }
    }, { stop_condition() { result.length === key$.length } })

    return result
  }

  walk_tree_down(fn, opt?: Walk_option) {
    opt = { ...self.WALK_OPTION, ...opt }
    Tree.down(this.tree, fn, opt)
  }

  key_has_conflict(target: Constraint_list, value: string) {
    const conflict$ = []

    this.walk_tree_down((node: Constraint_tree) => {
      if (node.conflict$ && node.conflict$.includes(value)) {
        conflict$.push(node.name)
      }
    })

    return conflict$.length ? conflict$ : false
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
