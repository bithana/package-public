import { Permission_Node, Role_List, Role_Map } from './type'

/**
 * Permission Table Name In A Class (Property name)
 *
 * @example This function manipulate the class you passed
 * class User {
 *   static __PERMISSION_TABLE = {...}
 * }
 */
export let _ptn_ = '__PERMISSION_TABLE'

/**
 * Set Basic Permission Table Data Structure
 * @param constructor
 *
 * @example
 * ```
 * class A {}
 *
 * init_table_once(A)
 * // A become:
 * class A {
 *   static __PERMISSION_TABLE = {...}
 * }
 * ```
 */
export function init_table(constructor) {
  constructor[_ptn_] = <Permission_Node>{
    initialized: true,
    type: 'table',
    name: constructor.name,
    children: {},
    action: {},
  }
}

export function init_table_once(constructor) {
  const pt = <Permission_Node>constructor[_ptn_]
  if (!pt || !pt.initialized)
    init_table(constructor)
}

export function allow(action: string, role$: Role_Map | Role_List) {
  return function (constructor) {
    let role_map

    if (Array.isArray(role$)) {
      role_map = convert_role_list_to_role_map(role$)
    } else
      role_map = role$

    init_table_once(constructor)
    const pt = <Permission_Node>constructor.__PERMISSION_TABLE
    pt.action[action] = role_map
    console.dir(pt)
  }
}

export function read(role$: Role_Map | Role_List) {

  return allow('read', role$)
}

function convert_role_list_to_role_map(list): Role_Map {
  const map = {}
  for (let it of list) {
    map[it] = true
  }

  return map
}
